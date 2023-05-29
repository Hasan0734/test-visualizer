import React from 'react';
import { Check } from 'react-feather';

const Checkbox = ({ title = "", defaultChecked, name = "", container = 'gap-3', labelClass, handleOnChange, ...attribute }: any) => {


    const handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            handleOnChange(e.target.value)
        }
      }
      

    return (
        <>
            <label
                className={`cursor-pointer relative flex items-center ${container}`}
                htmlFor={name}>
                <div>
                    <input
                        onKeyPress={handleKeyDown}
                        onChange={(e) => handleOnChange(e.target.value)}
                        {...attribute}
                        checked={defaultChecked}

                        type="checkbox"
                        className={`peer overflow-hidden appearance-none rounded-sm 
                     w-[17px] h-[17px] border border-black
                       checked:bg-black mt-[5px]`}
                        name={name} id={name} />

                    <Check
                        strokeWidth={2.5}
                        className='peer-checked:opacity-100 opacity-0 w-[15px] text-white
                     absolute left-[1px] top-[1px]' />
                </div>

                <span className={`text-sm font-medium ${labelClass}`}>{title}</span>
            </label>
        </>
    );
};

export default Checkbox;