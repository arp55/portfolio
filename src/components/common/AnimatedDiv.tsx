import React from 'react'
import { motion, VariantLabels,Target} from 'framer-motion'

type animatedProp=boolean | Target | VariantLabels;

type Props={
    children:React.ReactNode;
    initial:any;
    animate:any;
    exit:any;
    className:any;
}

export default function AnimatedDiv({children,animate,exit,initial,className}:Props) {
  return (
    <motion.div {...{animate,className,exit,initial}}>
        {children}
    </motion.div>
  )
}
