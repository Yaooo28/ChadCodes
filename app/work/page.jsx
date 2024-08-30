"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from 'next/image';
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects =[
  {
    num: "01",
    category: "Front-end Development",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, omnis est odit asperiores laborum consectetur, eveniet, optio doloremque deleniti totam adipisci quia? Sed perspiciatis, temporibus blanditiis consectetur nobis adipisci quasi.", 
    image: '/assets/work/newb2.png',
    github: "",
  },
  {
    num: "02",
    category: "Diploma Verification Web App",
    title: "Project 2",
    description: "Built with React and Express.js, this application leverages blockchain technology to generate unique Token IDs for diploma verification. Institutions can issue verifiable credentials, and employers can easily authenticate the legitimacy of diplomas, ensuring trust and transparency in the credentialing process.", 
    image: '/assets/work/newb1.png',
    github: "https://github.com/jwsorima",
  },{
    num: "03",
    category: "Sera Android Application Object Recognition and Auditory Feedback",
    title: "Project 3",
    description: "Sera: An AI-powered app for visually impaired users that aids in grocery shopping by identifying products via smartphone camera and providing auditory feedback. It also supports hands-free operation with speech-to-text features. While effective, it requires some improvements to further enhance user independence.", 
    image: '/assets/work/newb3.png',
    github: "https://github.com/Yaooo28/SeraFinalBuild",
  }

]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) =>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition:{ delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            {/* outline */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>

            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-400 transition-all duration-500 capitalize">
              {project.category} Project
            </h2>

            {/* Project description */}
            <p className="text-white/75 text-[18px] leading-relaxed">
              {project.description}
            </p>

            {/* border line horizontal */}
            <div className="border border-white/25 my-4"></div>

            {/* button  */}
            {project.github && (
              <div className="flex items-center gap-4">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-blue-400 transition-all duration-300">
                        <BsGithub className="text-white text-3xl group-hover:text-white"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repositorys</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-full">
              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                {/* Overlay */}
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10 group-hover:bg-black/40 transition-all duration-300"></div>
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden">  
                  <Image 
                    src={project.image} 
                    layout="fill" 
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                    alt="Project image" 
                  />
                </div>
              </div>
            </SwiperSlide>
            
            ))}
            {/* sliders-buttons */}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-blue-400 hover:bg-blue-500 text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
          </Swiper>
        </div>
      </div>
    </div>
    </motion.section>
  )
}

export default Work;
