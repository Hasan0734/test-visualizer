import React from 'react';

// interface proptype {
//     label: boolean,
//     title: string,
//     placeholder: string,
//     name: string,
//     className: string,
//     labelCalss: string
// }

const InputText = ({
    label = false,
    title = '',
    placeholder = '',
    name = '',
    className = '',
    labelCalss ='',
    ...attribute
}: any) => {
    return (
        <div>
            {label && <label className={`${labelCalss} text-white block`} htmlFor={name}>{title}</label>}
            <input
                name={name}
                {...attribute}
                placeholder={placeholder}
                className={`${className} bg-white px-3 py-3 text-sm outline-none w-full placeholder:text-grayblack `}
               />
        </div>
    );
};

export default InputText;