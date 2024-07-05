import React from "react";

const FooterCallToAction = () => {
  return (
    <div className="bg-slate-800 bg-gradient-to-tr from-purple-700 to-indigo-800 py-24 flex justify-center items-center mt-20">
      <div className="text-center text-white px-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Ready to drive revenue growth?
        </h2>
        <p className="mt-2 text-lg md:text-xl leading-8 text-gray-300">
          Find Med Leads opportunities by joining today.
        </p>
        <div className="mt-10 flex justify-center">
          <form className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              className="text-slate-800 h-10 w-full sm:w-auto rounded-md border border-input px-3 py-2 text-sm bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              placeholder="Enter your work email"
              required
              id="email"
            />
            <button
              className="h-10 px-4 py-2 bg-indigo-600 text-sm font-medium text-primary-foreground rounded-md transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              type="submit"
            >
              Get Started
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export { FooterCallToAction };