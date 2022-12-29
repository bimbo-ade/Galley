import React, { useState } from "react";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="w-[90%]  h-[40px] py-7 mx-auto flex justify-between items-center font-rose mt-[24px] bg-transparent">
      <div>
        <Link href="/">Vagellry</Link>
      </div>
      <div>
        <ul className="flex justify-between mobile:hidden tablet:flex laptop:flex">
          <Link href="/" className=" font-normal px-4 text-xl">
            Home
          </Link>
          <Link href="gallery" className=" font-normal px-4 text-xl ">
            Gallery
          </Link>
        </ul>
      </div>

      <div onClick={handleClick} className=" tablet:hidden ">
        {click ? <IoIosClose /> : <AiOutlineMenu />}
      </div>
    </div>
  );
};

export default Navbar;
