import React, { useEffect, useRef, useState } from "react";
import "./Content.css";

const Content = () => {
    const [modaldots,setModaldots]=useState('none')
    const showhide=()=>{
        if(modaldots==='none'){
            setModaldots('block')
        }else{
            setModaldots('none')
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
    }, []);

    const refOne = useRef(null);

    const handleClickOutside = (e) => {
        if (!refOne.current.contains(e.target)) {
          setModaldots("none");
        }
    }
    

  return (
    <div className="content">
      <span className="text">Qaimələr</span>
      <div className="topcontent d-flex">
        <div className="lefttopcontent">
          <svg
            className="searchicon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1923_95)">
              <path
                d="M7.24444 14.483C8.8533 14.483 10.4161 13.9462 11.6854 12.9576L16.474 17.7462C16.8317 18.0917 17.4017 18.0818 17.7472 17.724C18.0842 17.3751 18.0842 16.8219 17.7472 16.473L12.9586 11.6844C15.4118 8.5265 14.8406 3.97782 11.6827 1.52464C8.52475 -0.928536 3.97612 -0.357275 1.52294 2.80063C-0.930245 5.95854 -0.358984 10.5072 2.79892 12.9604C4.07027 13.948 5.63451 14.4838 7.24444 14.483ZM3.39686 3.3958C5.52184 1.27078 8.96711 1.27074 11.0921 3.39572C13.2171 5.5207 13.2172 8.96597 11.0922 11.091C8.96723 13.216 5.52196 13.216 3.39694 11.0911C3.3969 11.091 3.3969 11.091 3.39686 11.091C1.27188 8.98149 1.25936 5.54878 3.36886 3.4238C3.37818 3.41444 3.3875 3.40512 3.39686 3.3958V3.3958Z"
                fill="#A0A7B3"
              />
            </g>
            <defs>
              <clipPath id="clip0_1923_95">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            type="text"
            placeholder="Qaimə nömrəsi, müştəri adı ilə axtar"
          />
        </div>
        <div className="righttopcontent">
          <button className="btn btn1">
            {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1923_638)">
                <path
                  d="M11.6667 20C11.4864 20 11.3109 19.9415 11.1667 19.8333L7.83333 17.3333C7.72983 17.2557 7.64583 17.1551 7.58797 17.0393C7.53012 16.9236 7.5 16.796 7.5 16.6667V11.9833L1.65333 5.40583C1.2381 4.9374 0.966979 4.35901 0.872563 3.7402C0.778147 3.12138 0.86445 2.48846 1.1211 1.91751C1.37775 1.34656 1.79382 0.861882 2.31931 0.521721C2.8448 0.181561 3.45735 0.000395349 4.08333 0L15.9167 0C16.5426 0.000734209 17.155 0.182199 17.6803 0.522589C18.2055 0.862978 18.6214 1.34781 18.8777 1.91882C19.1341 2.48983 19.2201 3.12273 19.1255 3.74146C19.0308 4.36018 18.7595 4.93841 18.3442 5.40667L12.5 11.9833V19.1667C12.5 19.3877 12.4122 19.5996 12.2559 19.7559C12.0996 19.9122 11.8877 20 11.6667 20ZM9.16666 16.25L10.8333 17.5V11.6667C10.8335 11.4626 10.9085 11.2657 11.0442 11.1133L17.1008 4.29917C17.3028 4.0709 17.4346 3.7892 17.4804 3.48788C17.5262 3.18655 17.484 2.87842 17.359 2.60046C17.2339 2.32251 17.0313 2.08655 16.7755 1.92091C16.5197 1.75527 16.2214 1.66699 15.9167 1.66667H4.08333C3.77871 1.66713 3.48068 1.75546 3.225 1.92105C2.96932 2.08665 2.76684 2.3225 2.64184 2.60029C2.51684 2.87809 2.47463 3.18605 2.52027 3.48723C2.56591 3.78842 2.69747 4.07004 2.89916 4.29833L8.95666 11.1133C9.09201 11.2659 9.16673 11.4627 9.16666 11.6667V16.25Z"
                  fill="#7C818D"
                />
              </g>
              <defs>
                <clipPath id="clip0_1923_638">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="span">Filter</span>
          </button>
          <button className="btn btn2">
            {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6667 8.66667H11.3333V3.33333C11.3333 2.97971 11.1929 2.64057 10.9428 2.39052C10.6928 2.14048 10.3536 2 10 2C9.64638 2 9.30724 2.14048 9.05719 2.39052C8.80714 2.64057 8.66667 2.97971 8.66667 3.33333V8.66667H3.33333C2.97971 8.66667 2.64057 8.80714 2.39052 9.05719C2.14048 9.30724 2 9.64638 2 10C2 10.3536 2.14048 10.6928 2.39052 10.9428C2.64057 11.1929 2.97971 11.3333 3.33333 11.3333H8.66667V16.6667C8.66667 17.0203 8.80714 17.3594 9.05719 17.6095C9.30724 17.8595 9.64638 18 10 18C10.3536 18 10.6928 17.8595 10.9428 17.6095C11.1929 17.3594 11.3333 17.0203 11.3333 16.6667V11.3333H16.6667C17.0203 11.3333 17.3594 11.1929 17.6095 10.9428C17.8595 10.6928 18 10.3536 18 10C18 9.64638 17.8595 9.30724 17.6095 9.05719C17.3594 8.80714 17.0203 8.66667 16.6667 8.66667Z"
                fill="white"
              />
            </svg>
            <span className="span2">Yeni qaimə</span>
          </button>
        </div>
      </div>
      <div className="bottomcontent">
        <table class="table table-sm">
          <tbody className="headtable">
            <tr>
              <td>
                Qaimə №{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.45362 6H9.54638C9.63648 6.00033 9.72443 6.02384 9.79913 6.06757C9.87383 6.11129 9.93191 6.17326 9.96605 6.24565C10.0002 6.31803 10.0088 6.39758 9.99088 6.47423C9.97294 6.55088 9.92922 6.62119 9.86525 6.67626L7.32342 8.88302C7.28108 8.92009 7.23069 8.94951 7.17518 8.96959C7.11967 8.98966 7.06013 9 7 9C6.93987 9 6.88033 8.98966 6.82482 8.96959C6.76931 8.94951 6.71892 8.92009 6.67658 8.88302L4.13475 6.67626C4.07078 6.62119 4.02707 6.55088 4.00912 6.47423C3.99118 6.39758 3.99982 6.31803 4.03395 6.24565C4.06809 6.17326 4.12617 6.11129 4.20087 6.06757C4.27557 6.02384 4.36352 6.00033 4.45362 6Z"
                    fill="#6B707C"
                  />
                </svg>
              </td>
              <td>
                Müştəri{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.45362 6H9.54638C9.63648 6.00033 9.72443 6.02384 9.79913 6.06757C9.87383 6.11129 9.93191 6.17326 9.96605 6.24565C10.0002 6.31803 10.0088 6.39758 9.99088 6.47423C9.97294 6.55088 9.92922 6.62119 9.86525 6.67626L7.32342 8.88302C7.28108 8.92009 7.23069 8.94951 7.17518 8.96959C7.11967 8.98966 7.06013 9 7 9C6.93987 9 6.88033 8.98966 6.82482 8.96959C6.76931 8.94951 6.71892 8.92009 6.67658 8.88302L4.13475 6.67626C4.07078 6.62119 4.02707 6.55088 4.00912 6.47423C3.99118 6.39758 3.99982 6.31803 4.03395 6.24565C4.06809 6.17326 4.12617 6.11129 4.20087 6.06757C4.27557 6.02384 4.36352 6.00033 4.45362 6Z"
                    fill="#6B707C"
                  />
                </svg>
              </td>
              <td>
                Məhsul sayı{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.45362 6H9.54638C9.63648 6.00033 9.72443 6.02384 9.79913 6.06757C9.87383 6.11129 9.93191 6.17326 9.96605 6.24565C10.0002 6.31803 10.0088 6.39758 9.99088 6.47423C9.97294 6.55088 9.92922 6.62119 9.86525 6.67626L7.32342 8.88302C7.28108 8.92009 7.23069 8.94951 7.17518 8.96959C7.11967 8.98966 7.06013 9 7 9C6.93987 9 6.88033 8.98966 6.82482 8.96959C6.76931 8.94951 6.71892 8.92009 6.67658 8.88302L4.13475 6.67626C4.07078 6.62119 4.02707 6.55088 4.00912 6.47423C3.99118 6.39758 3.99982 6.31803 4.03395 6.24565C4.06809 6.17326 4.12617 6.11129 4.20087 6.06757C4.27557 6.02384 4.36352 6.00033 4.45362 6Z"
                    fill="#6B707C"
                  />
                </svg>
              </td>
              <td>
                Toplam məbləğ{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.45362 6H9.54638C9.63648 6.00033 9.72443 6.02384 9.79913 6.06757C9.87383 6.11129 9.93191 6.17326 9.96605 6.24565C10.0002 6.31803 10.0088 6.39758 9.99088 6.47423C9.97294 6.55088 9.92922 6.62119 9.86525 6.67626L7.32342 8.88302C7.28108 8.92009 7.23069 8.94951 7.17518 8.96959C7.11967 8.98966 7.06013 9 7 9C6.93987 9 6.88033 8.98966 6.82482 8.96959C6.76931 8.94951 6.71892 8.92009 6.67658 8.88302L4.13475 6.67626C4.07078 6.62119 4.02707 6.55088 4.00912 6.47423C3.99118 6.39758 3.99982 6.31803 4.03395 6.24565C4.06809 6.17326 4.12617 6.11129 4.20087 6.06757C4.27557 6.02384 4.36352 6.00033 4.45362 6Z"
                    fill="#6B707C"
                  />
                </svg>
              </td>
              <td>
                Status{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.45362 6H9.54638C9.63648 6.00033 9.72443 6.02384 9.79913 6.06757C9.87383 6.11129 9.93191 6.17326 9.96605 6.24565C10.0002 6.31803 10.0088 6.39758 9.99088 6.47423C9.97294 6.55088 9.92922 6.62119 9.86525 6.67626L7.32342 8.88302C7.28108 8.92009 7.23069 8.94951 7.17518 8.96959C7.11967 8.98966 7.06013 9 7 9C6.93987 9 6.88033 8.98966 6.82482 8.96959C6.76931 8.94951 6.71892 8.92009 6.67658 8.88302L4.13475 6.67626C4.07078 6.62119 4.02707 6.55088 4.00912 6.47423C3.99118 6.39758 3.99982 6.31803 4.03395 6.24565C4.06809 6.17326 4.12617 6.11129 4.20087 6.06757C4.27557 6.02384 4.36352 6.00033 4.45362 6Z"
                    fill="#6B707C"
                  />
                </svg>
              </td>
              <td>
                Əmrlər{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.45362 6H9.54638C9.63648 6.00033 9.72443 6.02384 9.79913 6.06757C9.87383 6.11129 9.93191 6.17326 9.96605 6.24565C10.0002 6.31803 10.0088 6.39758 9.99088 6.47423C9.97294 6.55088 9.92922 6.62119 9.86525 6.67626L7.32342 8.88302C7.28108 8.92009 7.23069 8.94951 7.17518 8.96959C7.11967 8.98966 7.06013 9 7 9C6.93987 9 6.88033 8.98966 6.82482 8.96959C6.76931 8.94951 6.71892 8.92009 6.67658 8.88302L4.13475 6.67626C4.07078 6.62119 4.02707 6.55088 4.00912 6.47423C3.99118 6.39758 3.99982 6.31803 4.03395 6.24565C4.06809 6.17326 4.12617 6.11129 4.20087 6.06757C4.27557 6.02384 4.36352 6.00033 4.45362 6Z"
                    fill="#6B707C"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="tr">
              <td>1234567</td>
              <td>
                <img
                  src="https://pps.whatsapp.net/v/t61.24694-24/319737485_134438059491165_6849356389344251761_n.jpg?ccb=11-4&oh=01_AdQquyw5k54HkkA3iSbf4yU-4ZGBX__5989bUqeK8U3mOQ&oe=641EF1D1"
                  alt=""
                />
                Hidili Didili
              </td>
              <td>3</td>
              <td>$ 1400</td>
              <td>
                <svg
                  width="97"
                  height="32"
                  viewBox="0 0 97 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="97" height="32" rx="16" fill="#ECFDF3" />
                  <path
                    d="M15.9648 19.8379C16.1745 19.8379 16.3818 19.8197 16.5869 19.7832C16.792 19.7422 16.9788 19.6943 17.1475 19.6396V20.8564C16.9697 20.9339 16.7396 21 16.457 21.0547C16.1745 21.1094 15.8805 21.1367 15.5752 21.1367C15.1468 21.1367 14.7617 21.0661 14.4199 20.9248C14.0781 20.779 13.807 20.5306 13.6064 20.1797C13.4059 19.8288 13.3057 19.3434 13.3057 18.7236V14.6562H12.2734V13.9385L13.3809 13.3711L13.9072 11.751H14.9189V13.4326H17.0859V14.6562H14.9189V18.7031C14.9189 19.0859 15.0146 19.3708 15.2061 19.5576C15.3975 19.7445 15.6504 19.8379 15.9648 19.8379ZM21.1533 13.2891C21.8962 13.2891 22.5479 13.4349 23.1084 13.7266C23.6735 14.0137 24.1133 14.4443 24.4277 15.0186C24.7422 15.5928 24.8994 16.306 24.8994 17.1582C24.8994 18.0059 24.7559 18.7259 24.4688 19.3184C24.1816 19.9108 23.7783 20.362 23.2588 20.6719C22.7438 20.9818 22.14 21.1367 21.4473 21.1367C20.7773 21.1367 20.1986 21 19.7109 20.7266C19.2233 20.4486 18.8496 20.0521 18.5898 19.5371C18.3301 19.0221 18.2002 18.4115 18.2002 17.7051V16.8506H23.2588C23.2406 16.1169 23.0423 15.5518 22.6641 15.1553C22.2858 14.7542 21.7572 14.5537 21.0781 14.5537C20.5996 14.5537 20.1667 14.5993 19.7793 14.6904C19.3965 14.7816 19 14.9229 18.5898 15.1143V13.8018C18.9681 13.6286 19.3532 13.501 19.7451 13.4189C20.137 13.3324 20.6064 13.2891 21.1533 13.2891ZM23.2246 17.999H19.7793C19.7839 18.3727 19.8454 18.7054 19.9639 18.9971C20.0824 19.2887 20.2646 19.5166 20.5107 19.6807C20.7568 19.8447 21.069 19.9268 21.4473 19.9268C21.9531 19.9268 22.3633 19.7627 22.6777 19.4346C22.9922 19.1064 23.1745 18.6279 23.2246 17.999ZM31.8379 18.8398C31.8379 19.3366 31.7171 19.7559 31.4756 20.0977C31.234 20.4395 30.8809 20.6992 30.416 20.877C29.9557 21.0501 29.3906 21.1367 28.7207 21.1367C28.1921 21.1367 27.7363 21.098 27.3535 21.0205C26.9753 20.9476 26.6175 20.8337 26.2803 20.6787V19.291C26.6403 19.4596 27.0436 19.6055 27.4902 19.7285C27.9414 19.8516 28.3675 19.9131 28.7686 19.9131C29.2972 19.9131 29.6777 19.8311 29.9102 19.667C30.1426 19.4984 30.2588 19.2751 30.2588 18.9971C30.2588 18.833 30.2109 18.6872 30.1152 18.5596C30.0241 18.4274 29.8509 18.293 29.5957 18.1562C29.3451 18.015 28.9759 17.8464 28.4883 17.6504C28.0098 17.459 27.6064 17.2676 27.2783 17.0762C26.9502 16.8848 26.7018 16.6546 26.5332 16.3857C26.3646 16.1123 26.2803 15.7637 26.2803 15.3398C26.2803 14.6699 26.5446 14.1618 27.0732 13.8154C27.6064 13.4645 28.3105 13.2891 29.1855 13.2891C29.6504 13.2891 30.0879 13.3369 30.498 13.4326C30.9128 13.5238 31.3184 13.6582 31.7148 13.8359L31.209 15.0459C30.8672 14.8955 30.5231 14.7725 30.1768 14.6768C29.835 14.5765 29.4863 14.5264 29.1309 14.5264C28.7161 14.5264 28.3994 14.5902 28.1807 14.7178C27.9665 14.8454 27.8594 15.0277 27.8594 15.2646C27.8594 15.4424 27.9118 15.5928 28.0166 15.7158C28.1214 15.8389 28.3014 15.9619 28.5566 16.085C28.8164 16.208 29.1764 16.3607 29.6367 16.543C30.0879 16.7161 30.4775 16.8984 30.8057 17.0898C31.1383 17.2767 31.3936 17.5068 31.5713 17.7803C31.749 18.0537 31.8379 18.4069 31.8379 18.8398ZM36.3906 19.8379C36.6003 19.8379 36.8076 19.8197 37.0127 19.7832C37.2178 19.7422 37.4046 19.6943 37.5732 19.6396V20.8564C37.3955 20.9339 37.1654 21 36.8828 21.0547C36.6003 21.1094 36.3063 21.1367 36.001 21.1367C35.5726 21.1367 35.1875 21.0661 34.8457 20.9248C34.5039 20.779 34.2327 20.5306 34.0322 20.1797C33.8317 19.8288 33.7314 19.3434 33.7314 18.7236V14.6562H32.6992V13.9385L33.8066 13.3711L34.333 11.751H35.3447V13.4326H37.5117V14.6562H35.3447V18.7031C35.3447 19.0859 35.4404 19.3708 35.6318 19.5576C35.8232 19.7445 36.0762 19.8379 36.3906 19.8379ZM40.7178 13.4326V21H39.1113V13.4326H40.7178ZM39.9248 10.5342C40.1709 10.5342 40.3828 10.6003 40.5605 10.7324C40.7428 10.8646 40.834 11.0924 40.834 11.416C40.834 11.735 40.7428 11.9629 40.5605 12.0996C40.3828 12.2318 40.1709 12.2979 39.9248 12.2979C39.6696 12.2979 39.4531 12.2318 39.2754 12.0996C39.1022 11.9629 39.0156 11.735 39.0156 11.416C39.0156 11.0924 39.1022 10.8646 39.2754 10.7324C39.4531 10.6003 39.6696 10.5342 39.9248 10.5342ZM47.8271 24.3564V21.1436C47.8271 20.9613 47.8317 20.763 47.8408 20.5488C47.8545 20.3346 47.875 20.1387 47.9023 19.9609H47.8203C47.6152 20.2936 47.3304 20.5739 46.9658 20.8018C46.6012 21.0251 46.125 21.1367 45.5371 21.1367C44.6484 21.1367 43.9329 20.8086 43.3906 20.1523C42.8483 19.4915 42.5771 18.5163 42.5771 17.2266C42.5771 16.3698 42.7025 15.6497 42.9531 15.0664C43.2038 14.4831 43.5547 14.041 44.0059 13.7402C44.4616 13.4395 44.9902 13.2891 45.5918 13.2891C46.1706 13.2891 46.64 13.403 47 13.6309C47.3646 13.8542 47.6562 14.1299 47.875 14.458H47.9297L48.1074 13.4326H49.4404V24.3564H47.8271ZM46.0156 19.8447C46.4714 19.8447 46.8359 19.7581 47.1094 19.585C47.3828 19.4118 47.5811 19.1497 47.7041 18.7988C47.8271 18.4434 47.8932 18.0036 47.9023 17.4795V17.2334C47.9023 16.3766 47.7633 15.7249 47.4854 15.2783C47.2074 14.8317 46.7129 14.6084 46.002 14.6084C45.4004 14.6084 44.9538 14.8431 44.6621 15.3125C44.3704 15.7773 44.2246 16.4245 44.2246 17.2539C44.2246 18.0924 44.3704 18.735 44.6621 19.1816C44.9583 19.6237 45.4095 19.8447 46.0156 19.8447ZM53.3574 21H51.7441V10.3633H53.3574V21ZM58.1221 13.2891C58.8649 13.2891 59.5166 13.4349 60.0771 13.7266C60.6423 14.0137 61.082 14.4443 61.3965 15.0186C61.7109 15.5928 61.8682 16.306 61.8682 17.1582C61.8682 18.0059 61.7246 18.7259 61.4375 19.3184C61.1504 19.9108 60.7471 20.362 60.2275 20.6719C59.7126 20.9818 59.1087 21.1367 58.416 21.1367C57.7461 21.1367 57.1673 21 56.6797 20.7266C56.1921 20.4486 55.8184 20.0521 55.5586 19.5371C55.2988 19.0221 55.1689 18.4115 55.1689 17.7051V16.8506H60.2275C60.2093 16.1169 60.0111 15.5518 59.6328 15.1553C59.2546 14.7542 58.7259 14.5537 58.0469 14.5537C57.5684 14.5537 57.1354 14.5993 56.748 14.6904C56.3652 14.7816 55.9688 14.9229 55.5586 15.1143V13.8018C55.9368 13.6286 56.3219 13.501 56.7139 13.4189C57.1058 13.3324 57.5752 13.2891 58.1221 13.2891ZM60.1934 17.999H56.748C56.7526 18.3727 56.8141 18.7054 56.9326 18.9971C57.0511 19.2887 57.2334 19.5166 57.4795 19.6807C57.7256 19.8447 58.0378 19.9268 58.416 19.9268C58.9219 19.9268 59.332 19.7627 59.6465 19.4346C59.9609 19.1064 60.1432 18.6279 60.1934 17.999ZM67.665 13.2891C68.5173 13.2891 69.1803 13.5101 69.6543 13.9521C70.1328 14.3896 70.3721 15.0938 70.3721 16.0645V21H68.7656V16.3652C68.7656 15.7773 68.6449 15.3376 68.4033 15.0459C68.1618 14.7497 67.7881 14.6016 67.2822 14.6016C66.5485 14.6016 66.0381 14.8271 65.751 15.2783C65.4684 15.7295 65.3271 16.3835 65.3271 17.2402V21H63.7207V13.4326H64.9717L65.1973 14.458H65.2861C65.4502 14.1937 65.653 13.9772 65.8945 13.8086C66.1406 13.6354 66.4141 13.5055 66.7148 13.4189C67.0202 13.3324 67.3369 13.2891 67.665 13.2891ZM74.2275 13.4326V21H72.6211V13.4326H74.2275ZM73.4346 10.5342C73.6807 10.5342 73.8926 10.6003 74.0703 10.7324C74.2526 10.8646 74.3438 11.0924 74.3438 11.416C74.3438 11.735 74.2526 11.9629 74.0703 12.0996C73.8926 12.2318 73.6807 12.2979 73.4346 12.2979C73.1794 12.2979 72.9629 12.2318 72.7852 12.0996C72.612 11.9629 72.5254 11.735 72.5254 11.416C72.5254 11.0924 72.612 10.8646 72.7852 10.7324C72.9629 10.6003 73.1794 10.5342 73.4346 10.5342ZM78.1377 10.3633V12.9268C78.1377 13.223 78.1286 13.5146 78.1104 13.8018C78.0967 14.0843 78.083 14.3053 78.0693 14.4648H78.1377C78.3428 14.1367 78.6276 13.861 78.9922 13.6377C79.3613 13.4098 79.833 13.2959 80.4072 13.2959C81.305 13.2959 82.0273 13.6263 82.5742 14.2871C83.1211 14.9434 83.3945 15.9163 83.3945 17.2061C83.3945 18.0628 83.2692 18.7829 83.0186 19.3662C82.7679 19.9495 82.4147 20.3916 81.959 20.6924C81.5078 20.9886 80.9769 21.1367 80.3662 21.1367C79.792 21.1367 79.3271 21.0319 78.9717 20.8223C78.6208 20.6081 78.3451 20.3597 78.1445 20.0771H78.0283L77.7344 21H76.5312V10.3633H78.1377ZM79.9834 14.6016C79.5277 14.6016 79.1654 14.6927 78.8965 14.875C78.6322 15.0573 78.4408 15.3307 78.3223 15.6953C78.2038 16.0553 78.1423 16.5133 78.1377 17.0693V17.2129C78.1377 18.056 78.2699 18.7008 78.5342 19.1475C78.8031 19.5941 79.2907 19.8174 79.9971 19.8174C80.5576 19.8174 80.9883 19.5918 81.2891 19.1406C81.5898 18.6849 81.7402 18.0332 81.7402 17.1855C81.7402 16.3288 81.5898 15.6839 81.2891 15.251C80.9928 14.818 80.5576 14.6016 79.9834 14.6016Z"
                    fill="#488C6E"
                  />
                </svg>
              </td>
              <td className="threedots">
                <svg
                className="threedotscursor"
                onClick={showhide}
                ref={refOne}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_0_835)">
                    <path
                      d="M5.54166 12.5416C5.54166 13.347 6.19458 13.9999 6.99999 13.9999C7.8054 13.9999 8.45831 13.347 8.45831 12.5416C8.45831 11.7362 7.8054 11.0833 6.99999 11.0833C6.19458 11.0833 5.54166 11.7362 5.54166 12.5416Z"
                      fill="#0C1230"
                    />
                    <path
                      d="M5.54166 7.00007C5.54166 7.80548 6.19458 8.4584 6.99999 8.4584C7.8054 8.4584 8.45831 7.80548 8.45831 7.00007C8.45831 6.19466 7.8054 5.54175 6.99999 5.54175C6.19458 5.54175 5.54166 6.19466 5.54166 7.00007Z"
                      fill="#0C1230"
                    />
                    <path
                      d="M5.54166 1.45832C5.54166 2.26373 6.19458 2.91665 6.99999 2.91665C7.8054 2.91665 8.45831 2.26373 8.45831 1.45832C8.45831 0.652914 7.8054 -2.85398e-08 6.99999 -6.37454e-08C6.19458 -9.8951e-08 5.54166 0.652914 5.54166 1.45832Z"
                      fill="#0C1230"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_835">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(14) rotate(90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div  className={`threemodal ${modaldots}`}>
                  <svg
                    className="rectangle"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="8.48535"
                      width="12"
                      height="12"
                      rx="2"
                      transform="rotate(-45 0 8.48535)"
                      fill="white"
                    />
                  </svg>
                  <div className="update txt">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_0_1227)">
                        <path
                          d="M19.0442 0.956506C18.4776 0.390837 17.7098 0.0731201 16.9092 0.0731201C16.1086 0.0731201 15.3407 0.390837 14.7742 0.956506L1.22083 14.5098C0.832707 14.8958 0.524966 15.3549 0.315412 15.8605C0.105859 16.3661 -0.00134691 16.9083 -2.77444e-06 17.4557V19.1665C-2.77444e-06 19.3875 0.0877946 19.5995 0.244075 19.7558C0.400355 19.912 0.612317 19.9998 0.833331 19.9998H2.54416C3.09147 20.0014 3.63364 19.8944 4.13929 19.6849C4.64495 19.4755 5.10404 19.1679 5.49 18.7798L19.0442 5.22567C19.6096 4.65917 19.9271 3.89148 19.9271 3.09109C19.9271 2.2907 19.6096 1.52301 19.0442 0.956506V0.956506ZM4.31166 17.6015C3.84167 18.0684 3.20663 18.3313 2.54416 18.3332H1.66666V17.4557C1.66582 17.1273 1.73013 16.8019 1.85586 16.4985C1.9816 16.1952 2.16626 15.9197 2.39916 15.6882L12.685 5.40234L14.6017 7.31901L4.31166 17.6015ZM17.865 4.04734L15.7767 6.13651L13.86 4.22401L15.9492 2.13484C16.075 2.00926 16.2244 1.9097 16.3887 1.84185C16.553 1.77399 16.7291 1.73916 16.9069 1.73936C17.0847 1.73955 17.2607 1.77476 17.4249 1.84297C17.589 1.91119 17.7382 2.01107 17.8637 2.13692C17.9893 2.26277 18.0889 2.41212 18.1567 2.57645C18.2246 2.74078 18.2594 2.91686 18.2592 3.09465C18.259 3.27243 18.2238 3.44844 18.1556 3.61262C18.0874 3.77679 17.9875 3.92593 17.8617 4.05151L17.865 4.04734Z"
                          fill="#5F646E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_1227">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    Düzəliş et
                  </div>
                  <hr />
                  <div className="delete txt">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_0_1233)">
                        <path
                          d="M17.5 3.33321H14.9167C14.7233 2.39272 14.2115 1.54767 13.4677 0.940476C12.7239 0.333286 11.7935 0.00109003 10.8333 -0.00012207L9.16667 -0.00012207C8.2065 0.00109003 7.2761 0.333286 6.5323 0.940476C5.78849 1.54767 5.27675 2.39272 5.08334 3.33321H2.50001C2.27899 3.33321 2.06703 3.42101 1.91075 3.57729C1.75447 3.73357 1.66667 3.94553 1.66667 4.16654C1.66667 4.38756 1.75447 4.59952 1.91075 4.7558C2.06703 4.91208 2.27899 4.99988 2.50001 4.99988H3.33334V15.8332C3.33466 16.9379 3.77407 17.9969 4.55519 18.778C5.3363 19.5591 6.39534 19.9986 7.50001 19.9999H12.5C13.6047 19.9986 14.6637 19.5591 15.4448 18.778C16.2259 17.9969 16.6653 16.9379 16.6667 15.8332V4.99988H17.5C17.721 4.99988 17.933 4.91208 18.0893 4.7558C18.2455 4.59952 18.3333 4.38756 18.3333 4.16654C18.3333 3.94553 18.2455 3.73357 18.0893 3.57729C17.933 3.42101 17.721 3.33321 17.5 3.33321V3.33321ZM9.16667 1.66654H10.8333C11.3502 1.66718 11.8543 1.82769 12.2763 2.12608C12.6984 2.42447 13.0179 2.84612 13.1908 3.33321H6.80917C6.98216 2.84612 7.30159 2.42447 7.72366 2.12608C8.14573 1.82769 8.64978 1.66718 9.16667 1.66654V1.66654ZM15 15.8332C15 16.4963 14.7366 17.1321 14.2678 17.601C13.7989 18.0698 13.163 18.3332 12.5 18.3332H7.50001C6.83696 18.3332 6.20108 18.0698 5.73224 17.601C5.2634 17.1321 5.00001 16.4963 5.00001 15.8332V4.99988H15V15.8332Z"
                          fill="#5F646E"
                        />
                        <path
                          d="M8.33333 14.9999C8.55435 14.9999 8.76631 14.9121 8.92259 14.7558C9.07887 14.5996 9.16667 14.3876 9.16667 14.1666V9.16659C9.16667 8.94557 9.07887 8.73361 8.92259 8.57733C8.76631 8.42105 8.55435 8.33325 8.33333 8.33325C8.11232 8.33325 7.90036 8.42105 7.74408 8.57733C7.5878 8.73361 7.5 8.94557 7.5 9.16659V14.1666C7.5 14.3876 7.5878 14.5996 7.74408 14.7558C7.90036 14.9121 8.11232 14.9999 8.33333 14.9999Z"
                          fill="#5F646E"
                        />
                        <path
                          d="M11.6667 14.9999C11.8877 14.9999 12.0996 14.9121 12.2559 14.7558C12.4122 14.5996 12.5 14.3876 12.5 14.1666V9.16659C12.5 8.94557 12.4122 8.73361 12.2559 8.57733C12.0996 8.42105 11.8877 8.33325 11.6667 8.33325C11.4456 8.33325 11.2337 8.42105 11.0774 8.57733C10.9211 8.73361 10.8333 8.94557 10.8333 9.16659V14.1666C10.8333 14.3876 10.9211 14.5996 11.0774 14.7558C11.2337 14.9121 11.4456 14.9999 11.6667 14.9999Z"
                          fill="#5F646E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_1233">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Sil
                  </div>
                  <hr />
                  <div className="change txt">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_0_1234)">
                        <path
                          d="M15.8333 4.99988V3.33321C15.8333 2.44916 15.4821 1.60131 14.857 0.976189C14.2319 0.351067 13.3841 -0.00012207 12.5 -0.00012207L7.5 -0.00012207C6.61594 -0.00012207 5.7681 0.351067 5.14298 0.976189C4.51786 1.60131 4.16667 2.44916 4.16667 3.33321V4.99988C3.062 5.0012 2.00296 5.44061 1.22185 6.22173C0.440735 7.00284 0.00132321 8.06188 0 9.16654L0 13.3332C0.00132321 14.4379 0.440735 15.4969 1.22185 16.278C2.00296 17.0591 3.062 17.4986 4.16667 17.4999C4.16667 18.1629 4.43006 18.7988 4.8989 19.2676C5.36774 19.7365 6.00363 19.9999 6.66667 19.9999H13.3333C13.9964 19.9999 14.6323 19.7365 15.1011 19.2676C15.5699 18.7988 15.8333 18.1629 15.8333 17.4999C16.938 17.4986 17.997 17.0591 18.7782 16.278C19.5593 15.4969 19.9987 14.4379 20 13.3332V9.16654C19.9987 8.06188 19.5593 7.00284 18.7782 6.22173C17.997 5.44061 16.938 5.0012 15.8333 4.99988ZM5.83333 3.33321C5.83333 2.89118 6.00893 2.46726 6.32149 2.1547C6.63405 1.84214 7.05797 1.66654 7.5 1.66654H12.5C12.942 1.66654 13.3659 1.84214 13.6785 2.1547C13.9911 2.46726 14.1667 2.89118 14.1667 3.33321V4.99988H5.83333V3.33321ZM14.1667 17.4999C14.1667 17.7209 14.0789 17.9329 13.9226 18.0891C13.7663 18.2454 13.5543 18.3332 13.3333 18.3332H6.66667C6.44565 18.3332 6.23369 18.2454 6.07741 18.0891C5.92113 17.9329 5.83333 17.7209 5.83333 17.4999V14.1665C5.83333 13.9455 5.92113 13.7336 6.07741 13.5773C6.23369 13.421 6.44565 13.3332 6.66667 13.3332H13.3333C13.5543 13.3332 13.7663 13.421 13.9226 13.5773C14.0789 13.7336 14.1667 13.9455 14.1667 14.1665V17.4999ZM18.3333 13.3332C18.3333 13.9963 18.0699 14.6321 17.6011 15.101C17.1323 15.5698 16.4964 15.8332 15.8333 15.8332V14.1665C15.8333 13.5035 15.5699 12.8676 15.1011 12.3988C14.6323 11.9299 13.9964 11.6665 13.3333 11.6665H6.66667C6.00363 11.6665 5.36774 11.9299 4.8989 12.3988C4.43006 12.8676 4.16667 13.5035 4.16667 14.1665V15.8332C3.50363 15.8332 2.86774 15.5698 2.3989 15.101C1.93006 14.6321 1.66667 13.9963 1.66667 13.3332V9.16654C1.66667 8.5035 1.93006 7.86762 2.3989 7.39878C2.86774 6.92994 3.50363 6.66654 4.16667 6.66654H15.8333C16.4964 6.66654 17.1323 6.92994 17.6011 7.39878C18.0699 7.86762 18.3333 8.5035 18.3333 9.16654V13.3332Z"
                          fill="#5F646E"
                        />
                        <path
                          d="M15 8.33325H13.3333C13.1123 8.33325 12.9004 8.42105 12.7441 8.57733C12.5878 8.73361 12.5 8.94557 12.5 9.16659C12.5 9.3876 12.5878 9.59956 12.7441 9.75584C12.9004 9.91212 13.1123 9.99992 13.3333 9.99992H15C15.221 9.99992 15.433 9.91212 15.5893 9.75584C15.7455 9.59956 15.8333 9.3876 15.8333 9.16659C15.8333 8.94557 15.7455 8.73361 15.5893 8.57733C15.433 8.42105 15.221 8.33325 15 8.33325Z"
                          fill="#5F646E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_1234">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Statusu dəyiş
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
