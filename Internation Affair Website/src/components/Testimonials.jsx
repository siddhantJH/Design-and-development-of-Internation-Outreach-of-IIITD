import React, { useState } from "react";
import TestimonialList from "./TestimonialList";
import './TestimonialStyle.css'


function Testimonials(){
	return (<>
	<div className="h-[40rem] w-screen  grid grid-cols-1">
		
		{/* carousel container */}
		<div className="bg-[#F5F5F5] overflow-hidden">
			{/* first div */}
			<div> <h2 className="text-bold font-bold content text-[40px] py-6 text-5xl font-roboto text-[#219C90]">Hear from Our Past Students</h2>
			</div>
			{/* Card : we need multiple of these card inside the div */}
			{
				TestimonialList.map((obj, index) => (
					<div key={index} className="w-[50%] mx-auto my-8 relative">
					  <div className="inline-block text-[90px] absolute left-0 top-[25%] text-[#219C90]">
						<button className="hover-button">{"<"}</button>
					  </div>
					  <div className="inline-block text-[90px] absolute right-0 top-[25%] text-[#219C90]">
						<button className="hover-button">{">"}</button>
					  </div>
					  <img src={obj.Image} className="hover-button h-[15rem] w-[15rem] rounded-[100px] mx-auto text-xl" alt="" />
					  <h5 className="py-2">{obj.name}</h5>
					  <p>{obj['job-description']}</p>
					  <h4 className="playwrite-ng-modern text-3xl py-5 text-[#219C90]">{obj.review}</h4>
					</div>
				  ))
			}
			{/* <div className=" w-[50%] mx-auto my-8 relative">
				<div className=" inline-block text-[90px] absolute left-0 top-[25%] text-[#219C90]"><button className="hover-button">{"<"}</button></div>
				<div className=" inline-block text-[90px] absolute right-0 top-[25%] text-[#219C90]"><button className="hover-button">{">"}</button></div>
			<img src={TestimonialList[0].Image} className="hover-button h-[15rem] w-[15rem] rounded-[100px] mx-auto text-xl" alt="" />
			<h5 className="py-2">{TestimonialList[0].name}</h5>
			<p>{TestimonialList[0]["job-description"]}</p>
			<h4 className="playwrite-ng-modern text-3xl	py-5 text-[#219C90]">{TestimonialList[0].review}</h4>
			</div>

			<div className="w-[50%] mx-auto my-8 relative">
				<div className=" inline-block text-[90px] absolute left-0 top-[25%] text-[#219C90]"><button className="hover-button">{"<"}</button></div>
				<div className=" inline-block text-[90px] absolute right-0 top-[25%] text-[#219C90]"><button className="hover-button">{">"}</button></div>
			<img src={TestimonialList[1].Image} className="hover-button h-[15rem] w-[15rem] rounded-[100px] mx-auto text-xl" alt="" />
			<h5 className="py-2">{TestimonialList[1].name}</h5>
			<p>{TestimonialList[1]["job-description"]}</p>
			<h4 className="playwrite-ng-modern text-3xl	py-5 text-[#219C90]">{TestimonialList[1].review}</h4>
			</div> */}
		</div>
	</div>
	</>)
}


export default Testimonials