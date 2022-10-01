import { styled } from "@mui/material/styles";

export const PNF = {
  NFContainer: styled("div")(() => ({
    width: "100%",
    height: "100vh",
    backgroundColor: "#FFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })),
  NFHeading: styled("h1")(() => ({
    color: "black",
    fontSize: "40px",
    lineHeight: "0px",
    "@media (max-width: 550px)": {
      fontSize: "35px",
    },
    "@media (max-width: 460px)": {
      fontSize: "35px",
    },
    "@media (max-width: 460px)": {
      fontSize: "20px",
    },
  })),
  NFMedia: styled("img")(() => ({
    width: "50%",
    height: "300px",
    objectFitL: "contain",
    "@media (max-width: 720px)": {},
    "@media (max-width: 550px)": {
      height: "auto",
    },
    "@media (max-width: 460px)": {
      height: "auto",
    },
    "@media (max-width: 320px)": {
      height: "200px",
    },
  })),
  NFSubHeading: styled("p")(() => ({
    fontSize: "28px",
    fontWeight: "400",
    color: "black",
    lineHeight: "0px",
    fontWeight: "400",
    "@media (max-width: 720px)": {
      fontSize: "24px",
    },
    "@media (max-width: 550px)": {
      fontSize: "20px",
    },
    "@media (max-width: 460px)": {
      fontSize: "14px",
    },
    "@media (max-width: 320px)": {
      fontSize: "12px",
      paddin: "10px",
    },
  })),
  NFGoHomeButton: styled("button")(() => ({
    color: "white",
    backgroundColor: "#6C63FF",
    padding: "15px",
    paddingLeft: "20px",
    paddingRight: "20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",

    "@media (max-width: 460px)": {
      padding: "8px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    "@media (max-width: 320px)": {
      padding: "8px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  })),
};
