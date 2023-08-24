export const HomeIcon = ({ isDarkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 20H7C5.89543 20 5 19.1046 5 18V10.9199C5 10.336 5.25513 9.78132 5.69842 9.40136L10.6984 5.11564C11.4474 4.47366 12.5526 4.47366 13.3016 5.11564L18.3016 9.40136C18.7449 9.78132 19 10.336 19 10.9199V18C19 19.1046 18.1046 20 17 20H15M9 20V14C9 13.4477 9.44772 13 10 13H14C14.5523 13 15 13.4477 15 14V20M9 20H15"
        stroke={!isDarkMode ? "#000000" : "#ffffff"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UserIcon = ({ isDarkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0724 4.02447C15.1063 3.04182 13.7429 2.5 12.152 2.5C10.5611 2.5 9.19773 3.04182 8.23167 4.02447C7.26636 5.00636 6.73644 6.38891 6.73644 8C6.73644 10.169 7.68081 11.567 8.8496 12.4062C9.07675 12.5692 9.3115 12.7107 9.54832 12.8327C8.24215 13.1916 7.18158 13.8173 6.31809 14.5934C4.95272 15.8205 4.10647 17.3993 3.53633 18.813C3.43305 19.0691 3.55693 19.3604 3.81304 19.4637C4.06914 19.567 4.36047 19.4431 4.46375 19.187C5.00642 17.8414 5.78146 16.4202 6.98653 15.3371C8.1795 14.265 9.82009 13.5 12.152 13.5C14.332 13.5 15.9058 14.1685 17.074 15.1279C18.252 16.0953 19.0453 17.3816 19.6137 18.6532C19.9929 19.5016 19.3274 20.5 18.2827 20.5H6.74488C6.46874 20.5 6.24488 20.7239 6.24488 21C6.24488 21.2761 6.46874 21.5 6.74488 21.5H18.2827C19.9348 21.5 21.2479 19.8588 20.5267 18.2452C19.9232 16.8952 19.0504 15.4569 17.7087 14.3551C16.9123 13.7011 15.9603 13.1737 14.8203 12.8507C15.43 12.5136 15.9312 12.0662 16.33 11.5591C17.1929 10.462 17.5676 9.10016 17.5676 8C17.5676 6.38891 17.0377 5.00636 16.0724 4.02447ZM15.3593 4.72553C16.1144 5.49364 16.5676 6.61109 16.5676 8C16.5676 8.89984 16.2541 10.038 15.544 10.9409C14.8475 11.8265 13.7607 12.5 12.152 12.5C11.5014 12.5 10.3789 12.2731 9.43284 11.5938C8.51251 10.933 7.73644 9.83102 7.73644 8C7.73644 6.61109 8.18963 5.49364 8.94477 4.72553C9.69916 3.95818 10.7935 3.5 12.152 3.5C13.5105 3.5 14.6049 3.95818 15.3593 4.72553Z"
        fill={!isDarkMode ? "#000000" : "#ffffff"}
      />
    </svg>
  );
};

export const AnalyticsIcon = ({ isDarkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 21H15M9 21V16M9 21H3.6C3.26863 21 3 20.7314 3 20.4V16.6C3 16.2686 3.26863 16 3.6 16H9M15 21V9M15 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H15.6C15.2686 3 15 3.26863 15 3.6V9M15 9H9.6C9.26863 9 9 9.26863 9 9.6V16"
        stroke={!isDarkMode ? "#000000" : "#ffffff"}
        strokeWidth="1"
      />
    </svg>
  );
};

export const SearchIcon = ({ isDarkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#666666"
      width="16"
      height="16"
      viewBox="0 0 1920 1920"
    >
      <path
        d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const TemperatureIcon = ({ isDarkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="52"
      width="52"
      viewBox="0 0 512 512"
    >
      <path
        fill="#FB3732"
        d="M195.793,512c-104.488,0-153.258-130.083-74.604-198.899v-87.248  c0-10.244,8.305-18.549,18.549-18.549h112.122c10.244,0,18.549,8.305,18.549,18.549v87.253C349.034,381.922,300.291,512,195.793,512  z"
      />
      <path
        fill="#FF5E5B"
        d="M251.861,244.401H139.738c-10.244,0-18.549-8.305-18.549-18.549V74.616  C121.189,33.33,154.6,0,195.793,0c41.143,0,74.616,33.472,74.616,74.616v151.236C270.41,236.096,262.104,244.401,251.861,244.401z"
      />
      <g>
        <path
          fill="#6D6E71"
          d="M411.117,88.22H342.89c-10.244,0-18.549-8.305-18.549-18.549s8.305-18.549,18.549-18.549h68.227   c10.244,0,18.549,8.305,18.549,18.549C429.666,79.915,421.361,88.22,411.117,88.22z"
        />
        <path
          fill="#6D6E71"
          d="M386.189,166.311H342.89c-10.244,0-18.549-8.305-18.549-18.549c0-10.244,8.305-18.549,18.549-18.549   h43.298c10.244,0,18.549,8.305,18.549,18.549C404.738,158.006,396.432,166.311,386.189,166.311z"
        />
        <path
          fill="#6D6E71"
          d="M386.189,244.403H342.89c-10.244,0-18.549-8.305-18.549-18.549s8.305-18.549,18.549-18.549h43.298   c10.244,0,18.549,8.305,18.549,18.549S396.432,244.403,386.189,244.403z"
        />
        <path
          fill="#6D6E71"
          d="M411.117,322.494H342.89c-10.244,0-18.549-8.305-18.549-18.549s8.305-18.549,18.549-18.549h68.227   c10.244,0,18.549,8.305,18.549,18.549S421.361,322.494,411.117,322.494z"
        />
      </g>
      <path
        fill="#F32E28"
        d="M270.41,313.104v-87.252c0-10.244-8.305-18.549-18.549-18.549h-56.067V512  C300.27,512,349.053,381.94,270.41,313.104z"
      />
      <path
        fill="#FF423D"
        d="M195.793,0v244.401h56.067c10.244,0,18.549-8.305,18.549-18.549V74.616  C270.41,33.472,236.937,0,195.793,0z"
      />
    </svg>
  );
};

export const HumidityIcon = ({ isDarkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="52"
      width="52"
      viewBox="0 0 512 512"
    >
      <path
        fill="#93E6FF"
        d="M183.685,39.76c5.279-5.659,14.269-5.659,19.548,0c36.12,38.715,159.979,180.379,159.979,302.486  c0,93.752-76.002,169.753-169.754,169.753S23.705,435.999,23.705,342.247C23.706,220.139,147.566,78.475,183.685,39.76z"
      />
      <path
        fill="#59D8FF"
        d="M282.804,467.328c-93.752,0-169.754-76.002-169.754-169.754c0-83.863,58.409-176.904,106.707-239.53  c-6.514-7.422-12.131-13.572-16.481-18.237c-5.298-5.68-14.293-5.725-19.592-0.046C147.563,78.479,23.706,220.141,23.706,342.247  C23.706,435.999,99.708,512,193.46,512c45.503,0,86.73-18.005,117.209-47.152C301.582,466.352,292.317,467.328,282.804,467.328z"
      />
      <g>
        <path
          fill="#93E6FF"
          d="M184.533,484.904c-0.201,0-0.401-0.004-0.602-0.022c-6.404-0.428-12.818-1.287-19.056-2.556   c-4.834-0.986-7.957-5.701-6.971-10.54c0.977-4.833,5.715-7.948,10.531-6.971c5.462,1.112,11.072,1.867,16.683,2.243   c4.93,0.327,8.646,4.584,8.324,9.511C193.128,481.288,189.193,484.904,184.533,484.904z"
        />
        <path
          fill="#93E6FF"
          d="M220.254,482.505c-4.162,0-7.879-2.918-8.742-7.15c-0.986-4.833,2.129-9.554,6.971-10.54   c42.7-8.703,78.307-39.694,92.921-80.885c1.65-4.655,6.771-7.076,11.404-5.431c4.65,1.649,7.085,6.758,5.435,11.408   c-16.691,47.059-57.384,82.469-106.201,92.42C221.449,482.449,220.847,482.505,220.254,482.505z"
        />
      </g>
      <path
        fill="#C9F3FF"
        d="M322.808,378.499c-4.632-1.645-9.754,0.776-11.404,5.431c-12.718,35.845-41.342,63.949-76.694,76.38  c9.561,2.822,19.451,4.871,29.633,5.974c29.285-16.831,52.348-43.805,63.9-76.377C329.893,385.257,327.458,380.149,322.808,378.499z  "
      />
      <path
        fill="#59D8FF"
        d="M363.213,342.247c0-82.961-57.164-174.916-105.15-237.512c-21.267,38.205-37.8,80.875-37.8,121.365  c0,78.046,62.895,141.588,140.65,142.834C362.292,360.218,363.213,351.35,363.213,342.247z"
      />
      <path
        fill="#D4F5FF"
        d="M353.323,4.386c5.299-5.845,14.48-5.845,19.781,0c29.557,32.597,115.191,134.56,115.191,221.714  c0,69.081-56.001,125.082-125.082,125.082S238.132,295.18,238.132,226.1C238.132,138.946,323.766,36.983,353.323,4.386z"
      />
      <path
        fill="#BAEFFF"
        d="M443.623,306.509c-69.081,0-125.082-56.001-125.082-125.082c0-55.38,34.574-116.716,67.369-162.457  c-4.907-5.752-9.257-10.658-12.802-14.57c-5.313-5.863-14.477-5.869-19.791-0.007c-29.564,32.605-115.184,134.559-115.184,221.707  c0,69.081,56.001,125.082,125.082,125.082c39.013,0,73.839-17.873,96.777-45.864C454.621,306.021,449.185,306.509,443.623,306.509z"
      />
      <path
        fill="#FFFFFF"
        d="M363.213,324.378c-4.938,0-8.934-4-8.934-8.934s3.996-8.934,8.934-8.934  c44.34,0,80.41-36.074,80.41-80.41c0-4.934,3.996-8.934,8.934-8.934s8.934,4,8.934,8.934  C461.492,280.291,417.404,324.378,363.213,324.378z"
      />
      <path
        fill="#D4F5FF"
        d="M422.171,304.541c-8.088-1.4-15.892-3.572-23.368-6.446c-10.746,5.334-22.802,8.414-35.59,8.414  c-4.938,0-8.934,4-8.934,8.934s3.996,8.934,8.934,8.934C385.346,324.378,405.724,316.936,422.171,304.541z"
      />
    </svg>
  );
};

export const SunIcon = ({ isDarkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="52"
      width="52"
      version="1.1"
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <g>
            <path
              fill="#BFB61E"
              d="M258.373,448.122c-11.783,0-21.337,1.395-21.337,18.136c0,8.131,9.553,45.742,21.337,45.742     c11.784,0,21.336-37.611,21.336-45.742C279.709,449.518,270.156,448.122,258.373,448.122z"
            />
            <path
              fill="#BFB61E"
              d="M352.653,422.86c-10.205,5.891-17.78,11.876-9.41,26.374c4.065,7.041,31.144,34.837,41.349,28.945     c10.205-5.892-0.328-43.241-4.393-50.282C371.829,413.4,362.858,416.968,352.653,422.86z"
            />
            <path
              fill="#BFB61E"
              d="M448.046,344.432c-14.498-8.37-20.483-0.795-26.375,9.41c-5.892,10.205-9.46,19.176,5.038,27.546     c7.041,4.065,44.39,14.598,50.282,4.393C482.883,375.576,455.087,348.497,448.046,344.432z"
            />
            <path
              fill="#BFB61E"
              d="M465.07,238.225c-16.741,0-18.136,9.553-18.136,21.337c0,11.784,1.396,21.336,18.136,21.336     c8.13,0,45.742-9.553,45.742-21.336C510.812,247.777,473.2,238.225,465.07,238.225z"
            />
            <path
              fill="#BFB61E"
              d="M426.71,137.735c-14.498,8.37-10.93,17.341-5.038,27.546c5.892,10.204,11.877,17.78,26.375,9.41     c7.041-4.065,34.837-31.144,28.945-41.349C471.099,123.137,433.75,133.67,426.71,137.735z"
            />
            <path
              fill="#BFB61E"
              d="M164.092,422.86c-10.205-5.892-19.176-9.46-27.546,5.038c-4.065,7.041-14.598,44.39-4.393,50.282     c10.205,5.892,37.283-21.904,41.349-28.945C181.872,434.737,174.297,428.752,164.092,422.86z"
            />
            <path
              fill="#BFB61E"
              d="M424.226,259.561c0-45.799-18.564-87.263-48.577-117.276L141.097,376.837     c30.013,30.013,71.477,48.578,117.276,48.578C349.971,425.415,424.226,351.159,424.226,259.561z"
            />
          </g>
          <g>
            <path
              fill="#C6BA56"
              d="M164.11,96.239c-10.143,5.855-19.05,9.401-27.297-4.618c-0.082-0.083-0.165-0.247-0.248-0.412     c-4.123-7.009-14.596-44.367-4.453-50.305c7.669-4.454,25.07,10.308,34.719,20.781c3.298,3.464,5.69,6.433,6.68,8.164     C181.84,84.364,174.336,90.384,164.11,96.239z"
            />
            <g>
              <path
                fill="#C6BA56"
                d="M279.729,52.861v0.577c-0.248,16.164-9.732,17.566-21.359,17.566      c-9.319,0-17.236-0.907-20.122-9.483c-0.824-2.227-1.237-5.113-1.237-8.66c0-5.03,3.629-21.276,9.154-32.987      c3.546-7.257,7.752-12.782,12.205-12.782c1.319,0,2.639,0.495,3.876,1.402C272.225,15.174,279.729,45.604,279.729,52.861z"
              />
              <path
                fill="#C6BA56"
                d="M95.085,165.264c-5.938,10.226-11.875,17.813-26.39,9.401      c-3.958-2.227-14.432-11.793-21.854-21.524c-0.082-0.083-0.165-0.165-0.165-0.248c-5.69-7.504-9.484-15.091-6.928-19.545      c5.938-10.226,43.213,0.33,50.305,4.371c1.237,0.742,2.391,1.484,3.381,2.226C103.909,147.699,100.445,155.945,95.085,165.264z"
              />
              <path
                fill="#C6BA56"
                d="M69.85,259.524c0,11.546-1.32,21.03-17.236,21.359h-0.907c-7.834,0-43.13-8.907-45.605-20.122      c-0.082,0-0.082,0-0.082,0c0-0.412-0.083-0.824-0.083-1.237c0-4.536,5.69-8.824,13.112-12.205      c11.711-5.525,27.709-9.071,32.657-9.071c4.701,0,8.164,0.742,10.721,2.062C69.108,243.773,69.85,251.113,69.85,259.524z"
              />
              <path
                fill="#C6BA56"
                d="M68.7,344.432c-7.041,4.065-34.837,31.144-28.945,41.349c5.892,10.205,43.241-0.328,50.281-4.393      c14.498-8.37,10.93-17.341,5.038-27.546C89.183,343.637,83.197,336.062,68.7,344.432z"
              />
              <path
                fill="#C6BA56"
                d="M352.653,96.263c10.205,5.892,19.176,9.46,27.546-5.038c4.065-7.041,14.598-44.39,4.393-50.282      c-10.205-5.892-37.284,21.904-41.349,28.945C334.873,84.386,342.448,90.371,352.653,96.263z"
              />
              <path
                fill="#C6BA56"
                d="M258.373,93.708c-91.598,0-165.853,74.255-165.853,165.853      c0,45.799,18.563,87.262,48.577,117.276l234.552-234.552C345.635,112.271,304.172,93.708,258.373,93.708z"
              />
            </g>
          </g>
        </g>
        <g>
          <path
            fill="#EFE748"
            d="M252.408,440.964c-11.783,0-21.337,1.395-21.337,18.136c0,8.131,9.553,45.742,21.337,45.742    s21.336-37.611,21.336-45.742C273.744,442.36,264.191,440.964,252.408,440.964z"
          />
          <path
            fill="#EFE748"
            d="M346.688,415.702c-10.205,5.892-17.78,11.877-9.41,26.375c4.065,7.041,31.144,34.837,41.349,28.945    c10.205-5.892-0.328-43.241-4.393-50.282C365.864,406.242,356.893,409.81,346.688,415.702z"
          />
          <path
            fill="#EFE748"
            d="M442.081,337.274c-14.498-8.37-20.483-0.795-26.375,9.41c-5.892,10.205-9.46,19.176,5.038,27.546    c7.041,4.065,44.39,14.598,50.282,4.393C476.918,368.418,449.122,341.339,442.081,337.274z"
          />
          <path
            fill="#EFE748"
            d="M459.105,231.066c-16.741,0-18.136,9.553-18.136,21.337c0,11.784,1.395,21.336,18.136,21.336    c8.13,0,45.742-9.553,45.742-21.336C504.846,240.619,467.235,231.066,459.105,231.066z"
          />
          <path
            fill="#EFE748"
            d="M420.744,130.577c-14.497,8.37-10.93,17.341-5.038,27.546c5.892,10.205,11.877,17.78,26.375,9.41    c7.041-4.065,34.837-31.144,28.945-41.349C465.134,115.979,427.785,126.511,420.744,130.577z"
          />
          <path
            fill="#EFE748"
            d="M158.127,415.702c-10.205-5.892-19.176-9.46-27.546,5.038c-4.065,7.041-14.598,44.39-4.392,50.282    c10.205,5.892,37.283-21.904,41.349-28.945C175.907,427.578,168.332,421.594,158.127,415.702z"
          />
          <path
            fill="#EFE748"
            d="M418.261,252.403c0-45.799-18.564-87.263-48.577-117.276L135.132,369.679    c30.014,30.013,71.477,48.578,117.276,48.578C344.006,418.257,418.261,344.001,418.261,252.403z"
          />
        </g>
        <g>
          <path
            fill="#FAF2AF"
            d="M158.09,89.065c-7.67,4.453-14.679,7.587-21.277,2.557c-2.144-1.567-4.206-4.041-6.268-7.587    c-4.041-7.01-14.597-44.367-4.371-50.223c9.814-5.69,34.967,19.545,40.657,27.874c0.33,0.412,0.577,0.742,0.742,1.072    C175.903,77.189,168.316,83.209,158.09,89.065z"
          />
          <g>
            <path
              fill="#FAF2AF"
              d="M273.709,45.687c0,0.577,0,1.155-0.083,1.65c-0.577,15.174-9.814,16.493-21.194,16.493     c-4.288,0-8.247-0.165-11.628-1.237c-0.907-0.247-1.732-0.659-2.556-1.072c-2.722-1.402-4.866-3.711-6.02-7.422     c-0.083-0.083,0-0.083,0-0.083c-0.742-2.227-1.155-5.03-1.155-8.329c0-4.865,3.464-20.452,8.824-32.08     c3.216-7.01,7.175-12.617,11.381-13.442C251.69,0.083,252.02,0,252.432,0c3.547,0,6.927,3.463,9.814,8.494     c0.99,1.649,1.897,3.464,2.804,5.443C270.328,25.482,273.709,40.904,273.709,45.687z"
            />
            <path
              fill="#FAF2AF"
              d="M89.147,158.09c-5.937,10.226-11.875,17.813-26.39,9.484c-2.969-1.732-9.648-7.505-15.916-14.432     c-0.082-0.083-0.165-0.165-0.165-0.248c-8.577-9.401-16.246-20.864-12.865-26.719c5.855-10.226,43.213,0.33,50.222,4.371     c5.195,3.051,8.164,6.185,9.401,9.401C95.662,145.637,92.858,151.658,89.147,158.09z"
            />
            <path
              fill="#FAF2AF"
              d="M63.83,252.432c0,11.793-1.402,21.277-18.142,21.277H45.44c-5.03-0.083-20.122-3.382-31.503-8.577     c-2.886-1.402-5.608-2.804-7.835-4.371c-0.082,0-0.082,0-0.082,0C2.309,258.205,0,255.401,0,252.432c0-0.33,0-0.742,0.165-1.072     c0.742-4.041,5.69-7.669,12.04-10.886c11.793-5.608,28.451-9.401,33.482-9.401c1.897,0,3.629,0.165,5.196,0.412     c6.762,0.99,9.978,4.288,11.545,8.824c0.412,1.072,0.66,2.309,0.825,3.546C63.748,246.412,63.83,249.381,63.83,252.432z"
            />
            <path
              fill="#FAF2AF"
              d="M84.034,374.237c-5.196,3.051-27.379,9.649-40.739,8.576c-1.567-0.083-2.969-0.33-4.288-0.742     c-2.392-0.66-4.206-1.815-5.195-3.464c-0.908-1.567-1.072-3.629-0.577-5.855c2.804-12.206,23.503-32.08,29.523-35.461     c2.969-1.732,5.608-2.804,7.917-3.216c7.917-1.732,12.453,2.969,16.659,9.566c0.577,0.99,1.237,1.979,1.814,3.051     c2.062,3.711,3.959,7.175,4.701,10.556C95.25,363.268,93.353,368.876,84.034,374.237z"
            />
            <path
              fill="#FAF2AF"
              d="M346.688,89.104c10.205,5.892,19.176,9.46,27.546-5.038c4.065-7.041,14.598-44.39,4.393-50.282     c-10.205-5.892-37.284,21.904-41.349,28.945C328.908,77.228,336.483,83.213,346.688,89.104z"
            />
            <path
              fill="#FAF2AF"
              d="M369.701,135.164l-0.743,0.742l-3.381,3.381L135.164,369.701     c-2.474-2.474-4.783-4.948-7.092-7.587c-6.185-7.009-11.793-14.514-16.741-22.513c-15.668-25.318-24.74-55.171-24.74-87.168     c0-91.621,74.221-165.842,165.842-165.842c29.936,0,58.057,7.917,82.385,21.936C347.6,115.784,359.31,124.773,369.701,135.164z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const CloseIcon = ({ isDarkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 1024 1024"
    >
      <path
        fill={!isDarkMode ? "#000000" : "#ffffff"}
        d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      />
    </svg>
  );
};

export const BulbOffIcon = ({ isDarkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      height="60"
      width="60"
      version="1.1"
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <path d="M256,0c-4.51,0-8.166,3.656-8.166,8.166v44.383c0,4.51,3.656,8.166,8.166,8.166s8.166-3.656,8.166-8.166V8.166    C264.166,3.656,260.51,0,256,0z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M162.956,74.165l-21.23-38.976c-2.157-3.961-7.117-5.423-11.077-3.265c-3.96,2.158-5.422,7.117-3.265,11.077    l21.231,38.976c1.482,2.721,4.284,4.261,7.178,4.261c1.32,0,2.658-0.32,3.899-0.996C163.652,83.085,165.113,78.125,162.956,74.165    z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M84.418,141.561L47.13,117.488c-3.79-2.448-8.843-1.359-11.289,2.431c-2.446,3.789-1.358,8.844,2.431,11.289    l37.288,24.072c1.37,0.885,2.904,1.307,4.421,1.307c2.679,0,5.305-1.318,6.868-3.738    C89.296,149.061,88.207,144.007,84.418,141.561z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M381.349,31.924c-3.963-2.158-8.921-0.695-11.077,3.265l-21.229,38.976c-2.157,3.961-0.696,8.919,3.264,11.077    c1.241,0.676,2.579,0.996,3.899,0.996c2.894,0,5.696-1.542,7.178-4.261l21.229-38.976    C386.771,39.04,385.309,34.082,381.349,31.924z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M476.159,119.92c-2.446-3.789-7.504-4.875-11.289-2.431l-37.288,24.072c-3.789,2.446-4.878,7.5-2.431,11.289    c1.562,2.419,4.187,3.738,6.868,3.738c1.518,0,3.053-0.422,4.421-1.306l37.288-24.072    C477.517,128.762,478.605,123.708,476.159,119.92z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M357.63,119.907c-26.533-26.873-61.926-41.955-99.659-42.465c-39.282-0.496-77.577,15.748-105.133,44.661    c-3.112,3.265-2.987,8.433,0.278,11.545c3.265,3.111,8.435,2.988,11.545-0.278c24.432-25.637,58.362-40.089,93.091-39.599    c33.416,0.453,64.761,13.81,88.259,37.61c23.521,23.822,36.474,55.381,36.474,88.862c0,26.958-8.371,52.692-24.209,74.42    c-0.143,0.196-0.276,0.397-0.402,0.605l-0.998,1.661c-3.899,6.491-7.479,12.45-10.77,17.996c-2.302,3.879-1.023,8.889,2.855,11.19    c1.307,0.775,2.743,1.144,4.159,1.144c2.788,0,5.505-1.428,7.03-4c3.277-5.523,6.841-11.456,10.724-17.92l0.814-1.355    c17.749-24.477,27.127-53.425,27.127-83.742C398.814,182.438,384.188,146.805,357.63,119.907z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M340.905,340.129c-4.009-2.06-8.933-0.481-10.995,3.531c-7.356,14.315-11.749,26.121-14.148,38.268H196.238    c-4.863-24.654-17.421-45.557-40.65-84.227l-1.461-2.431c-0.125-0.208-0.259-0.409-0.402-0.606    c-15.838-21.728-24.209-47.462-24.209-74.42c0-21.791,5.819-43.38,16.83-62.432c2.257-3.904,0.92-8.899-2.984-11.155    c-3.903-2.257-8.898-0.921-11.155,2.984c-12.443,21.533-19.02,45.947-19.02,70.603c0,30.316,9.378,59.264,27.127,83.742    l1.277,2.125c23.336,38.849,34.733,57.826,38.853,80.175c-7.504,4.854-12.484,13.29-12.484,22.873    c0,7.418,2.984,14.148,7.812,19.064c-4.828,4.916-7.812,11.647-7.812,19.064c0,15.015,12.216,27.231,27.229,27.231h11.417    C212.696,496.319,232.792,512,256,512c23.208,0,43.304-15.68,49.395-37.483h11.417c15.015,0,27.229-12.216,27.229-27.231    c0-7.418-2.984-14.148-7.812-19.064c4.827-4.916,7.812-11.647,7.812-19.064c0-9.583-4.98-18.02-12.484-22.873    c2.04-11.092,5.916-21.612,12.878-35.161C346.497,347.113,344.915,342.19,340.905,340.129z M256,495.669    c-14.214,0-26.716-8.625-32.117-21.152h64.234C282.714,487.044,270.212,495.669,256,495.669z M294.103,436.388h22.708    c6.01,0,10.898,4.89,10.898,10.898c0,6.01-4.89,10.899-10.898,10.899H195.187c-6.01,0-10.898-4.89-10.898-10.899    s4.89-10.898,10.898-10.898h66.631c4.51,0,8.166-3.656,8.166-8.166s-3.656-8.166-8.166-8.166h-66.631    c-6.01,0-10.898-4.89-10.898-10.898c0-4.921,3.279-9.086,7.766-10.436c0.421-0.126,0.851-0.221,1.286-0.295    c0.131-0.023,0.261-0.042,0.393-0.06c0.48-0.063,0.964-0.109,1.453-0.109h121.623c0.49,0,0.973,0.045,1.453,0.109    c0.133,0.017,0.263,0.038,0.395,0.061c0.431,0.073,0.858,0.168,1.276,0.293c4.491,1.347,7.775,5.513,7.775,10.438    c0,6.01-4.89,10.898-10.898,10.898h-22.708c-4.51,0-8.166,3.656-8.166,8.166C285.938,432.733,289.593,436.388,294.103,436.388z" />
        </g>
      </g>
    </svg>
  );
};

export const BulbOnIcon = ({ isDarkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="60"
      width="60"
      version="1.1"
      viewBox="0 0 512 512"
    >
      <path
        fill="#C7CFE2"
        d="M212.868,428.222v32.482c0,23.821,19.31,43.131,43.131,43.131l0,0  c23.821,0,43.131-19.31,43.131-43.131v-32.482H212.868z"
      />
      <path
        style={{ opacity: "0.1", enableBackground: "new" }}
        d="M245.531,460.704v-32.482h-32.662v32.482  c0,23.821,19.31,43.131,43.131,43.131c5.781,0,11.292-1.145,16.331-3.21C256.61,494.187,245.531,478.743,245.531,460.704z"
      />
      <path
        fill="#FFD782"
        d="M257.861,85.607c-74.306-1.006-136.51,60.325-136.51,134.637c0,29.618,9.571,56.997,25.777,79.229  c26.009,43.305,38.363,63.481,42.092,89.916c1.599,11.334,11.283,19.77,22.729,19.77h88.102c11.446,0,21.129-8.437,22.729-19.77  c3.73-26.435,16.084-46.61,42.092-89.916c16.207-22.232,25.777-49.611,25.777-79.229C390.649,146.5,331.367,86.602,257.861,85.607z"
      />
      <path
        style={{ opacity: "0.1", enableBackground: "new" }}
        d="M232.769,389.388c-3.73-26.435-16.083-46.61-42.092-89.916  c-16.207-22.232-25.777-49.611-25.777-79.229c0-66.338,49.574-122.327,113.073-132.864c-6.556-1.077-13.273-1.68-20.112-1.774  c-74.306-1.006-136.51,60.325-136.51,134.637c0,29.618,9.571,56.997,25.777,79.229c26.009,43.306,38.362,63.481,42.092,89.916  c1.599,11.334,11.283,19.769,22.729,19.769h43.55C244.052,409.158,234.368,400.722,232.769,389.388z"
      />
      <path
        fill="#B4BBCC"
        d="M316.812,428.222L256,409.158l-60.812,19.064c-10.529,0-19.064,8.536-19.064,19.064  c0,10.529,8.536,19.065,19.064,19.065h121.623c10.529,0,19.064-8.536,19.064-19.065C335.876,436.758,327.34,428.222,316.812,428.222  z"
      />
      <path
        style={{ opacity: "0.1", enableBackground: "new" }}
        d="M219.673,447.287c0-10.529,8.536-19.064,19.065-19.064l39.037-12.237  L256,409.16l-60.812,19.064c-10.529,0-19.065,8.536-19.065,19.064c0,10.529,8.536,19.065,19.065,19.065h43.55  C228.209,466.351,219.673,457.817,219.673,447.287z"
      />
      <path
        fill="#C7CFE2"
        d="M316.812,390.093H195.188c-10.529,0-19.064,8.536-19.064,19.064l0,0  c0,10.529,8.536,19.064,19.064,19.064h121.623c10.529,0,19.064-8.536,19.064-19.064l0,0  C335.876,398.629,327.34,390.093,316.812,390.093z"
      />
      <path
        style={{ opacity: "0.1", enableBackground: "new" }}
        d="M219.673,409.158c0-10.529,8.536-19.064,19.065-19.064h-43.55  c-10.529,0-19.065,8.536-19.065,19.064c0,10.529,8.536,19.064,19.065,19.064h43.55C228.209,428.222,219.673,419.688,219.673,409.158  z"
      />
      <path d="M247.834,8.166v44.383c0,4.51,3.656,8.166,8.166,8.166c4.51,0,8.166-3.656,8.166-8.166V8.166C264.166,3.656,260.51,0,256,0  C251.49,0,247.834,3.656,247.834,8.166z" />
      <path d="M127.383,43.001l21.23,38.976c1.482,2.721,4.284,4.261,7.178,4.261c1.32,0,2.658-0.32,3.899-0.996  c3.961-2.157,5.422-7.117,3.265-11.077l-21.23-38.976c-2.157-3.961-7.117-5.423-11.077-3.265  C126.689,34.082,125.227,39.041,127.383,43.001z" />
      <path d="M38.272,131.209l37.288,24.072c1.37,0.885,2.904,1.306,4.421,1.306c2.679,0,5.305-1.318,6.868-3.738  c2.446-3.789,1.358-8.843-2.431-11.289L47.13,117.488c-3.79-2.447-8.843-1.359-11.289,2.431  C33.394,123.708,34.483,128.763,38.272,131.209z" />
      <path d="M381.349,31.924c-3.963-2.158-8.921-0.695-11.077,3.265l-21.229,38.976c-2.157,3.961-0.696,8.919,3.264,11.077  c1.241,0.676,2.579,0.996,3.899,0.996c2.894,0,5.696-1.542,7.178-4.261l21.229-38.976C386.771,39.04,385.309,34.082,381.349,31.924z  " />
      <path d="M464.87,117.488l-37.288,24.072c-3.789,2.446-4.878,7.5-2.431,11.289c1.562,2.419,4.187,3.738,6.868,3.738  c1.518,0,3.053-0.422,4.421-1.306l37.288-24.072c3.789-2.446,4.878-7.5,2.431-11.289  C473.713,116.131,468.655,115.044,464.87,117.488z" />
      <path d="M348.959,326.116c1.306,0.775,2.743,1.144,4.159,1.144c2.788,0,5.505-1.428,7.03-4c3.277-5.523,6.841-11.456,10.724-17.92  l0.814-1.355c17.749-24.477,27.127-53.425,27.127-83.742c0-37.804-14.626-73.438-41.184-100.336  c-26.533-26.873-61.926-41.955-99.659-42.465c-39.282-0.496-77.577,15.748-105.133,44.661c-3.112,3.265-2.988,8.433,0.278,11.545  c3.265,3.111,8.434,2.988,11.545-0.278c24.432-25.637,58.362-40.089,93.091-39.599c33.416,0.453,64.761,13.81,88.259,37.61  c23.521,23.822,36.474,55.381,36.474,88.862c0,26.958-8.371,52.692-24.209,74.42c-0.143,0.196-0.277,0.397-0.402,0.605l-0.998,1.661  c-3.899,6.491-7.479,12.45-10.77,17.996C343.803,318.805,345.081,323.814,348.959,326.116z" />
      <path d="M340.905,340.129c-4.009-2.06-8.933-0.481-10.995,3.531c-7.356,14.315-11.749,26.121-14.148,38.268H196.238  c-4.863-24.654-17.421-45.557-40.65-84.227l-1.461-2.431c-0.125-0.208-0.259-0.409-0.402-0.606  c-15.838-21.728-24.209-47.462-24.209-74.42c0-21.791,5.819-43.38,16.83-62.432c2.257-3.904,0.92-8.899-2.984-11.155  c-3.903-2.257-8.898-0.921-11.155,2.984c-12.443,21.533-19.02,45.947-19.02,70.603c0,30.316,9.378,59.264,27.127,83.742l1.277,2.125  c23.336,38.849,34.733,57.826,38.853,80.175c-7.504,4.854-12.484,13.29-12.484,22.873c0,7.418,2.984,14.148,7.812,19.064  c-4.827,4.916-7.812,11.647-7.812,19.064c0,15.015,12.216,27.231,27.229,27.231h11.417C212.696,496.319,232.792,512,256,512  s43.304-15.68,49.395-37.483h11.417c15.015,0,27.229-12.216,27.229-27.231c0-7.418-2.984-14.148-7.812-19.064  c4.827-4.916,7.812-11.647,7.812-19.064c0-9.583-4.98-18.02-12.484-22.873c2.04-11.092,5.916-21.612,12.878-35.161  C346.497,347.113,344.915,342.19,340.905,340.129z M256,495.669c-14.214,0-26.716-8.625-32.117-21.152h64.234  C282.714,487.044,270.212,495.669,256,495.669z M294.103,436.388h22.708c6.01,0,10.898,4.89,10.898,10.898  c0,6.01-4.89,10.899-10.898,10.899H195.187c-6.01,0-10.898-4.89-10.898-10.899s4.89-10.898,10.898-10.898h66.631  c4.51,0,8.166-3.656,8.166-8.166s-3.656-8.166-8.166-8.166h-66.631c-6.01,0-10.898-4.89-10.898-10.898  c0-4.921,3.279-9.086,7.766-10.436c0.421-0.126,0.851-0.221,1.286-0.295c0.131-0.023,0.261-0.042,0.393-0.06  c0.48-0.063,0.964-0.109,1.453-0.109h121.623c0.49,0,0.973,0.045,1.453,0.109c0.133,0.017,0.263,0.038,0.395,0.061  c0.431,0.073,0.858,0.168,1.276,0.293c4.491,1.347,7.775,5.513,7.775,10.438c0,6.01-4.89,10.898-10.898,10.898h-22.708  c-4.51,0-8.166,3.656-8.166,8.166S289.593,436.388,294.103,436.388z" />
    </svg>
  );
};
