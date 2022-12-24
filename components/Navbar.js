import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-[80%]  h-[40px]  mx-auto flex justify-between items-center font-rose mt-[24px] ">
      <div>
        <h2>Vagellry</h2>
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
    </div>
  );
};

export default Navbar;
