import DocsItem from "@/components/custom-components/docsPage/docsItem";
import { endpoints } from "@/constants";

const Docs = () => {
  return (
    <div className="h-screen" id="docs">
      {Object.keys(endpoints).map((key) => (
        <DocsItem key={key} />
      ))}
    </div>
  );
};

export default Docs;
