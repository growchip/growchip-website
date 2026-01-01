import Link from "next/link";

interface ArrowButtonProps {
  text: string;
  link: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ text, link, onClick, className = "" }: ArrowButtonProps) => {
  return (
    <button
      className=" text-start bg-linear-to-r from-[#84DA2E] to-[#2596BE] px-10 py-3 mt-10 rounded-2xl  hover:scale-105 transition-transform duration-300    capitalize"
    >
      <Link href={`${link}`}> {text} </Link>
    </button>
  );
};

export default Button;
