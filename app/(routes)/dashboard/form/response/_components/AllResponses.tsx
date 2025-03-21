"use client"
import React, { FC } from "react";
import { FormBlockInstance } from "@/@types/form-block.type";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Utility function to download the CSV
const downloadCSV = (headers: string[], rows: string[][]) => {
  const csvContent = [
    headers.join(","), // Join headers with a comma
    ...rows.map(row => row.join(",")), // Join each row with a comma
  ].join("\n"); // Join rows with newlines

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "form_responses.csv");
  link.click();
};

type Props = {
  blocks: FormBlockInstance[];
  responses: {
    formId: number;
    id: number;
    createdAt: Date;
    jsonReponse: string;
  }[];
};

const Allresponses: FC<Props> = ({ blocks, responses }) => {
  const childblockMap = blocks
    .flatMap((block) => block.childblocks || [])
    .reduce((acc, childblock) => {
      if (childblock) {
        acc[childblock.id] = childblock?.attributes?.label || "No label";
      }
      return acc;
    }, {} as Record<string, string>);

  // Extract headers and rows for CSV
  const generateCSVData = () => {
    const headers = Object.values(childblockMap); // Only include the question labels as headers
    const rows: string[][] = responses.map((response) => {
      const parsedResponses: Record<string, string> = JSON.parse(response.jsonReponse); // Use Record<string, string>
      const row: string[] = []; // Explicitly type row as an array of strings
      Object.keys(childblockMap).forEach((key) => {
        row.push(parsedResponses[key] || ""); // Push the response for each question, empty if no response
      });
      return row;
    });

    return { headers, rows };
  };

  // CSV export handler
  const handleExportCSV = () => {
    const { headers, rows } = generateCSVData();
    downloadCSV(headers, rows);
  };

  return (
    <div>
      <div className="flex justify-end mb-4 mt-3">
        <Button
          onClick={handleExportCSV}
          className="flex items-center
               !bg-primary "
        >
          <Download className="w-4 h-4 " />
          Export 
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-3">
        {responses.map((response) => {
          const parsedResponses: Record<string, string> = JSON.parse(response.jsonReponse); // Use Record<string, string>
          return (
            <Card
              key={response.id}
              className="bg-white p-3 mb-2 w-full"
            >
              <CardContent className="pb-0 px-1">
                <div className="space-y-2">
                  <div className="pb-2 w-full flex items-center gap-2 border-b border-gray-200">
                    <h4 className="font-semibold">Question/Answer</h4>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3" />
                      {new Date(response.createdAt).toLocaleString()}
                    </span>
                  </div>

                  {Object.entries(parsedResponses).map(([key, value]) => {
                    return (
                      <div key={key} className="flex-col">
                        <div className="font-medium text-base mb-[2px] text-gray-800">
                          {childblockMap[key] || "Unknown Field"}
                        </div>
                        <div className="text-sm pl-1 text-gray-600">
                          - {value}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Allresponses;
