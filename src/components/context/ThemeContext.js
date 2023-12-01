"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(); 

const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
}

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return getFromLocalStorage()
  })

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"))
  }

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}