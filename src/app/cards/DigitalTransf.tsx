import React from 'react';

const DigitalTransf = () => {
  return (
    <div
      className="my-5 max-h-[650px] max-w-[680px] rounded-md bg-gray-800
        shadow-lg
        text-slate-100
        p-4
        flex
        flex-col
        font-dm-sans
        shadow-black
      "
    >
      <div className="flex items-center justify-between w-full my-4">
        <h1 className="!m-0">The 4th Digital Transformation</h1>
        <h1 className="!m-0 size-7 rounded-md hover:bg-gray-900 flex items-center justify-center cursor-pointer">
          x
        </h1>
      </div>
      <div className="h-[1px] w-full bg-slate-700" />
      <div className="grid grid-cols-1 s:grid-cols-1 xs:grid-cols-2 gap-4 size-full mt-4">
        <div className="bg-gray-700 border border-slate-600 rounded-md flex flex-col items-start p-4 h-min gap-2">
          <h1 className="!m-0">26th November, 2022</h1>
          <h1 className="!m-0">California, USA</h1>
          <h1 className="!m-0">Participants</h1>
          <h1 className="!m-0">Online</h1>
          <h1 className="!m-0">Google Meet</h1>
          <h1 className="!m-0">Duration</h1>
          <h1 className="!m-0">All day</h1>
        </div>
        <div className="flex flex-col size-auto items-start">
          <h1 className="!m-0 ">Details</h1>
          <p className="mt-2">
            The 4th Digital Transformation and Industry 4.0 Free Online
            Conference Organized by Flowbite and Themesberg, Live on Saturday
            26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex items-start gap-3">
          <button
            className="
          rounded-md
            bg-blue-600
            px-3
            py-1
            shadow-md
            hover:bg-blue-700
          "
          >
            Accept
          </button>
          <button
            className="
          rounded-md
            bg-red-500
            px-3
            py-1
            shadow-md
            hover:bg-red-600
          "
          >
            Decline
          </button>
        </div>
        <button className=" rounded-md bg-transparent border border-slate-700 px-3 py-1 hover:bg-slate-700 ">
          Preview
        </button>
      </div>
    </div>
  );
};

export default DigitalTransf;
