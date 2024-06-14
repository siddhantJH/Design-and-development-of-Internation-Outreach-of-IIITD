import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { HomeDropDown,InternationalAdmissionDropdown,ScholarshipDropdown,VisaAndImmigrationDropdown,StudentsDropdown,PartnersDropdown,CampusDropdown } from "./Dropdown";

function Header() {
    const [showMenu,setShowMenu]=useState('');
    const [homeOpen, sethomeOpen] = useState(false);
    const [intOpen, setintOpen] = useState(false);
    const [schOpen, setschOpen] = useState(false);
    const [visaOpen, setvisaOpen] = useState(false);
    const [partnersOpen, setpartnersOpen] = useState(false);
    const [campusOpen, setcampusOpen] = useState(false);
    const [studOpen, setstudOpen] = useState(false);
  return (
    <header className="border-b-2 border-cyan-300 flex flex-row items-center shadow-md justify-end sm:justify-around  border-b-2 bg-white">
      <a
        href="/"
        className=""
      >
        <img src="https://www.iiitd.ac.in/sites/default/files/images/logo/logo.jpg" className="w-30 h-10" alt="" />
      </a>
      <nav className="border-cyan-500 text-sm text-xs hidden sm:flex flex-end justify-between items-center gap-4 font-semibold">
        <h6 href="#" onMouseEnter={() => sethomeOpen(false)} onMouseLeave={() => sethomeOpen(false)} className=" font-normal hover:shadow-xl  relative text-xs z-10 bg-gray-white py-2 px-2  transition-all duration-300 ">
          Home
          <HomeDropDown isOpen={homeOpen}/>
        </h6>
        <h6 href="#"  onMouseEnter={() => setintOpen(true)} onMouseLeave={() => setintOpen(false)} className="font-normal hover:shadow-xl  text-xs relative z-10 bg-gray-white py-2 px-2  transition-all duration-300" >
          International Admission
          <InternationalAdmissionDropdown isOpen={intOpen}/>
        </h6>
        <h6 href="#"  onMouseEnter={() => setschOpen(false)} onMouseLeave={() => setschOpen(false)} className="font-normal hover:shadow-xl  text-xs relative z-10 bg-gray-white py-2 px-2  transition-all duration-300" >
         Scholarship
         <ScholarshipDropdown isOpen={schOpen}/>
        </h6>
        <h6 href="#" onMouseEnter={() =>setvisaOpen(false)} onMouseLeave={() => setvisaOpen(false)} className="font-normal hover:shadow-xl  relative text-xs z-10 bg-gray-white py-2 px-2  transition-all duration-300">
         Visa and Immigration
         <VisaAndImmigrationDropdown isOpen={visaOpen}/>
        </h6>
        <h6 href="#"  onMouseEnter={() => setstudOpen(true)} onMouseLeave={() => setstudOpen(false)} className="font-normal hover:shadow-xl text-xs relative z-10 bg-gray-white py-2 px-2  transition-all duration-300" >
        Students
        <StudentsDropdown isOpen={studOpen}/>
        </h6>
        <h6 href="#"  onMouseEnter={() => setpartnersOpen(true)} onMouseLeave={() => setpartnersOpen(false)} className="font-normal hover:shadow-xl  text-xs relative z-10 bg-gray-white py-2 px-2  transition-all duration-300" >
           Partners
           <PartnersDropdown isOpen={partnersOpen}/>
        </h6>
        <h6 href="#"  onMouseEnter={() => setcampusOpen(true)} onMouseLeave={() => setcampusOpen(false)} className="font-normal hover:shadow-xl  text-xs relative z-10 bg-gray-white py-2 px-2  transition-all duration-300" >
          Campus
          <CampusDropdown isOpen={campusOpen}/>
        </h6>
      </nav>
    </header>
  );
}

export default Header;