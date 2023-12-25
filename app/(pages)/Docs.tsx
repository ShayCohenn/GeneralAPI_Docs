import DocsItem from "@/components/custom-components/docsPage/docsItem";
import { endpoints, iconMapping } from "@/constants";
import { useEffect, useState } from "react";

const Docs = () => {
  return (
    <div className="sm:mr-0 mr-12" id="docs">
      {/*Looping through the categories, assigning icon for each one
     and rendering the docs  */}
      {Object.keys(endpoints).map((key) => {
        const Icon = iconMapping[key];
        return (
          <div key={key}>
            <div className="flex items-center justify-center">
              <h2
                className="lg:text-6xl xl:text-7xl 2xl:text-8xl 
            text-5xl text-center font-bold"
              >
                {key} {/*title*/}
              </h2>
              {Icon && (
                <Icon
                  className="h-12 w-12 lg:w-14 lg:h-14 xl:w-16 
                xl:h-16 2xl:w-20 2xl:h-20 ml-2"
                />
              )}
            </div>
            {/* Rendering the docs for each category */}
            {endpoints[key].map((item, index) => (
              <DocsItem key={index} data={item} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Docs;
