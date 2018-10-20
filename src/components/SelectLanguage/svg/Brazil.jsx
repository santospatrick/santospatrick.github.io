import React from "react";

const Brazil = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 21.4 15"
    {...props}
  >
    <path fill="#009b3a" d="M0 0h21.4v15H0z" />
    <path d="M1.8 7.5l8.9 5.7 8.9-5.7-8.9-5.7-8.9 5.7z" fill="#fedf00" />
    <circle cx={10.7} cy={7.5} r={3.8} fill="#002776" />
    <defs>
      <circle id="a" cx={10.7} cy={7.5} r={3.8} />
    </defs>
    <clipPath id="b">
      <use xlinkHref="#a" overflow="visible" />
    </clipPath>
    <path
      d="M-.5 15c0-5 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1h-.5c0-4.7-3.8-8.6-8.6-8.6S0 10.3 0 15h-.5z"
      clipPath="url(#b)"
      fill="#fff"
    />
  </svg>
);

export default Brazil;
