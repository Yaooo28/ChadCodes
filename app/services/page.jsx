"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "At ChadCodes, we build state-of-the-art websites that are custom-made to meet the unique needs of your business. Our web development solutions are designed for optimal performance and scalability, ensuring your site stands out in the digital landscape.",
    href: "/contact"
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: "We create compelling and user-friendly designs at ChadCodes. Our UI/UX solutions focus on delivering excellent user experiences, combining visual appeal with intuitive functionality that drives user engagement and satisfaction.",
    href: "/contact"
  },
  {
    num: '03',
    title: 'System Development',
    description: "ChadCodes specializes in developing robust and scalable systems tailored to streamline your business operations. We focus on delivering high-performance solutions that integrate seamlessly with your existing workflows, enhancing productivity and efficiency.",
    href: "/contact"
  },
  {
    num: '04',
    title: 'Mobile Development',
    description: "Our team at ChadCodes excels in developing mobile applications that cater to the needs of a modern audience. Whether for iOS or Android, our apps offer seamless performance, innovative features, and superior usability that keep your users connected on the go.",
    href: "/contact"
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="grid grid-cols1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return (
          <div key={index} 
          className="flex-1 flex flex-col justify-center gap-6 group">

            {/* top  */}
            <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-blue-400 transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
            </div>

            {/* head title */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-400 transition-all duration-500">{service.title}</h2>

            {/* paragraph description */}
            <p className="text-white/85 text-[17px]">{service.description}</p>

            {/*borderline */}
            <div className="border-b border-white/20 w-full"></div>

          </div>
          );
        })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services