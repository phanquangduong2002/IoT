#include "DHT.h"
#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include "ArduinoJson.h"

// Thiết lập thông tin mạng WiFi
const char* ssid = "QuangDương";
const char* password = "987654321";

// Địa chỉ IP của máy chủ MQTT
const char* mqttServer = "broker.hivemq.com";
// const char* mqttServer = "172.20.10.12";
const int mqttPort = 1883;

// Tên thiết bị và chủ đề MQTT
const char* clientId = "DHT11Client";
const char* dataTopic = "home/data"; // Topic chứa cả nhiệt độ, độ ẩm và ánh sáng
const char* lightTopic1 = "bulb1"; // Chủ đề cho đèn 1
const char* lightTopic2 = "bulb2"; // Chủ đề cho đèn 2
const char* lightTopic3 = "bulb3"; // Chủ đề cho đèn 3
const char* lightTopicBulb = "lightbulb"; // Chủ đề cho đèn 3
#define LIGHT_PIN_1 5 // Sử dụng chân GPIO 5 (D1) để điều khiển đèn 1
#define LIGHT_PIN_2 4 // Sử dụng chân GPIO 4 (D2) để điều khiển đèn 2
#define LIGHT_PIN_3 16 // Sử dụng chân GPIO 4 (D0) để điều khiển đèn 2
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
  pinMode(LIGHT_PIN_1, OUTPUT); // Khai báo chân GPIO điều khiển đèn 1 làm đầu ra
  digitalWrite(LIGHT_PIN_1, LOW); // Ban đầu, tắt đèn 1 (đưa chân GPIO xuống mức thấp)

  pinMode(LIGHT_PIN_2, OUTPUT); // Khai báo chân GPIO điều khiển đèn 2 làm đầu ra
  digitalWrite(LIGHT_PIN_2, LOW); // Ban đầu, tắt đèn 2 (đưa chân GPIO xuống mức thấp)

  pinMode(LIGHT_PIN_3, OUTPUT); // Khai báo chân GPIO điều khiển đèn 2 làm đầu ra
  digitalWrite(LIGHT_PIN_3, LOW); // Ban đầu, tắt đèn 2 (đưa chân GPIO xuống mức thấp)

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
      client.subscribe(lightTopic1);
      client.subscribe(lightTopic2);
      client.subscribe(lightTopic3);
      client.subscribe(lightTopicBulb);
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
  
  if (strcmp(topic, lightTopic1) == 0) {
    if (payload[0] == '1') {
      Serial.println("Turn on bulb 1");
      digitalWrite(LIGHT_PIN_1, HIGH); // Bật đèn 1
    } else if (payload[0] == '0') {
      Serial.println("Turn off bulb 1");
      digitalWrite(LIGHT_PIN_1, LOW); // Tắt đèn 1
    }
  }
  
  if (strcmp(topic, lightTopic2) == 0) {
    if (payload[0] == '1') {
      Serial.println("Turn on bulb 2");
      digitalWrite(LIGHT_PIN_2, HIGH); // Bật đèn 2
    } else if (payload[0] == '0') {
      Serial.println("Turn off bulb 2");
      digitalWrite(LIGHT_PIN_2, LOW); // Tắt đèn 2
    }
  }

    if (strcmp(topic, lightTopic3) == 0) {
    if (payload[0] == '1') {
      Serial.println("Turn on bulb 3");
      digitalWrite(LIGHT_PIN_3, HIGH); // Bật đèn 3
    } else if (payload[0] == '0') {
      Serial.println("Turn off bulb 3");
      digitalWrite(LIGHT_PIN_3, LOW); // Tắt đèn 3
    }
  }

      if (strcmp(topic, lightTopicBulb) == 0) {
    if (payload[0] == '1') {
      digitalWrite(LIGHT_PIN_1, HIGH);
      digitalWrite(LIGHT_PIN_2, HIGH);
      digitalWrite(LIGHT_PIN_3, HIGH);
      delay(500);
      digitalWrite(LIGHT_PIN_1, LOW);
      digitalWrite(LIGHT_PIN_2, LOW);
      digitalWrite(LIGHT_PIN_3, LOW);
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

      int gasValue = random(0, 100); 

      DynamicJsonDocument doc(1024);
      doc["temperature"] = tempStr; // Sử dụng chuỗi đã làm tròn
      doc["humidity"] = humidityStr; // Sử dụng chuỗi đã làm tròn
      doc["light"] = lightValue;
      doc["gas"] = gasValue;

      String jsonStr;
      serializeJson(doc, jsonStr);
      client.publish(dataTopic, jsonStr.c_str());
      Serial.print("Temperature: ");
      Serial.print(tempStr);
      Serial.print(" °C, Humidity: ");
      Serial.print(humidityStr);
      Serial.print(" %, Light: ");
      Serial.print(lightValue);
      Serial.print(" lux, Gas: ");
      Serial.print(gasValue);
      Serial.println(" CO2");
    }
  }

  client.loop();
}