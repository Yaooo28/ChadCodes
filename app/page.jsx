import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
          <div className="typewriter">
            <h1 className="h1 mb-6">
              <span className="line">Welcome to</span><br/>
              <span className="line2 text-blue-400">ChadCodes!</span>
            </h1>
          </div>

          <p className="max-w-[620px] mb-8 text-white/80 text-[20px] fade-in">
            At ChadCodes, our dynamic team of tech enthusiasts excels in crafting exceptional digital experiences.
            We specialize in designing sleek websites, developing custom software solutions, and building intuitive mobile applications tailored to your business's unique needs. Our approach melds technical expertise with creative design, enhancing your digital presence and distinguishing you in a competitive market.
          </p>
          <p className="max-w-[620px] mb-1 text-white/80 text-[20px] fade-in2">
            Discover how we enable our clients to achieve digital excellence 
            and drive success. Explore our portfolio to see the innovative 
            solutions that make us a trusted partner in technology.
          </p>

          </div>
          {/* images */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home