import React from "react";

const Navbar = () => {
  return (
    <div className="w-[80%]  h-[48px]  mx-auto flex justify-between items-center font-rose mt-[36px] ">
      <div>
        <h2>LOGO</h2>
      </div>
      <div>
        <ul className="flex justify-between mobile:hidden tablet:flex laptop:flex">
          <li className="text-black font-normal px-4 text-xl">Home</li>
          <li className="text-black font-normal px-4 text-xl ">
            Place to Stay
          </li>
          <li className="text-black font-normal px-4 text-xl ">NFTs</li>
          <li className="text-black font-normal px-4 text-xl ">Community</li>
        </ul>
      </div>
      <div>
        <button className="bg-purple h-[48px] px-[20px] text-base text-white font-normal rounded hidden tablet:block laptop:block">
          {" "}
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
