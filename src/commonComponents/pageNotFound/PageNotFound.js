import React from "react";
import { useParams } from "react-router-dom";
import ErrorImage from "../../assets/error.png";
import { PNF } from "./PageNotFoundStyle";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <PNF.NFContainer>
      <PNF.NFHeading>Oops! Page not found</PNF.NFHeading>
      <PNF.NFMedia src={ErrorImage} />
      <PNF.NFSubHeading>
        Sorry! We can't find the page you are looking for.
      </PNF.NFSubHeading>
      <PNF.NFGoHomeButton>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Go to Home
        </Link>
      </PNF.NFGoHomeButton>
    </PNF.NFContainer>
  );
}
