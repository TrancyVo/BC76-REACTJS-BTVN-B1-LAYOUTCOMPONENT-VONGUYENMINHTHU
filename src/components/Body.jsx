import React from "react";
import Banner from "./Banner";

const Body = () => {
  let arrItem = [
    {
      icon: <i class="fa-solid fa-display"></i>,
      title: "Fresh new layout",
      paragraph:
        "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      icon: <i class="fa-solid fa-cloud-arrow-down"></i>,
      title: "Free to download",
      paragraph:
        "As always, Start Bootstrap has a powerful collectin of free templates.",
    },
    {
      icon: <i class="fa-solid fa-chart-bar"></i>,
      title: "Jumbotron hero header",
      paragraph:
        "The heroic part of this template is the jumbotron hero header!",
    },
    {
      icon: <i class="fa-brands fa-bootstrap"></i>,
      title: "Feature boxes",
      paragraph:
        "We've created some custom feature boxes using Bootstrap icons!",
    },
    {
      icon: <i class="fa-solid fa-code"></i>,
      title: "Simple clean code",
      paragraph:
        "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
      icon: <i class="fa-regular fa-square-check"></i>,
      title: "A name you trust",
      paragraph:
        "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];
  function renderArrItem() {
    return arrItem.map((item, index) => {
      return (
        <>
          <div className="relative pt-0 p-12 bg-[#f8f9fa] rounded-md flex flex-col justify-center items-center text-center">
            <div className="flex justify-center items-center w-16 h-16 bg-[#0d6efd] text-white rounded-lg text-3xl -mt-6 mb-6">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-2 ">{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          </div>
        </>
      );
    });
  }

  return (
    <div className="container px-4 lg:p-[50px]">
      <Banner />
      <div className="grid grid-cols-1 mt-6 lg:grid-cols-2 xl:grid-cols-3 xl:mt-0 gap-12 mb-12">
        {renderArrItem()}
      </div>
    </div>
  );
};

export default Body;
