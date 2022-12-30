import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";
import { IoIosClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="w-[90%]  z-10 h-[40px] py-7 mx-auto flex justify-between items-center  mt-[24px] bg-transparent">
      <div>
        <Link href="/">Vagellry</Link>
      </div>
      <div>
        <ul className="flex tablet:justify-between tablet:flex-row tablet:relative tablet:flex tablet:h-[48px] tablet:top-0 tablet:bg-opacity-0 laptop:flex mobile:h-[120px] bg-purple flex-col absolute right-0 top-20 w-[220px]  items-center py-5 mobile:hidden">
          <Link href="/" className=" font-normal px-4 text-xl">
            Home
          </Link>
          <Link href="gallery" className=" font-normal px-4 text-xl ">
            Gallery
          </Link>
        </ul>
      </div>

      <div onClick={handleClick} className=" tablet:hidden mobile:flex ">
        {click ? <IoIosClose /> : <AiOutlineMenu />}
      </div>
      <div
        className={
          click
            ? " z-10 tablet:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            : " z-10 tablet:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
        }
      >
        <ul className="">
          <Link
            href="/"
            className=" font-normal px-4 text-xl "
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            href="gallery"
            className=" font-normal px-4 text-xl "
            onClick={handleClick}
          >
            Gallery
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
