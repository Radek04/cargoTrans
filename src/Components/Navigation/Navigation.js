import React from "react";
import { NavLink } from "react-router-dom";

const lists = [
  {
    name: "Strona główna",
    path: "/",
  },
  {
    name: "Szukamy",
    path: "/lookFor",
  },
  {
    name: "Zlecamy",
    path: "/weOrder",
  },
  {
    name: "Błąd strony",
    path: "*",
  },
];

const Navigation = () => {
  const menu = lists.filter((list) => {
    if (list.path.length > 2) {
      debugger;
      return (
        <button key={list.name}>
          <NavLink to={list.path}>{list.name}</NavLink>
        </button>
      );
    } else {
      return null;
    }
  });

  return <>{menu}</>;
};

export default Navigation;
