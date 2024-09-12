import { useState, useEffect, useRef } from "react";

function Dropdown({ title='Dropdown', items }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        item.callback();
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-between items-center w-full rounded-xl border dark:border-gray-400 border-gray-300 bg-opacity-50 px-4 py-2 dark:bg-slate-200 bg-slate-300 transition-all duration-700"
                >
                    {title}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.44l3.71-3.23a.75.75 0 111.06 1.06l-4.25 3.5a.75.75 0 01-1.06 0l-4.25-3.5a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute dropdown-animation z-10 mt-1 w-56 max-h-64 overflow-y-scroll rounded-xl shadow-lg bg-white dark:bg-slate-200 bg-opacity-50 ring-1 ring-black ring-opacity-5 transition-all duration-200">
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

            <style>
                {`
                    .dropdown-animation {
                        opacity: 0;
                        transform: translateY(-10px);
                        animation: dropdownSlide 0.3s ease forwards;
                    }

                    @keyframes dropdownSlide {
                        from {
                            opacity: 0;
                            transform: translateY(-10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default Dropdown;