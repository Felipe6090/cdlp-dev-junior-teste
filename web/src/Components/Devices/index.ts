const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",

  footerCustomBreakPoint: "490px",
};

export const devices = {
  mobileS: `@media (max-width: ${size.mobileS})`,
  mobileM: `@media (max-width: ${size.mobileM})`,
  mobileL: `@media (max-width: ${size.mobileL})`,
  tablet: `@media (max-width: ${size.tablet})`,
  laptop: `@media (max-width: ${size.laptop})`,
  laptopL: `@media (max-width: ${size.laptopL})`,
  desktop: `@media (max-width: ${size.desktop})`,
  desktopL: `@media (max-width: ${size.desktop})`,

  footerCustomBreakPoint: `@media (max-width: ${size.footerCustomBreakPoint})`,
};

//Modo de uso
//
//import { device } from "../bases/devices";
//
// export const Name = styled.div`
//     width: 10px;

//     ${device.laptop} {
//       width: 5px;
//     }
// `;
