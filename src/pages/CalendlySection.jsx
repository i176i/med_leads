import React from "react";
import Calendly from "../utilities/Calendly"

function CalendlySection() {
  return (
    <div id="contact" className="h-full overflow-hidden pt-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center mx-4 md:mx-12">
        <div
          id="getInTouch"
          className="md:col-span-2 p-6 md:p-12 shadow-[4px_4px_6px_2px_#71717123] flex align-middle justify-center w-full flex-col rounded-xl"
        >
          <h1 className="text-3xl md:text-5xl text-center my-4 md:my-8">
            Let's Grow Together
          </h1>
          <p className="text-sm md:text-lg text-center my-2">
            Making more than <span className="font-bold">$20k/mo</span> in revenue? Let's chat.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-48 m-auto mt-4 md:mt-10">
            Get in Touch
          </button>
        </div>
        <Calendly />
      </div>
    </div>
  );
}

// footer flex align-middle flex-col mx-auto py-10 shadow-[4px_8px_9px_2px_#00000024] my-10 rounded-xl
export default CalendlySection;
