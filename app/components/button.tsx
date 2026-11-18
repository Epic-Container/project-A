"use client";
import React from "react";

type variants = "danger" | "primary" | "accent" | "special" | "none";
type animation = "line" | "slide" | "color";
type shape = "circle" | "square" | "round";

interface ButtonProps {
  text: string;
  variant?: variants;
  animations?: animation;
  shape?: shape;
  disabled?: boolean; 
  click?: () => void;
}

const color = {};

export default function Button({
  text,
  variant,
  animations,
  shape,
  disabled,
  click,
}: ButtonProps) {
  return (
    <button className={`relative px-6 py-3 border-2 overflow-hidden group rounded-full`}>
      <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
      <span className={`relative z-20 group-hover:text-black transition-colors duration-400`}>{text}</span> 
    </button>
  );
}
