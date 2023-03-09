import React from 'react';
import { TfiPulse } from "react-icons/tfi";
import { BsPlusLg } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { AiOutlineFolderOpen, AiOutlineFileText } from "react-icons/ai";
import { TbFileUpload } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

function Navbar() {
    return (
        <nav className="flex flex-col gap-1 border-2 border-r w-30">
            <div className="w-24 h-24 flex flex-col gap-2 justify-center items-center nav-item cursor-pointer">
                <TfiPulse fontSize="28px" />
            </div>
            <div className="w-24 h-24 flex flex-col gap-2 justify-center items-center nav-item cursor-pointer">
                <BsPlusLg fontSize="28px" />
                <p className="text-xs font-thin">NEW</p>
            </div>
            <div className="w-24 h-24 flex flex-col gap-2 justify-center items-center nav-item cursor-pointer">
                <RxPerson fontSize="28px" />
                <p className="text-xs font-thin">PATIENT</p>
            </div>
            <div className="w-24 h-24 flex flex-col gap-2 justify-center items-center nav-item cursor-pointer">
                <AiOutlineFolderOpen fontSize="28px" />
                <p className="text-xs font-thin">FOLDER</p>
            </div>
            <div className="w-24 h-24 flex flex-col gap-2 justify-center items-center nav-item cursor-pointer">
                <TbFileUpload fontSize="28px" />
                <p className="text-xs font-thin">UPLOAD</p>
            </div>
            <div className="w-24 h-24 flex flex-col gap-2 justify-center items-center nav-item cursor-pointer">
                <AiOutlineFileText fontSize="28px" />
                <p className="text-xs font-thin">REPORT</p>
            </div>
            <div className="w-24 h-24 flex flex-col gap-2 justify-center items-center nav-item cursor-pointer">
                <CiSettings fontSize="28px" />
                <p className="text-xs font-thin">SETTING</p>
            </div>
            <div className="w-24 h-24 flex flex-col gap-2 justify-center items-center nav-item cursor-pointer">
                <IoIosLogOut fontSize="28px" />
                <p className="text-xs font-thin">LOGOUT</p>
            </div>
        </nav>
    );
};

export default Navbar;


