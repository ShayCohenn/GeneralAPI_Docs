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

const DocsItem = ({ data }: { data: DocsItemProp }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(data.endpointExample);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const format = (str: string) => {
    let formattedResponse;
    try {
      const sanitizedResponse = str.replace(/\0/g, ""); // remove null characters
      formattedResponse = JSON.stringify(
        JSON.parse(sanitizedResponse),
        null,
        2
      );
    } catch (error) {
      formattedResponse = "Invalid JSON"; // handle parsing errors
    }
    return formattedResponse;
  };

  return (
    <>
      <div className="lg:ml-4 md:ml-2">
        <h1 className="mt-4 text-xl font-semibold lg:text-xl xl:text-2xl 2xl:text-3xl">
          {data.title}:
        </h1>
        <p className="mb-4">{data.description}</p>
        <p className="my-2">
          Endpoint:
          <code className="dark:bg-gray-800 bg-gray-300 py-1 px-2 ml-2 rounded-sm">
          &quot;{data.endpoint}&quot;
          </code>
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
          w-10/12 py-1 px-2 rounded-sm"
          >
            <code className="mr-10">{data.endpointExample}</code>
            <button
              onClick={onCopy}
              disabled={copied}
              className="absolute top-0 right-0 h-full px-5 rounded-r-sm"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </p>
          <details>
            <summary>Response example:</summary>
            <code className="dark:bg-gray-800 bg-gray-300 py-1 px-2 ml-2 rounded-sm overflow-x-scroll">
              {format(data.response)}
            </code>
          </details>
        <div>
          <Table>
            <TableCaption>A list of the parameters</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Parameter</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Required</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.parameters.map((param, index) => (
                <TableRow key={index}>
                  <TableCell>{param.name}</TableCell>
                  <TableCell>{param.value}</TableCell>
                  <TableCell>{param.type}</TableCell>
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
        </div>
      </div>
      <div className="w-11/12 my-4 border-b border-white/50 mx-auto" />
    </>
  );
};

export default DocsItem;
