import { paramerterType } from "@/constants";

interface docsItemProp {
    title: string;
    endpoint: string;
    method: string;
    parameters: paramerterType[];
    description: string;
    limiter:string;
    response: string;
}

const docsItem = () => {
  return (
    <div>docsItem</div>
  )
}

export default docsItem