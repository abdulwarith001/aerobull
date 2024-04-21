import React from "react";
import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/Error'
export default function Error() {
  return (
    <Wrapper>
        <p>
          We can't seem to find the page you are looking for
          </p>
          |
        <Link className="error-link" to="/">
          Go back to Homepage
        </Link>
    </Wrapper>
  );
}
