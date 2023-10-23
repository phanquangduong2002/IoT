#include "DHT.h"
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include "ArduinoJson.h"

// Thiết lập thông tin mạng WiFi
const char* ssid = "QuangDương";
const char* password = "987654321";

// Địa chỉ IP của máy chủ MQTT
const char* mqttServer = "broker.hivemq.com";
const int mqttPort = 1883;

// Tên thiết bị và chủ đề MQTT
const char* clientId = "DHT11Client";
const char* dataTopic = "home/data"; // Topic chứa cả nhiệt độ, độ ẩm và ánh sáng
const char* lightTopic = "home/light";
#define LIGHT_PIN 5 // Sử dụng chân GPIO 5 (D1) để điều khiển đèn
#define LIGHT_SENSOR_PIN A0 // Chân ADC để đọc dữ liệu ánh sáng
// Thiết lập cổng DHT11
#define DHTPIN 2
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

// Khởi tạo đối tượng WiFiClient
WiFiClient espClient;

// Khởi tạo đối tượng PubSubClient
PubSubClient client(espClient);

unsigned long previousDataPublishTime = 0; // Biến lưu trữ thời gian gửi dữ liệu nhiệt độ, độ ẩm và ánh sáng cuối cùng
const long dataPublishInterval = 5000; // Khoảng thời gian giữa các gửi dữ liệu nhiệt độ, độ ẩm và ánh sáng (5 giây)

void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqttServer, mqttPort);
  client.setCallback(callback);
  pinMode(LIGHT_PIN, OUTPUT); // Khai báo chân GPIO điều khiển đèn làm đầu ra
  digitalWrite(LIGHT_PIN, LOW); // Ban đầu, tắt đèn (đưa chân GPIO xuống mức thấp)
  dht.begin();
}

void setup_wifi() {
  delay(10);
  // Kết nối WiFi
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect(clientId)) {
      Serial.println("connected");
      client.subscribe(lightTopic);
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");
  
  if (strcmp(topic, lightTopic) == 0) {
    if (payload[0] == '1') {
      Serial.println("Turn on the light");
      digitalWrite(LIGHT_PIN, HIGH); // Bật đèn (đưa chân GPIO lên mức cao)
    } else if (payload[0] == '0') {
      Serial.println("Turn off the light");
      digitalWrite(LIGHT_PIN, LOW); // Tắt đèn (đưa chân GPIO xuống mức thấp)
    }
  }
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  
  unsigned long currentMillis = millis();

  // Kiểm tra gửi dữ liệu nhiệt độ, độ ẩm và ánh sáng
  if (currentMillis - previousDataPublishTime >= dataPublishInterval) {
    previousDataPublishTime = currentMillis;
    float temperature = dht.readTemperature();
    float humidity = dht.readHumidity();
    int lightValue = analogRead(LIGHT_SENSOR_PIN);

    if (!isnan(temperature) && !isnan(humidity)) {
      // Làm tròn nhiệt độ và độ ẩm đến 2 chữ số sau dấu phẩy
      char tempStr[6];
      char humidityStr[6];
      dtostrf(temperature, 5, 2, tempStr);
      dtostrf(humidity, 5, 2, humidityStr);

      DynamicJsonDocument doc(1024);
      doc["temperature"] = tempStr; // Sử dụng chuỗi đã làm tròn
      doc["humidity"] = humidityStr; // Sử dụng chuỗi đã làm tròn
      doc["light"] = lightValue;
      String jsonStr;
      serializeJson(doc, jsonStr);
      client.publish(dataTopic, jsonStr.c_str());
      Serial.print("Temperature: ");
      Serial.print(tempStr);
      Serial.print(" °C, Humidity: ");
      Serial.print(humidityStr);
      Serial.print(" %, Light: ");
      Serial.print(lightValue);
      Serial.println(" lux");
    }
  }

  client.loop();
}
