import React from "react";
import styled from "styled-components";

import Logo from "../assets/images/logo.svg";

export function Header() {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="Logo" />
      <menu>
        <li>Features</li>
        <li>Company</li>
        <li>Careers</li>
        <li>About</li>
      </menu>
      <div className="login-group">
        <li>Login</li>
        <button>Register</button>
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
