"use client";

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className="w-[46px] h-[24px] flex justify-between p-[2px] items-center relative cursor-pointer border-solid border-[1.5px] border-[rgba(83,194,139,0.44)] rounded-[10px]" style={mode === "light" ? {backgroundColor: "black" } : {backgroundColor: "white"} } onClick={toggle}>
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">☀️</div>
      <div className="w-[15px] h-[15px] rounded-full absolute" style={mode === "light" ? {left: "2px", backgroundColor: "white"} : {right: "2px", backgroundColor: "black"}} />
    </div>
  )
}

export default DarkModeToggle