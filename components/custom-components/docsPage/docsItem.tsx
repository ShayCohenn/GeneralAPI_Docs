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
import { Check, Copy, Medal, X } from "lucide-react";
import { useState } from "react";

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
      <div className="lg:ml-4 md:ml-2" id={data.title}>
        <h1 className="mt-4 text-2xl font-semibold xl:text-3xl 2xl:text-4xl">
          • {data.title}:
        </h1>
        <p className="mb-4 text-lg italic">&quot;{data.description}&quot;</p>
        <p className="my-2 flex items-center">
          Endpoint:
          <div
            className="dark:bg-gray-800 relative bg-gray-300 flex
            py-1 px-2 rounded-sm items-center w-fit"
          >
            <code>{data.endpoint}</code>
            <button
              onClick={() => onCopy(data.endpoint, "endpoint")}
              disabled={lastCopiedItem === "endpoint"}
              className="relative top-0 right-0 h-full pl-5 rounded-r-sm"
            >
              {lastCopiedItem === "endpoint" ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </p>
        <p className="my-2">
          Method:
          <code className="dark:bg-gray-800 bg-gray-300 py-1 px-2 ml-2 rounded-sm">
            {data.method}
          </code>
        </p>
        <p className="my-2">
          Request limiter:
          <code className="dark:bg-gray-800 bg-gray-300 py-1 px-2 ml-2 rounded-sm">
            {data.limiter}
          </code>
        </p>
        <p className="my-2">
          Request example:
          <div
            className="dark:bg-gray-800 relative bg-gray-300 flex
            py-1 px-2 rounded-sm items-center w-fit"
          >
            <code>{data.endpointExample}</code>
            <button
              onClick={() => onCopy(data.endpointExample, "endpointExample")}
              disabled={lastCopiedItem === "endpointExample"}
              className="relative top-0 right-0 h-full pl-5 rounded-r-sm"
            >
              {lastCopiedItem === "endpointExample" ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </p>
        <details>
          <summary className="hover:underline hover:cursor-pointer">
            Response example:
          </summary>
          <code className="dark:bg-gray-800 bg-gray-300 py-1 px-2 ml-2 rounded-sm overflow-x-scroll">
            {data.response}
          </code>
        </details>
        <div>
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
