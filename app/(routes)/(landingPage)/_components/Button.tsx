import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
    variants: {
        variant: {
            primary: "bg-[#c19eff] text-neutral-950 border-[#673ab7]",
            secondary: "border-white text-white bg-transparent",
        },
        size: {
            sm: "h-10",
        },
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: "sm";
    } & HTMLAttributes<HTMLButtonElement>
) {
    const { variant, className, size, ...rest } = props;
    return (
        <button className={classes({ variant, className, size })} {...rest} />
    );
}
