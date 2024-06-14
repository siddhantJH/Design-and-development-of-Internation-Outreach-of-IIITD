// DropdownContent.js
import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export const HomeDropDown = ({ isOpen }) => {
  return (
    isOpen && (
      <div
        className="origin-top-right absolute right-0  mt-2 w-56 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
            
          <a
            href="#"
            className="block px-4 py-2 font-thin text-sm text-gray-700 hover:bg-gray-100 hover:text-cyan-400"
            role="menuitem"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            Option 3
          </a>
        </div>
      </div>
    )
  );
};



export const  InternationalAdmissionDropdown = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-30 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
                <NavLink to="/application-process">
                <a
                href="#"
                className="block px-4 font-thin py-2 text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600 border-b-2 border-cyan-600"
                role="menuitem"
                >
                Application Process
                </a>
                </NavLink>

                <NavLink to="/brochure">
                <a
              href="#"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600" 
              role="menuitem"
            >
              Information Brochure
            </a>
                </NavLink>
            
            <NavLink to="/FAQs">
            <a
              href="#"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600"
              role="menuitem"
            >
              FAQs
            </a>
            </NavLink>
            
          </div>
        </div>
      )
    );
  };


  export const  ScholarshipDropdown = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-right absolute  right-0 mt-2 w-30  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2  text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2  text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2  text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600"
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )
    );
  };

  export const  VisaAndImmigrationDropdown = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-30  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2  text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              className="block px-4 py-2  text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              className="block px-4 py-2  text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2"
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )
    );
  };


  export const  StudentsDropdown = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-right absolute  right-0 mt-2 w-40  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <NavLink to="/testimony">
            <a
              href="#"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600" 
              role="menuitem"
            >
              International Student Testimony
            </a>
            </NavLink>
            <NavLink to="student-support">
            <a
              href="#"
              className="block px-4 py-2 font-thin  text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
              Internation Student Support
            </a>

            </NavLink>


            <NavLink to="/blog">
            <a
              href="#"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  "
              role="menuitem"
            >
              Blog
            </a>
            </NavLink>
           
          </div>
        </div>
      )
    );
  };

  export const  PartnersDropdown = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-40 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <NavLink to="/joint-program">
            <a
              href="#"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
              Join Degree Program
            </a>
            </NavLink>

            <NavLink to="/summer-exchange">
            <a
              href="#"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
              Summer Exchange 
            </a>
            </NavLink>
            
            <NavLink to="/summer-program">
            <a
              href="#"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
              Summer Program
            </a>
            </NavLink>
            
            <NavLink to="/winter-program">
            <a
              href="#"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
              Winter Program
            </a>
            </NavLink>
            
            <NavLink to="/faculty-development">
            <a
              href="#"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  "
              role="menuitem"
            >
              Faculty Development Program
            </a>
            </NavLink>
           
          </div>
        </div>
      )
    );
  };

  export const  CampusDropdown = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-40 font-thin shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <NavLink to="/virtual-tour">
            <a
              href="#"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
             Virtual Campus Tour            </a>
            </NavLink>
            
            <NavLink to="/facilities">
            <a
              href="#"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
              Hostell and Mess Facilities
            </a>
            </NavLink>
           
           <NavLink to="wellbeing">
           <a
              href="#"
              className="block px-4 py-2  font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  "
              role="menuitem"
            >
              Wellbeing Cell
            </a>
           </NavLink>
           
          </div>
        </div>
      )
    );
  };


  export const  Contact = ({ isOpen }) => {
    return (
      isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-40 font-thin shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <NavLink to="/virtual-tour">
            <a
              href="/call"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2 border-cyan-600"
              role="menuitem"
            >
             Email           
             </a>
            </NavLink>
            <NavLink to="/facilities">
            <a
              href="/call"
              className="block px-4 py-2 font-thin text-thin text-gray-700 hover:bg-gray-100 hover:text-cyan-600  border-b-2"
              role="menuitem"
            >
              Call Us
            </a>
            </NavLink>

          </div>
        </div>
      )
    );
  }




export default {Contact,HomeDropDown,InternationalAdmissionDropdown,ScholarshipDropdown,VisaAndImmigrationDropdown,StudentsDropdown,PartnersDropdown,CampusDropdown}
