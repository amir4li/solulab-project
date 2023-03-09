import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

import memberData from "../data.json"
import Card from "./Card";

function MemberList() {
    return (
        <div className="w-full p-7 pt-5 divide-y">
            <div className="flex justify-between items-center pb-5">
                <input className="w-3/6 text-lg font-bold" placeholder="Find by Name or phone number" />
                <div className="w-3/6 flex justify-end gap-10">
                    <div className="flex gap-4">
                        <p>Gender:</p>
                        <div className="flex items-center gap-2">
                            <p>Female</p>
                            <IoIosArrowDown />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <p>Member Status</p>
                        <div className="flex items-center gap-2">
                            <p>Active Member</p>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>
            </div>

            {/* Patient list */}
            <div className="flex flex-col divide-y">
            {memberData.map((member)=> (
                <Card member={member} />
            ))}
            </div>
        </div>
    );
};

export default MemberList;

