"use client";

import { MinusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QA } from "../FAQ Questions/questions";

type Props = {
  QA: QA;
};
function FaqContainer({ QA }: Props) {
 
  const [clicked, setClicked] = useState<boolean>();
  const variants = {
    rotate: {
      rotate: 90,
    },
    stop: {
      rotate: 0,
    },
  };
  return (
    <div
      onClick={() => setClicked(!clicked)}
      className=" cursor-pointer space-y-3"
    >
      <div className=" flex justify-between items-center">
        <p className=" font-semibold">{QA.question}</p>
        <div className="   group p-2 bg-[#242424] transition-all  ease-linear duration-200   text-white rounded-lg relative  shadow-lg">
          <MinusIcon className="w-4  " />
          <motion.div
            variants={variants}
            animate={clicked ? "stop" : "rotate"}
            className="  absolute    top-2  z-20 "
          >
            <MinusIcon className=" w-4  " />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2, ease: "linear", type: "tween" }}
            exit={{ y: -10 }}
            className=" text-gray-500"
          >
            {QA.answer}
          </motion.div>
        )}
      </AnimatePresence>
      <div className=" w-full h-[1px] bg-gray-500"></div>
    </div>
  );
}
export default FaqContainer;
