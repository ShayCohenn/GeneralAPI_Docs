"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DocsItemProp } from "@/constants";
import { Check, Copy, X } from "lucide-react";
import { useState } from "react";
import CopyCodeBox from "../CopyCodeBox";

const DocsItem = ({ data }: { data: DocsItemProp }) => {
  const [lastCopiedItem, setLastCopiedItem] = useState<string | null>(null);

  const onCopy = (text: string, item: string) => {
    navigator.clipboard.writeText(text);

    setLastCopiedItem(item);
    setTimeout(() => {
      setLastCopiedItem(null);
    }, 1000);
  };

  return (
    <>
      {/* Assigning the title of the endpoint as the id of the component */}
      <div
        className="lg:ml-4 md:ml-2 text-neutral-700 dark:text-neutral-300 "
        id={data.title}
      >
        {/* Title */}
        <h1 className="text-neutral-800 dark:text-neutral-200 mt-4 text-2xl font-semibold xl:text-3xl 2xl:text-4xl">
          • {data.title}:
        </h1>
        {/* Description */}
        <p className="mb-4 text-lg italic">&quot;{data.description}&quot;</p>
        {/* Copy box endpoint */}
        <p className="my-2">
          Endpoint:
          <CopyCodeBox text={data.endpoint} />
        </p>
        {/* Reqest method */}
        <p className="my-2">
          Method:
          <code className="dark:bg-gray-800 bg-gray-300 py-1 px-2 ml-2 rounded-sm">
            {data.method}
          </code>
        </p>
        {/* Endpoint limiter */}
        <p className="my-2 flex">
          Request limiter:
          <code className="dark:bg-gray-800 bg-gray-300 py-1 px-2 ml-2 rounded-sm">
            {data.limiter}
          </code>
        </p>
        {/* Copy box request example */}
        <p className="my-2">
          Request example:
          <CopyCodeBox text={data.endpointExample} />
        </p>
        {/* Expandable Response example */}
        <details>
          <summary className="hover:underline hover:cursor-pointer">
            Response example:
          </summary>
          <div className="bg-gray-300 dark:bg-gray-800 w-fit min-w-[500px]">
            <code className="whitespace-pre py-1 px-2 ml-2 rounded-sm overflow-x-scroll">
              {data.response}
            </code>
          </div>
        </details>
        <div>
          {/* Parameters */}
          {data.parameters ? (
            <Table>
              <TableCaption>A list of the parameters</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Parameter</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Example</TableHead>
                  <TableHead>Required</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.parameters.map((param, index) => (
                  <TableRow key={index}>
                    <TableCell>{param.name}</TableCell>
                    <TableCell>{param.description}</TableCell>
                    <TableCell>{param.type}</TableCell>
                    <TableCell>{param.example}</TableCell>
                    <TableCell>
                      {param.required ? (
                        <Check className="text-green-500" />
                      ) : (
                        <X className="text-red-500" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <span className="text-red-600/70 text-sm">
              No parameters for this endpoint
            </span>
          )}
        </div>
      </div>
      <div className="w-11/12 my-4 border-b border-white/40 mx-auto" />
    </>
  );
};

export default DocsItem;
