import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
  return (
    <header className="bg-blue-300">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-blue-800 hover:text-blue-500 text-2xl font-bold tracking-wide"
          >
            Nicholas Lara
          </NavLink>
          <NavLink to="/about"
            className="inline-flex items-center py-3 px-3 my-6 text-blue-700 hover:text-red-500"
            activeClassName="font-bold italic"
          >
            About Me
          </NavLink>
          {/* Have to remove education for now because something on the page is broken */}
          {/* <NavLink to="/education"
            className="inline-flex items-center py-3 px-3 my-6 text-blue-700 hover:text-red-500"
            activeClassName="font-bold italic"
          >
            Education
          </NavLink> */}
          {/* Removing post. Might need later as template.
          <NavLink to="/post"
            className="inline-flex items-center py-3 px-3 my-6 text-blue-700 hover:text-red-500"
            activeClassName="font-bold italic"
          >
            Post
          </NavLink> */}
          <NavLink to="/project"
            className="inline-flex items-center py-3 px-3 my-6 text-blue-700 hover:text-red-500"
            activeClassName="font-bold italic"
          >
            Projects
          </NavLink>
          <NavLink to="/workhistory"
            className="inline-flex items-center py-3 px-3 my-6 text-blue-700 hover:text-red-500"
            activeClassName="font-bold italic"
          >
            Work History
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://linkedin.com/in/nick-lara-2925a4164"
            target="_blank"
            className="mr-4"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://github.com/nickalara"
            target="_blank"
            className="mr-4"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="mailto:nickalara@gmail.com"
            target="_blank"
            className="mr-4"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
    </header>
  )
};
//Using react-social-icons: https://jaketrent.github.io/react-social-icons/