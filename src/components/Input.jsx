import { forwardRef } from "react";

const Input = forwardRef(function Input({ isTextarea, label, ...props }, ref) {
    const classes = "w-full p-2 border-b-2 rounded-t-md border-slate-700 bg-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500 transition-all focus:bg-slate-700/50";

    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-slate-500">{label}</label>
            {isTextarea ? (
                <textarea ref={ref} className={classes} {...props} rows={4} />
            ) : (
                <input ref={ref} className={classes} {...props} />
            )}
        </p>
    );
});

export default Input;