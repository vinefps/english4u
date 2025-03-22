'use client'

import React, { ReactNode } from 'react';

type ButtonProps = {
    name: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: () => void;
    children?: ReactNode;
};

const ButtonDefault = ({ name, type, className, onClick, children }: ButtonProps) => {
    // Se tiver children, renderiza com eles, caso contrário, usa apenas o name
    if (children) {
        return (
            <button type={type || "button"} className={className} onClick={onClick}>
                {children}
            </button>
        );
    }
    
    // Comportamento original quando não tem children
    return (
        <button type={type || "button"} className={className} onClick={onClick}>
            {name}
        </button>
    );
}

export default ButtonDefault;
