import { SvgIcon } from "@mui/material";
import React from "react";
import stackIcon from "./stackIcon.svg";
import stackIconSelected from "./stackIconSelected.svg";

import Image from "next/image";

export const NftBotIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      width="39"
      height="34"
      viewBox="0 0 39 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.4315 5.97614V9.85187H30.9831C32.6929 9.85187 34.091 11.267 34.091 12.9977V16.9722H38.3166C38.6913 16.9722 38.9999 17.2814 38.9999 17.6639V25.7213C38.9999 26.1006 38.6945 26.413 38.3166 26.413H34.091V30.3875C34.091 32.1182 32.6929 33.5333 30.9831 33.5333H7.99696C6.28717 33.5333 4.8891 32.1182 4.8891 30.3875V26.413H0.990904C0.61305 26.413 0.307617 26.1038 0.307617 25.7245V17.6639C0.307617 17.2846 0.61305 16.9722 0.990904 16.9722H4.8891V13.0009C4.8891 11.2702 6.28717 9.85506 7.99696 9.85506H18.5485V5.97614C17.3363 5.57455 16.464 4.42394 16.464 3.06297C16.464 1.37053 17.818 0 19.49 0C21.162 0 22.516 1.37053 22.516 3.06297C22.516 4.42394 21.6407 5.57455 20.4315 5.97614ZM13.2271 25.4153H26.0773C26.7039 25.4153 27.2172 25.9349 27.2172 26.5691V27.111C27.2172 27.7452 26.7039 28.2648 26.0773 28.2648H13.2271C12.6005 28.2648 12.0872 27.7452 12.0872 27.111V26.5691C12.0872 25.9317 12.6005 25.4153 13.2271 25.4153ZM25.0886 15.1682C26.7795 15.1682 28.1523 16.5547 28.1523 18.2695C28.1523 19.981 26.7826 21.3675 25.0886 21.3675C23.3945 21.3675 22.028 19.981 22.028 18.2695C22.0248 16.5547 23.3977 15.1682 25.0886 15.1682ZM14.219 15.1682C15.9099 15.1682 17.2796 16.5547 17.2796 18.2695C17.2796 19.981 15.9099 21.3675 14.219 21.3675C12.5281 21.3675 11.1583 19.981 11.1583 18.2695C11.1583 16.5547 12.5281 15.1682 14.219 15.1682Z"
      />
    </SvgIcon>
  );
};

export const TaskIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 41 45"
      fill="none"
      width="41"
      height="43"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40.3386 2.93612C40.3386 1.31463 39.024 0 37.4025 0H3.5975C1.976 0 0.661377 1.31463 0.661377 2.93612V40.0637C0.661377 41.6854 1.976 43 3.5975 43H37.4023C39.024 43 40.3385 41.6854 40.3385 40.0639V2.93612H40.3386ZM16.2977 38.8955H6.72047V30.1H16.2977V38.8955ZM16.2977 25.8H6.72047V17.2H16.2977V25.8ZM16.2977 12.9H6.72047V4.10455H16.2977V12.9ZM27.3024 39.0186L22.1608 33.877L24.3509 31.6869L27.3024 34.6386L31.9249 30.0162L34.115 32.2062L27.3024 39.0186ZM27.3024 26.0013L22.1608 20.8597L24.3509 18.6696L27.3024 21.6212L31.9249 16.9987L34.115 19.1888L27.3024 26.0013ZM27.3024 12.9839L22.1608 7.84222L24.3509 5.65215L27.3024 8.60371L31.9249 3.98121L34.115 6.17128L27.3024 12.9839Z" />
    </SvgIcon>
  );
};

export const SecondaryWalletsIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 38 37"
      width="38"
      height="37"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.6367 28.2554C26.7679 28.2554 25.2475 26.735 25.2475 24.8662V19.2377C25.2475 17.3688 26.7679 15.8485 28.6367 15.8485H37.4679C37.5214 15.8485 37.5746 15.8501 37.6275 15.8525V10.2456C37.6275 8.80227 36.4575 7.63226 35.0142 7.63226H2.61338C1.17001 7.63218 0 8.80218 0 10.2455V33.8583C0 35.3016 1.17001 36.4717 2.61338 36.4717H35.0142C36.4575 36.4717 37.6275 35.3017 37.6275 33.8583V28.2514C37.5746 28.2538 37.5214 28.2554 37.4679 28.2554H28.6367Z" />
      <path d="M30.4637 2.84522C29.879 1.07559 27.9705 0.114983 26.2009 0.699646L12.9246 5.08581H31.2039L30.4637 2.84522Z" />
    </SvgIcon>
  );
};

export const StakeIcon = (props) => {
  return (
    <div>
      <Image
        src={stackIcon}
        alt={"icon"}
        width="25px"
        height={"25px"}
        {...props}
      />
    </div>
  );
};

export const SelectedStakeIcon = (props) => {
  return (
    <div>
      <Image
        src={stackIconSelected}
        alt={"icon"}
        width="25px"
        height={"25px"}
        {...props}
      />
    </div>
  );
};

export const ETHIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      width="16"
      height="28"
      viewBox="0 0 16 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99769 0L7.823 0.63789V19.148L7.99769 19.3353L15.9953 14.2565L7.99769 0Z"
        fill="#343434"
      />
      <path
        d="M7.99762 0L0 14.2565L7.99762 19.3354V10.3511V0Z"
        fill="#8C8C8C"
      />
      <path
        d="M7.99761 20.962L7.89917 21.0909V27.6846L7.99761 27.9936L16 15.8857L7.99761 20.962Z"
        fill="#3C3C3B"
      />
      <path
        d="M7.99762 27.9936V20.962L0 15.8857L7.99762 27.9936Z"
        fill="#8C8C8C"
      />
      <path
        d="M7.99756 19.3352L15.9951 14.2564L7.99756 10.3511V19.3352Z"
        fill="#141414"
      />
      <path d="M0 14.2564L7.9975 19.3352V10.3511L0 14.2564Z" fill="#393939" />
    </SvgIcon>
  );
};

export const ETHLightIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      width="22"
      height="34"
      viewBox="0 0 22 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3553 0L11.1274 0.77458V23.2511L11.3553 23.4786L21.7887 17.3115L11.3553 0Z"
        fill="#9F9F9F"
      />
      <path
        d="M11.3552 0L0.921875 17.3115L11.3552 23.4787V12.5692V0Z"
        fill="white"
      />
      <path
        d="M11.355 25.4541L11.2266 25.6106V33.6172L11.355 33.9924L21.7945 19.29L11.355 25.4541Z"
        fill="#888888"
      />
      <path
        d="M11.3552 33.9923V25.4539L0.921875 19.2899L11.3552 33.9923Z"
        fill="white"
      />
      <path
        d="M11.355 23.4786L21.7882 17.3116L11.355 12.5693V23.4786Z"
        fill="#9F9F9F"
      />
      <path
        d="M0.921875 17.3116L11.3551 23.4786V12.5693L0.921875 17.3116Z"
        fill="#747474"
      />
    </SvgIcon>
  );
};

export const TickIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      width="31"
      height="24"
      viewBox="0 0 31 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 13.8L10.1429 21L28 3"
        stroke="#44A5FF"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
};
