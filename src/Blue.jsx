// import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import hike from "../src/assesets/hikw.png"
import FadeIn from 'react-fade-in';
import {
  CButton,
} from "@coreui/react";
// import assimf from "../src/assesets/images.svg";
// import omkisun from "../src/assesets/images (1).svg";
// import delji from "../src/assesets/images (2).svg";

function Blue() {
  const [car, setcar] = useState(false);
  const [car2, setcar2] = useState(true);
  const [bike, setbike] = useState(true);
  const [bike2, setbike2] = useState(false);
  const [heart, setheart] = useState(true);
  const [heart2, setheart2] = useState(false);
  const [carfield, setcarfield] = useState(true);
  const [bikefield, setbikefield] = useState(false);
  const [heartfield, setheartfield] = useState(false);

  const cars = () => {
    setcar2(true);
    setcar(false);
    setbike(true);
    setbike2(false);
    setheart(true);
    setheart2(false);
    setcarfield(true);
    setbikefield(false);
    setheartfield(false);
  };

  const bikes = () => {
    setcar2(false);
    setcar(true);
    setbike(false);
    setbike2(true);
    setheart(true);
    setheart2(false);
    setcarfield(false);
    setbikefield(true);
    setheartfield(false);
  };

  const hearts = () => {
    setcar2(false);
    setcar(true);
    setbike(true);
    setbike2(false);
    setheart(false);
    setheart2(true);
    setcarfield(false);
    setbikefield(false);
    setheartfield(true);
  };

  return (
    <div>
      <div className="back">
        <div style={{ marginLeft: "240px" }}>
          <img
            src="https://image.pitchbook.com/CpJCqGKJ2YK69PfPl3gnTBL9Qn01616074965757_200x200"
            alt="acko"
            width="100"
          />
        </div>

        <div
          className="tooltip"
          style={{ marginTop: "30px", marginLeft: "5px" }}
        >
          Products
          <div className="tooltiptext">
            <div style={{ marginLeft: "-1043px", marginTop: "30px" }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9797 21.288H19.3998"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M21.8635 23.7481C23.2239 23.7481 24.3267 22.6453 24.3267 21.2849C24.3267 19.9246 23.2239 18.8218 21.8635 18.8218C20.5032 18.8218 19.4004 19.9246 19.4004 21.2849C19.4004 22.6453 20.5032 23.7481 21.8635 23.7481Z"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M9.51711 23.7012C10.8775 23.7012 11.9803 22.5984 11.9803 21.2381C11.9803 19.8777 10.8775 18.7749 9.51711 18.7749C8.15675 18.7749 7.05396 19.8777 7.05396 21.2381C7.05396 22.5984 8.15675 23.7012 9.51711 23.7012Z"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M6.62564 21.2849H5.66179C5.33065 21.2838 5.0113 21.1619 4.76349 20.9423C4.51568 20.7226 4.35641 20.4202 4.31548 20.0916L4.00948 17.1236C3.97013 16.7818 4.05737 16.4373 4.25469 16.1554C4.45202 15.8736 4.74578 15.6737 5.08044 15.5937L5.98308 15.3795C6.39787 15.2749 6.7615 15.0253 7.00811 14.6757L8.85931 12.0596C9.16027 11.6289 9.56091 11.2773 10.0271 11.0349C10.4933 10.7925 11.0112 10.6664 11.5366 10.6674H16.1264C16.7498 10.6656 17.367 10.7909 17.9404 11.0355C18.5138 11.2801 19.0314 11.6389 19.4616 12.0902L22.5214 15.3336L26.4073 16.0374C26.6702 16.0855 26.9204 16.1874 27.1421 16.3366C27.3639 16.4859 27.5525 16.6793 27.6961 16.9047C27.8397 17.1302 27.9352 17.3828 27.9767 17.6469C28.0182 17.9109 28.0048 18.1807 27.9372 18.4393L27.5701 19.9692C27.4711 20.356 27.2457 20.6986 26.9297 20.9425C26.6137 21.1865 26.2252 21.3177 25.826 21.3155H24.2043"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M22.5377 15.3504L6.42773 15.228"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
              </svg>
            </div>
            <div
              className="car"
              style={{ marginLeft: "-880px", marginTop: "-30px" }}
            >
              Car & taxi
            </div>
            <div
              className="car"
              style={{ marginRight: "900px", marginTop: "30px" }}
            >
              Comprehensive Car Insurance
            </div>
            <div
              className="car"
              style={{ marginRight: "900px", marginTop: "30px" }}
            >
              Third Party Car Insurance
            </div>
            <div
              className="car"
              style={{ marginRight: "900px", marginTop: "30px" }}
            >
              Commercial Car Insurance
            </div>

            <div>
              <div style={{ marginRight: "400px", marginTop: "-176px" }}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.52476 23.9519C9.47143 23.9519 11.0495 22.3738 11.0495 20.4271C11.0495 18.4804 9.47143 16.9023 7.52476 16.9023C5.57809 16.9023 4 18.4804 4 20.4271C4 22.3738 5.57809 23.9519 7.52476 23.9519Z"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M24.4752 23.9519C26.4219 23.9519 28 22.3738 28 20.4271C28 18.4804 26.4219 16.9023 24.4752 16.9023C22.5285 16.9023 20.9504 18.4804 20.9504 20.4271C20.9504 22.3738 22.5285 23.9519 24.4752 23.9519Z"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M7.17969 13.0514C9.58378 13.0182 11.9155 13.8734 13.7281 15.453C16.0155 13.9087 18.6651 12.9858 21.4169 12.7749"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M16.25 9.33514H18.0815C18.4716 9.32737 18.8563 9.42627 19.1943 9.62114C19.5323 9.81602 19.8107 10.0994 19.9994 10.4409L23.5414 16.9203"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M11.1016 21.1703H14.3844C14.8878 21.1799 15.3839 21.0492 15.8172 20.7929C16.2505 20.5365 16.6039 20.1646 16.8379 19.7189C17.4022 18.5844 18.1884 17.5747 19.15 16.7497C20.1116 15.9246 21.229 15.3009 22.4361 14.9155"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M24.4753 11.0117V13.9663"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <div
                className="car"
                style={{ marginRight: "300px", marginTop: "-30px" }}
              >
                Bike
              </div>
              <div
                className="car, hovcar"
                style={{ marginRight: "280px", marginTop: "30px" }}
              >
                Comprehensive Bike Insurance
              </div>
              <div
                className="car"
                style={{ marginRight: "280px", marginTop: "30px" }}
              >
                Third Party Bike Insurance
              </div>
            </div>

            <div>
              <div style={{ marginTop: "-125px", marginLeft: "250px" }}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3448 6.75253C20.3693 6.58182 19.368 6.66826 18.4335 7.00376C17.4991 7.33927 16.6619 7.91296 15.9997 8.67166C15.3374 7.91296 14.5003 7.33927 13.5658 7.00376C12.6314 6.66826 11.63 6.58182 10.6546 6.75253C9.09718 6.97548 7.68099 7.80395 6.6954 9.06859C5.70981 10.3332 5.2292 11.9386 5.3518 13.5568C5.3518 21.1242 15.1335 25.7694 15.556 25.9656L15.9997 26.1837L16.4433 25.9656C16.8447 25.7694 26.6475 21.1242 26.6475 13.5568C26.7701 11.9386 26.2896 10.3332 25.304 9.06859C24.3184 7.80395 22.9022 6.97548 21.3448 6.75253Z"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M11.9998 14.668L15.9998 18.668L24.9997 8.64978"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
              </div>
              <div
                className="car"
                style={{ marginLeft: "350px", marginTop: "-33px" }}
              >
                Health
              </div>

              <div
                className="car"
                style={{ marginLeft: "340px", marginTop: "30px" }}
              >
                Health Insurance
              </div>
              <div
                className="car"
                style={{ marginLeft: "340px", marginTop: "30px" }}
              >
                Arogya Sanjeevani
              </div>
              <div
                className="car"
                style={{ marginLeft: "340px", marginTop: "30px" }}
              >
                Group Medical Cover
              </div>
            </div>
            <div>
              <div style={{ marginLeft: "844px", marginTop: "-172px" }}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.96 6.34847L25.5725 16.9609L21.3427 21.1908C19.9273 22.6061 18.0077 23.4013 16.0061 23.4013C14.0045 23.4013 12.0849 22.6061 10.6696 21.1908V21.1908C9.25425 19.7755 8.45911 17.8558 8.45911 15.8543C8.45911 13.8527 9.25423 11.933 10.6696 10.5177L14.8994 6.28784L14.96 6.34847Z"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M16.9541 8.82951L20.4489 5.33472"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M23.1716 15.0483L26.6664 11.5535"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M10.6663 21.3347L6.66626 25.3347"
                    stroke="#434F5A"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M13.1534 16.8339L15.2304 16.3639L14.9727 20.3208L18.5203 15.5604L16.3978 15.9242L16.7465 12.0279L13.1534 16.8339Z"
                    fill="#434F5A"
                  ></path>
                </svg>
              </div>

              <div
                className="car"
                style={{ marginLeft: "980px", marginTop: "-32px" }}
              >
                Electronics
              </div>

              <div
                className="car"
                style={{ marginLeft: "960px", marginTop: "30px" }}
              >
                Mobile Protection
              </div>
              <div
                className="car"
                style={{ marginLeft: "960px", marginTop: "30px" }}
              >
                Arogya Sanjeevani
              </div>
              <div
                className="car"
                style={{ marginLeft: "960px", marginTop: "30px" }}
              >
                Appliance Protection
              </div>
            </div>
          </div>
        </div>

        <div
          className="navbar tooltip-1"
          style={{ marginTop: "30px", marginLeft: "480px" }}
        >
          Resources
          <div className="tooltiptext-1">
            <div style={{ marginRight: "145px", marginTop: "20px" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6725 6H5.32847C5.14733 6 5.00049 6.14684 5.00049 6.32798V18.672C5.00049 18.8532 5.14733 19 5.32847 19H17.6725C17.8536 19 18.0005 18.8532 18.0005 18.672V6.32798C18.0005 6.14684 17.8536 6 17.6725 6Z"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M18.0003 13.0176H14.1638C13.9531 13.5591 13.5888 14.0273 13.1156 14.3645C12.6424 14.7018 12.0809 14.8934 11.5003 14.9158C10.9196 14.8934 10.3582 14.7018 9.88498 14.3645C9.41176 14.0273 9.04732 13.5591 8.83662 13.0176H5.00024"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
              </svg>
            </div>
            <div style={{ marginTop: "-28px" }}>All Resources</div>

            <div style={{ marginRight: "145px", marginTop: "20px" }}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8205 12.1708V20.5829H5.41675V5.25165H12.5253"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.32495 13.0613H15.712"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M8.32495 16.4933H15.712"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M8.32495 9.30566H12.4029"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M17.9292 3.63545L18.4082 5.08368C18.442 5.1994 18.5124 5.30106 18.6088 5.37338C18.7053 5.44571 18.8225 5.48491 18.943 5.48491H20.4694C20.5917 5.48231 20.7116 5.51926 20.8112 5.59018C20.9108 5.6611 20.9849 5.76215 21.0225 5.87852C21.06 5.99489 21.059 6.1202 21.0196 6.23596C20.9802 6.35171 20.9045 6.45171 20.8038 6.52103L19.5782 7.41244C19.4793 7.4841 19.4055 7.58527 19.3675 7.70132C19.3295 7.81738 19.3291 7.94248 19.3664 8.05876L19.8344 9.50726C19.873 9.62223 19.8738 9.7465 19.8367 9.86197C19.7996 9.97745 19.7266 10.078 19.6282 10.149C19.5299 10.2199 19.4114 10.2576 19.2901 10.2564C19.1688 10.2552 19.0511 10.2151 18.9542 10.1422L17.7286 9.25075C17.6291 9.18074 17.5105 9.1433 17.3888 9.1433C17.2672 9.1433 17.1484 9.18074 17.0489 9.25075L15.8233 10.1422C15.7252 10.2118 15.6079 10.2492 15.4875 10.2491C15.3672 10.2489 15.2499 10.2114 15.1519 10.1416C15.0539 10.0718 14.9801 9.97321 14.9406 9.85953C14.9012 9.74584 14.8982 9.62275 14.9319 9.50726L15.4111 8.05876C15.4484 7.94248 15.448 7.81738 15.41 7.70132C15.372 7.58527 15.2982 7.4841 15.1993 7.41244L13.9626 6.52103C13.8682 6.4474 13.7989 6.34651 13.7643 6.23188C13.7297 6.11724 13.7313 5.99458 13.7692 5.88097C13.8071 5.76736 13.8792 5.66818 13.9757 5.59725C14.0721 5.52633 14.1883 5.48715 14.3081 5.48491H15.8233C15.9449 5.48379 16.0631 5.44455 16.1611 5.37257C16.259 5.30058 16.3319 5.19937 16.3693 5.08368L16.8372 3.63545C16.8772 3.52269 16.9513 3.4251 17.0491 3.35609C17.1468 3.28707 17.2636 3.25 17.3832 3.25C17.5029 3.25 17.6195 3.28707 17.7173 3.35609C17.815 3.4251 17.8891 3.52269 17.9292 3.63545Z"
                  fill="#434F5A"
                ></path>
              </svg>
            </div>
            <div style={{ marginTop: "-28px", marginRight: "37px" }}>
              Guides
            </div>

            <div style={{ marginRight: "145px", marginTop: "20px" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2364 5H5.99976V19H18.2364V5Z"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.64893 12.1315H15.4005"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M8.64893 15.2604H15.4005"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M11.4548 7.55139H8.64893V10.3572H11.4548V7.55139Z"
                  fill="#434F5A"
                ></path>
                <path
                  d="M12.478 8.70374H15.4008"
                  stroke="#434F5A"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                ></path>
              </svg>
            </div>
            <div style={{ marginTop: "-28px", marginRight: "28px" }}>
              Articles
            </div>
          </div>
        </div>
        {/* head 1 */}
      </div>

      <div className="inpyt" style={{ marginTop: "-865px" }}>
        <div className="logon loginyt ">
          <svg
            width="13"
            height="18"
            viewBox="0 0 13 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.281 18.2345H3.59689C2.76756 18.2345 2.09692 17.5607 2.09692 16.7275V6.30727C2.09692 5.47406 2.76756 4.80029 3.59689 4.80029H11.281C12.1103 4.80029 12.781 5.47406 12.781 6.30727V16.7275C12.781 17.5607 12.1103 18.2345 11.281 18.2345Z"
              fill="#16C2F8"
            ></path>
            <path
              d="M9.65309 16.3985H1.96896C1.13963 16.3985 0.468994 15.7248 0.468994 14.8916V4.47133C0.468994 3.63812 1.13963 2.96436 1.96896 2.96436H9.65309C10.4824 2.96436 11.1531 3.63812 11.1531 4.47133V14.8967C11.1582 15.7248 10.4824 16.3985 9.65309 16.3985Z"
              fill="#70D4F9"
            ></path>
            <path
              d="M7.95865 13.9401L7.08324 14.1407C7.05253 14.1458 7.02181 14.1201 7.02693 14.0841L7.22658 13.2046C7.22658 13.1943 7.2317 13.1892 7.23682 13.184L8.93644 11.4765C9.04907 11.3633 9.22824 11.3633 9.33575 11.4765L9.67363 11.8159C9.78625 11.9291 9.78625 12.1091 9.67363 12.2171L7.97401 13.9247C7.97401 13.9349 7.96889 13.9401 7.95865 13.9401Z"
              fill="#C9EEFD"
            ></path>
            <path
              d="M9.38177 12.5168L8.64331 11.7749L8.48404 11.9349L9.22249 12.6768L9.38177 12.5168Z"
              fill="#70D4F9"
            ></path>
            <path
              d="M5.81365 9.66092C7.10857 9.66092 8.15831 8.60628 8.15831 7.30532C8.15831 6.00435 7.10857 4.94971 5.81365 4.94971C4.51873 4.94971 3.46899 6.00435 3.46899 7.30532C3.46899 8.60628 4.51873 9.66092 5.81365 9.66092Z"
              fill="#C9EEFD"
            ></path>
            <path
              d="M5.57285 8.22582L4.65137 7.29489L4.95853 6.9863L5.57285 7.60863L6.71958 6.45654L7.02674 6.77028L5.57285 8.22582Z"
              fill="#70D4F9"
            ></path>
            <path
              d="M6.43812 11.8417H2.53206C2.29145 11.8417 2.0918 11.6462 2.0918 11.3994C2.0918 11.1576 2.28633 10.957 2.53206 10.957H6.43812C6.67873 10.957 6.87838 11.1525 6.87838 11.3994C6.87326 11.6411 6.67873 11.8417 6.43812 11.8417Z"
              fill="#C9EEFD"
            ></path>
            <path
              d="M5.6139 14.017H2.53206C2.29145 14.017 2.0918 13.8215 2.0918 13.5746C2.0918 13.3329 2.28633 13.1323 2.53206 13.1323H5.6139C5.85451 13.1323 6.05417 13.3278 6.05417 13.5746C6.04905 13.8215 5.85451 14.017 5.6139 14.017Z"
              fill="#C9EEFD"
            ></path>
            <path
              d="M9.1975 5.89592C8.64461 5.89592 8.19411 5.44332 8.19411 4.88784V2.09506H8.90058V4.8827C8.90058 5.04728 9.03368 5.18101 9.1975 5.18101C9.36132 5.18101 9.49442 5.04728 9.49442 4.8827V2.03848C9.49442 1.51387 9.06952 1.08698 8.54735 1.08698C8.02517 1.08698 7.60027 1.51387 7.60027 2.03848V2.9797H6.8938V2.03848C6.8938 1.11784 7.6361 0.37207 8.55246 0.37207C9.46883 0.37207 10.2111 1.11784 10.2111 2.03848V4.88784C10.2009 5.44332 9.75039 5.89592 9.1975 5.89592Z"
              fill="#F75276"
            ></path>
          </svg>
          <div style={{ marginLeft: "15px", marginTop: "-18px" }}>
            {" "}
            Claim,edit,renew & more
          </div>
        </div>

        <div
          className="login-card-btn tooltip-2"
          style={{ marginLeft: "200px", cursor: "pointer" }}
        >
          login v
          <div className="tooltiptext-2">
            <div style={{ marginRight: "150px", marginTop: "20px" }}>
              <img
                src="https://myaccount.ackoassets.com/static/images/header-icons/manage-policy-v2.svg"
                alt="Manage policy"
              />
            </div>
            <div style={{ marginTop: "-28px" }}>Manage policy</div>

            <div style={{ marginRight: "150px", marginTop: "20px" }}>
              <img
                src="https://myaccount.ackoassets.com/static/images/header-icons/raise-a-claim-v2.svg"
                alt="Raise a claim"
              />
            </div>
            <div style={{ marginTop: "-28px" }}>Raise a claim</div>

            <div style={{ marginRight: "150px", marginTop: "20px" }}>
              <img
                src="https://myaccount.ackoassets.com/static/images/header-icons/renew-policy-v2.svg"
                alt="Renew policy"
              />{" "}
            </div>
            <div style={{ marginTop: "-28px" }}>Renew policy</div>
          </div>
        </div>
        <div className="loginyt-1"> Help</div>
      </div>
      <div className="FPpoI">
        <div className="iAJTWs" style={{ marginTop: "-1250px" }}>
          <h1 className="hPLxUL">Insurance made easy</h1>
          <p className="cGYGGy">Zero commission. Zero paperwork</p>
        </div>
      </div>

      <div className="eNxajz" style={{ marginTop: "-700px" }}>
        <div className="gzIops">
          <img
            src="https://acko-home-prod.ackoassets.com/next_assets/5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026/_next/static/images/homepage-banner-illustration-1-5d2a4d352884a025c5e728efb0a4c6ce.svg"
            alt="van"
          />
        </div>
      </div>

      <div style={{ marginTop: "-700px" }} className="gzIops">
        <img
          src="https://acko-home-prod.ackoassets.com/next_assets/5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026/_next/static/images/homepage-banner-illustration-2-99577afed0f02e7ee1411f1e8aede6c9.svg"
          alt="van"
        />
      </div>

      <div style={{ marginTop: "-400px" }}>
        {car && (
          <div
            className="cFRTzp"
            style={{ marginTop: "00px", marginLeft: "550px" }}
          >
            <div className="eIrHNz">
              <div className="kKEnLi" onClick={cars}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9Ii0xNi45MzUiLz48cGF0aCBkPSJNMzIuMDg2IDE3LjE0N2MtMi4wNDMtLjcwNC0yLjc1My0uODQ5LTUuMzUzLTEuMjg1LS41MDMtLjA4OS0uOTgzLS4yNzktMS4zMTEtLjY3bC00LjA5Ny00LjAyMmMtLjUyNC0uNTE0LTEuMjAyLS44MzgtMS45MzQtLjkxNmEzOS43OCAzOS43OCAwIDAgMC04LjU1NS0uMDQ1Yy0uOTcyLjEwMS0xLjg1Ny42MTQtMi40MjUgMS40MTlsLTIuMjQgMy4xODRhLjc2Ljc2IDAgMCAxLS40NDguMzEzbC0xLjM1NS4zNDZjLS44NDEuMjIzLTEuNDA5IDEuMDE3LTEuMzY2IDEuODg4bC4yMjkgNC4zNDZjLjA1NS45ODMuODQxIDEuNzQzIDEuODAzIDEuNzQzaC42ODh2LS4wMjJjMC0yLjUxNCAxLjk4OC00LjU0OCA0LjQ0Ny00LjU0OHM0LjQ0NyAyLjAzNCA0LjQ0NyA0LjU0OHYuMDIyaDguMDQxdi0uMDIyYzAtMi41MTQgMS45ODgtNC41NDggNC40NDctNC41NDhzNC40NDcgMi4wMzQgNC40NDcgNC41NDh2LjAyMmguNTc5Yy41NzkgMCAxLjA4Mi0uNDM2IDEuMTY5LTEuMDE3bC4zMTctMi44NDljLjEwOS0xLjA3My0uNTI0LTIuMTAxLTEuNTI5LTIuNDM2ek0xMi45NDUgMTUuMjdsLTMuNzgtLjA1NmMtLjMzOSAwLS41NzktLjM1Ny0uNDQ4LS42ODJsLjc2NS0xLjk3OGMuMTk3LS41MDMuNjQ1LS44NDkgMS4xNjktLjg5NGwyLjI5NC0uMTM0djMuNzQzem04Ljk4MS4xMjNsLTcuMzQyLS4xMDF2LTMuODFsNC4zNTkuMTc5YTEuMzEgMS4zMSAwIDAgMSAuODQxLjQyNWwyLjQwNCAyLjcwNGMuMjA4LjIzNS4wNDQuNjAzLS4yNjIuNjAzeiIvPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0yNy4xMDUgMjAuMTYzYy0xLjc3IDAtMy4yMDEgMS40NjQtMy4yMDEgMy4yNzRzMS40MzEgMy4yNzQgMy4yMDEgMy4yNzQgMy4yMDEtMS40NjQgMy4yMDEtMy4yNzQtMS40MzEtMy4yNzQtMy4yMDEtMy4yNzR6Ii8+PC9kZWZzPjwvc3ZnPg=="
                  alt="car icon"
                  className="jsx-2639780352 hover-opacity"
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {bike && (
          <div
            className="cFRTzp"
            style={{ marginLeft: "705px", marginTop: "-60px" }}
          >
            <div className="eIrHNz">
              <div className="gDVWJU" onClick={bikes}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg=="
                  alt="bike icon"
                  className="jsx-2639780352 hover-opacity"
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {heart && (
          <div
            className="cFRTzp"
            style={{ marginLeft: "855px", marginTop: "-60px" }}
          >
            <div className="eIrHNz">
              <div className="gDVWJU" onClick={hearts}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0ibm9uZSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTguNTU0IDIxLjcyMmMtLjI1NS4yNTUtLjUxLjI1NS0uNzY1LjI1NXMtLjUxLS4xMjgtLjc2NS0uMjU1bC0zLjgyNi0zLjY5OGMtLjM4My0uMzgzLS4zODMtMS4xNDggMC0xLjUzczEuMTQ4LS4zODMgMS41MyAwbDMuMDYxIDIuOTMzIDEwLjA3NC05LjQzN2MtLjg5My0uODkzLTIuMTY4LTEuNjU4LTMuODI2LTEuOTEzLTMuODI2LS42MzgtNi4yNDkgMi45MzMtNi4yNDkgMi45MzNzLTIuMjk1LTMuNDQzLTYuMTIxLTIuODA2Yy01LjEwMS43NjUtNi43NTkgNS44NjYtNC45NzMgMTAuNTg1IDEuNzg1IDQuODQ2IDguMTYyIDguNTQ0IDEwLjMzIDkuNjkyLjUxLjI1NSAxLjAyLjI1NSAxLjUzIDAgMi4xNjgtMS4xNDggOC41NDQtNC43MTggMTAuNDU3LTkuODE5Ljg5My0yLjQyMy44OTMtNC44NDYgMC02Ljg4NmwtMTAuNDU3IDkuOTQ3eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
                  alt="health icon"
                  className="jsx-2639780352 hover-opacity"
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {car2 && (
          <div
            className="cFRTzp-1"
            style={{ marginTop: "-60px", marginLeft: "550px" }}
          >
            <div className="eIrHNz">
              <div className="kKEnLi">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9Im5vbmUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgZmlsbD0iIzdjNDdlMSI+PHVzZSB4bGluazpocmVmPSIjQiIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9Ii0xNi45MzUiLz48cGF0aCBkPSJNMzIuMDg2IDE3LjE0N2MtMi4wNDMtLjcwNC0yLjc1My0uODQ5LTUuMzUzLTEuMjg1LS41MDMtLjA4OS0uOTgzLS4yNzktMS4zMTEtLjY3bC00LjA5Ny00LjAyMmMtLjUyNC0uNTE0LTEuMjAyLS44MzgtMS45MzQtLjkxNmEzOS43OCAzOS43OCAwIDAgMC04LjU1NS0uMDQ1Yy0uOTcyLjEwMS0xLjg1Ny42MTQtMi40MjUgMS40MTlsLTIuMjQgMy4xODRhLjc2Ljc2IDAgMCAxLS40NDguMzEzbC0xLjM1NS4zNDZjLS44NDEuMjIzLTEuNDA5IDEuMDE3LTEuMzY2IDEuODg4bC4yMjkgNC4zNDZjLjA1NS45ODMuODQxIDEuNzQzIDEuODAzIDEuNzQzaC42ODh2LS4wMjJjMC0yLjUxNCAxLjk4OC00LjU0OCA0LjQ0Ny00LjU0OHM0LjQ0NyAyLjAzNCA0LjQ0NyA0LjU0OHYuMDIyaDguMDQxdi0uMDIyYzAtMi41MTQgMS45ODgtNC41NDggNC40NDctNC41NDhzNC40NDcgMi4wMzQgNC40NDcgNC41NDh2LjAyMmguNTc5Yy41NzkgMCAxLjA4Mi0uNDM2IDEuMTY5LTEuMDE3bC4zMTctMi44NDljLjEwOS0xLjA3My0uNTI0LTIuMTAxLTEuNTI5LTIuNDM2ek0xMi45NDUgMTUuMjdsLTMuNzgtLjA1NmMtLjMzOSAwLS41NzktLjM1Ny0uNDQ4LS42ODJsLjc2NS0xLjk3OGMuMTk3LS41MDMuNjQ1LS44NDkgMS4xNjktLjg5NGwyLjI5NC0uMTM0djMuNzQzem04Ljk4MS4xMjNsLTcuMzQyLS4xMDF2LTMuODFsNC4zNTkuMTc5YTEuMzEgMS4zMSAwIDAgMSAuODQxLjQyNWwyLjQwNCAyLjcwNGMuMjA4LjIzNS4wNDQuNjAzLS4yNjIuNjAzeiIvPjwvZz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik0yNy4xMDUgMjAuMTYzYy0xLjc3IDAtMy4yMDEgMS40NjQtMy4yMDEgMy4yNzRzMS40MzEgMy4yNzQgMy4yMDEgMy4yNzQgMy4yMDEtMS40NjQgMy4yMDEtMy4yNzQtMS40MzEtMy4yNzQtMy4yMDEtMy4yNzR6Ii8+PC9kZWZzPjwvc3ZnPg=="
                  alt="car icon"
                  className="ditign "
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {bike2 && (
          <div
            className="cFRTzp-1"
            style={{ marginTop: "-60px", marginLeft: "700px" }}
          >
            <div className="eIrHNz">
              <div className="kKEnLi">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0iIzdjNDdlMSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNOC4wMjYgMTcuMjIyQTUuMDMgNS4wMyAwIDAgMCAzIDIyLjI0OGE1LjAzIDUuMDMgMCAwIDAgNS4wMjYgNS4wMjZjMi43NSAwIDUuMDI2LTIuMjc2IDUuMDI2LTUuMDI2YTUuMDMgNS4wMyAwIDAgMC01LjAyNi01LjAyNnptMCA3LjY4MWEyLjY1NSAyLjY1NSAwIDEgMSAwLTUuMzEgMi42NTUgMi42NTUgMCAxIDEgMCA1LjMxem0yMS42MjItNi45N2wuMzMyLS41NjlhNS44MyA1LjgzIDAgMCAwLTIuOTQtLjgwNmMtLjI4NSAwLS42MTYuMDQ3LS45MDEuMDk1bC0zLjI3Mi02LjYzOC0zLjg0MS0uOTQ4Yy0uMzc5LS4xOS0uODU0LjA0Ny0uOTk2LjQ3NHMuMDQ3Ljg1My40MjcgMS4wNDNsMi43MDMgMS4yMzMuNDI3LjgwNmMtNC45MzEuMzMyLTYuODc1IDIuOTQtOS4xNTEgMS44OTctMS41NjUtLjg1NC00LjAzLTEuMjMzLTUuNTQ4LTEuNDIzLS42NjQtLjA5NS0xLjI4LjQyNy0xLjI4IDEuMTM4YTEuMTYgMS4xNiAwIDAgMCAxLjA0MyAxLjIzM2MxLjQyMi4xNDIgMy40NjEuNDc0IDQuNjQ3IDEuMTM4IDAgMCAzLjMxOSAxLjYxMiAzLjM2NiA2LjExN2EuNzUuNzUgMCAwIDAgLjc1OS43NTloMy4wMzVhLjc3Ljc3IDAgMCAwIC43MTEtLjUyMmMuMzc5LTEuMjggMS40Ny00LjU1MiAzLjg4OC03LjMwMmwuOTAxIDEuNzU0Yy0xLjU2NSAxLjA0My0yLjYwOCAyLjc5Ny0yLjYwOCA0Ljc4OWguNjY0YzAgMi43NSAyLjI3NiA1LjAyNiA1LjAyNiA1LjAyNnM1LjA3My0yLjIyOCA1LjA3My00Ljk3OWE0Ljk4IDQuOTggMCAwIDAtMi40NjYtNC4zMTV6bS0yLjU2IDYuOTdhMi42NTUgMi42NTUgMCAxIDEgMC01LjMxMSAyLjY1NSAyLjY1NSAwIDEgMSAwIDUuMzExem0tMS40NzEtMTEuMjg1Yy4wOTUuMjM3LjMzMi40MjcuNjE2LjQyN2wxLjEzOC4wNDdhLjUyLjUyIDAgMCAwIC41MjItLjY2NGwtLjY2NC0yLjU2YS41MS41MSAwIDAgMC0uODA2LS4zMzJsLTEuMTM4LjkwMWMtLjIzNy4xOS0uMzMyLjUyMi0uMjM3LjgwNmwuNTY5IDEuMzc1eiIvPjwvc3ZnPg=="
                  alt="car icon"
                  className="ditign "
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {heart2 && (
          <div
            className="cFRTzp-1"
            style={{ marginTop: "-60px", marginLeft: "860px" }}
          >
            <div className="eIrHNz">
              <div className="kKEnLi">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0ibm9uZSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTguNTU0IDIxLjcyMmMtLjI1NS4yNTUtLjUxLjI1NS0uNzY1LjI1NXMtLjUxLS4xMjgtLjc2NS0uMjU1bC0zLjgyNi0zLjY5OGMtLjM4My0uMzgzLS4zODMtMS4xNDggMC0xLjUzczEuMTQ4LS4zODMgMS41MyAwbDMuMDYxIDIuOTMzIDEwLjA3NC05LjQzN2MtLjg5My0uODkzLTIuMTY4LTEuNjU4LTMuODI2LTEuOTEzLTMuODI2LS42MzgtNi4yNDkgMi45MzMtNi4yNDkgMi45MzNzLTIuMjk1LTMuNDQzLTYuMTIxLTIuODA2Yy01LjEwMS43NjUtNi43NTkgNS44NjYtNC45NzMgMTAuNTg1IDEuNzg1IDQuODQ2IDguMTYyIDguNTQ0IDEwLjMzIDkuNjkyLjUxLjI1NSAxLjAyLjI1NSAxLjUzIDAgMi4xNjgtMS4xNDggOC41NDQtNC43MTggMTAuNDU3LTkuODE5Ljg5My0yLjQyMy44OTMtNC44NDYgMC02Ljg4NmwtMTAuNDU3IDkuOTQ3eiIgZmlsbD0iIzdjNDdlMSIvPjwvc3ZnPg=="
                  alt="car icon"
                  className="ditign "
                  style={{ width: "36px", height: "36px" }}
                />
              </div>
            </div>
          </div>
        )}

        {carfield && (
          <div>
                <FadeIn>
                <div className="inpot-form">
              <div class="bg dark">
                <div class="input-cont dark">
                  <input type="text" name="name" autocomplete="off" required />
                  <label for="name" class="label-name">
                    <span class="content-name">Enter your Bike Number</span>
                  </label>
                </div>
              </div>
              <CButton className="insure-you" color="success">
                Insure You &#8594;
              </CButton>
            </div>

            <div className="cGYGGy" style={{marginTop:"10px", }}>
                or
                </div>
                <div className={'cFRTzp'} style={{marginLeft:"690px", marginTop:"-9px", width:"85px"}}></div>
                <div className={'cFRTzp'} style={{marginLeft:"806px", marginTop:"-3px", width:"85px"}}></div>
         
         <div className='jzTvIn' style={{margin:"10em", marginLeft:"35em", marginTop:"2em", width:"480px", height:"100px"}}>
             <div className="fRJFwS">
                 <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDEgNDAiIHdpZHRoPSI0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjAuNzg3NiA0MGMxMS4wNDU3IDAgMjAtOC45NTQzIDIwLTIwcy04Ljk1NDMtMjAtMjAtMjAtMjAuMDAwMDAyIDguOTU0My0yMC4wMDAwMDIgMjAgOC45NTQzMDIgMjAgMjAuMDAwMDAyIDIweiIgZmlsbD0iIzcwM2JkOSIvPjxnIGZpbGw9IiMxNmMyZjgiPjxwYXRoIGQ9Im0yNy40ODEyIDIyLjcxMDRjLS42MDI1IDAtMS4xODAzLjIzOTQtMS42MDYzLjY2NTRzLS42NjUzIDEuMDAzOC0uNjY1MyAxLjYwNjJjLjAwMDIuNjAyNS4yMzk2IDEuMTgwMS42NjU2IDEuNjA2MS40MjU5LjQyNiAxLjAwMzYuNjY1NCAxLjYwNi42NjU2LjYwMjUgMCAxLjE4MDMtLjIzOTQgMS42MDYzLS42NjU0cy42NjUzLTEuMDAzOC42NjUzLTEuNjA2M2MuMDAwMS0uMjk4My0uMDU4Ni0uNTkzNy0uMTcyNy0uODY5NC0uMTE0MS0uMjc1Ni0uMjgxNC0uNTI2MS0uNDkyNC0uNzM3LS4yMTA5LS4yMTEtLjQ2MTQtLjM3ODMtLjczNzEtLjQ5MjQtLjI3NTYtLjExNDItLjU3MS0uMTcyOS0uODY5NC0uMTcyOHoiLz48cGF0aCBkPSJtMTQuNTgxIDIyLjcyOTJjLS41OTY5IDAtMS4xNjk0LjIzNzItMS41OTE1LjY1OTMtLjQyMi40MjItLjY1OTIuOTk0NS0uNjU5MiAxLjU5MTRzLjIzNzIgMS4xNjk0LjY1OTIgMS41OTE1Yy40MjIxLjQyMi45OTQ2LjY1OTIgMS41OTE1LjY1OTJzMS4xNjk0LS4yMzcyIDEuNTkxNS0uNjU5MmMuNDIyLS40MjIxLjY1OTItLjk5NDYuNjU5Mi0xLjU5MTUgMC0uMjk1Ni0uMDU4My0uNTg4Mi0uMTcxNC0uODYxM3MtLjI3ODgtLjUyMTItLjQ4NzgtLjczMDFjLS4yMDktLjIwOS0uNDU3MS0uMzc0OC0uNzMwMi0uNDg3OS0uMjczMS0uMTEzMi0uNTY1Ny0uMTcxNC0uODYxMy0uMTcxNHoiLz48cGF0aCBkPSJtMzEuMjc0OSAyMC4yOTg2Yy0xLjU1MjItLjUyMTUtMi4wOTU1LS42MzI1LTQuMDc5OS0uOTU2OS0uMzgzNC0uMDYyOS0uNzQ5LS4yMDcyLTEuMDAyLS41MDE0bC0zLjEyMTQtMi45OTQ5Yy0uNDAxLS4zODM5LS45MTc5LS42MjQzLTEuNDY5OS0uNjgzNy0yLjE2NDctLjIzOTItNC4zNDg1LS4yNDk0LTYuNTE1My0uMDMwMy0uMzY2NS4wMzQyLS43MjEzLjE0NjUtMS4wNDA4LjMyOTQtLjMxOTQuMTgyOC0uNTk1OS40MzItLjgxMDkuNzMwN2wtMS42OTg5IDIuMzczM2MtLjA4MTEuMTE1NS0uMjAwOS4xOTgtLjMzNzYuMjMyOGwtMS4wNC4yNjI0Yy0uMzA4NjguMDc3OS0uNTgwNzIuMjYwOC0uNzY5NTcuNTE3MS0uMTg4ODUuMjU2NC0uMjgyNzUuNTcwNC0uMjY1NjguODg4NGwuMTczODIgMy4yMzg2Yy4wMTg4Ny4zNTEuMTcxNTYuNjgxNC40MjY2Ni45MjMycy41OTMxNy4zNzY2Ljk0NDY3LjM3NjdoLjUyNjJjMC0uMDA2MiAwLS4wMTI0IDAtLjAxODYgMC0uNDQ0OS4wODc3LS44ODU0LjI1NzktMS4yOTY0cy40MTk4LS43ODQ0LjczNDMtMS4wOTljLjMxNDYtLjMxNDYuNjg4MS0uNTY0MSAxLjA5OTEtLjczNDMuNDExLS4xNzAzLjg1MTUtLjI1NzkgMS4yOTY0LS4yNTc5LjQ0NDggMCAuODg1My4wODc2IDEuMjk2Mi4yNTc5LjQxMS4xNzAyLjc4NDQuNDE5OCAxLjA5ODkuNzM0My4zMTQ1LjMxNDYuNTY0LjY4ODEuNzM0MSAxLjA5OTEuMTcwMi40MTEuMjU3Ny44NTE1LjI1NzYgMS4yOTYzdi4wMTg2aDYuMTMxMWMwLS4wMDYyIDAtLjAxMjQgMC0uMDE4Ni0uMDAwMS0uNDQ0OC4wODc1LS44ODUzLjI1NzYtMS4yOTYzLjE3MDItLjQxMS40MTk2LS43ODQ1LjczNDEtMS4wOTkxLjMxNDUtLjMxNDUuNjg4LS41NjQxIDEuMDk4OS0uNzM0My40MTEtLjE3MDMuODUxNS0uMjU3OSAxLjI5NjMtLjI1NzkuODk4NCAwIDEuNzYwMS4zNTY5IDIuMzk1NC45OTIycy45OTIyIDEuNDk3Ljk5MjIgMi4zOTU0di4wMTg2aC40NDAxYy4yMTQ1IDAgLjQyMjEtLjA3NjMuNTg1NS0uMjE1NHMuMjcxOS0uMzMxOC4zMDYyLS41NDM2bC4yMzc1LTIuMTIzNGMuMDQzOC0uMzkxOC0uMDQ4NS0uNzg2OC0uMjYxMy0xLjExODdzLS41MzMyLS41ODA1LS45MDc1LS43MDQzem0tMTMuODg2Ni0xLjM5Ny0zLjU3LS4wMzk1Yy0uMDYwNS0uMDAxLS4xMTk5LS4wMTY2LS4xNzMxLS4wNDU1LS4wNTMxLS4wMjg5LS4wOTg1LS4wNzAzLS4xMzIyLS4xMjA1LS4wMzM3LS4wNTAzLS4wNTQ3LS4xMDgtLjA2MTMtLjE2ODEtLjAwNjYtLjA2MDIuMDAxNS0uMTIxLjAyMzYtLjE3NzRsLjU4MDUtMS40NzQ2Yy4wNzE1LS4xODMxLjE5MjctLjM0MjcuMzUtLjQ2MDcuMTU3Mi0uMTE4MS4zNDQzLS4xODk5LjU0MDEtLjIwNzUuNTQ5NS0uMDQ3MyAxLjgzNjMtLjA3NzYgMi40NDQ3LS4xMDI0em02LjE0ODIuMDkzOS00LjkwMTgtLjA3NzZ2LTIuODM0MmMuODc3OS0uMDExNCAxLjc1NTYuMDMzMiAyLjYyNzguMTMzNC4yNDUyLjAyMzMuNDcyOS4xMzcuNjM4OC4zMTlsMS44MzQ2IDIuMDE3OWMuMDM0MS4wMzgyLjA1NjQuMDg1NS4wNjQyLjEzNjEuMDA3Ny4wNTA3LjAwMDYuMTAyNS0uMDIwNS4xNDkxLS4wMjExLjA0NjctLjA1NTMuMDg2Mi0uMDk4NS4xMTM4LS4wNDMxLjAyNzctLjA5MzQuMDQyMi0uMTQ0Ni4wNDE4eiIvPjwvZz48ZyBmaWxsPSIjZmZlNDZlIj48cGF0aCBkPSJtMjEuNTgzNCAxMS4yNDA4Yy0uMTY5Ni0uMjA0Ni0uMzk1MS0uMzU1NC0uNjQ5LS40MzM4LS4yNTM5LS4wNzg1LS41MjUyLS4wODEyLS43ODA2LS4wMDc4LS45MjEyLjI0NTItMS42OTI3IDEuMjk4NC0yLjA3NjggMi43ODM4LS4zODgxLTEuNDg1NC0xLjE1NTYtMi41Mzg2LTIuMDc2OC0yLjc4MzgtLjI1NTUtLjA3MjktLjUyNjYtLjA2OTktLjc4MDQuMDA4NXMtLjQ3OTMuMjI4OS0uNjQ5Mi40MzMxYy0uMzI2LjM3NzItLjQwMi45MDU3LS4yMDMzIDEuNDE0OC4zODQxLjk4NTYgMS42Mjk4IDEuNjkwMyAzLjMzMjUgMS44ODQzbC4xNzc3LjAyMDJoLjQwOThsLjE2NjEtLjAxODZjMS43MDI3LS4xOTQgMi45NDkxLS44OTg3IDMuMzMzMy0xLjg4NDQuMTk4Ny0uNTEwNi4xMjI2LTEuMDM5MS0uMjAzMy0xLjQxNjN6bS02LjIwODggMS4xNDYzYy0uMDM3Mi0uMDk2My0uMDc3Ni0uMjc4Ny4wNDA0LS40MTkxLjAzNi0uMDQ3NC4wODIzLS4wODYuMTM1NC0uMTEyOXMuMTExNi0uMDQxNC4xNzExLS4wNDIzYy4wNDI4LjAwMDQuMDg1My4wMDY0LjEyNjYuMDE3OC4zNzk1LjEwMDkuODQyLjYxMTYgMS4xMTk4IDEuNTQwNS0uOTYzOS0uMjA2NC0xLjQ1OS0uNjQxOC0xLjU5MzMtLjk4NHptNS40MDU1IDBjLS4xMzQzLjM0NDYtLjYyOTQuNzc2MS0xLjU5MzMuOTg3Mi4yNzg2LS45MzE0Ljc0MTItMS40Mzk3IDEuMTE5OS0xLjU0MDYuMDQxNS0uMDExMy4wODQyLS4wMTczLjEyNzMtLjAxNzguMDYwMS4wMDAzLjExOTQuMDE0NS4xNzMzLjA0MTQuMDUzOC4wMjY5LjEwMDcuMDY1OC4xMzcxLjExMzguMTE3Mi4xMzczLjA3MjkuMzE5Ny4wMzQ5LjQxNnoiLz48cGF0aCBkPSJtMTguODQ3OSAxNC45NzQ2aC0xLjQ1OTh2MTAuMDA3N2gxLjQ1OTh6Ii8+PC9nPjwvc3ZnPg==" alt="car icon" className="sc-lkqHmb bRTQVF"></img>
                 <div className="sc-bdVaJa jCnDwj" style={{marginTop:"em"}}><p className="sc-iwsKbI sc-daURTG detjqg">Looking to insure your new car?</p><p className="sc-iwsKbI sc-bXGyLb bqVLHP">Save big with our zero commission insurance</p></div>
                 <button className="sc-fYiAbW jBqRDn">Get a quote</button>
             </div>
             </div>
              
             

             </FadeIn>
             {/* <div className="bBvcLJ kilhike">
                  <div className="gKMByB">
                  <img src="https://acko-home-prod.ackoassets.com/next_assets/5ce5234a43ed2b5d41ff9ba5bf62a3e996e5d026/_next/static/images/arshad-warsi-banner-58d51f52b11fa83c7786a80bd1a02169.png" alt="Arshad Warsi" className="sc-kXeGPI inBnsE" width="108px"/>

                  <div className="inlike">
                  <div className="inlike-1">
                    <img src={assimf} alt="pkoinh" className="pkoinh" />
                  </div>
                  </div>
                  </div>
                <div className="cxyJPj">
                    <div className="iauIad">
                      <p className="CSEAz">
                      Official Insurance Partner
                      </p>
                    </div>
                    <div className="hrLZta">
                      <div className="hakiu"
                      >
                        <div className="kolmjy">
                       <img src={omkisun} alt="pkoinh" className="pkoinh-1" width="50" />
                       
                        <div className="jHuQxV">
                        </div>
                       
                      
                              <img src={delji} alt="delji" className="pkoinh-1 " width="50" />
                              </div>

                      </div>
                    </div>
                </div>
              </div> */}

             <div className="kilhike">
                  <img src={hike} alt="hike" width="480" />
              </div>

              <div className="jshtgK" style={{paddingLeft:"560px"}}>
                <div className="kuUxhF">
                  <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIxIiB2aWV3Qm94PSIwIDAgMjEgMjEiIHdpZHRoPSIyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOC43NzczOSAxNS41NDU5Yy0uNDU5ODYtLjYzODctMS4yNTE4My0uOTcwOC0yLjAxODI1LS44NDMtLjYzODY5LjEwMjItMS4yMjYyOC0uMDc2Ny0xLjY2MDU5LS40MzQzbC0xLjczNzIyIDIuNTAzNiAyLjc4NDY3LS4xNzg4Ljc5MTk3IDIuNjU2OSAyLjI3MzcyLTMuMjcwMWMtLjE1MzI4LS4xMjc3LS4zMDY1Ny0uMjU1NC0uNDM0My0uNDM0M3oiIGZpbGw9IiMxNmMyZjgiLz48cGF0aCBkPSJtMTQuMTE2IDE0LjcwMjRjLS43OTItLjE1MzMtMS41NTg0LjE3ODgtMi4wMTgzLjg0My0uMTAyMS4xNTMzLS4yMDQzLjI4MS0uMzMyMS4zODMybDIuMzI0OCAzLjMyMTIuNzkyLTIuNjU2OSAyLjc4NDcuMTc4OC0xLjc4ODMtMi41ODAzYy0uNDU5OS40MDg4LTEuMDk4Ni42Mzg3LTEuNzYyOC41MTF6IiBmaWxsPSIjMTZjMmY4Ii8+PHBhdGggZD0ibTExLjk0MzggMi41MTYxOWMuNDA4OC41ODc1OSAxLjEyNDEuODY4NjEgMS44MTM5Ljc0MDg4IDEuMjUxOC0uMjI5OTMgMi4zMjQ4Ljg2ODYxIDIuMDk0OSAyLjA5NDg5LS4xMjc4LjY4OTc4LjE3ODggMS40MDUxMS43NDA4IDEuODEzODYgMS4wNDc1LjcxNTMzIDEuMDQ3NSAyLjI0ODE4IDAgMi45NjM0OC0uNTg3Ni40MDg4LS44Njg2IDEuMTI0MS0uNzQwOCAxLjgxMzkuMjI5OSAxLjI1MTgtLjg2ODcgMi4zMjQ4LTIuMDk0OSAyLjA5NDktLjY4OTgtLjEyNzgtMS40MDUxLjE3ODgtMS44MTM5Ljc0MDktLjcxNTMgMS4wNDc0LTIuMjQ4MTcgMS4wNDc0LTIuOTYzNSAwLS40MDg3Ni0uNTg3Ni0xLjEyNDA5LS44Njg3LTEuODEzODctLjc0MDktMS4yNTE4My4yNTU1LTIuMzUwMzctLjgxNzUtMi4xMjA0NC0yLjA2OTQuMTI3NzQtLjY4OTctLjE3ODgzLTEuNDA1MS0uNzQwODctMS44MTM4LTEuMDQ3NDUtLjcxNTM1LTEuMDQ3NDUtMi4yNDgyIDAtMi45NjM1My41ODc1OS0uNDA4NzYuODY4NjEtMS4xMjQwOS43NDA4Ny0xLjgxMzg3LS4yMjk5My0xLjI1MTgyLjg2ODYxLTIuMzI0ODEgMi4wOTQ4OS0yLjA5NDg5LjY4OTc4LjEyNzc0IDEuNDA1MTEtLjE3ODgzIDEuODEzODctLjc0MDg3LjcxNTMzLTEuMDQ3NDUgMi4yNDgxNS0xLjA0NzQ1IDIuOTg5MDUtLjAyNTU1eiIgZmlsbD0iI2QxYzBmZiIvPjxwYXRoIGQ9Im0xMC41MTM3IDEyLjcxYzIuMjg1NyAwIDQuMTM4Ny0xLjg1MyA0LjEzODctNC4xMzg3IDAtMi4yODU3My0xLjg1My00LjEzODY4LTQuMTM4Ny00LjEzODY4LTIuMjg1NzUgMC00LjEzODcgMS44NTI5NS00LjEzODcgNC4xMzg2OCAwIDIuMjg1NyAxLjg1Mjk1IDQuMTM4NyA0LjEzODcgNC4xMzg3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im05LjkyNjg5IDEwLjMwODRjLS4xMjc3MyAwLS4yNTU0Ny0uMDUxMS0uMzU3NjYtLjE1MzNsLTEuMjAwNzMtMS4yMDA3NGMtLjE3ODgzLS4xNzg4My0uMTc4ODMtLjUxMDk1IDAtLjY4OTc4cy41MTA5NS0uMTc4ODMuNjg5NzggMGwuODY4NjEuODY4NjEgMS45MTYxMS0xLjkxNjA2Yy4xNzg4LS4xNzg4My41MTA5LS4xNzg4My42ODk3IDAgLjE3ODkuMTc4ODMuMTc4OS41MTA5NSAwIC42ODk3OGwtMi4yNzM3IDIuMjQ4MTljLS4wNzY2LjEwMjItLjIwNDQuMTUzMy0uMzMyMTEuMTUzM3oiIGZpbGw9IiM5MzY0ZWQiLz48L3N2Zz4=" alt="Licensed by IRDAI" className="sc-exAgwC dpzhlW"/>
                  <p className="uqGaU">Licensed by IRDAI</p>
                </div>
                  <div className="fpSdKe"></div>

                  <div className="crbTvO">
                  <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjQgMTYiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgyM3YxNmgtMjN6Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Im0xNC45NTMxIDE2LjAwMDJoLTYuMjM0MzV2LTcuNDAxMzVjMC0xLjc0MTUgMS40MjE4NS0zLjE1NjQ3IDMuMTcxODUtMy4xNTY0N3MzLjE3MTkgMS40MTQ5NyAzLjE3MTkgMy4xNTY0N3Y3LjQwMTM1eiIgZmlsbD0iI2Y3NTI3NiIvPjxwYXRoIGQ9Im03Ljg0Mzc1IDE1Ljk5ODFoLTYuMzQzNzV2LTUuMjI0NWMwLTEuNzQxNDUgMS40MjE4OC0zLjE1NjQxIDMuMTcxODgtMy4xNTY0MXMzLjE3MTg3IDEuNDE0OTYgMy4xNzE4NyAzLjE1NjQxeiIgZmlsbD0iIzE2YzJmOCIvPjxwYXRoIGQ9Im0yMi41IDE2LjAwMDFoLTYuMzQzOHYtNC4wMjcyYzAtMS43NDE1IDEuNDIxOS0zLjE1NjQ5IDMuMTcxOS0zLjE1NjQ5czMuMTcxOSAxLjQxNDk5IDMuMTcxOSAzLjE1NjQ5eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xOS4zMjgxIDcuMTgzOTljMS4wODczIDAgMS45Njg4LS44NzcxNSAxLjk2ODgtMS45NTkxOHMtLjg4MTUtMS45NTkxOS0xLjk2ODgtMS45NTkxOS0xLjk2ODcuODc3MTYtMS45Njg3IDEuOTU5MTkuODgxNCAxLjk1OTE4IDEuOTY4NyAxLjk1OTE4eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xMS44OTA2IDMuOTE4MzdjMS4wODczIDAgMS45Njg4LS44NzcxNiAxLjk2ODgtMS45NTkxOSAwLTEuMDgyMDI0LS44ODE1LTEuOTU5MTgtMS45Njg4LTEuOTU5MThzLTEuOTY4NzIuODc3MTU2LTEuOTY4NzIgMS45NTkxOGMwIDEuMDgyMDMuODgxNDIgMS45NTkxOSAxLjk2ODcyIDEuOTU5MTl6IiBmaWxsPSIjZjc1Mjc2Ii8+PHBhdGggZD0ibTQuNjcxODggNi4zMTI5YzEuMDg3MzEgMCAxLjk2ODc0LS44NzcxNiAxLjk2ODc0LTEuOTU5MTkgMC0xLjA4MjAyLS44ODE0My0xLjk1OTE4LTEuOTY4NzQtMS45NTkxOC0xLjA4NzMyIDAtMS45Njg3Ni44NzcxNi0xLjk2ODc2IDEuOTU5MTggMCAxLjA4MjAzLjg4MTQ0IDEuOTU5MTkgMS45Njg3NiAxLjk1OTE5eiIgZmlsbD0iIzE2YzJmOCIvPjwvZz48L3N2Zz4=" alt="6.2 Crore users" className="sc-exAgwC dpzhlW"/>
                  <p className="uqGaU">6.2 Crore users</p>
                  </div>
                  <div className="fpSdKe"></div>

                  <div className="gAmjmp">
                    <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMzMgMTQiIHdpZHRoPSIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgzMS42MzM2djE0aC0zMS42MzM2eiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJtMy40OTIxOSA4LjQ0MTQxLS40MjczIDEuODE5ODloLTEuODE2OGMtLjQyNzQ3OS0uOTYxODYtLjc0ODA5LTIuMDMwNTYtLjc0ODA5LTMuMzEzMDEgMC0xLjE3NTU3LjMyMDYxMS0yLjI0NDI3Ljc0ODA5LTMuMjA2MWwxLjYwMzA2LjMyMDYxLjYzMzIzIDEuNDg0MDhjLS4xMDY4OC40Mjc0OC0uMjA1NzUuOTczOTMtLjIwNTc1IDEuNDAxNDEgMCAuNTM0MzYuMDM3NzggMS4wMTY1NS4yMTM1NiAxLjQ5MzEyeiIgZmlsbD0iI2ZiYmIwMCIvPjxwYXRoIGQ9Im0xNC4wNjI5IDUuNzgxMjVjLjEwNjkuNDI3NDguMTA2OS44NTQ5Ni4xMDY5IDEuMjgyNDQgMCAuNTM0MzUgMCAuOTYxODMtLjEwNjkgMS40OTYxOS0uMzIwNiAxLjYwMzAyLTEuMDkzIDIuOTc4MzItMi4zNzU0IDMuOTQwMTJsLTIuMTEzMTUtLjA5MjgtLjMyMDYxLTEuNzA5OWMuODU0OTYtLjQyNzUgMS40OTYxNi0xLjE3NTU5IDEuODE2NzYtMi4xMzc0MmgtMy43NDA0MnYtMi43Nzg2M2gzLjc0MDQyeiIgZmlsbD0iIzUxOGVmOCIvPjxwYXRoIGQ9Im0xMS44MjgyIDEyLjM5NTZjLTEuMTc1Ni45NjE4LTIuNjcxNzYgMS40OTYyLTQuMzgxNjggMS40OTYyLTIuNjcxNzYgMC01LjAyMjktMS40OTYyLTYuMTk4NDctMy42MzM2bDIuMjQ0MjctMS44MTY3OWMuNjQxMjIgMS42MDMwOSAyLjEzNzQxIDIuNjcxNzkgMy44NDczMyAyLjY3MTc5Ljc0ODA5IDAgMS40OTYxOC0uMjEzOCAyLjEzNzQtLjUzNDR6IiBmaWxsPSIjMjhiNDQ2Ii8+PHBhdGggZD0ibTExLjkzNTEgMS42MDMwNS0yLjI0NDMxIDEuODE2OGMtLjY0MTIyLS4zMjA2MS0xLjM4OTMxLS42NDEyMi0yLjI0NDI3LS42NDEyMi0xLjgxNjc5IDAtMy40MTk4NSAxLjE3NTU3LTMuOTU0MiAyLjc3ODYybC0yLjI0NDI3LTEuODE2NzljMS4xNzU1Ny0yLjI0NDI4IDMuNTI2NzEtMy43NDA0NiA2LjE5ODQ3LTMuNzQwNDYgMS43MDk5MiAwIDMuMzEyOTguNjQxMjIxIDQuNDg4NTggMS42MDMwNXoiIGZpbGw9IiNmMTQzMzYiLz48cGF0aCBkPSJtMzIuMTMyOCA2Ljk0NjU2YzAtMy44NDczMi0zLjIwNjEtNi45NDY1Ni03LjA1MzQtNi45NDY1Ni0zLjg0NzQgMC02Ljk0NjYgMy4wOTkyNC02Ljk0NjYgNi45NDY1NiAwIDMuNTI2NzQgMi41NjQ5IDYuNDEyMjQgNS44Nzc5IDYuOTQ2NTR2LTQuOTE2aC0xLjgxNjh2LTIuMDMwNTRoMS44MTY4di0xLjQ5NjE4YzAtMS43MDk5MiAxLjA2ODctMi42NzE3NSAyLjY3MTctMi42NzE3NS43NDgxIDAgMS42MDMxLjEwNjg3IDEuNjAzMS4xMDY4N3YxLjcwOTkyaC0uODU1Yy0uODU0OSAwLTEuMTc1Ni41MzQzNS0xLjE3NTYgMS4wNjg3djEuMjgyNDRoMS45MjM3bC0uMzIwNiAyLjAzMDU0aC0xLjYwMzF2NC45MTZjMy4zMTMtLjUzNDMgNS44Nzc5LTMuNDE5OCA1Ljg3NzktNi45NDY1NHoiIGZpbGw9IiMxODc3ZjIiLz48cGF0aCBkPSJtMjcuODU5NCA4Ljk3NTgyLjMyMDYtMi4wMzA1NGgtMS45MTc3di0xLjI4MjQ0YzAtLjUzNDM1LjMyMDYtMS4wNjg3IDEuMTc1Ni0xLjA2ODdoLjg2MnYtMS43MDk5M3MtLjg2NzktLjEwNjg3LTEuNzIyOS0uMTA2ODdjLTEuNDk2MiAwLTIuNTY0OS45NjE4NC0yLjU2NDkgMi42NzE3NnYxLjQ5NjE4aC0xLjgxNjh2Mi4wMzA1NGgxLjgxNjh2NC45MTU5OGMuMzM5MS4wNDgyLjc0ODEuMTA2OSAxLjA2ODcuMTA2OXMuODE2LS4wMjM5IDEuMTc1Mi0uMTA2OXYtNC45MTU5OHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+" alt="95.5 % 5 star rating on Google and Facebook" className="sc-exAgwC dpzhlW"/>
                      <p className="uqGaU">95% 5 
                      <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjExIiB2aWV3Qm94PSIwIDAgMTIgMTEiIHdpZHRoPSIxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNS40NDE1Mi45MjcwNDljLjI5OTM1LS45MjEzMTA3NCAxLjYwMjc2LS45MjEzMDkwNyAxLjkwMjExLjAwMDAwMmwuNjIwNTUgMS45MDk4MjljLjEzMzg3LjQxMjAyLjUxNzgzLjY5MDk4Ljk1MTA1LjY5MDk4aDIuMDA4MDdjLjk2ODggMCAxLjM3MTUgMS4yMzk2Mi41ODc4IDEuODA5MDJsLTEuNjI0NTcgMS4xODAzNGMtLjM1MDQ4LjI1NDY1LS40OTcxNC43MDYwMS0uMzYzMjcgMS4xMTgwM2wuNjIwNTQgMS45MDk4M2MuMjk5NC45MjEzMi0uNzU1MTMgMS42ODc0Mi0xLjUzODg0IDEuMTE4MDJsLTEuNjI0Ni0xLjE4MDMyYy0uMzUwNDgtLjI1NDY1LS44MjUwOC0uMjU0NjQtMS4xNzU1NyAwbC0xLjYyNDYgMS4xODAzMmMtLjc4MzcxLjU2OTQtMS44MzgxOS0uMTk2Ny0xLjUzODg0LTEuMTE4MDJsLjYyMDU0LTEuOTA5ODJjLjEzMzg4LS40MTIwMy0uMDEyNzgtLjg2MzQtLjM2MzI3LTEuMTE4MDRsLTEuNjI0Ni0xLjE4MDM0Yy0uNzgzNzExLS41Njk0LS4zODA5MzQtMS44MDkwMi41ODc3OS0xLjgwOTAyaDIuMDA4MTFjLjQzMzIzIDAgLjgxNzE5LS4yNzg5Ni45NTEwNi0uNjkwOTh6IiBmaWxsPSIjZmZhNTJmIi8+PC9zdmc+" className="sc-exAgwC dpzhlW" alt="star"/>
                      Ratings
                      </p> </div>
              </div>,

          </div>
        )}

        {bikefield && (
          <div>
              <FadeIn>
              <div className="inpot-form">
              <div class="bg dark">
                <div class="input-cont dark">
                  <input type="text" name="name" autocomplete="off" required />
                  <label for="name" class="label-name">
                    <span class="content-name">Enter your Bike Number</span>
                  </label>
                </div>
              </div>
              <CButton className="insure-you" color="success">
                Insure You &#8594;
              </CButton>
            </div>
            <div className="cGYGGy" style={{marginTop:"10px"}}>
                or
                </div>
                <div className={'cFRTzp'} style={{marginLeft:"690px", marginTop:"-9px", width:"85px"}}></div>
                <div className={'cFRTzp'} style={{marginLeft:"806px", marginTop:"-3px", width:"85px"}}></div>
             
                <div className='jzTvIn' style={{margin:"10em", marginLeft:"35em", marginTop:"2em", width:"480px", height:"100px"}}>
             <div className="fRJFwS">
                 <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDEgNDAiIHdpZHRoPSI0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjAuNzg3NiA0MGMxMS4wNDU3IDAgMjAtOC45NTQzIDIwLTIwcy04Ljk1NDMtMjAtMjAtMjAtMjAuMDAwMDAyIDguOTU0My0yMC4wMDAwMDIgMjAgOC45NTQzMDIgMjAgMjAuMDAwMDAyIDIweiIgZmlsbD0iIzcwM2JkOSIvPjxnIGZpbGw9IiMxNmMyZjgiPjxwYXRoIGQ9Im0yNy40ODEyIDIyLjcxMDRjLS42MDI1IDAtMS4xODAzLjIzOTQtMS42MDYzLjY2NTRzLS42NjUzIDEuMDAzOC0uNjY1MyAxLjYwNjJjLjAwMDIuNjAyNS4yMzk2IDEuMTgwMS42NjU2IDEuNjA2MS40MjU5LjQyNiAxLjAwMzYuNjY1NCAxLjYwNi42NjU2LjYwMjUgMCAxLjE4MDMtLjIzOTQgMS42MDYzLS42NjU0cy42NjUzLTEuMDAzOC42NjUzLTEuNjA2M2MuMDAwMS0uMjk4My0uMDU4Ni0uNTkzNy0uMTcyNy0uODY5NC0uMTE0MS0uMjc1Ni0uMjgxNC0uNTI2MS0uNDkyNC0uNzM3LS4yMTA5LS4yMTEtLjQ2MTQtLjM3ODMtLjczNzEtLjQ5MjQtLjI3NTYtLjExNDItLjU3MS0uMTcyOS0uODY5NC0uMTcyOHoiLz48cGF0aCBkPSJtMTQuNTgxIDIyLjcyOTJjLS41OTY5IDAtMS4xNjk0LjIzNzItMS41OTE1LjY1OTMtLjQyMi40MjItLjY1OTIuOTk0NS0uNjU5MiAxLjU5MTRzLjIzNzIgMS4xNjk0LjY1OTIgMS41OTE1Yy40MjIxLjQyMi45OTQ2LjY1OTIgMS41OTE1LjY1OTJzMS4xNjk0LS4yMzcyIDEuNTkxNS0uNjU5MmMuNDIyLS40MjIxLjY1OTItLjk5NDYuNjU5Mi0xLjU5MTUgMC0uMjk1Ni0uMDU4My0uNTg4Mi0uMTcxNC0uODYxM3MtLjI3ODgtLjUyMTItLjQ4NzgtLjczMDFjLS4yMDktLjIwOS0uNDU3MS0uMzc0OC0uNzMwMi0uNDg3OS0uMjczMS0uMTEzMi0uNTY1Ny0uMTcxNC0uODYxMy0uMTcxNHoiLz48cGF0aCBkPSJtMzEuMjc0OSAyMC4yOTg2Yy0xLjU1MjItLjUyMTUtMi4wOTU1LS42MzI1LTQuMDc5OS0uOTU2OS0uMzgzNC0uMDYyOS0uNzQ5LS4yMDcyLTEuMDAyLS41MDE0bC0zLjEyMTQtMi45OTQ5Yy0uNDAxLS4zODM5LS45MTc5LS42MjQzLTEuNDY5OS0uNjgzNy0yLjE2NDctLjIzOTItNC4zNDg1LS4yNDk0LTYuNTE1My0uMDMwMy0uMzY2NS4wMzQyLS43MjEzLjE0NjUtMS4wNDA4LjMyOTQtLjMxOTQuMTgyOC0uNTk1OS40MzItLjgxMDkuNzMwN2wtMS42OTg5IDIuMzczM2MtLjA4MTEuMTE1NS0uMjAwOS4xOTgtLjMzNzYuMjMyOGwtMS4wNC4yNjI0Yy0uMzA4NjguMDc3OS0uNTgwNzIuMjYwOC0uNzY5NTcuNTE3MS0uMTg4ODUuMjU2NC0uMjgyNzUuNTcwNC0uMjY1NjguODg4NGwuMTczODIgMy4yMzg2Yy4wMTg4Ny4zNTEuMTcxNTYuNjgxNC40MjY2Ni45MjMycy41OTMxNy4zNzY2Ljk0NDY3LjM3NjdoLjUyNjJjMC0uMDA2MiAwLS4wMTI0IDAtLjAxODYgMC0uNDQ0OS4wODc3LS44ODU0LjI1NzktMS4yOTY0cy40MTk4LS43ODQ0LjczNDMtMS4wOTljLjMxNDYtLjMxNDYuNjg4MS0uNTY0MSAxLjA5OTEtLjczNDMuNDExLS4xNzAzLjg1MTUtLjI1NzkgMS4yOTY0LS4yNTc5LjQ0NDggMCAuODg1My4wODc2IDEuMjk2Mi4yNTc5LjQxMS4xNzAyLjc4NDQuNDE5OCAxLjA5ODkuNzM0My4zMTQ1LjMxNDYuNTY0LjY4ODEuNzM0MSAxLjA5OTEuMTcwMi40MTEuMjU3Ny44NTE1LjI1NzYgMS4yOTYzdi4wMTg2aDYuMTMxMWMwLS4wMDYyIDAtLjAxMjQgMC0uMDE4Ni0uMDAwMS0uNDQ0OC4wODc1LS44ODUzLjI1NzYtMS4yOTYzLjE3MDItLjQxMS40MTk2LS43ODQ1LjczNDEtMS4wOTkxLjMxNDUtLjMxNDUuNjg4LS41NjQxIDEuMDk4OS0uNzM0My40MTEtLjE3MDMuODUxNS0uMjU3OSAxLjI5NjMtLjI1NzkuODk4NCAwIDEuNzYwMS4zNTY5IDIuMzk1NC45OTIycy45OTIyIDEuNDk3Ljk5MjIgMi4zOTU0di4wMTg2aC40NDAxYy4yMTQ1IDAgLjQyMjEtLjA3NjMuNTg1NS0uMjE1NHMuMjcxOS0uMzMxOC4zMDYyLS41NDM2bC4yMzc1LTIuMTIzNGMuMDQzOC0uMzkxOC0uMDQ4NS0uNzg2OC0uMjYxMy0xLjExODdzLS41MzMyLS41ODA1LS45MDc1LS43MDQzem0tMTMuODg2Ni0xLjM5Ny0zLjU3LS4wMzk1Yy0uMDYwNS0uMDAxLS4xMTk5LS4wMTY2LS4xNzMxLS4wNDU1LS4wNTMxLS4wMjg5LS4wOTg1LS4wNzAzLS4xMzIyLS4xMjA1LS4wMzM3LS4wNTAzLS4wNTQ3LS4xMDgtLjA2MTMtLjE2ODEtLjAwNjYtLjA2MDIuMDAxNS0uMTIxLjAyMzYtLjE3NzRsLjU4MDUtMS40NzQ2Yy4wNzE1LS4xODMxLjE5MjctLjM0MjcuMzUtLjQ2MDcuMTU3Mi0uMTE4MS4zNDQzLS4xODk5LjU0MDEtLjIwNzUuNTQ5NS0uMDQ3MyAxLjgzNjMtLjA3NzYgMi40NDQ3LS4xMDI0em02LjE0ODIuMDkzOS00LjkwMTgtLjA3NzZ2LTIuODM0MmMuODc3OS0uMDExNCAxLjc1NTYuMDMzMiAyLjYyNzguMTMzNC4yNDUyLjAyMzMuNDcyOS4xMzcuNjM4OC4zMTlsMS44MzQ2IDIuMDE3OWMuMDM0MS4wMzgyLjA1NjQuMDg1NS4wNjQyLjEzNjEuMDA3Ny4wNTA3LjAwMDYuMTAyNS0uMDIwNS4xNDkxLS4wMjExLjA0NjctLjA1NTMuMDg2Mi0uMDk4NS4xMTM4LS4wNDMxLjAyNzctLjA5MzQuMDQyMi0uMTQ0Ni4wNDE4eiIvPjwvZz48ZyBmaWxsPSIjZmZlNDZlIj48cGF0aCBkPSJtMjEuNTgzNCAxMS4yNDA4Yy0uMTY5Ni0uMjA0Ni0uMzk1MS0uMzU1NC0uNjQ5LS40MzM4LS4yNTM5LS4wNzg1LS41MjUyLS4wODEyLS43ODA2LS4wMDc4LS45MjEyLjI0NTItMS42OTI3IDEuMjk4NC0yLjA3NjggMi43ODM4LS4zODgxLTEuNDg1NC0xLjE1NTYtMi41Mzg2LTIuMDc2OC0yLjc4MzgtLjI1NTUtLjA3MjktLjUyNjYtLjA2OTktLjc4MDQuMDA4NXMtLjQ3OTMuMjI4OS0uNjQ5Mi40MzMxYy0uMzI2LjM3NzItLjQwMi45MDU3LS4yMDMzIDEuNDE0OC4zODQxLjk4NTYgMS42Mjk4IDEuNjkwMyAzLjMzMjUgMS44ODQzbC4xNzc3LjAyMDJoLjQwOThsLjE2NjEtLjAxODZjMS43MDI3LS4xOTQgMi45NDkxLS44OTg3IDMuMzMzMy0xLjg4NDQuMTk4Ny0uNTEwNi4xMjI2LTEuMDM5MS0uMjAzMy0xLjQxNjN6bS02LjIwODggMS4xNDYzYy0uMDM3Mi0uMDk2My0uMDc3Ni0uMjc4Ny4wNDA0LS40MTkxLjAzNi0uMDQ3NC4wODIzLS4wODYuMTM1NC0uMTEyOXMuMTExNi0uMDQxNC4xNzExLS4wNDIzYy4wNDI4LjAwMDQuMDg1My4wMDY0LjEyNjYuMDE3OC4zNzk1LjEwMDkuODQyLjYxMTYgMS4xMTk4IDEuNTQwNS0uOTYzOS0uMjA2NC0xLjQ1OS0uNjQxOC0xLjU5MzMtLjk4NHptNS40MDU1IDBjLS4xMzQzLjM0NDYtLjYyOTQuNzc2MS0xLjU5MzMuOTg3Mi4yNzg2LS45MzE0Ljc0MTItMS40Mzk3IDEuMTE5OS0xLjU0MDYuMDQxNS0uMDExMy4wODQyLS4wMTczLjEyNzMtLjAxNzguMDYwMS4wMDAzLjExOTQuMDE0NS4xNzMzLjA0MTQuMDUzOC4wMjY5LjEwMDcuMDY1OC4xMzcxLjExMzguMTE3Mi4xMzczLjA3MjkuMzE5Ny4wMzQ5LjQxNnoiLz48cGF0aCBkPSJtMTguODQ3OSAxNC45NzQ2aC0xLjQ1OTh2MTAuMDA3N2gxLjQ1OTh6Ii8+PC9nPjwvc3ZnPg==" alt="car icon" className="sc-lkqHmb bRTQVF"></img>
                 <div className="sc-bdVaJa jCnDwj" style={{marginTop:"em"}}><p className="sc-iwsKbI sc-daURTG detjqg">Looking to insure your new bike?</p><p className="sc-iwsKbI sc-bXGyLb bqVLHP">Save big with our zero commission insurance</p></div>
                 <button className="sc-fYiAbW jBqRDn">Get a quote</button>
             </div>
             </div>
                </FadeIn>
                <div className="kilhike">
                  <img src={hike} alt="hike" width="480" />
              </div>

              
              <div className="jshtgK" style={{paddingLeft:"560px"}}>
                <div className="kuUxhF">
                  <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIxIiB2aWV3Qm94PSIwIDAgMjEgMjEiIHdpZHRoPSIyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOC43NzczOSAxNS41NDU5Yy0uNDU5ODYtLjYzODctMS4yNTE4My0uOTcwOC0yLjAxODI1LS44NDMtLjYzODY5LjEwMjItMS4yMjYyOC0uMDc2Ny0xLjY2MDU5LS40MzQzbC0xLjczNzIyIDIuNTAzNiAyLjc4NDY3LS4xNzg4Ljc5MTk3IDIuNjU2OSAyLjI3MzcyLTMuMjcwMWMtLjE1MzI4LS4xMjc3LS4zMDY1Ny0uMjU1NC0uNDM0My0uNDM0M3oiIGZpbGw9IiMxNmMyZjgiLz48cGF0aCBkPSJtMTQuMTE2IDE0LjcwMjRjLS43OTItLjE1MzMtMS41NTg0LjE3ODgtMi4wMTgzLjg0My0uMTAyMS4xNTMzLS4yMDQzLjI4MS0uMzMyMS4zODMybDIuMzI0OCAzLjMyMTIuNzkyLTIuNjU2OSAyLjc4NDcuMTc4OC0xLjc4ODMtMi41ODAzYy0uNDU5OS40MDg4LTEuMDk4Ni42Mzg3LTEuNzYyOC41MTF6IiBmaWxsPSIjMTZjMmY4Ii8+PHBhdGggZD0ibTExLjk0MzggMi41MTYxOWMuNDA4OC41ODc1OSAxLjEyNDEuODY4NjEgMS44MTM5Ljc0MDg4IDEuMjUxOC0uMjI5OTMgMi4zMjQ4Ljg2ODYxIDIuMDk0OSAyLjA5NDg5LS4xMjc4LjY4OTc4LjE3ODggMS40MDUxMS43NDA4IDEuODEzODYgMS4wNDc1LjcxNTMzIDEuMDQ3NSAyLjI0ODE4IDAgMi45NjM0OC0uNTg3Ni40MDg4LS44Njg2IDEuMTI0MS0uNzQwOCAxLjgxMzkuMjI5OSAxLjI1MTgtLjg2ODcgMi4zMjQ4LTIuMDk0OSAyLjA5NDktLjY4OTgtLjEyNzgtMS40MDUxLjE3ODgtMS44MTM5Ljc0MDktLjcxNTMgMS4wNDc0LTIuMjQ4MTcgMS4wNDc0LTIuOTYzNSAwLS40MDg3Ni0uNTg3Ni0xLjEyNDA5LS44Njg3LTEuODEzODctLjc0MDktMS4yNTE4My4yNTU1LTIuMzUwMzctLjgxNzUtMi4xMjA0NC0yLjA2OTQuMTI3NzQtLjY4OTctLjE3ODgzLTEuNDA1MS0uNzQwODctMS44MTM4LTEuMDQ3NDUtLjcxNTM1LTEuMDQ3NDUtMi4yNDgyIDAtMi45NjM1My41ODc1OS0uNDA4NzYuODY4NjEtMS4xMjQwOS43NDA4Ny0xLjgxMzg3LS4yMjk5My0xLjI1MTgyLjg2ODYxLTIuMzI0ODEgMi4wOTQ4OS0yLjA5NDg5LjY4OTc4LjEyNzc0IDEuNDA1MTEtLjE3ODgzIDEuODEzODctLjc0MDg3LjcxNTMzLTEuMDQ3NDUgMi4yNDgxNS0xLjA0NzQ1IDIuOTg5MDUtLjAyNTU1eiIgZmlsbD0iI2QxYzBmZiIvPjxwYXRoIGQ9Im0xMC41MTM3IDEyLjcxYzIuMjg1NyAwIDQuMTM4Ny0xLjg1MyA0LjEzODctNC4xMzg3IDAtMi4yODU3My0xLjg1My00LjEzODY4LTQuMTM4Ny00LjEzODY4LTIuMjg1NzUgMC00LjEzODcgMS44NTI5NS00LjEzODcgNC4xMzg2OCAwIDIuMjg1NyAxLjg1Mjk1IDQuMTM4NyA0LjEzODcgNC4xMzg3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im05LjkyNjg5IDEwLjMwODRjLS4xMjc3MyAwLS4yNTU0Ny0uMDUxMS0uMzU3NjYtLjE1MzNsLTEuMjAwNzMtMS4yMDA3NGMtLjE3ODgzLS4xNzg4My0uMTc4ODMtLjUxMDk1IDAtLjY4OTc4cy41MTA5NS0uMTc4ODMuNjg5NzggMGwuODY4NjEuODY4NjEgMS45MTYxMS0xLjkxNjA2Yy4xNzg4LS4xNzg4My41MTA5LS4xNzg4My42ODk3IDAgLjE3ODkuMTc4ODMuMTc4OS41MTA5NSAwIC42ODk3OGwtMi4yNzM3IDIuMjQ4MTljLS4wNzY2LjEwMjItLjIwNDQuMTUzMy0uMzMyMTEuMTUzM3oiIGZpbGw9IiM5MzY0ZWQiLz48L3N2Zz4=" alt="Licensed by IRDAI" className="sc-exAgwC dpzhlW"/>
                  <p className="uqGaU">Licensed by IRDAI</p>
                </div>
                  <div className="fpSdKe"></div>

                  <div className="crbTvO">
                  <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjQgMTYiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgyM3YxNmgtMjN6Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Im0xNC45NTMxIDE2LjAwMDJoLTYuMjM0MzV2LTcuNDAxMzVjMC0xLjc0MTUgMS40MjE4NS0zLjE1NjQ3IDMuMTcxODUtMy4xNTY0N3MzLjE3MTkgMS40MTQ5NyAzLjE3MTkgMy4xNTY0N3Y3LjQwMTM1eiIgZmlsbD0iI2Y3NTI3NiIvPjxwYXRoIGQ9Im03Ljg0Mzc1IDE1Ljk5ODFoLTYuMzQzNzV2LTUuMjI0NWMwLTEuNzQxNDUgMS40MjE4OC0zLjE1NjQxIDMuMTcxODgtMy4xNTY0MXMzLjE3MTg3IDEuNDE0OTYgMy4xNzE4NyAzLjE1NjQxeiIgZmlsbD0iIzE2YzJmOCIvPjxwYXRoIGQ9Im0yMi41IDE2LjAwMDFoLTYuMzQzOHYtNC4wMjcyYzAtMS43NDE1IDEuNDIxOS0zLjE1NjQ5IDMuMTcxOS0zLjE1NjQ5czMuMTcxOSAxLjQxNDk5IDMuMTcxOSAzLjE1NjQ5eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xOS4zMjgxIDcuMTgzOTljMS4wODczIDAgMS45Njg4LS44NzcxNSAxLjk2ODgtMS45NTkxOHMtLjg4MTUtMS45NTkxOS0xLjk2ODgtMS45NTkxOS0xLjk2ODcuODc3MTYtMS45Njg3IDEuOTU5MTkuODgxNCAxLjk1OTE4IDEuOTY4NyAxLjk1OTE4eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xMS44OTA2IDMuOTE4MzdjMS4wODczIDAgMS45Njg4LS44NzcxNiAxLjk2ODgtMS45NTkxOSAwLTEuMDgyMDI0LS44ODE1LTEuOTU5MTgtMS45Njg4LTEuOTU5MThzLTEuOTY4NzIuODc3MTU2LTEuOTY4NzIgMS45NTkxOGMwIDEuMDgyMDMuODgxNDIgMS45NTkxOSAxLjk2ODcyIDEuOTU5MTl6IiBmaWxsPSIjZjc1Mjc2Ii8+PHBhdGggZD0ibTQuNjcxODggNi4zMTI5YzEuMDg3MzEgMCAxLjk2ODc0LS44NzcxNiAxLjk2ODc0LTEuOTU5MTkgMC0xLjA4MjAyLS44ODE0My0xLjk1OTE4LTEuOTY4NzQtMS45NTkxOC0xLjA4NzMyIDAtMS45Njg3Ni44NzcxNi0xLjk2ODc2IDEuOTU5MTggMCAxLjA4MjAzLjg4MTQ0IDEuOTU5MTkgMS45Njg3NiAxLjk1OTE5eiIgZmlsbD0iIzE2YzJmOCIvPjwvZz48L3N2Zz4=" alt="6.2 Crore users" className="sc-exAgwC dpzhlW"/>
                  <p className="uqGaU">6.2 Crore users</p>
                  </div>
                  <div className="fpSdKe"></div>

                  <div className="gAmjmp">
                    <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMzMgMTQiIHdpZHRoPSIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgzMS42MzM2djE0aC0zMS42MzM2eiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJtMy40OTIxOSA4LjQ0MTQxLS40MjczIDEuODE5ODloLTEuODE2OGMtLjQyNzQ3OS0uOTYxODYtLjc0ODA5LTIuMDMwNTYtLjc0ODA5LTMuMzEzMDEgMC0xLjE3NTU3LjMyMDYxMS0yLjI0NDI3Ljc0ODA5LTMuMjA2MWwxLjYwMzA2LjMyMDYxLjYzMzIzIDEuNDg0MDhjLS4xMDY4OC40Mjc0OC0uMjA1NzUuOTczOTMtLjIwNTc1IDEuNDAxNDEgMCAuNTM0MzYuMDM3NzggMS4wMTY1NS4yMTM1NiAxLjQ5MzEyeiIgZmlsbD0iI2ZiYmIwMCIvPjxwYXRoIGQ9Im0xNC4wNjI5IDUuNzgxMjVjLjEwNjkuNDI3NDguMTA2OS44NTQ5Ni4xMDY5IDEuMjgyNDQgMCAuNTM0MzUgMCAuOTYxODMtLjEwNjkgMS40OTYxOS0uMzIwNiAxLjYwMzAyLTEuMDkzIDIuOTc4MzItMi4zNzU0IDMuOTQwMTJsLTIuMTEzMTUtLjA5MjgtLjMyMDYxLTEuNzA5OWMuODU0OTYtLjQyNzUgMS40OTYxNi0xLjE3NTU5IDEuODE2NzYtMi4xMzc0MmgtMy43NDA0MnYtMi43Nzg2M2gzLjc0MDQyeiIgZmlsbD0iIzUxOGVmOCIvPjxwYXRoIGQ9Im0xMS44MjgyIDEyLjM5NTZjLTEuMTc1Ni45NjE4LTIuNjcxNzYgMS40OTYyLTQuMzgxNjggMS40OTYyLTIuNjcxNzYgMC01LjAyMjktMS40OTYyLTYuMTk4NDctMy42MzM2bDIuMjQ0MjctMS44MTY3OWMuNjQxMjIgMS42MDMwOSAyLjEzNzQxIDIuNjcxNzkgMy44NDczMyAyLjY3MTc5Ljc0ODA5IDAgMS40OTYxOC0uMjEzOCAyLjEzNzQtLjUzNDR6IiBmaWxsPSIjMjhiNDQ2Ii8+PHBhdGggZD0ibTExLjkzNTEgMS42MDMwNS0yLjI0NDMxIDEuODE2OGMtLjY0MTIyLS4zMjA2MS0xLjM4OTMxLS42NDEyMi0yLjI0NDI3LS42NDEyMi0xLjgxNjc5IDAtMy40MTk4NSAxLjE3NTU3LTMuOTU0MiAyLjc3ODYybC0yLjI0NDI3LTEuODE2NzljMS4xNzU1Ny0yLjI0NDI4IDMuNTI2NzEtMy43NDA0NiA2LjE5ODQ3LTMuNzQwNDYgMS43MDk5MiAwIDMuMzEyOTguNjQxMjIxIDQuNDg4NTggMS42MDMwNXoiIGZpbGw9IiNmMTQzMzYiLz48cGF0aCBkPSJtMzIuMTMyOCA2Ljk0NjU2YzAtMy44NDczMi0zLjIwNjEtNi45NDY1Ni03LjA1MzQtNi45NDY1Ni0zLjg0NzQgMC02Ljk0NjYgMy4wOTkyNC02Ljk0NjYgNi45NDY1NiAwIDMuNTI2NzQgMi41NjQ5IDYuNDEyMjQgNS44Nzc5IDYuOTQ2NTR2LTQuOTE2aC0xLjgxNjh2LTIuMDMwNTRoMS44MTY4di0xLjQ5NjE4YzAtMS43MDk5MiAxLjA2ODctMi42NzE3NSAyLjY3MTctMi42NzE3NS43NDgxIDAgMS42MDMxLjEwNjg3IDEuNjAzMS4xMDY4N3YxLjcwOTkyaC0uODU1Yy0uODU0OSAwLTEuMTc1Ni41MzQzNS0xLjE3NTYgMS4wNjg3djEuMjgyNDRoMS45MjM3bC0uMzIwNiAyLjAzMDU0aC0xLjYwMzF2NC45MTZjMy4zMTMtLjUzNDMgNS44Nzc5LTMuNDE5OCA1Ljg3NzktNi45NDY1NHoiIGZpbGw9IiMxODc3ZjIiLz48cGF0aCBkPSJtMjcuODU5NCA4Ljk3NTgyLjMyMDYtMi4wMzA1NGgtMS45MTc3di0xLjI4MjQ0YzAtLjUzNDM1LjMyMDYtMS4wNjg3IDEuMTc1Ni0xLjA2ODdoLjg2MnYtMS43MDk5M3MtLjg2NzktLjEwNjg3LTEuNzIyOS0uMTA2ODdjLTEuNDk2MiAwLTIuNTY0OS45NjE4NC0yLjU2NDkgMi42NzE3NnYxLjQ5NjE4aC0xLjgxNjh2Mi4wMzA1NGgxLjgxNjh2NC45MTU5OGMuMzM5MS4wNDgyLjc0ODEuMTA2OSAxLjA2ODcuMTA2OXMuODE2LS4wMjM5IDEuMTc1Mi0uMTA2OXYtNC45MTU5OHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+" alt="95.5 % 5 star rating on Google and Facebook" className="sc-exAgwC dpzhlW"/>
                      <p className="uqGaU">95% 5 
                      <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjExIiB2aWV3Qm94PSIwIDAgMTIgMTEiIHdpZHRoPSIxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNS40NDE1Mi45MjcwNDljLjI5OTM1LS45MjEzMTA3NCAxLjYwMjc2LS45MjEzMDkwNyAxLjkwMjExLjAwMDAwMmwuNjIwNTUgMS45MDk4MjljLjEzMzg3LjQxMjAyLjUxNzgzLjY5MDk4Ljk1MTA1LjY5MDk4aDIuMDA4MDdjLjk2ODggMCAxLjM3MTUgMS4yMzk2Mi41ODc4IDEuODA5MDJsLTEuNjI0NTcgMS4xODAzNGMtLjM1MDQ4LjI1NDY1LS40OTcxNC43MDYwMS0uMzYzMjcgMS4xMTgwM2wuNjIwNTQgMS45MDk4M2MuMjk5NC45MjEzMi0uNzU1MTMgMS42ODc0Mi0xLjUzODg0IDEuMTE4MDJsLTEuNjI0Ni0xLjE4MDMyYy0uMzUwNDgtLjI1NDY1LS44MjUwOC0uMjU0NjQtMS4xNzU1NyAwbC0xLjYyNDYgMS4xODAzMmMtLjc4MzcxLjU2OTQtMS44MzgxOS0uMTk2Ny0xLjUzODg0LTEuMTE4MDJsLjYyMDU0LTEuOTA5ODJjLjEzMzg4LS40MTIwMy0uMDEyNzgtLjg2MzQtLjM2MzI3LTEuMTE4MDRsLTEuNjI0Ni0xLjE4MDM0Yy0uNzgzNzExLS41Njk0LS4zODA5MzQtMS44MDkwMi41ODc3OS0xLjgwOTAyaDIuMDA4MTFjLjQzMzIzIDAgLjgxNzE5LS4yNzg5Ni45NTEwNi0uNjkwOTh6IiBmaWxsPSIjZmZhNTJmIi8+PC9zdmc+" className="sc-exAgwC dpzhlW" alt="star"/>
                      Ratings
                      </p> </div>
              </div>
          </div>
        )}

        { heartfield && (
          <div>
  <FadeIn>

  <div className="inpot-form">
              <div class="bg dark">
              <p className="dbVKIG" style={{marginLeft:"1em", paddingTop:"1em"}}>Arogya Sanjeevani policy, ACKO</p>
            <div className="ieFMZz">
              <p className="gvofsT" style={{marginLeft:"1em"}}>Standard health insurance plan that’s big on benefits,<br />low on cost </p>
            </div>
              </div>
              <CButton className="insure-you" color="success">
              Get Started &#8594;
              </CButton>
            </div>
            {/* <div
              style={{
                marginLeft: "550px",
                backgroundColor: "white",
                width: "480px",
                marginTop: "20px",
                height: "100px",
                borderRadius: "10px",
              }}
            >
            <p className="dbVKIG" style={{marginLeft:"1em", paddingTop:"1em"}}>Arogya Sanjeevani policy, ACKO</p>
            <div className="ieFMZz">
              <p className="gvofsT" style={{marginLeft:"1em"}}>Standard health insurance plan that’s big on benefits,<br />low on cost </p>
            </div>
            <div className="sc-bdVaJa sc-bwzfXH sc-kaNhvL hnEcVH">
              <p className="sc-iwsKbI sc-LKuAh eAeVoP">Get Started</p>
              &nbsp;&nbsp;&nbsp;
              <img
                src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEzIiB2aWV3Qm94PSIwIDAgMTMgMTMiIHdpZHRoPSIxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJtMSA2LjE4NTA2aDEwLjM3MDQiLz48cGF0aCBkPSJtNi4xODU1NSAxIDUuMTg1MTUgNS4xODUxOS01LjE4NTE1IDUuMTg1MjEiLz48L2c+PC9zdmc+"
                alt="search icon"
              />
            </div>
            </div> */}
            <div className="cGYGGy" style={{marginTop:"10px"}}>
                or
                </div>
                <div className={'cFRTzp'} style={{marginLeft:"690px", marginTop:"-9px", width:"85px"}}></div>
                <div className={'cFRTzp'} style={{marginLeft:"806px", marginTop:"-3px", width:"85px"}}></div>
             
                <div className='jzTvIn' style={{margin:"10em", marginLeft:"35em", marginTop:"2em", width:"480px", height:"100px"}}>
             <div className="fRJFwS">
                 <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDEgNDAiIHdpZHRoPSI0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjAuNzg3NiA0MGMxMS4wNDU3IDAgMjAtOC45NTQzIDIwLTIwcy04Ljk1NDMtMjAtMjAtMjAtMjAuMDAwMDAyIDguOTU0My0yMC4wMDAwMDIgMjAgOC45NTQzMDIgMjAgMjAuMDAwMDAyIDIweiIgZmlsbD0iIzcwM2JkOSIvPjxnIGZpbGw9IiMxNmMyZjgiPjxwYXRoIGQ9Im0yNy40ODEyIDIyLjcxMDRjLS42MDI1IDAtMS4xODAzLjIzOTQtMS42MDYzLjY2NTRzLS42NjUzIDEuMDAzOC0uNjY1MyAxLjYwNjJjLjAwMDIuNjAyNS4yMzk2IDEuMTgwMS42NjU2IDEuNjA2MS40MjU5LjQyNiAxLjAwMzYuNjY1NCAxLjYwNi42NjU2LjYwMjUgMCAxLjE4MDMtLjIzOTQgMS42MDYzLS42NjU0cy42NjUzLTEuMDAzOC42NjUzLTEuNjA2M2MuMDAwMS0uMjk4My0uMDU4Ni0uNTkzNy0uMTcyNy0uODY5NC0uMTE0MS0uMjc1Ni0uMjgxNC0uNTI2MS0uNDkyNC0uNzM3LS4yMTA5LS4yMTEtLjQ2MTQtLjM3ODMtLjczNzEtLjQ5MjQtLjI3NTYtLjExNDItLjU3MS0uMTcyOS0uODY5NC0uMTcyOHoiLz48cGF0aCBkPSJtMTQuNTgxIDIyLjcyOTJjLS41OTY5IDAtMS4xNjk0LjIzNzItMS41OTE1LjY1OTMtLjQyMi40MjItLjY1OTIuOTk0NS0uNjU5MiAxLjU5MTRzLjIzNzIgMS4xNjk0LjY1OTIgMS41OTE1Yy40MjIxLjQyMi45OTQ2LjY1OTIgMS41OTE1LjY1OTJzMS4xNjk0LS4yMzcyIDEuNTkxNS0uNjU5MmMuNDIyLS40MjIxLjY1OTItLjk5NDYuNjU5Mi0xLjU5MTUgMC0uMjk1Ni0uMDU4My0uNTg4Mi0uMTcxNC0uODYxM3MtLjI3ODgtLjUyMTItLjQ4NzgtLjczMDFjLS4yMDktLjIwOS0uNDU3MS0uMzc0OC0uNzMwMi0uNDg3OS0uMjczMS0uMTEzMi0uNTY1Ny0uMTcxNC0uODYxMy0uMTcxNHoiLz48cGF0aCBkPSJtMzEuMjc0OSAyMC4yOTg2Yy0xLjU1MjItLjUyMTUtMi4wOTU1LS42MzI1LTQuMDc5OS0uOTU2OS0uMzgzNC0uMDYyOS0uNzQ5LS4yMDcyLTEuMDAyLS41MDE0bC0zLjEyMTQtMi45OTQ5Yy0uNDAxLS4zODM5LS45MTc5LS42MjQzLTEuNDY5OS0uNjgzNy0yLjE2NDctLjIzOTItNC4zNDg1LS4yNDk0LTYuNTE1My0uMDMwMy0uMzY2NS4wMzQyLS43MjEzLjE0NjUtMS4wNDA4LjMyOTQtLjMxOTQuMTgyOC0uNTk1OS40MzItLjgxMDkuNzMwN2wtMS42OTg5IDIuMzczM2MtLjA4MTEuMTE1NS0uMjAwOS4xOTgtLjMzNzYuMjMyOGwtMS4wNC4yNjI0Yy0uMzA4NjguMDc3OS0uNTgwNzIuMjYwOC0uNzY5NTcuNTE3MS0uMTg4ODUuMjU2NC0uMjgyNzUuNTcwNC0uMjY1NjguODg4NGwuMTczODIgMy4yMzg2Yy4wMTg4Ny4zNTEuMTcxNTYuNjgxNC40MjY2Ni45MjMycy41OTMxNy4zNzY2Ljk0NDY3LjM3NjdoLjUyNjJjMC0uMDA2MiAwLS4wMTI0IDAtLjAxODYgMC0uNDQ0OS4wODc3LS44ODU0LjI1NzktMS4yOTY0cy40MTk4LS43ODQ0LjczNDMtMS4wOTljLjMxNDYtLjMxNDYuNjg4MS0uNTY0MSAxLjA5OTEtLjczNDMuNDExLS4xNzAzLjg1MTUtLjI1NzkgMS4yOTY0LS4yNTc5LjQ0NDggMCAuODg1My4wODc2IDEuMjk2Mi4yNTc5LjQxMS4xNzAyLjc4NDQuNDE5OCAxLjA5ODkuNzM0My4zMTQ1LjMxNDYuNTY0LjY4ODEuNzM0MSAxLjA5OTEuMTcwMi40MTEuMjU3Ny44NTE1LjI1NzYgMS4yOTYzdi4wMTg2aDYuMTMxMWMwLS4wMDYyIDAtLjAxMjQgMC0uMDE4Ni0uMDAwMS0uNDQ0OC4wODc1LS44ODUzLjI1NzYtMS4yOTYzLjE3MDItLjQxMS40MTk2LS43ODQ1LjczNDEtMS4wOTkxLjMxNDUtLjMxNDUuNjg4LS41NjQxIDEuMDk4OS0uNzM0My40MTEtLjE3MDMuODUxNS0uMjU3OSAxLjI5NjMtLjI1NzkuODk4NCAwIDEuNzYwMS4zNTY5IDIuMzk1NC45OTIycy45OTIyIDEuNDk3Ljk5MjIgMi4zOTU0di4wMTg2aC40NDAxYy4yMTQ1IDAgLjQyMjEtLjA3NjMuNTg1NS0uMjE1NHMuMjcxOS0uMzMxOC4zMDYyLS41NDM2bC4yMzc1LTIuMTIzNGMuMDQzOC0uMzkxOC0uMDQ4NS0uNzg2OC0uMjYxMy0xLjExODdzLS41MzMyLS41ODA1LS45MDc1LS43MDQzem0tMTMuODg2Ni0xLjM5Ny0zLjU3LS4wMzk1Yy0uMDYwNS0uMDAxLS4xMTk5LS4wMTY2LS4xNzMxLS4wNDU1LS4wNTMxLS4wMjg5LS4wOTg1LS4wNzAzLS4xMzIyLS4xMjA1LS4wMzM3LS4wNTAzLS4wNTQ3LS4xMDgtLjA2MTMtLjE2ODEtLjAwNjYtLjA2MDIuMDAxNS0uMTIxLjAyMzYtLjE3NzRsLjU4MDUtMS40NzQ2Yy4wNzE1LS4xODMxLjE5MjctLjM0MjcuMzUtLjQ2MDcuMTU3Mi0uMTE4MS4zNDQzLS4xODk5LjU0MDEtLjIwNzUuNTQ5NS0uMDQ3MyAxLjgzNjMtLjA3NzYgMi40NDQ3LS4xMDI0em02LjE0ODIuMDkzOS00LjkwMTgtLjA3NzZ2LTIuODM0MmMuODc3OS0uMDExNCAxLjc1NTYuMDMzMiAyLjYyNzguMTMzNC4yNDUyLjAyMzMuNDcyOS4xMzcuNjM4OC4zMTlsMS44MzQ2IDIuMDE3OWMuMDM0MS4wMzgyLjA1NjQuMDg1NS4wNjQyLjEzNjEuMDA3Ny4wNTA3LjAwMDYuMTAyNS0uMDIwNS4xNDkxLS4wMjExLjA0NjctLjA1NTMuMDg2Mi0uMDk4NS4xMTM4LS4wNDMxLjAyNzctLjA5MzQuMDQyMi0uMTQ0Ni4wNDE4eiIvPjwvZz48ZyBmaWxsPSIjZmZlNDZlIj48cGF0aCBkPSJtMjEuNTgzNCAxMS4yNDA4Yy0uMTY5Ni0uMjA0Ni0uMzk1MS0uMzU1NC0uNjQ5LS40MzM4LS4yNTM5LS4wNzg1LS41MjUyLS4wODEyLS43ODA2LS4wMDc4LS45MjEyLjI0NTItMS42OTI3IDEuMjk4NC0yLjA3NjggMi43ODM4LS4zODgxLTEuNDg1NC0xLjE1NTYtMi41Mzg2LTIuMDc2OC0yLjc4MzgtLjI1NTUtLjA3MjktLjUyNjYtLjA2OTktLjc4MDQuMDA4NXMtLjQ3OTMuMjI4OS0uNjQ5Mi40MzMxYy0uMzI2LjM3NzItLjQwMi45MDU3LS4yMDMzIDEuNDE0OC4zODQxLjk4NTYgMS42Mjk4IDEuNjkwMyAzLjMzMjUgMS44ODQzbC4xNzc3LjAyMDJoLjQwOThsLjE2NjEtLjAxODZjMS43MDI3LS4xOTQgMi45NDkxLS44OTg3IDMuMzMzMy0xLjg4NDQuMTk4Ny0uNTEwNi4xMjI2LTEuMDM5MS0uMjAzMy0xLjQxNjN6bS02LjIwODggMS4xNDYzYy0uMDM3Mi0uMDk2My0uMDc3Ni0uMjc4Ny4wNDA0LS40MTkxLjAzNi0uMDQ3NC4wODIzLS4wODYuMTM1NC0uMTEyOXMuMTExNi0uMDQxNC4xNzExLS4wNDIzYy4wNDI4LjAwMDQuMDg1My4wMDY0LjEyNjYuMDE3OC4zNzk1LjEwMDkuODQyLjYxMTYgMS4xMTk4IDEuNTQwNS0uOTYzOS0uMjA2NC0xLjQ1OS0uNjQxOC0xLjU5MzMtLjk4NHptNS40MDU1IDBjLS4xMzQzLjM0NDYtLjYyOTQuNzc2MS0xLjU5MzMuOTg3Mi4yNzg2LS45MzE0Ljc0MTItMS40Mzk3IDEuMTE5OS0xLjU0MDYuMDQxNS0uMDExMy4wODQyLS4wMTczLjEyNzMtLjAxNzguMDYwMS4wMDAzLjExOTQuMDE0NS4xNzMzLjA0MTQuMDUzOC4wMjY5LjEwMDcuMDY1OC4xMzcxLjExMzguMTE3Mi4xMzczLjA3MjkuMzE5Ny4wMzQ5LjQxNnoiLz48cGF0aCBkPSJtMTguODQ3OSAxNC45NzQ2aC0xLjQ1OTh2MTAuMDA3N2gxLjQ1OTh6Ii8+PC9nPjwvc3ZnPg==" alt="car icon" className="sc-lkqHmb bRTQVF"></img>
                 <div className="sc-bdVaJa jCnDwj" style={{marginTop:"em"}}><p className="sc-iwsKbI sc-daURTG detjqg">Looking to insure your new bike?</p><p className="sc-iwsKbI sc-bXGyLb bqVLHP">Save big with our zero commission insurance</p></div>
                 <button className="sc-fYiAbW jBqRDn">Get a quote</button>
             </div>
             </div>
                </FadeIn>
                <div className="kilhike">
                  <img src={hike} alt="hike" width="480" />
              </div>

              
              <div className="jshtgK" style={{paddingLeft:"560px"}}>
                <div className="kuUxhF">
                  <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIxIiB2aWV3Qm94PSIwIDAgMjEgMjEiIHdpZHRoPSIyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOC43NzczOSAxNS41NDU5Yy0uNDU5ODYtLjYzODctMS4yNTE4My0uOTcwOC0yLjAxODI1LS44NDMtLjYzODY5LjEwMjItMS4yMjYyOC0uMDc2Ny0xLjY2MDU5LS40MzQzbC0xLjczNzIyIDIuNTAzNiAyLjc4NDY3LS4xNzg4Ljc5MTk3IDIuNjU2OSAyLjI3MzcyLTMuMjcwMWMtLjE1MzI4LS4xMjc3LS4zMDY1Ny0uMjU1NC0uNDM0My0uNDM0M3oiIGZpbGw9IiMxNmMyZjgiLz48cGF0aCBkPSJtMTQuMTE2IDE0LjcwMjRjLS43OTItLjE1MzMtMS41NTg0LjE3ODgtMi4wMTgzLjg0My0uMTAyMS4xNTMzLS4yMDQzLjI4MS0uMzMyMS4zODMybDIuMzI0OCAzLjMyMTIuNzkyLTIuNjU2OSAyLjc4NDcuMTc4OC0xLjc4ODMtMi41ODAzYy0uNDU5OS40MDg4LTEuMDk4Ni42Mzg3LTEuNzYyOC41MTF6IiBmaWxsPSIjMTZjMmY4Ii8+PHBhdGggZD0ibTExLjk0MzggMi41MTYxOWMuNDA4OC41ODc1OSAxLjEyNDEuODY4NjEgMS44MTM5Ljc0MDg4IDEuMjUxOC0uMjI5OTMgMi4zMjQ4Ljg2ODYxIDIuMDk0OSAyLjA5NDg5LS4xMjc4LjY4OTc4LjE3ODggMS40MDUxMS43NDA4IDEuODEzODYgMS4wNDc1LjcxNTMzIDEuMDQ3NSAyLjI0ODE4IDAgMi45NjM0OC0uNTg3Ni40MDg4LS44Njg2IDEuMTI0MS0uNzQwOCAxLjgxMzkuMjI5OSAxLjI1MTgtLjg2ODcgMi4zMjQ4LTIuMDk0OSAyLjA5NDktLjY4OTgtLjEyNzgtMS40MDUxLjE3ODgtMS44MTM5Ljc0MDktLjcxNTMgMS4wNDc0LTIuMjQ4MTcgMS4wNDc0LTIuOTYzNSAwLS40MDg3Ni0uNTg3Ni0xLjEyNDA5LS44Njg3LTEuODEzODctLjc0MDktMS4yNTE4My4yNTU1LTIuMzUwMzctLjgxNzUtMi4xMjA0NC0yLjA2OTQuMTI3NzQtLjY4OTctLjE3ODgzLTEuNDA1MS0uNzQwODctMS44MTM4LTEuMDQ3NDUtLjcxNTM1LTEuMDQ3NDUtMi4yNDgyIDAtMi45NjM1My41ODc1OS0uNDA4NzYuODY4NjEtMS4xMjQwOS43NDA4Ny0xLjgxMzg3LS4yMjk5My0xLjI1MTgyLjg2ODYxLTIuMzI0ODEgMi4wOTQ4OS0yLjA5NDg5LjY4OTc4LjEyNzc0IDEuNDA1MTEtLjE3ODgzIDEuODEzODctLjc0MDg3LjcxNTMzLTEuMDQ3NDUgMi4yNDgxNS0xLjA0NzQ1IDIuOTg5MDUtLjAyNTU1eiIgZmlsbD0iI2QxYzBmZiIvPjxwYXRoIGQ9Im0xMC41MTM3IDEyLjcxYzIuMjg1NyAwIDQuMTM4Ny0xLjg1MyA0LjEzODctNC4xMzg3IDAtMi4yODU3My0xLjg1My00LjEzODY4LTQuMTM4Ny00LjEzODY4LTIuMjg1NzUgMC00LjEzODcgMS44NTI5NS00LjEzODcgNC4xMzg2OCAwIDIuMjg1NyAxLjg1Mjk1IDQuMTM4NyA0LjEzODcgNC4xMzg3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im05LjkyNjg5IDEwLjMwODRjLS4xMjc3MyAwLS4yNTU0Ny0uMDUxMS0uMzU3NjYtLjE1MzNsLTEuMjAwNzMtMS4yMDA3NGMtLjE3ODgzLS4xNzg4My0uMTc4ODMtLjUxMDk1IDAtLjY4OTc4cy41MTA5NS0uMTc4ODMuNjg5NzggMGwuODY4NjEuODY4NjEgMS45MTYxMS0xLjkxNjA2Yy4xNzg4LS4xNzg4My41MTA5LS4xNzg4My42ODk3IDAgLjE3ODkuMTc4ODMuMTc4OS41MTA5NSAwIC42ODk3OGwtMi4yNzM3IDIuMjQ4MTljLS4wNzY2LjEwMjItLjIwNDQuMTUzMy0uMzMyMTEuMTUzM3oiIGZpbGw9IiM5MzY0ZWQiLz48L3N2Zz4=" alt="Licensed by IRDAI" className="sc-exAgwC dpzhlW"/>
                  <p className="uqGaU">Licensed by IRDAI</p>
                </div>
                  <div className="fpSdKe"></div>

                  <div className="crbTvO">
                  <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjQgMTYiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgyM3YxNmgtMjN6Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Im0xNC45NTMxIDE2LjAwMDJoLTYuMjM0MzV2LTcuNDAxMzVjMC0xLjc0MTUgMS40MjE4NS0zLjE1NjQ3IDMuMTcxODUtMy4xNTY0N3MzLjE3MTkgMS40MTQ5NyAzLjE3MTkgMy4xNTY0N3Y3LjQwMTM1eiIgZmlsbD0iI2Y3NTI3NiIvPjxwYXRoIGQ9Im03Ljg0Mzc1IDE1Ljk5ODFoLTYuMzQzNzV2LTUuMjI0NWMwLTEuNzQxNDUgMS40MjE4OC0zLjE1NjQxIDMuMTcxODgtMy4xNTY0MXMzLjE3MTg3IDEuNDE0OTYgMy4xNzE4NyAzLjE1NjQxeiIgZmlsbD0iIzE2YzJmOCIvPjxwYXRoIGQ9Im0yMi41IDE2LjAwMDFoLTYuMzQzOHYtNC4wMjcyYzAtMS43NDE1IDEuNDIxOS0zLjE1NjQ5IDMuMTcxOS0zLjE1NjQ5czMuMTcxOSAxLjQxNDk5IDMuMTcxOSAzLjE1NjQ5eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xOS4zMjgxIDcuMTgzOTljMS4wODczIDAgMS45Njg4LS44NzcxNSAxLjk2ODgtMS45NTkxOHMtLjg4MTUtMS45NTkxOS0xLjk2ODgtMS45NTkxOS0xLjk2ODcuODc3MTYtMS45Njg3IDEuOTU5MTkuODgxNCAxLjk1OTE4IDEuOTY4NyAxLjk1OTE4eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xMS44OTA2IDMuOTE4MzdjMS4wODczIDAgMS45Njg4LS44NzcxNiAxLjk2ODgtMS45NTkxOSAwLTEuMDgyMDI0LS44ODE1LTEuOTU5MTgtMS45Njg4LTEuOTU5MThzLTEuOTY4NzIuODc3MTU2LTEuOTY4NzIgMS45NTkxOGMwIDEuMDgyMDMuODgxNDIgMS45NTkxOSAxLjk2ODcyIDEuOTU5MTl6IiBmaWxsPSIjZjc1Mjc2Ii8+PHBhdGggZD0ibTQuNjcxODggNi4zMTI5YzEuMDg3MzEgMCAxLjk2ODc0LS44NzcxNiAxLjk2ODc0LTEuOTU5MTkgMC0xLjA4MjAyLS44ODE0My0xLjk1OTE4LTEuOTY4NzQtMS45NTkxOC0xLjA4NzMyIDAtMS45Njg3Ni44NzcxNi0xLjk2ODc2IDEuOTU5MTggMCAxLjA4MjAzLjg4MTQ0IDEuOTU5MTkgMS45Njg3NiAxLjk1OTE5eiIgZmlsbD0iIzE2YzJmOCIvPjwvZz48L3N2Zz4=" alt="6.2 Crore users" className="sc-exAgwC dpzhlW"/>
                  <p className="uqGaU">6.2 Crore users</p>
                  </div>
                  <div className="fpSdKe"></div>

                  <div className="gAmjmp">
                    <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMzMgMTQiIHdpZHRoPSIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgzMS42MzM2djE0aC0zMS42MzM2eiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJtMy40OTIxOSA4LjQ0MTQxLS40MjczIDEuODE5ODloLTEuODE2OGMtLjQyNzQ3OS0uOTYxODYtLjc0ODA5LTIuMDMwNTYtLjc0ODA5LTMuMzEzMDEgMC0xLjE3NTU3LjMyMDYxMS0yLjI0NDI3Ljc0ODA5LTMuMjA2MWwxLjYwMzA2LjMyMDYxLjYzMzIzIDEuNDg0MDhjLS4xMDY4OC40Mjc0OC0uMjA1NzUuOTczOTMtLjIwNTc1IDEuNDAxNDEgMCAuNTM0MzYuMDM3NzggMS4wMTY1NS4yMTM1NiAxLjQ5MzEyeiIgZmlsbD0iI2ZiYmIwMCIvPjxwYXRoIGQ9Im0xNC4wNjI5IDUuNzgxMjVjLjEwNjkuNDI3NDguMTA2OS44NTQ5Ni4xMDY5IDEuMjgyNDQgMCAuNTM0MzUgMCAuOTYxODMtLjEwNjkgMS40OTYxOS0uMzIwNiAxLjYwMzAyLTEuMDkzIDIuOTc4MzItMi4zNzU0IDMuOTQwMTJsLTIuMTEzMTUtLjA5MjgtLjMyMDYxLTEuNzA5OWMuODU0OTYtLjQyNzUgMS40OTYxNi0xLjE3NTU5IDEuODE2NzYtMi4xMzc0MmgtMy43NDA0MnYtMi43Nzg2M2gzLjc0MDQyeiIgZmlsbD0iIzUxOGVmOCIvPjxwYXRoIGQ9Im0xMS44MjgyIDEyLjM5NTZjLTEuMTc1Ni45NjE4LTIuNjcxNzYgMS40OTYyLTQuMzgxNjggMS40OTYyLTIuNjcxNzYgMC01LjAyMjktMS40OTYyLTYuMTk4NDctMy42MzM2bDIuMjQ0MjctMS44MTY3OWMuNjQxMjIgMS42MDMwOSAyLjEzNzQxIDIuNjcxNzkgMy44NDczMyAyLjY3MTc5Ljc0ODA5IDAgMS40OTYxOC0uMjEzOCAyLjEzNzQtLjUzNDR6IiBmaWxsPSIjMjhiNDQ2Ii8+PHBhdGggZD0ibTExLjkzNTEgMS42MDMwNS0yLjI0NDMxIDEuODE2OGMtLjY0MTIyLS4zMjA2MS0xLjM4OTMxLS42NDEyMi0yLjI0NDI3LS42NDEyMi0xLjgxNjc5IDAtMy40MTk4NSAxLjE3NTU3LTMuOTU0MiAyLjc3ODYybC0yLjI0NDI3LTEuODE2NzljMS4xNzU1Ny0yLjI0NDI4IDMuNTI2NzEtMy43NDA0NiA2LjE5ODQ3LTMuNzQwNDYgMS43MDk5MiAwIDMuMzEyOTguNjQxMjIxIDQuNDg4NTggMS42MDMwNXoiIGZpbGw9IiNmMTQzMzYiLz48cGF0aCBkPSJtMzIuMTMyOCA2Ljk0NjU2YzAtMy44NDczMi0zLjIwNjEtNi45NDY1Ni03LjA1MzQtNi45NDY1Ni0zLjg0NzQgMC02Ljk0NjYgMy4wOTkyNC02Ljk0NjYgNi45NDY1NiAwIDMuNTI2NzQgMi41NjQ5IDYuNDEyMjQgNS44Nzc5IDYuOTQ2NTR2LTQuOTE2aC0xLjgxNjh2LTIuMDMwNTRoMS44MTY4di0xLjQ5NjE4YzAtMS43MDk5MiAxLjA2ODctMi42NzE3NSAyLjY3MTctMi42NzE3NS43NDgxIDAgMS42MDMxLjEwNjg3IDEuNjAzMS4xMDY4N3YxLjcwOTkyaC0uODU1Yy0uODU0OSAwLTEuMTc1Ni41MzQzNS0xLjE3NTYgMS4wNjg3djEuMjgyNDRoMS45MjM3bC0uMzIwNiAyLjAzMDU0aC0xLjYwMzF2NC45MTZjMy4zMTMtLjUzNDMgNS44Nzc5LTMuNDE5OCA1Ljg3NzktNi45NDY1NHoiIGZpbGw9IiMxODc3ZjIiLz48cGF0aCBkPSJtMjcuODU5NCA4Ljk3NTgyLjMyMDYtMi4wMzA1NGgtMS45MTc3di0xLjI4MjQ0YzAtLjUzNDM1LjMyMDYtMS4wNjg3IDEuMTc1Ni0xLjA2ODdoLjg2MnYtMS43MDk5M3MtLjg2NzktLjEwNjg3LTEuNzIyOS0uMTA2ODdjLTEuNDk2MiAwLTIuNTY0OS45NjE4NC0yLjU2NDkgMi42NzE3NnYxLjQ5NjE4aC0xLjgxNjh2Mi4wMzA1NGgxLjgxNjh2NC45MTU5OGMuMzM5MS4wNDgyLjc0ODEuMTA2OSAxLjA2ODcuMTA2OXMuODE2LS4wMjM5IDEuMTc1Mi0uMTA2OXYtNC45MTU5OHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+" alt="95.5 % 5 star rating on Google and Facebook" className="sc-exAgwC dpzhlW"/>
                      <p className="uqGaU">95% 5 
                      <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjExIiB2aWV3Qm94PSIwIDAgMTIgMTEiIHdpZHRoPSIxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNS40NDE1Mi45MjcwNDljLjI5OTM1LS45MjEzMTA3NCAxLjYwMjc2LS45MjEzMDkwNyAxLjkwMjExLjAwMDAwMmwuNjIwNTUgMS45MDk4MjljLjEzMzg3LjQxMjAyLjUxNzgzLjY5MDk4Ljk1MTA1LjY5MDk4aDIuMDA4MDdjLjk2ODggMCAxLjM3MTUgMS4yMzk2Mi41ODc4IDEuODA5MDJsLTEuNjI0NTcgMS4xODAzNGMtLjM1MDQ4LjI1NDY1LS40OTcxNC43MDYwMS0uMzYzMjcgMS4xMTgwM2wuNjIwNTQgMS45MDk4M2MuMjk5NC45MjEzMi0uNzU1MTMgMS42ODc0Mi0xLjUzODg0IDEuMTE4MDJsLTEuNjI0Ni0xLjE4MDMyYy0uMzUwNDgtLjI1NDY1LS44MjUwOC0uMjU0NjQtMS4xNzU1NyAwbC0xLjYyNDYgMS4xODAzMmMtLjc4MzcxLjU2OTQtMS44MzgxOS0uMTk2Ny0xLjUzODg0LTEuMTE4MDJsLjYyMDU0LTEuOTA5ODJjLjEzMzg4LS40MTIwMy0uMDEyNzgtLjg2MzQtLjM2MzI3LTEuMTE4MDRsLTEuNjI0Ni0xLjE4MDM0Yy0uNzgzNzExLS41Njk0LS4zODA5MzQtMS44MDkwMi41ODc3OS0xLjgwOTAyaDIuMDA4MTFjLjQzMzIzIDAgLjgxNzE5LS4yNzg5Ni45NTEwNi0uNjkwOTh6IiBmaWxsPSIjZmZhNTJmIi8+PC9zdmc+" className="sc-exAgwC dpzhlW" alt="star"/>
                      Ratings
                      </p> </div>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Blue;
