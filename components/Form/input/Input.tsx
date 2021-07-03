import React, { FC, HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLDivElement> {
    error?: boolean;
    validating?: boolean;
    validated?: boolean;
    focused?: boolean;
    isSecure?: boolean;
    isNumber?: boolean;
    toggleSecure?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Input: FC<InputProps> = (props) => {
    return (
        <div className="flex flex-col gap-y-1">
            <div className="text-sm inter font-semibold">Label</div>
            <div className="col-span-2 ...">
                <input className={`text-base py-3 px-4 rounded-lg border border-gray-300 w-72 focus:outline-none focus:ring-2 focus:border-blue-400 focus:border-transparent shadow ${props.focused ? "outline-none ring-2 border-blue-400 border-transparent" : ""}`  } />
            </div>
            <div className="text-sm inter font-normal">Informations</div>
        </div>
      );
};