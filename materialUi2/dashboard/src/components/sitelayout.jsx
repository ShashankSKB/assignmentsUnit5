
import React from "react";
import { Navbar } from "./navbar";

function SiteLayout(props) {
  return <Navbar>{props.children}</Navbar>;
}

export { SiteLayout };
