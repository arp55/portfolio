import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  initial: any;
  animate: any;
  exit: any;
  className: any;
};

export default function AnimatedDiv({
  children,
  animate,
  exit,
  initial,
  className,
}: Props) {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div {...{ animate, className, exit, initial }}>
        {children}
      </motion.div>
    </div>
  );
}
