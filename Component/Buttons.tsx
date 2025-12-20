import React from 'react'

type ButtonProps = {
  text: string;
  onClick?: () => void;
};


const Buttons: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        bg-gradient-to-r from-[#84DA2E] to-[#2596BE]
        px-[30px] py-3 mt-10 rounded-2xl
        hover:scale-105 transition-transform duration-300
        text-3xl capitalize
      "
    >
      {text}
    </button>
  );
};
export default Buttons