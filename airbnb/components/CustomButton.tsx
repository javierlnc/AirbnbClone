"use client";
import React from "react";

interface CustomButtonProps {
  text: string;
  logo?: React.ReactNode;
  showLogo: boolean;
  showText: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, logo, showLogo =  true, showText=true }) => {
  return (
    <button className="cursor-pointer flex items-center p-2 lg:p-4 bg-airbnb-neutral hover:bg-airbnb-dark transition rounded-full text-white">
     {showLogo && logo && (
        <span className="mr-2">
            {logo}
        </span>
     )}
     {showText &&(
        <span className="button-text">
            {text}
        </span>
     )}
     <style jsx>{`
        .button-text {
          display: ${showText ? 'inline' : 'none'};
        }
      `}</style>
      
    </button>
  );
};

export default CustomButton;
