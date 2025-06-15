import { Link } from "react-router-dom";
import React from "react";

const NavLink = ({ children, urlPath, className }) => (
  <Link
    to={urlPath}
    className={`${className} hover:text-sky-500 hover:transition`}
  >
    {children}
  </Link>
);

export default React.memo(NavLink);
