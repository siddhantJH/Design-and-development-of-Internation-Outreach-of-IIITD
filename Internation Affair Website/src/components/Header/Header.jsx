import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Contact, HomeDropDown, InternationalAdmissionDropdown, ScholarshipDropdown, VisaAndImmigrationDropdown, StudentsDropdown, PartnersDropdown, CampusDropdown } from "./Dropdown";
import Search from "./Search";
import Chatbot from "../ChatBot";

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [homeOpen, setHomeOpen] = useState(false);
    const [intOpen, setIntOpen] = useState(false);
    const [schOpen, setSchOpen] = useState(false);
    const [visaOpen, setVisaOpen] = useState(false);
    const [partnersOpen, setPartnersOpen] = useState(false);
    const [campusOpen, setCampusOpen] = useState(false);
    const [studOpen, setStudOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);
    return (
        <>
            <header className="bg-[#022742] fixed z-50 text-xs w-screen py-10 h-14 flex flex-row items-center shadow-xl border-20 justify-between sm:justify-around text-white">
                <button onClick={toggleMenu} className="sm:hidden text-white p-2">
                    {showMenu ? <GrClose size={24} /> : <GiHamburgerMenu size={24} />}
                </button>
                <nav className={`border-cyan-800 text-xs ${showMenu ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row justify-between  items-center gap-2 font-semibold absolute sm:relative top-14 sm:top-0 left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent`}>
                    <a href="#" onMouseEnter={() => setHomeOpen(false)} onMouseLeave={() => setHomeOpen(false)} className="h-7 py-1 p-1 border-cyan-500 font-normal hover-underline-animation relative text-xl z-10 px-2 transition-all duration-300">
                        Home
                        <HomeDropDown isOpen={homeOpen} />
                    </a>
                    <a href="#" onMouseEnter={() => setIntOpen(true)} onMouseLeave={() => setIntOpen(false)} className="h-7 py-1 border-cyan-500 hover-underline-animation font-normal text-xl relative z-10 bg-gray-white px-2 transition-all duration-300">
                        International Admission
                        <InternationalAdmissionDropdown isOpen={intOpen} />
                    </a>
                    <a href="#" onMouseEnter={() => setSchOpen(true)} onMouseLeave={() => setSchOpen(false)} className="h-7 py-1 border-cyan-500 font-normal hover-underline-animation text-xl relative z-10 bg-gray-white px-2 transition-all duration-300">
                        Scholarship
                        <ScholarshipDropdown isOpen={schOpen} />
                    </a>
                    <a href="#" onMouseEnter={() => setVisaOpen(false)} onMouseLeave={() => setVisaOpen(false)} className="h-7 py-1 border-cyan-500 font-normal hover-underline-animation relative text-xl z-10 bg-gray-white px-2 transition-all duration-300">
                        Visa and Immigration
                        <VisaAndImmigrationDropdown isOpen={visaOpen} />
                    </a>
                    <a href="#" onMouseEnter={() => setStudOpen(true)} onMouseLeave={() => setStudOpen(false)} className="h-7 py-1 border-cyan-500 font-normal hover-underline-animation text-xl relative z-10 bg-gray-white px-2 transition-all duration-300">
                        Students
                        <StudentsDropdown isOpen={studOpen} />
                    </a>
                    <a href="#" onMouseEnter={() => setPartnersOpen(true)} onMouseLeave={() => setPartnersOpen(false)} className="h-7 py-1 border-cyan-500 font-normal hover-underline-animation text-xl relative z-10 bg-gray-white px-2 transition-all duration-300">
                        Partners
                        <PartnersDropdown isOpen={partnersOpen} />
                    </a>
                    <a href="#" onMouseEnter={() => setCampusOpen(true)} onMouseLeave={() => setCampusOpen(false)} className="h-7 py-1 border-cyan-500 font-normal hover-underline-animation  text-xl relative z-10 bg-gray-white px-2 transition-all duration-300">
                        Campus
                        <CampusDropdown isOpen={campusOpen} />
                    </a>
                    <a href="#" onMouseEnter={() => setContactOpen(true)} onMouseLeave={() => setContactOpen(false)} className="h-7 py-1 border-cyan-500 font-normal hover-underline-animation  text-xl relative z-10 bg-gray-white px-2 transition-all duration-300">
                        Contact Us
                        <Contact isOpen={contactOpen} />
                    </a>
                </nav>
            </header>
        </>
    );
}

export default Header;
