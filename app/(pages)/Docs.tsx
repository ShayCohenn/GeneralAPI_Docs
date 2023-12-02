import DocsItem from "@/components/custom-components/docsPage/docsItem";
import { endpoints } from "@/constants";

const Docs = () => {
  return (
    <div className="h-screen mr-12 sm:mr-0" id="docs">
      {Object.keys(endpoints).map((key) => (
        <div key={key}>
          <h2
            className="lg:text-5xl xl:text-6xl 2xl:text-7xl 
            text-4xl text-center font-bold"
            id={key}
          >
            {key}
          </h2>
          {endpoints[key].map((item, index) => (
            <DocsItem key={index} data={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Docs;
