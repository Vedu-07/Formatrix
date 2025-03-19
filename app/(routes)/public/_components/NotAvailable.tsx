"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import React, { useState } from "react";

const NotAvaliable = () => {
  const [message, setMessage] = useState("This Form is no longer available");

  const handleLearnMore = () => {
    setMessage("The form is either being deleted or is no longer accepting responses.");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 md:px-10 overflow-x-hidden">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <Frown size="80px" />
        <h2 className="text-lg md:text-xl font-semibold mt-5">{message}</h2>
        <Button
          className="min-w-[200px] md:min-w-64 mt-10 text-sm md:text-base"
          onClick={handleLearnMore}
        >
          Learn more
        </Button>
      </div>

      <div
            className="flex items-center 
          flex-col gap-2
          justify-center pb-5"
          >
            <Logo url="#" color="!text-primary" />
          </div>
    </div>
  );
};

export default NotAvaliable;
