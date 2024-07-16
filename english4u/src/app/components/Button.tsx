import React from 'react';

type ButtonProps = {
    name: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: () => void;
};

const ButtonDefault = ({ name, type, className, onClick }: ButtonProps) => {
    return (
        <button type={type} className={className} onClick={onClick} >{name}</button>
    );
}


export default ButtonDefault;