import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebarmenu">
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1923_432)">
          <path
            d="M27.5953 5.85571L34.6434 5.85571L34.6434 17.2977L23.1995 17.2977L23.1995 14.7199L29.5138 8.39988L29.8302 8.09027L27.5953 5.85571Z"
            fill="white"
          />
          <path
            d="M20.5 0L28.5916 8.09019L20.5 16.1804L18.6757 14.3564L18.6757 4.98065L15.5186 4.98065L20.5 0Z"
            fill="white"
          />
          <path
            d="M6.35663 5.85571L6.35663 12.9027L8.28191 10.9777L8.59157 10.6681L15.2223 17.2977L17.8006 17.2977L17.8006 5.85571L6.35663 5.85571Z"
            fill="white"
          />
          <path
            d="M0.5 19.9967L8.59155 11.9065L16.6831 19.9967L14.8588 21.8207L5.48822 21.8207L5.48822 24.9773L0.5 19.9967Z"
            fill="white"
          />
          <path
            d="M6.35663 34.1376L6.36336 22.6956L17.8006 22.6956L17.8006 25.2801L11.4795 31.5934L11.1766 31.903L11.4795 32.2126L13.4048 34.1376L6.35663 34.1376Z"
            fill="white"
          />
          <path
            d="M20.5 40.0001L12.4084 31.9032L20.5 23.813L22.3243 25.637L22.3243 35.0127L25.4882 35.0127L20.5 40.0001Z"
            fill="white"
          />
          <path
            d="M34.6434 34.1376L23.1927 34.1376L23.1994 22.6956L25.7777 22.6956L32.0988 29.0156L32.4084 29.3252L32.7181 29.0156L34.6434 27.0906L34.6434 34.1376Z"
            fill="white"
          />
          <path
            d="M32.4084 28.087L24.3169 19.9968L26.1412 18.1728L35.5185 18.1728L35.5185 15.0161L40.5 19.9968L32.4084 28.087Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1923_432">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="sidebarmenubottom">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 4H15.5V3C15.5 2.20435 15.1839 1.44129 14.6213 0.87868C14.0587 0.31607 13.2956 0 12.5 0C11.7044 0 10.9413 0.31607 10.3787 0.87868C9.81607 1.44129 9.5 2.20435 9.5 3V4H5.5C4.17441 4.00159 2.90356 4.52888 1.96622 5.46622C1.02888 6.40356 0.501588 7.67441 0.5 9L0.5 19C0.501588 20.3256 1.02888 21.5964 1.96622 22.5338C2.90356 23.4711 4.17441 23.9984 5.5 24H19.5C20.8256 23.9984 22.0964 23.4711 23.0338 22.5338C23.9711 21.5964 24.4984 20.3256 24.5 19V9C24.4984 7.67441 23.9711 6.40356 23.0338 5.46622C22.0964 4.52888 20.8256 4.00159 19.5 4ZM11.5 3C11.5 2.73478 11.6054 2.48043 11.7929 2.29289C11.9804 2.10536 12.2348 2 12.5 2C12.7652 2 13.0196 2.10536 13.2071 2.29289C13.3946 2.48043 13.5 2.73478 13.5 3V5C13.5 5.26522 13.3946 5.51957 13.2071 5.70711C13.0196 5.89464 12.7652 6 12.5 6C12.2348 6 11.9804 5.89464 11.7929 5.70711C11.6054 5.51957 11.5 5.26522 11.5 5V3ZM22.5 19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V9C2.5 8.20435 2.81607 7.44129 3.37868 6.87868C3.94129 6.31607 4.70435 6 5.5 6H9.684C9.88765 6.58454 10.2682 7.09123 10.7727 7.44977C11.2773 7.80831 11.881 8.00095 12.5 8.00095C13.119 8.00095 13.7227 7.80831 14.2273 7.44977C14.7318 7.09123 15.1124 6.58454 15.316 6H19.5C20.2956 6 21.0587 6.31607 21.6213 6.87868C22.1839 7.44129 22.5 8.20435 22.5 9V19ZM10.5 10H5.5C5.23478 10 4.98043 10.1054 4.79289 10.2929C4.60536 10.4804 4.5 10.7348 4.5 11V19C4.5 19.2652 4.60536 19.5196 4.79289 19.7071C4.98043 19.8946 5.23478 20 5.5 20H10.5C10.7652 20 11.0196 19.8946 11.2071 19.7071C11.3946 19.5196 11.5 19.2652 11.5 19V11C11.5 10.7348 11.3946 10.4804 11.2071 10.2929C11.0196 10.1054 10.7652 10 10.5 10ZM9.5 18H6.5V12H9.5V18ZM20.5 15C20.5 15.2652 20.3946 15.5196 20.2071 15.7071C20.0196 15.8946 19.7652 16 19.5 16H14.5C14.2348 16 13.9804 15.8946 13.7929 15.7071C13.6054 15.5196 13.5 15.2652 13.5 15C13.5 14.7348 13.6054 14.4804 13.7929 14.2929C13.9804 14.1054 14.2348 14 14.5 14H19.5C19.7652 14 20.0196 14.1054 20.2071 14.2929C20.3946 14.4804 20.5 14.7348 20.5 15ZM20.5 11C20.5 11.2652 20.3946 11.5196 20.2071 11.7071C20.0196 11.8946 19.7652 12 19.5 12H14.5C14.2348 12 13.9804 11.8946 13.7929 11.7071C13.6054 11.5196 13.5 11.2652 13.5 11C13.5 10.7348 13.6054 10.4804 13.7929 10.2929C13.9804 10.1054 14.2348 10 14.5 10H19.5C19.7652 10 20.0196 10.1054 20.2071 10.2929C20.3946 10.4804 20.5 10.7348 20.5 11ZM18.5 19C18.5 19.2652 18.3946 19.5196 18.2071 19.7071C18.0196 19.8946 17.7652 20 17.5 20H14.5C14.2348 20 13.9804 19.8946 13.7929 19.7071C13.6054 19.5196 13.5 19.2652 13.5 19C13.5 18.7348 13.6054 18.4804 13.7929 18.2929C13.9804 18.1054 14.2348 18 14.5 18H17.5C17.7652 18 18.0196 18.1054 18.2071 18.2929C18.3946 18.4804 18.5 18.7348 18.5 19Z"
            fill="white"
          />
        </svg>
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 10H3.5C2.70435 10 1.94129 9.68393 1.37868 9.12132C0.81607 8.55871 0.5 7.79565 0.5 7V3C0.5 2.20435 0.81607 1.44129 1.37868 0.87868C1.94129 0.31607 2.70435 0 3.5 0H7.5C8.29565 0 9.05871 0.31607 9.62132 0.87868C10.1839 1.44129 10.5 2.20435 10.5 3V7C10.5 7.79565 10.1839 8.55871 9.62132 9.12132C9.05871 9.68393 8.29565 10 7.5 10ZM3.5 2C3.23478 2 2.98043 2.10536 2.79289 2.29289C2.60536 2.48043 2.5 2.73478 2.5 3V7C2.5 7.26522 2.60536 7.51957 2.79289 7.70711C2.98043 7.89464 3.23478 8 3.5 8H7.5C7.76522 8 8.01957 7.89464 8.20711 7.70711C8.39464 7.51957 8.5 7.26522 8.5 7V3C8.5 2.73478 8.39464 2.48043 8.20711 2.29289C8.01957 2.10536 7.76522 2 7.5 2H3.5ZM19.5 10H15.5C14.7044 10 13.9413 9.68393 13.3787 9.12132C12.8161 8.55871 12.5 7.79565 12.5 7V3C12.5 2.20435 12.8161 1.44129 13.3787 0.87868C13.9413 0.31607 14.7044 0 15.5 0H19.5C20.2956 0 21.0587 0.31607 21.6213 0.87868C22.1839 1.44129 22.5 2.20435 22.5 3V7C22.5 7.79565 22.1839 8.55871 21.6213 9.12132C21.0587 9.68393 20.2956 10 19.5 10ZM15.5 2C15.2348 2 14.9804 2.10536 14.7929 2.29289C14.6054 2.48043 14.5 2.73478 14.5 3V7C14.5 7.26522 14.6054 7.51957 14.7929 7.70711C14.9804 7.89464 15.2348 8 15.5 8H19.5C19.7652 8 20.0196 7.89464 20.2071 7.70711C20.3946 7.51957 20.5 7.26522 20.5 7V3C20.5 2.73478 20.3946 2.48043 20.2071 2.29289C20.0196 2.10536 19.7652 2 19.5 2H15.5ZM7.5 22H3.5C2.70435 22 1.94129 21.6839 1.37868 21.1213C0.81607 20.5587 0.5 19.7956 0.5 19V15C0.5 14.2044 0.81607 13.4413 1.37868 12.8787C1.94129 12.3161 2.70435 12 3.5 12H7.5C8.29565 12 9.05871 12.3161 9.62132 12.8787C10.1839 13.4413 10.5 14.2044 10.5 15V19C10.5 19.7956 10.1839 20.5587 9.62132 21.1213C9.05871 21.6839 8.29565 22 7.5 22ZM3.5 14C3.23478 14 2.98043 14.1054 2.79289 14.2929C2.60536 14.4804 2.5 14.7348 2.5 15V19C2.5 19.2652 2.60536 19.5196 2.79289 19.7071C2.98043 19.8946 3.23478 20 3.5 20H7.5C7.76522 20 8.01957 19.8946 8.20711 19.7071C8.39464 19.5196 8.5 19.2652 8.5 19V15C8.5 14.7348 8.39464 14.4804 8.20711 14.2929C8.01957 14.1054 7.76522 14 7.5 14H3.5ZM19.5 22H15.5C14.7044 22 13.9413 21.6839 13.3787 21.1213C12.8161 20.5587 12.5 19.7956 12.5 19V15C12.5 14.2044 12.8161 13.4413 13.3787 12.8787C13.9413 12.3161 14.7044 12 15.5 12H19.5C20.2956 12 21.0587 12.3161 21.6213 12.8787C22.1839 13.4413 22.5 14.2044 22.5 15V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22ZM15.5 14C15.2348 14 14.9804 14.1054 14.7929 14.2929C14.6054 14.4804 14.5 14.7348 14.5 15V19C14.5 19.2652 14.6054 19.5196 14.7929 19.7071C14.9804 19.8946 15.2348 20 15.5 20H19.5C19.7652 20 20.0196 19.8946 20.2071 19.7071C20.3946 19.5196 20.5 19.2652 20.5 19V15C20.5 14.7348 20.3946 14.4804 20.2071 14.2929C20.0196 14.1054 19.7652 14 19.5 14H15.5Z"
            fill="white"
          />
        </svg>
        <svg
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 24H5.5C4.17441 23.9984 2.90356 23.4711 1.96622 22.5338C1.02888 21.5964 0.501588 20.3256 0.5 19V5C0.501588 3.67441 1.02888 2.40356 1.96622 1.46622C2.90356 0.528882 4.17441 0.00158786 5.5 0L17.5 0C18.8256 0.00158786 20.0964 0.528882 21.0338 1.46622C21.9711 2.40356 22.4984 3.67441 22.5 5V19C22.4984 20.3256 21.9711 21.5964 21.0338 22.5338C20.0964 23.4711 18.8256 23.9984 17.5 24ZM5.5 2C4.70435 2 3.94129 2.31607 3.37868 2.87868C2.81607 3.44129 2.5 4.20435 2.5 5V19C2.5 19.7956 2.81607 20.5587 3.37868 21.1213C3.94129 21.6839 4.70435 22 5.5 22H17.5C18.2956 22 19.0587 21.6839 19.6213 21.1213C20.1839 20.5587 20.5 19.7956 20.5 19V5C20.5 4.20435 20.1839 3.44129 19.6213 2.87868C19.0587 2.31607 18.2956 2 17.5 2H5.5ZM15.5 10H7.5C6.70435 10 5.94129 9.68393 5.37868 9.12132C4.81607 8.55871 4.5 7.79565 4.5 7C4.5 6.20435 4.81607 5.44129 5.37868 4.87868C5.94129 4.31607 6.70435 4 7.5 4H15.5C16.2956 4 17.0587 4.31607 17.6213 4.87868C18.1839 5.44129 18.5 6.20435 18.5 7C18.5 7.79565 18.1839 8.55871 17.6213 9.12132C17.0587 9.68393 16.2956 10 15.5 10ZM7.5 6C7.23478 6 6.98043 6.10536 6.79289 6.29289C6.60536 6.48043 6.5 6.73478 6.5 7C6.5 7.26522 6.60536 7.51957 6.79289 7.70711C6.98043 7.89464 7.23478 8 7.5 8H15.5C15.7652 8 16.0196 7.89464 16.2071 7.70711C16.3946 7.51957 16.5 7.26522 16.5 7C16.5 6.73478 16.3946 6.48043 16.2071 6.29289C16.0196 6.10536 15.7652 6 15.5 6H7.5ZM5.5 13C5.30222 13 5.10888 13.0586 4.94443 13.1685C4.77998 13.2784 4.65181 13.4346 4.57612 13.6173C4.50043 13.8 4.48063 14.0011 4.51921 14.1951C4.5578 14.3891 4.65304 14.5673 4.79289 14.7071C4.93275 14.847 5.11093 14.9422 5.30491 14.9808C5.49889 15.0194 5.69996 14.9996 5.88268 14.9239C6.06541 14.8482 6.22159 14.72 6.33147 14.5556C6.44135 14.3911 6.5 14.1978 6.5 14C6.5 13.7348 6.39464 13.4804 6.20711 13.2929C6.01957 13.1054 5.76522 13 5.5 13ZM9.5 13C9.30222 13 9.10888 13.0586 8.94443 13.1685C8.77998 13.2784 8.65181 13.4346 8.57612 13.6173C8.50043 13.8 8.48063 14.0011 8.51921 14.1951C8.5578 14.3891 8.65304 14.5673 8.79289 14.7071C8.93275 14.847 9.11093 14.9422 9.30491 14.9808C9.49889 15.0194 9.69996 14.9996 9.88268 14.9239C10.0654 14.8482 10.2216 14.72 10.3315 14.5556C10.4414 14.3911 10.5 14.1978 10.5 14C10.5 13.7348 10.3946 13.4804 10.2071 13.2929C10.0196 13.1054 9.76522 13 9.5 13ZM13.5 13C13.3022 13 13.1089 13.0586 12.9444 13.1685C12.78 13.2784 12.6518 13.4346 12.5761 13.6173C12.5004 13.8 12.4806 14.0011 12.5192 14.1951C12.5578 14.3891 12.653 14.5673 12.7929 14.7071C12.9327 14.847 13.1109 14.9422 13.3049 14.9808C13.4989 15.0194 13.7 14.9996 13.8827 14.9239C14.0654 14.8482 14.2216 14.72 14.3315 14.5556C14.4414 14.3911 14.5 14.1978 14.5 14C14.5 13.7348 14.3946 13.4804 14.2071 13.2929C14.0196 13.1054 13.7652 13 13.5 13ZM5.5 17C5.30222 17 5.10888 17.0586 4.94443 17.1685C4.77998 17.2784 4.65181 17.4346 4.57612 17.6173C4.50043 17.8 4.48063 18.0011 4.51921 18.1951C4.5578 18.3891 4.65304 18.5673 4.79289 18.7071C4.93275 18.847 5.11093 18.9422 5.30491 18.9808C5.49889 19.0194 5.69996 18.9996 5.88268 18.9239C6.06541 18.8482 6.22159 18.72 6.33147 18.5556C6.44135 18.3911 6.5 18.1978 6.5 18C6.5 17.7348 6.39464 17.4804 6.20711 17.2929C6.01957 17.1054 5.76522 17 5.5 17ZM9.5 17C9.30222 17 9.10888 17.0586 8.94443 17.1685C8.77998 17.2784 8.65181 17.4346 8.57612 17.6173C8.50043 17.8 8.48063 18.0011 8.51921 18.1951C8.5578 18.3891 8.65304 18.5673 8.79289 18.7071C8.93275 18.847 9.11093 18.9422 9.30491 18.9808C9.49889 19.0194 9.69996 18.9996 9.88268 18.9239C10.0654 18.8482 10.2216 18.72 10.3315 18.5556C10.4414 18.3911 10.5 18.1978 10.5 18C10.5 17.7348 10.3946 17.4804 10.2071 17.2929C10.0196 17.1054 9.76522 17 9.5 17ZM17.5 13C17.3022 13 17.1089 13.0586 16.9444 13.1685C16.78 13.2784 16.6518 13.4346 16.5761 13.6173C16.5004 13.8 16.4806 14.0011 16.5192 14.1951C16.5578 14.3891 16.653 14.5673 16.7929 14.7071C16.9327 14.847 17.1109 14.9422 17.3049 14.9808C17.4989 15.0194 17.7 14.9996 17.8827 14.9239C18.0654 14.8482 18.2216 14.72 18.3315 14.5556C18.4414 14.3911 18.5 14.1978 18.5 14C18.5 13.7348 18.3946 13.4804 18.2071 13.2929C18.0196 13.1054 17.7652 13 17.5 13ZM18.5 18C18.5 17.7348 18.3946 17.4804 18.2071 17.2929C18.0196 17.1054 17.7652 17 17.5 17H13.5C13.2348 17 12.9804 17.1054 12.7929 17.2929C12.6054 17.4804 12.5 17.7348 12.5 18C12.5 18.2652 12.6054 18.5196 12.7929 18.7071C12.9804 18.8946 13.2348 19 13.5 19H17.5C17.7652 19 18.0196 18.8946 18.2071 18.7071C18.3946 18.5196 18.5 18.2652 18.5 18Z"
            fill="white"
          />
        </svg>
        <svg
          width="59"
          height="58"
          viewBox="0 0 59 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" width="58" height="58" rx="16" fill="white" />
          <g clip-path="url(#clip0_1923_449)">
            <path
              d="M28.5 29C28.7652 29 29.0196 29.1054 29.2071 29.2929C29.3946 29.4804 29.5 29.7348 29.5 30C29.5 30.2652 29.3946 30.5196 29.2071 30.7071C29.0196 30.8946 28.7652 31 28.5 31H25.5C25.2348 31 24.9804 30.8946 24.7929 30.7071C24.6054 30.5196 24.5 30.2652 24.5 30C24.5 29.7348 24.6054 29.4804 24.7929 29.2929C24.9804 29.1054 25.2348 29 25.5 29H28.5ZM34.5 26C34.5 25.7348 34.3946 25.4804 34.2071 25.2929C34.0196 25.1054 33.7652 25 33.5 25H25.5C25.2348 25 24.9804 25.1054 24.7929 25.2929C24.6054 25.4804 24.5 25.7348 24.5 26C24.5 26.2652 24.6054 26.5196 24.7929 26.7071C24.9804 26.8946 25.2348 27 25.5 27H33.5C33.7652 27 34.0196 26.8946 34.2071 26.7071C34.3946 26.5196 34.5 26.2652 34.5 26ZM25.5 23H33.5C33.7652 23 34.0196 22.8946 34.2071 22.7071C34.3946 22.5196 34.5 22.2652 34.5 22C34.5 21.7348 34.3946 21.4804 34.2071 21.2929C34.0196 21.1054 33.7652 21 33.5 21H25.5C25.2348 21 24.9804 21.1054 24.7929 21.2929C24.6054 21.4804 24.5 21.7348 24.5 22C24.5 22.2652 24.6054 22.5196 24.7929 22.7071C24.9804 22.8946 25.2348 23 25.5 23ZM37.5 36.444V40.277C37.5001 40.4197 37.4578 40.5591 37.3786 40.6777C37.2994 40.7964 37.1868 40.8888 37.055 40.9434C36.9232 40.998 36.7781 41.0123 36.6382 40.9845C36.4983 40.9566 36.3698 40.8879 36.269 40.787L35.5 40.019L34.731 40.787C34.6302 40.8879 34.5017 40.9566 34.3618 40.9845C34.2219 41.0123 34.0768 40.998 33.945 40.9434C33.8132 40.8888 33.7006 40.7964 33.6214 40.6777C33.5422 40.5591 33.4999 40.4197 33.5 40.277V36.444C32.7373 36.0058 32.141 35.3277 31.8038 34.5154C31.4666 33.703 31.4076 32.8019 31.6358 31.9525C31.864 31.103 32.3667 30.3529 33.0656 29.8189C33.7646 29.2849 34.6204 28.997 35.5 29C35.838 29.0042 36.1741 29.0519 36.5 29.142V22C36.5 21.2044 36.1839 20.4413 35.6213 19.8787C35.0587 19.3161 34.2956 19 33.5 19H25.5C24.7044 19 23.9413 19.3161 23.3787 19.8787C22.8161 20.4413 22.5 21.2044 22.5 22V34C22.5 34.7956 22.8161 35.5587 23.3787 36.1213C23.9413 36.6839 24.7044 37 25.5 37H30.5C30.7652 37 31.0196 37.1054 31.2071 37.2929C31.3946 37.4804 31.5 37.7348 31.5 38C31.5 38.2652 31.3946 38.5196 31.2071 38.7071C31.0196 38.8946 30.7652 39 30.5 39H25.5C24.1744 38.9984 22.9036 38.4711 21.9662 37.5338C21.0289 36.5964 20.5016 35.3256 20.5 34V22C20.5016 20.6744 21.0289 19.4036 21.9662 18.4662C22.9036 17.5289 24.1744 17.0016 25.5 17H33.5C34.8256 17.0016 36.0964 17.5289 37.0338 18.4662C37.9711 19.4036 38.4984 20.6744 38.5 22V30.382C38.8917 30.8219 39.1801 31.3438 39.344 31.9096C39.5079 32.4753 39.5433 33.0706 39.4474 33.6518C39.3515 34.2329 39.1269 34.7853 38.7899 35.2684C38.453 35.7516 38.0122 36.1532 37.5 36.444V36.444ZM37.5 33C37.5 32.6044 37.3827 32.2178 37.1629 31.8889C36.9432 31.56 36.6308 31.3036 36.2654 31.1522C35.8999 31.0009 35.4978 30.9613 35.1098 31.0384C34.7219 31.1156 34.3655 31.3061 34.0858 31.5858C33.8061 31.8655 33.6156 32.2219 33.5384 32.6098C33.4613 32.9978 33.5009 33.3999 33.6522 33.7654C33.8036 34.1308 34.06 34.4432 34.3889 34.6629C34.7178 34.8827 35.1044 35 35.5 35C36.0304 35 36.5391 34.7893 36.9142 34.4142C37.2893 34.0391 37.5 33.5304 37.5 33Z"
              fill="#266AEB"
            />
          </g>
          <defs>
            <clipPath id="clip0_1923_449">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(17.5 17)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1923_452)">
            <path
              d="M21.5 12H18.5C17.9696 12 17.4609 12.2107 17.0858 12.5858C16.7107 12.9609 16.5 13.4696 16.5 14C16.5 14.5304 16.2893 15.0391 15.9142 15.4142C15.5391 15.7893 15.0304 16 14.5 16H10.5C9.96957 16 9.46086 15.7893 9.08579 15.4142C8.71071 15.0391 8.5 14.5304 8.5 14C8.5 13.4696 8.28929 12.9609 7.91421 12.5858C7.53914 12.2107 7.03043 12 6.5 12H3.5C2.70435 12 1.94129 12.3161 1.37868 12.8787C0.81607 13.4413 0.5 14.2044 0.5 15L0.5 19C0.501588 20.3256 1.02888 21.5964 1.96622 22.5338C2.90356 23.4711 4.17441 23.9984 5.5 24H19.5C20.8256 23.9984 22.0964 23.4711 23.0338 22.5338C23.9711 21.5964 24.4984 20.3256 24.5 19V15C24.5 14.2044 24.1839 13.4413 23.6213 12.8787C23.0587 12.3161 22.2956 12 21.5 12ZM22.5 19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V15C2.5 14.7348 2.60536 14.4804 2.79289 14.2929C2.98043 14.1054 3.23478 14 3.5 14H6.5C6.5 15.0609 6.92143 16.0783 7.67157 16.8284C8.42172 17.5786 9.43913 18 10.5 18H14.5C15.5609 18 16.5783 17.5786 17.3284 16.8284C18.0786 16.0783 18.5 15.0609 18.5 14H21.5C21.7652 14 22.0196 14.1054 22.2071 14.2929C22.3946 14.4804 22.5 14.7348 22.5 15V19Z"
              fill="white"
            />
            <path
              d="M3.5 10H21.5C21.7652 10 22.0196 9.89464 22.2071 9.70711C22.3946 9.51957 22.5 9.26522 22.5 9C22.5 8.73478 22.3946 8.48043 22.2071 8.29289C22.0196 8.10536 21.7652 8 21.5 8H3.5C3.23478 8 2.98043 8.10536 2.79289 8.29289C2.60536 8.48043 2.5 8.73478 2.5 9C2.5 9.26522 2.60536 9.51957 2.79289 9.70711C2.98043 9.89464 3.23478 10 3.5 10Z"
              fill="white"
            />
            <path
              d="M3.5 6H21.5C21.7652 6 22.0196 5.89464 22.2071 5.70711C22.3946 5.51957 22.5 5.26522 22.5 5C22.5 4.73478 22.3946 4.48043 22.2071 4.29289C22.0196 4.10536 21.7652 4 21.5 4H3.5C3.23478 4 2.98043 4.10536 2.79289 4.29289C2.60536 4.48043 2.5 4.73478 2.5 5C2.5 5.26522 2.60536 5.51957 2.79289 5.70711C2.98043 5.89464 3.23478 6 3.5 6Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1923_452">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1923_456)">
            <path
              d="M23.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V1C2.5 0.734784 2.39464 0.48043 2.20711 0.292893C2.01957 0.105357 1.76522 0 1.5 0C1.23478 0 0.98043 0.105357 0.792893 0.292893C0.605357 0.48043 0.5 0.734784 0.5 1L0.5 19C0.501588 20.3256 1.02888 21.5964 1.96622 22.5338C2.90356 23.4711 4.17441 23.9984 5.5 24H23.5C23.7652 24 24.0196 23.8946 24.2071 23.7071C24.3946 23.5196 24.5 23.2652 24.5 23C24.5 22.7348 24.3946 22.4804 24.2071 22.2929C24.0196 22.1054 23.7652 22 23.5 22Z"
              fill="white"
            />
            <path
              d="M6.5 20C6.76522 20 7.01957 19.8946 7.20711 19.7071C7.39464 19.5196 7.5 19.2652 7.5 19V12C7.5 11.7348 7.39464 11.4804 7.20711 11.2929C7.01957 11.1054 6.76522 11 6.5 11C6.23478 11 5.98043 11.1054 5.79289 11.2929C5.60536 11.4804 5.5 11.7348 5.5 12V19C5.5 19.2652 5.60536 19.5196 5.79289 19.7071C5.98043 19.8946 6.23478 20 6.5 20Z"
              fill="white"
            />
            <path
              d="M10.5 10V19C10.5 19.2652 10.6054 19.5196 10.7929 19.7071C10.9804 19.8946 11.2348 20 11.5 20C11.7652 20 12.0196 19.8946 12.2071 19.7071C12.3946 19.5196 12.5 19.2652 12.5 19V10C12.5 9.73478 12.3946 9.48043 12.2071 9.29289C12.0196 9.10536 11.7652 9 11.5 9C11.2348 9 10.9804 9.10536 10.7929 9.29289C10.6054 9.48043 10.5 9.73478 10.5 10Z"
              fill="white"
            />
            <path
              d="M15.5 13V19C15.5 19.2652 15.6054 19.5196 15.7929 19.7071C15.9804 19.8946 16.2348 20 16.5 20C16.7652 20 17.0196 19.8946 17.2071 19.7071C17.3946 19.5196 17.5 19.2652 17.5 19V13C17.5 12.7348 17.3946 12.4804 17.2071 12.2929C17.0196 12.1054 16.7652 12 16.5 12C16.2348 12 15.9804 12.1054 15.7929 12.2929C15.6054 12.4804 15.5 12.7348 15.5 13Z"
              fill="white"
            />
            <path
              d="M20.5 9V19C20.5 19.2652 20.6054 19.5196 20.7929 19.7071C20.9804 19.8946 21.2348 20 21.5 20C21.7652 20 22.0196 19.8946 22.2071 19.7071C22.3946 19.5196 22.5 19.2652 22.5 19V9C22.5 8.73478 22.3946 8.48043 22.2071 8.29289C22.0196 8.10536 21.7652 8 21.5 8C21.2348 8 20.9804 8.10536 20.7929 8.29289C20.6054 8.48043 20.5 8.73478 20.5 9Z"
              fill="white"
            />
            <path
              d="M6.49997 8.99992C6.76516 8.99986 7.01948 8.89447 7.20697 8.70692L10.793 5.12092C10.9836 4.93934 11.2367 4.83806 11.5 4.83806C11.7632 4.83806 12.0164 4.93934 12.207 5.12092L14.379 7.29292C14.9416 7.85533 15.7045 8.17128 16.5 8.17128C17.2955 8.17128 18.0584 7.85533 18.621 7.29292L24.207 1.70692C24.3891 1.51832 24.4899 1.26571 24.4876 1.00352C24.4854 0.741321 24.3802 0.490508 24.1948 0.3051C24.0094 0.119692 23.7586 0.0145233 23.4964 0.0122448C23.2342 0.00996641 22.9816 0.110761 22.793 0.292919L17.207 5.87792C17.0194 6.06539 16.7651 6.17071 16.5 6.17071C16.2348 6.17071 15.9805 6.06539 15.793 5.87792L13.621 3.70692C13.0584 3.14451 12.2955 2.82856 11.5 2.82856C10.7045 2.82856 9.94155 3.14451 9.37897 3.70692L5.79297 7.29292C5.65316 7.43277 5.55795 7.61093 5.51939 7.80489C5.48082 7.99884 5.50062 8.19987 5.57629 8.38257C5.65196 8.56527 5.7801 8.72144 5.94451 8.83132C6.10892 8.94121 6.30222 8.99988 6.49997 8.99992Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1923_456">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1923_463)">
            <path
              d="M19.213 12H14.5C13.9695 12 13.4608 11.7893 13.0858 11.4143C12.7107 11.0392 12.5 10.5305 12.5 10V5.27404C12.5013 4.81403 12.3969 4.35986 12.1947 3.94665C11.9925 3.53344 11.698 3.17227 11.334 2.89104C10.989 2.61786 10.5859 2.42762 10.1557 2.33503C9.72549 2.24244 9.27978 2.24997 8.85297 2.35704C6.42863 2.95886 4.2823 4.37011 2.76894 6.35741C1.25558 8.34471 0.465845 10.789 0.53033 13.2861C0.594816 15.7832 1.50966 18.1835 3.12358 20.09C4.73749 21.9966 6.9538 23.2952 9.40597 23.771C12.1631 24.2988 15.0176 23.7525 17.385 22.244C19.7524 20.7355 21.4535 18.379 22.14 15.657C22.2474 15.2297 22.2553 14.7833 22.1629 14.3525C22.0704 13.9216 21.8803 13.5177 21.607 13.172C21.3224 12.8085 20.9592 12.5142 20.5445 12.3112C20.1299 12.1082 19.6746 12.0018 19.213 12ZM20.201 15.168C19.8181 16.7099 19.0325 18.1224 17.9246 19.2611C16.8167 20.3997 15.4263 21.2237 13.8955 21.6486C12.3647 22.0736 10.7485 22.0843 9.21217 21.6797C7.67586 21.2751 6.27459 20.4697 5.15168 19.3459C4.02877 18.222 3.22452 16.8201 2.82119 15.2834C2.41786 13.7468 2.42993 12.1306 2.85617 10.6002C3.2824 9.0697 4.1075 7.67993 5.24707 6.57299C6.38664 5.46604 7.79979 4.68165 9.34197 4.30004C9.4739 4.26708 9.61172 4.26547 9.74439 4.29534C9.87706 4.32521 10.0009 4.38572 10.106 4.47204C10.2301 4.56665 10.3307 4.68857 10.4001 4.82835C10.4694 4.96812 10.5057 5.122 10.506 5.27804V10C10.506 11.0609 10.9274 12.0783 11.6775 12.8285C12.4277 13.5786 13.4451 14 14.506 14H19.218C19.3754 14.0007 19.5306 14.037 19.6719 14.1063C19.8133 14.1756 19.937 14.276 20.034 14.4C20.119 14.5066 20.1782 14.6314 20.207 14.7646C20.2358 14.8978 20.2334 15.0359 20.2 15.168H20.201Z"
              fill="white"
            />
            <path
              d="M24.151 7.4459C23.6906 5.75337 22.7962 4.2104 21.5564 2.96967C20.3165 1.72895 18.7742 0.833486 17.082 0.371895C16.9046 0.324204 16.7217 0.299998 16.538 0.299895C16.2737 0.297385 16.0116 0.347263 15.7668 0.446648C15.5219 0.546033 15.2992 0.692954 15.1115 0.878921C14.9237 1.06489 14.7747 1.28622 14.673 1.53011C14.5713 1.77401 14.519 2.03564 14.519 2.29989V6.9999C14.519 7.79554 14.8351 8.55861 15.3977 9.12122C15.9603 9.68382 16.7233 9.9999 17.519 9.9999H22.238C22.5467 9.99693 22.8505 9.92283 23.1259 9.78337C23.4012 9.64391 23.6408 9.44284 23.8258 9.19578C24.0109 8.94872 24.1365 8.66232 24.1929 8.35883C24.2493 8.05535 24.2349 7.74294 24.151 7.4459ZM21.653 7.9999H17.515C17.2498 7.9999 16.9954 7.89454 16.8079 7.707C16.6203 7.51947 16.515 7.26511 16.515 6.9999L16.507 2.30689C16.5143 2.3016 16.523 2.29848 16.532 2.2979H16.558C17.9201 2.66898 19.161 3.39081 20.157 4.39134C21.153 5.39187 21.8691 6.63611 22.234 7.9999H21.653Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1923_463">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1923_466)">
            <path
              d="M19.081 2.14L12.816 0.0509967C12.6109 -0.0173244 12.3891 -0.0173244 12.184 0.0509967L5.919 2.14C4.92291 2.47088 4.05642 3.10725 3.44265 3.95871C2.82887 4.81016 2.49904 5.83338 2.5 6.883V12C2.5 19.563 11.7 23.74 12.094 23.914C12.2218 23.9708 12.3601 24.0001 12.5 24.0001C12.6399 24.0001 12.7782 23.9708 12.906 23.914C13.3 23.74 22.5 19.563 22.5 12V6.883C22.501 5.83338 22.1711 4.81016 21.5574 3.95871C20.9436 3.10725 20.0771 2.47088 19.081 2.14ZM20.5 12C20.5 17.455 14.181 21.033 12.5 21.889C10.817 21.036 4.5 17.469 4.5 12V6.883C4.50006 6.25327 4.69828 5.63954 5.06657 5.12874C5.43486 4.61794 5.95455 4.23599 6.552 4.037L12.5 2.054L18.448 4.037C19.0455 4.23599 19.5651 4.61794 19.9334 5.12874C20.3017 5.63954 20.4999 6.25327 20.5 6.883V12Z"
              fill="white"
            />
            <path
              d="M15.8 8.30008L11.612 12.5001L9.36798 10.1601C9.27792 10.0616 9.16907 9.98217 9.04784 9.92642C8.9266 9.87068 8.79544 9.83976 8.66207 9.83549C8.5287 9.83122 8.39583 9.85368 8.27128 9.90155C8.14673 9.94943 8.03302 10.0217 7.93685 10.1142C7.84068 10.2067 7.76399 10.3176 7.71131 10.4402C7.65862 10.5627 7.63101 10.6946 7.63009 10.8281C7.62917 10.9615 7.65496 11.0938 7.70595 11.2171C7.75694 11.3404 7.83209 11.4523 7.92698 11.5461L10.233 13.9461C10.405 14.1318 10.6128 14.2808 10.844 14.3839C11.0752 14.487 11.3249 14.5422 11.578 14.5461H11.611C11.859 14.5469 12.1048 14.4984 12.334 14.4035C12.5631 14.3086 12.7712 14.1691 12.946 13.9931L17.218 9.72107C17.3113 9.62797 17.3853 9.51739 17.4359 9.39567C17.4865 9.27394 17.5126 9.14345 17.5127 9.01164C17.5129 8.87982 17.487 8.74927 17.4367 8.62744C17.3864 8.50561 17.3126 8.39488 17.2195 8.30158C17.1264 8.20827 17.0158 8.13422 16.8941 8.08365C16.7723 8.03308 16.6419 8.00698 16.51 8.00684C16.3782 8.0067 16.2477 8.03252 16.1258 8.08284C16.004 8.13315 15.8933 8.20697 15.8 8.30008Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1923_466">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1923_469)">
            <path
              d="M19.5 2H18.5V1C18.5 0.734784 18.3946 0.48043 18.2071 0.292893C18.0196 0.105357 17.7652 0 17.5 0C17.2348 0 16.9804 0.105357 16.7929 0.292893C16.6054 0.48043 16.5 0.734784 16.5 1V2H8.5V1C8.5 0.734784 8.39464 0.48043 8.20711 0.292893C8.01957 0.105357 7.76522 0 7.5 0C7.23478 0 6.98043 0.105357 6.79289 0.292893C6.60536 0.48043 6.5 0.734784 6.5 1V2H5.5C4.17441 2.00159 2.90356 2.52888 1.96622 3.46622C1.02888 4.40356 0.501588 5.67441 0.5 7L0.5 19C0.501588 20.3256 1.02888 21.5964 1.96622 22.5338C2.90356 23.4711 4.17441 23.9984 5.5 24H19.5C20.8256 23.9984 22.0964 23.4711 23.0338 22.5338C23.9711 21.5964 24.4984 20.3256 24.5 19V7C24.4984 5.67441 23.9711 4.40356 23.0338 3.46622C22.0964 2.52888 20.8256 2.00159 19.5 2ZM2.5 7C2.5 6.20435 2.81607 5.44129 3.37868 4.87868C3.94129 4.31607 4.70435 4 5.5 4H19.5C20.2956 4 21.0587 4.31607 21.6213 4.87868C22.1839 5.44129 22.5 6.20435 22.5 7V8H2.5V7ZM19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V10H22.5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22Z"
              fill="white"
            />
            <path
              d="M12.5 16.5C13.3284 16.5 14 15.8284 14 15C14 14.1716 13.3284 13.5 12.5 13.5C11.6716 13.5 11 14.1716 11 15C11 15.8284 11.6716 16.5 12.5 16.5Z"
              fill="white"
            />
            <path
              d="M7.5 16.5C8.32843 16.5 9 15.8284 9 15C9 14.1716 8.32843 13.5 7.5 13.5C6.67157 13.5 6 14.1716 6 15C6 15.8284 6.67157 16.5 7.5 16.5Z"
              fill="white"
            />
            <path
              d="M17.5 16.5C18.3284 16.5 19 15.8284 19 15C19 14.1716 18.3284 13.5 17.5 13.5C16.6716 13.5 16 14.1716 16 15C16 15.8284 16.6716 16.5 17.5 16.5Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1923_469">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1923_474)">
            <path
              d="M24.5 23.0001C24.5 23.2653 24.3947 23.5196 24.2071 23.7072C24.0196 23.8947 23.7652 24.0001 23.5 24.0001H1.50002C1.23481 24.0001 0.980454 23.8947 0.792918 23.7072C0.605381 23.5196 0.500025 23.2653 0.500025 23.0001C0.500025 22.7348 0.605381 22.4805 0.792918 22.293C0.980454 22.1054 1.23481 22.0001 1.50002 22.0001H23.5C23.7652 22.0001 24.0196 22.1054 24.2071 22.293C24.3947 22.4805 24.5 22.7348 24.5 23.0001ZM0.791025 8.55206C0.575547 8.15238 0.475719 7.70056 0.502745 7.24731C0.529771 6.79405 0.68258 6.35729 0.944025 5.98606C1.37128 5.35917 1.94347 4.84462 2.61202 4.48606L10.113 0.582055C10.8503 0.198686 11.669 -0.00146484 12.5 -0.00146484C13.331 -0.00146484 14.1498 0.198686 14.887 0.582055L22.387 4.48906C23.0556 4.84762 23.6278 5.36217 24.055 5.98906C24.3165 6.36029 24.4693 6.79705 24.4963 7.25031C24.5233 7.70356 24.4235 8.15538 24.208 8.55506C23.976 8.99389 23.6281 9.36066 23.2021 9.61544C22.7761 9.87023 22.2884 10.0033 21.792 10.0001H21.5V18.0001H22.5C22.7652 18.0001 23.0196 18.1054 23.2071 18.2929C23.3947 18.4805 23.5 18.7348 23.5 19.0001C23.5 19.2653 23.3947 19.5196 23.2071 19.7072C23.0196 19.8947 22.7652 20.0001 22.5 20.0001H2.50002C2.23481 20.0001 1.98045 19.8947 1.79292 19.7072C1.60538 19.5196 1.50002 19.2653 1.50002 19.0001C1.50002 18.7348 1.60538 18.4805 1.79292 18.2929C1.98045 18.1054 2.23481 18.0001 2.50002 18.0001H3.50002V10.0001H3.20802C2.71118 10.0032 2.22303 9.86976 1.79681 9.61442C1.3706 9.35908 1.02268 8.9916 0.791025 8.55206V8.55206ZM5.50003 18.0001H8.50003V10.0001H5.50003V18.0001ZM10.5 10.0001V18.0001H14.5V10.0001H10.5ZM19.5 10.0001H16.5V18.0001H19.5V10.0001ZM2.56302 7.62506C2.62577 7.74074 2.71914 7.83691 2.83291 7.90306C2.94668 7.9692 3.07645 8.00276 3.20802 8.00006H21.792C21.9236 8.00276 22.0534 7.9692 22.1671 7.90306C22.2809 7.83691 22.3743 7.74074 22.437 7.62506C22.4827 7.54862 22.5048 7.46039 22.5006 7.37143C22.4963 7.28248 22.4658 7.19676 22.413 7.12506C22.1707 6.76497 21.8452 6.4686 21.464 6.26106L13.964 2.35406C13.512 2.11948 13.0103 1.99703 12.501 1.99703C11.9918 1.99703 11.49 2.11948 11.038 2.35406L3.53803 6.26106C3.15701 6.46926 2.83155 6.76591 2.58902 7.12606C2.53611 7.19746 2.50543 7.28288 2.5008 7.37164C2.49618 7.46039 2.51782 7.54854 2.56302 7.62506V7.62506Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1923_474">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
