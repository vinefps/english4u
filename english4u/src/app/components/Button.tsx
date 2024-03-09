import React from 'react';

type ButtonProps = {
    name: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: () => void;
};

export default function ButtonDefault({ name, type, className, onClick }: ButtonProps) {
    return (
        <button type={type} className={className} onClick={onClick} >{name}</button>
    );
}
