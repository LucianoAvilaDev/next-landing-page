import React from "react";

type Props = {
    title: string;
    action?: Function;
};

export const Button = ({ title, action }: Props) => {
    return (
        <button
            className="px-8 py-2 border hover:text-gray-700 hover:bg-white"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                action ? action(e) : null;
            }}
        >
            {title}
        </button>
    );
};
