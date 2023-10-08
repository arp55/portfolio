import React from 'react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Landing from '../components/landing/Landing';
import WebPortfolio from '../components/portfolio/WebPortfolio';
import {AnimatePresence} from 'framer-motion';

export default function AnimatedRoutes() {
    const navigate = useNavigate();
    const location=useLocation()
  return (
    <AnimatePresence>
        {/* key passed for framer motion to work */}
        <Routes {...{location}} key={location.pathname}>
            <Route path="/" element={<Landing {...{ navigate }} />} />
            <Route path="/portfolio" element={<WebPortfolio {...{ navigate }} />} />
        </Routes>
    </AnimatePresence>
  )
}
