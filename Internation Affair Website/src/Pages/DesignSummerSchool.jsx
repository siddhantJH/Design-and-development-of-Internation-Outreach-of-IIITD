//priyanshu
import React from "react";
import './DesignSummerSchool.css'
import linkedinIcon from '../assets/linkedin.png'
import instagramIcon from '../assets/instagram.png'
import facebookIcon from '../assets/facebook.png'


function DesignSummerSchool() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <header className="Application-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#f5f5f5' }}>
                <a href="/">
                    <img src="https://iiitd.ac.in/sites/default/files/style3colorsmall.png" className="w-60 h-10" alt="IIITD Logo" />
                </a>
                <div className="pageinfo" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    Design Summer School
                </div>
            </header>
            <div className="container-1" style={{ backgroundImage: 'url("https://www.immerse.education/wp-content/uploads/2015/12/Cambridge-scaled-1.png")', backgroundSize: 'cover', padding: '50px', color: '#fff', textAlign: 'center' }}>
                <div className="content-1 flex-col"  style={{backgroundImage: 'Internation Affair Website\\src\assets\\9157633.png")'}}>
                    <div className="head-1" style={{ fontSize: '48px', marginBottom: '20px' }}>
                      <h1>Design<br />Summer<br />School</h1>
                    </div>
                    <button className="button-1" style={{ padding: '15px 25px', fontSize: '25px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '20px' }}>
                        Register
                    </button>
                    <h4 className="p-1">From: dd/mm/yyyy To: dd/mm/yyyy</h4>
                </div>
            </div>
            <div className="container-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px', backgroundColor: '#f9f9f9' }}>
                <img src="https://iiitd.ac.in/dss/public/notes-2-1400w.png" className="rounded-tr-[120px] rounded-bl-[120px]" alt="Design Elements" style={{ width: '50%', marginRight: '20px' }} />
                <h1 className="content-2" style={{ fontSize: '46px' }}>
                    Learn.<br /> Connect.<br /> Grow.
                </h1>
            </div>
            <div className="container-3" style={{ padding: '50px', backgroundColor: '#fff' }}>
                <h2 className="text-center">About the Summer School</h2>
                <div className="content-3 flex" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <div className="about" style={{ width: '60%', fontSize: '18px', lineHeight: '1.6' }}>
                        Explore Design at our 5-day Summer School at IIIT Delhi for both professionals and students.
                        <br />Step up to the design disciplines of the modern world such as XR (AR, VR & MR), Game Design and Human-Centered AI.
                        <br />Explore our carefully curated 3 tracks covering modern day skills and tools in the domains of Human-Centered AI, Game and Animation Design, and XR consisting of MR, VR, and AR.
                    </div>
                    <div className=" justify-self-end" style={{ width: '35%', textAlign: 'right' }}>
                        <p>Contact Us at: xxxx@iiitd.ac.in</p>
                        <div className="icons" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                            <a href="">
                                <img className="icon_link" src={linkedinIcon} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
                            </a>
                            <a href="">
                                <img className="icon_link" src={instagramIcon} alt="Instagram" style={{ width: '30px', height: '30px' }} />
                            </a>
                            <a href="">
                                <img className="icon_link" src={facebookIcon} alt="Facebook" style={{ width: '30px', height: '30px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-4" style={{ padding: '50px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
                <h2>Schedule</h2>
                <div className="content-4" style={{ marginTop: '20px', fontSize: '18px' }}>
                    Extensive Schedule planned across the summer program.
                    <br />
                    <button className="button-2" style={{ padding: '8px 15px', fontSize: '16px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}>
                        Download the Schedule
                    </button>
                </div>
            </div>
            <div className="container-5" style={{ padding: '50px', backgroundColor: '#fff', textAlign: 'center' }}>
                <h2>Our Partners</h2>
                <div className="content-5" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <img src="https://iiitd.ac.in/dss/public/hcdlogo-200h.png" alt="Partner 1" style={{ width: '150px' }} />
                    <img src="https://iiitd.ac.in/dss/public/artboard%205%20copy1-200h.png" alt="Partner 2" style={{ width: '150px' }} />
                </div>
            </div>
        </div>
    );
}

export default DesignSummerSchool;