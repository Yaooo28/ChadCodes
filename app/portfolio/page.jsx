"use client";
import Image from 'next/image'
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaLaravel, FaDatabase} from "react-icons/fa";
import { SiMysql, SiMongodb } from "react-icons/si";
import {SiTailwindcss, SiNextdotjs, SiAndroidstudio, SiCsharp, SiFirebase } from "react-icons/si";
import React, { useState } from 'react';

//about us
const about = {
  title: 'About Us',
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
}

// Meet my team
const team = {
  title: "Meet my team",
  description: "Meet the innovative minds at ChadCodes! Our diverse team of experts is driven by creativity, expertise, and a passion for transforming ideas into reality. Each member brings a unique set of skills, ranging from project management to design and development, ensuring high-quality solutions tailored to meet your business needs. Get to know the faces behind our projects—dedicated professionals committed to pushing boundaries and achieving excellence.",
  item: [{
    name: "Zander Garcia",
    role: "Project Manager",
    imageUrl: "/assets/1.png",
    achievements: "Led major projects and teams successfully"
  },
  {
    name: "Kirby Ordaz",
    role: "UX/UI Designer",
    imageUrl: "/assets/2.png",
    achievements: "Led major projects and teams successfully"
  },
  {
    name: "Lemuel Pineda",
    role: "Quality Assurance (QA) Engineer",
    imageUrl: "/assets/3.png",
    achievements: "Led major projects and teams successfully"
  },
  {
    name: "Jerome Padayao",
    role: "Front-End Developer",
    imageUrl: "/assets/4.png",
    achievements: "Led major projects and teams successfully"
  },
  {
    name: "James William Sorima",
    role: "Back-end Developer",
    imageUrl: "/assets/5.png",
    achievements: "Led major projects and teams successfully"
  },
  {
    name: "Danilo Robles",
    role: "Front-End Developer",
    imageUrl: "/assets/6.png",
    achievements: "Led major projects and teams successfully" 
  }
]
}

const skills = {
  title: 'Skills',
  description: "Proficient in modern web and software development technologies, including HTML5, CSS3, JavaScript, React.js, and Next.js for front-end development. Experienced in using Tailwind CSS for responsive design, Node.js for backend solutions, and Figma for UI/UX design. Adept in full-stack development using Laravel and proficient in database management with MySQL and MongoDB. Skilled in mobile development with Android Studio, and cloud-based application development using Firebase. Additionally, proficient in developing desktop and enterprise applications using C#.",
  skillList: [{
    icon: <FaHtml5 />,
    name: "HTML 5",
  },
  {
    icon: <FaCss3 />,
    name: "CSS 3",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
  },
  {
    icon: <FaReact />,
    name: "React.js",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.jss",
  },{
    icon: <FaFigma />,
    name: "Figma",
  },
  {
    icon: <FaLaravel />,
    name: "Laravel",
  },
  {
    icon: <SiMysql />,
    name: "MySQL Database",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },{
    icon: <SiAndroidstudio />,
    name: "Android Studio",
  },
  {
    icon: <SiCsharp  />,
    name: "C#",
  },
  {
    icon: <SiFirebase  />,
    name: "FireBase",
  },
]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}, 
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">

      <div className="container mx-auto">
        <Tabs defaultValue="team" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Us</TabsTrigger>
          </TabsList>
            
          {/* Content */}
          <div className="min-h-[70vh] w-full">
              {/* Teams content */}
              <TabsContent value="team" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{team.title}</h3>
                  <p className="max-w-[905px] text-white/85 mx-auto xl:mx-0 text-[18px]">{team.description}</p>
                  <ScrollArea className="h-[640px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-[15px] pb-[50px]!important">
                    {team.item.map((item, index) => {
                      const [isFlipped, setIsFlipped] = useState(false);
                      return (
                        <li key={index}
                            onClick={() => setIsFlipped(!isFlipped)}
                            className={`flex flex-col items-center text-center bg-[#232329] h-[320px] py-6 px-10 rounded-xl justify-between shadow-lg hover:bg-slate-400 transition-all duration-500 ease-in-out transform hover:scale-105
                                        ${team.item.length % 2 !== 0 && index === team.item.length - 1 ? 'lg:col-start-1 lg:col-end-3' : ''}`}>
                          {!isFlipped ? (
                            <>
                              <img src={item.imageUrl} alt={item.name} className="w-[160px] h-[160px] rounded-full" />
                              <h3 className="text-xl text-white mt-4">{item.role}</h3>
                              <h4 className="text-lg text-stone-200">{item.name}</h4>
                            </>
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center">
                              <h3 className="text-xl text-white">Achievements</h3>
                              <p className="text-lg text-stone-200">{item.achievements}</p>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
                </div>
              </TabsContent>
                        
              {/* Skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-x-[600px] text-white/85 mx-auto xl:mx-0 text-[18px]">{skills.description}</p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index) => (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group transition-all duration-300 ease-in-out transform hover:scale-105'>
                                <div className="text-6xl group-hover:text-blue-400 transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                </div>
              </TabsContent>

              {/* About Us */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className='flex flex-col gap-[40px] items-center xl:items-start'>
                    <h3 className='text-4xl font-bold text-blue-400' style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', fontWeight: 700 }}>
                        About ChadCodes
                    </h3>
                    <p className='max-w-[800px] text-gray-200 mx-auto xl:mx-0' style={{ fontSize: '18px', lineHeight: '28px', fontFamily: 'Open Sans, sans-serif' }}>
                        Welcome to ChadCodes, where your business challenges meet innovative, technology-driven solutions. Our mission is to empower your business by developing cutting-edge, user-centric digital products that drive success and lead market trends.
                    </p>
                    <div className='flex flex-col items-center xl:items-start gap-6'>
                        <h4 className='text-xl font-semibold text-blue-400' style={{ fontFamily: 'Arial, sans-serif' }}>
                            Our Expertise:
                        </h4>
                        <ul className='list-disc list-inside text-left text-gray-300' style={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', paddingLeft: '20px', textIndent: '-20px' }}>
                            <li>Web Development: Tailored websites designed for maximum impact with advanced functionalities and stunning visuals that captivate and convert.</li>
                            <li>Mobile Applications: State-of-the-art iOS and Android apps engineered for optimal performance and user engagement to maximize reach and satisfaction.</li>
                            <li>System Design: Constructing robust, scalable, and secure back-end systems that support seamless growth aligned with your strategic goals.</li>
                            <li>UI/UX Design: Crafting intuitive and beautiful user interfaces that ensure a delightful user experience, driving user retention and business growth.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center xl:items-start gap-6'>
                        <h4 className='text-xl font-semibold text-blue-400' style={{ fontFamily: 'Arial, sans-serif' }}>
                            Why We Stand Out:
                        </h4>
                        <p className='max-w-[800px] text-gray-300 mx-auto xl:mx-0' style={{ fontSize: '18px', lineHeight: '28px', fontFamily: 'Open Sans, sans-serif' }}>
                            We utilize Agile methodologies, CI/CD practices, and the latest tech stacks, positioning us at the forefront of innovation. Dive into our portfolio of diverse projects across industries here. Our track record includes numerous success stories and glowing testimonials, reflecting our commitment to quality and client satisfaction. Our collaborative approach ensures every project reflects your vision and exceeds your expectations.
                        </p>
                    </div>
                    <a href="/contact" className="mt-6 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: '40px' }}>
                        Start Your Project with Us
                    </a>
                </div>
              </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Portfolio;
