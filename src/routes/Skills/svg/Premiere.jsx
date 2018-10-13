import React from "react";

const Premiere = props => (
  <svg viewBox="0 0 240 240" {...props}>
    <radialGradient
      id="a"
      cx={97.71}
      cy={160.714}
      r={143.432}
      gradientTransform="matrix(1 0 0 -1 0 242)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#180024" stopOpacity={0.85} />
      <stop offset={0.767} stopColor="#180024" />
    </radialGradient>
    <path d="M10 10h220v214H10V10z" fill="url(#a)" />
    <path
      d="M0 0v234h240V0H0zm10 10h220v214H10V10zm52.2 44.8c0-.7.2-1.2 1-1.2 6.4-.3 15.8-.5 25.7-.5 27.7 0 39.8 15.2 39.8 34.7 0 25.4-18.4 36.3-41 36.3-3.8 0-5.1-.2-7.8-.2v38.4c0 .8-.3 1.2-1.2 1.2H63.4c-.8 0-1.2-.3-1.2-1.2V54.8zM80 107.9c2.3.2 4.1.2 8.1.2 11.7 0 22.7-4.1 22.7-20 0-12.7-7.8-19.1-21.2-19.1-4 0-7.8.2-9.6.3v38.6zm64-9.1c0-1.2 0-4.1-.5-9.7 0-.8.1-1 .8-1.3 6.1-2.5 20.4-6.9 36.6-6.9.8 0 1.2.2 1.2 1v14.5c0 .8-.3 1-1.1 1-6.3-.3-15.4.5-18.9 2v63c0 .8-.3 1.2-1.2 1.2h-15.7c-.8 0-1.2-.3-1.2-1.2V98.8z"
      fill="#e788ff"
    />
  </svg>
);

export default Premiere;

