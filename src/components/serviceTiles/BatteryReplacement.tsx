import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { style, componentRef } = useScrollGrow();

  //   const componentRef = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: componentRef,
  //     offset: ["0 1", "1.2 1"],
  //   });

  //   const scaleValues = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  //   const opacityValues = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="bg-red-500 h-[430px] rounded-md col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
