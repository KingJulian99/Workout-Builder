import { useState } from "react";

function Dropdown({ title='Dropdown', items }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        item.callback();
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {title}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {isOpen && (
            <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                {items.map((item, index) => (
                    <button
                    key={index}
                    onClick={() => handleItemClick(item)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                    {item.text}
                    </button>
                ))}
                </div>
            </div>
            )}
        </div>
    );
}

export default Dropdown;