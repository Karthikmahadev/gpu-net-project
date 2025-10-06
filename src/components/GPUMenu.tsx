import React, { useState } from 'react'
import "./components.css"
import { BsFillPhoneFill } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { SiSidequest } from "react-icons/si";
import { TbArrowForwardUpDouble } from "react-icons/tb";
import { SiSquarespace } from "react-icons/si";
const GPUMenu: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const accordian = [
        {
            heading: "dApp",
            icon: <BsFillPhoneFill />,
            content: ["Provide GPUS", "GPU Credits", "Profile"]


        },
        {
            heading: "AstraChat",
            icon: <BsChat />

        },
        {
            heading: "FaTasks",
            icon: <FaTasks />

        },
        {
            heading: "Quest",
            icon: <SiSidequest />

        },
        {
            heading: "GANscan",
            icon: <TbArrowForwardUpDouble />

        },
        
    ]
    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>

            <div className='gpumenu  '>
                {accordian?.map((item, index) =>
                    <>
                        <div className='accordion-item' key={index}>
                            <div className='accordion-header' onClick={() => toggleAccordion(index)}>
                                <span className="icon" >{item.icon}</span>
                                <span className="heading-text"style={{color: openIndex === index ? "white" : "gray" }}>{item.heading}</span>
                            </div>

                            {openIndex === index && item.content && (
                                <div className="accordion-content">
                                    {item.content.map((line, i) => (
                                        <p className='accordion-line' key={i}>{line}</p>
                                    ))}
                                </div>
                            )}
                        </div>


                    </>)}
            </div>

        </>
    )
}

export default GPUMenu;