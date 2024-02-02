import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  // const intro = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.25,
  //       duration: 0.5,
  //       delayChildren: 1,
  //     },
  //   },
  // };

  // const introDip = {
  //   hidden: {
  //     opacity: 0,
  //     y: -200,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       type: "spring",
  //       bounce: 0.5,
  //     },
  //   },
  // };
  const intro = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
  };

  const IntroChildren = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.5,
      },
    },
  };

  const laptop = {
    initial: {
      y: 0,
      scale: 5,
      rotate: 0,
    },
    animate: {
      y: 20,
      rotate: -35,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <Container className="h-screen lg:h-[calc(100vh-64px)]  grid grid-cols-1  lg:grid-cols-2 place-content-center">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            variants={IntroChildren}
            className=" text-[40px] lg:text-[96px] font-bold text-nowrap"
          >
            <span className="text-gray">Don't worry,</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            variants={IntroChildren}
            className="text-dark-gray mt-10 mb-5 max-w-[50ch]"
          >
            Welcome to <span className="text-primary-foreground">iRepair</span>,
            your one-stop place for all kinds of
            <span className="text-primary-foreground">
              {" "}
              Macbook repairs
            </span>{" "}
            and diagnostics.
          </motion.p>
          <motion.div variants={IntroChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={laptop}
          initial="initial"
          animate="animate"
          className="mx-auto w-3/4 lg:w-full mt-10"
        >
          <img className=" h-[95%] object-contain" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
