function Button({ onClick, size = "medium" }) {
    const sizeClass = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    }[size];

    return (
        <button onClick={onClick} className={`dark:bg-slate-200 bg-slate-300 shadow-sm shadow-gray-300 dark:shadow-gray-400 bg-opacity-50 rounded-xl transition-all duration-700 ${sizeClass}`}>
            <p>Button</p>
        </button>
    );
}

export default Button;
