import React from "react";
import { Link } from "@reach/router";

export const ButtonFull = ({ name, link }) => {
  return (
    <a
      href={link}
      className="max-w-min whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
      {name}
    </a>
  );
};
