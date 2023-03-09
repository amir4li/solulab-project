import React from 'react';

function Card({ member }) {
    return (
        <div className="flex py-7">
            <div className="flex-col w-4/6">
                <div className="flex items-baseline gap-5 mb-3">
                    <p className="text-xl font-bold">{member.name}</p>
                    <p className="text-sm font-thin">{member.email}</p>
                </div>
                <div className="flex divide-x-2">
                    <div className="pr-4">
                        <p className="text-xs font-thin">Gender</p>
                        <p className="text-sm">{member.gender}</p>
                    </div>
                    <div className="px-4">
                        <p className="text-xs">Birthday</p>
                        <p className="text-sm">{member.birthday}</p>
                    </div>
                    <div className="px-4">
                        <p className="text-xs">Phone Number</p>
                        <p className="text-sm">{member.phoneNumber}</p>
                    </div>
                    <div className="px-4">
                        <p className="text-xs">Member Status</p>
                        <p className="text-sm">{member.memberStatus}</p>
                    </div>
                </div>
            </div>
            <div className="w-2/6 flex justify-end items-center gap-5">
                <div className="flex divide-x-2">
                    <div className="px-5">
                        <p className="text-2xl">{member.pastAppoinments}</p>
                        <p className="text-sm">Past</p>
                    </div>
                    <div className="px-5">
                        <p className="text-2xl">{member.upcomingAppoinments < 10 ? "0"+member.upcomingAppoinments : member.upcomingAppoinments}</p>
                        <p className="text-sm">Upcoming</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <a className="text-start no-underline text-green-600 text-sm font-bold mx-1" href="/">View ECG</a>
                    <a className="text-start no-underline text-green-600 text-sm font-bold mx-1" href="/">REPORT</a>
                    <a className="text-start no-underline text-green-600 text-sm font-bold mx-1" href="/">DOCUMENTS</a>
                </div>
            </div>
        </div>
    );
};

export default Card;

