import React from 'react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Landing from '../components/landing/Landing';
import WebPortfolio from '../components/portfolio/Web/WebPortfolio';
import {AnimatePresence} from 'framer-motion';
import MobilePortfolio from '../components/portfolio/Mobile/MobilePortfolio';

export default function AnimatedRoutes() {
    const navigate = useNavigate();
    const location=useLocation()
  return (
    <AnimatePresence>
        {/* key passed for framer motion to work */}
        <Routes {...{location}} key={location.pathname}>
            <Route path="/" element={<Landing {...{ navigate }} />} />
            <Route path="/web-portfolio" element={<WebPortfolio {...{ navigate }} />} />
            <Route path="/mobile-portfolio" element={<MobilePortfolio {...{ navigate }} />} />
        </Routes>
    </AnimatePresence>
  )
}
