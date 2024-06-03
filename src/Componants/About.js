import React from "react";
import { Styles } from "../utils/Style";
import NakiraAshworth from "../assets/NakiraAshworth.pdf";
import { TiArrowDownOutline } from "react-icons/ti"
import Profile from '../assets/profile.png';
import "../App.css";

function About() {
    return (
        <div className='flex flex-wrap justify-center items-center mt-10 p-10 ' id="Home">

<div className='flex-1 py-4' >
    <span className={Styles.heroHeadText}>
        Hi there, I'm <span className="text-orange-600" >
Nakira
        </span>
        <br/>

        <span className={Styles.heroSubText}>
            Welcome to my Portfolio!
        </span>

    </span>
    <br/>
<div className="w-[14rem]" >
        <a
        href={NakiraAshworth}
        download="NakiraAshworth"
        target="_blank"
        rel="noreferrer"
        >
            <div className="p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 
            border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500 "> 
            <TiArrowDownOutline className="text-lg mr-3 mt-1 text-orange-500">
                </TiArrowDownOutline> Resume
                
            </div>  

        </a>

    </div>

    </div>
    <div className="flex flex-wrap" >
            <img src={Profile} alt="profile" className="element object-contain p-4" />
        </div>
        </div>
    );
}

export default About;
