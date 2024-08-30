"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Whatsapp",
    link: "https://wa.me/639392445101",  // Updated to use WhatsApp link
    description: "(+63) 939-244-5101" 
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=chadcodeservices@gmail.com",  // Updated to use mailto: scheme
    description: "chadcodeservices@gmail.com"  
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Located at: Philippines"  // Non-clickable text
  },
];

import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-blue-400">Let's work Together</h3>
                <p className="text-white/70">ChadCodes offers bespoke digital solutions in web and system development, mobile app creation, and UI/UX design. Our dedicated team excels in transforming client visions into engaging digital experiences with customized functionality and superior aesthetic design. From revamping existing systems to crafting new platforms, we focus on delivering high-quality, scalable solutions that propel businesses forward. Partner with ChadCodes to turn your digital aspirations into realities.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="First Name"/>
                  <Input type="lastname" placeholder="Last Name"/>
                  <Input type="email" placeholder="Email"/>
                  <Input type="phone" placeholder="Phone Number"/>
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">System Development</SelectItem>
                      <SelectItem value="mst">Mobile Development</SelectItem>
                      <SelectItem value="uxd">UI/UX Design</SelectItem> 
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea className="h-[200px]" placeholder="Type your message here." />
                <Button size="md" className="max-w-40">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-blue-400 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/70">{item.title}</p>
                      {item.link ? (
                        <a className="text-xl" href={item.link}>{item.description}</a>
                      ) : (
                        <p className="text-xl">{item.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </motion.section>
  )
}

export default contact;
