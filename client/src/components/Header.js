import React from "react";
import { PlusIcon } from "@heroicons/react/solid";
import { ColorSwatchIcon } from "@heroicons/react/outline";
import { ButtonFull } from "./ButtonFull";

export const Header = () => {
  return (
    <header className="mb-14">
      <div className="w-full h-24 flex justify-center">
        <div className="w-full max-w-screen-xl flex justify-between items-center border-b-2 border-gray-100">
          <div className="flex w-full items-center">
            <img
              className="h-8 w-auto sm:h-10 mr-10 "
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />

            <nav className="flex w-1/4 justify-around">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900">
                Elem 1
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900">
                Elem 2
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900">
                Elem 3
              </a>
            </nav>
          </div>
          <ButtonFull name="Create a store" link="#" />
        </div>
      </div>
    </header>
  );
};
