import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import {Contact,HomeDropDown,InternationalAdmissionDropdown,ScholarshipDropdown,VisaAndImmigrationDropdown,StudentsDropdown,PartnersDropdown,CampusDropdown } from "./Dropdown";
import Search from "./Search";


function Header() {
    const [showMenu,setShowMenu]=useState('');
    const [homeOpen, sethomeOpen] = useState(false);
    const [intOpen, setintOpen] = useState(false);
    const [schOpen, setschOpen] = useState(false);
    const [visaOpen, setvisaOpen] = useState(false);
    const [partnersOpen, setpartnersOpen] = useState(false);
    const [campusOpen, setcampusOpen] = useState(false);
    const [studOpen, setstudOpen] = useState(false);
    const [contact, setcontactOpen] = useState(false);
  return (
    <header className="text-xs w-screen h-20 border-cyan-300 flex flex-row items-center shadow-md justify-end sm:justify-around  border-b-4 bg-white">
      
      <a
        href="/"
        className=""
      >
        
        <img src="https://iiitd.ac.in/sites/default/files/style3colorsmall.png" className="w-60 h-10" alt="" />
      </a>
      <Search/>
      <nav className="border-cyan-800  text-xs hidden sm:flex flex-end justify-between items-center gap-2 font-semibold">
        <a href="#" onMouseEnter={() => sethomeOpen(false)} onMouseLeave={() => sethomeOpen(false)} className="h-6 py-1 p-2 border-r-2 border-cyan-500 font-normal hover:text-cyan-500  relative text-xs z-10 bg-gray-white  px-2  transition-all duration-300 ">
          Home
          <HomeDropDown isOpen={homeOpen}/>
        </a>
        <a href="#"  onMouseEnter={() => setintOpen(true)} onMouseLeave={() => setintOpen(false)} className="h-6 border-r-2 py-1 border-cyan-500  font-normal hover:text-cyan-500  text-xs relative z-10 bg-gray-white  px-2  transition-all duration-300" >
          International Admission
          <InternationalAdmissionDropdown isOpen={intOpen}/>
        </a>
        <a href="#"  onMouseEnter={() => setschOpen(true)} onMouseLeave={() => setschOpen(false)} className="h-6 border-r-2 py-1 border-cyan-500 font-normal hover:text-cyan-500  text-xs relative z-10 bg-gray-white  px-2  transition-all duration-300" >
         Scholarship
         <ScholarshipDropdown isOpen={schOpen}/>
        </a>
        <a href="#" onMouseEnter={() =>setvisaOpen(false)} onMouseLeave={() => setvisaOpen(false)} className="h-6 border-r-2 py-1 border-cyan-500 font-normal hover:text-cyan-500  relative text-xs z-10 bg-gray-white  px-2  transition-all duration-300">
         Visa and Immigration
         <VisaAndImmigrationDropdown isOpen={visaOpen}/>
        </a>
        <a href="#"  onMouseEnter={() => setstudOpen(true)} onMouseLeave={() => setstudOpen(false)} className="h-6 border-r-2 py-1 border-cyan-500 font-normal hover:text-cyan-500 text-xs relative z-10 bg-gray-white  px-2  transition-all duration-300" >
        Students
        <StudentsDropdown isOpen={studOpen}/>
        </a>
        <a href="#"  onMouseEnter={() => setpartnersOpen(true)} onMouseLeave={() => setpartnersOpen(false)} className="h-6 border-r-2 py-1 border-cyan-500 font-normal hover:text-cyan-500  text-xs relative z-10 bg-gray-white  px-2  transition-all duration-300" >
           Partners
           <PartnersDropdown isOpen={partnersOpen}/>
        </a>
        <a href="#"  onMouseEnter={() => setcampusOpen(true)} onMouseLeave={() => setcampusOpen(false)} className="h-6 font-normal py-1  border-r-2 border-cyan-500 hover:text-cyan-500  text-xs relative z-10 bg-gray-white  px-2  transition-all duration-300" >
          Campus
          <CampusDropdown isOpen={campusOpen}/>
        </a>
        <a href="#"  onMouseEnter={() => setcontactOpen(true)} onMouseLeave={() => setcontactOpen(false)} className="h-6 font-normal py-1 border-cyan-500 hover:text-cyan-500  text-xs relative z-10 bg-gray-white  px-2  transition-all duration-300" >
          Contact Us
          <Contact isOpen={contact}/>
        </a>
        
      </nav>
     
    </header>
  );
}

export default Header;