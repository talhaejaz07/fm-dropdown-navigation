import React from "react";

import { HeaderWrapper, Li, Button } from "../components";

import Logo from "../images/logo.svg";

export function Header() {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="Logo" />
      <menu>
        <Li dropDown="True">Features</Li>
        <Li dropDown="True">Company</Li>
        <Li>Careers</Li>
        <Li>About</Li>
      </menu>
      <div className="login-group">
        <Li>Login</Li>
        <Button text="Register" />
      </div>
    </HeaderWrapper>
  );
}
