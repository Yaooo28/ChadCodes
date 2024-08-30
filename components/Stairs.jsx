import { animate, delay, motion } from "framer-motion";

//variants
const stairAnimation = {
    initial:{
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculate reverse index for straggred delay
const reverseIndex = (index) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
    {/* render and motion divs step of the stairs */

    }
        {[...Array(6)].map((_, index) => {
            return (
           <motion.dev 
            key = {index} 
            variants={stairAnimation} 
            initial="initial"
            animate="animate" 
            exit="exit" 
            transition={{
                duration: 0.4,
                ease: 'easeInOut',
                delay: reverseIndex(index) * 0.1
            }} 
            className="h-full w-full bg-zinc-200 relative"
            />
        );
        })}
    </>
  );
};

export default Stairs