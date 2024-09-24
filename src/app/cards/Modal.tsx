import React from "react";
import Button from "@mui/material/Button";
const Modal = () => {
  return (
    <div className="my-5 max-h-max max-w-[450px] rounded-md bg-gray-800 text-slate-100 shadow-lg shadow-black">
      <div className="flex flex-col gap-2 p-4">
        <div className="my-4 flex size-auto items-center justify-between">
          <h1 className="!m-0">The 4th Digital Transformation</h1>
          <h1 className="!m-0 flex size-7 cursor-pointer items-center justify-center rounded-md !p-0 hover:bg-gray-900">
            x
          </h1>
        </div>
        <div className="h-[.5px] w-full bg-slate-700" />
        <h2>26th November, 2022</h2>
        <h2>California, USA</h2>
        <h2 className="mt-1 font-bold">Details</h2>
        <p className="md:text-md -mt-2 text-start text-gray-400 s:text-lg">
          The 4th Digital Transformation and Industry 4.0 Free Online Conference
          Organized by Flowbite and Themesberg, Live on Saturday 26th Nov at
          02:00 pm GMT | 04:00 pm EET on Zoom Webinars
        </p>
        <div className="flex gap-3">
          <button className="rounded-md bg-blue-600 px-3 py-1 shadow-md hover:bg-blue-700">
            Cancel
          </button>
          <button className="rounded-md bg-red-500 px-3 py-1 shadow-md hover:bg-red-600">
            Accept
          </button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
