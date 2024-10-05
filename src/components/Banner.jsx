import React from "react";

const Banner = () => {
  return (
    <div className="py-12">
      <div>
        <div className="p-12 rounded-lg bg-primary text-center">
          <div className="m-12">
            <h1 className="text-5xl font-bold mb-2">A warm welcome!</h1>
            <p className="text-2xl mb-4">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>

            <a
              href="#"
              className="px-4 py-3 text-xl inline-block text-white bg-[#0d6efd] hover:bg-[#0b5ed7] rounded-lg border border-[#0d6efd] hover:border-[#0b5ed7] transition-all duration-150"
            >
              Call to action
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
