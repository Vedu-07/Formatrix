import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...rest } = props;

    return (
        <div className={twMerge("inline-flex border border-[#c19eff] gap-2 text-[#c19eff] px-3 py-1 rounded-full uppercase items-center ", className)}>
            <span>&#10038;</span>
            <span className="text-sm font-semibold">{children}</span>
        </div>
    );
};

export default Tag;