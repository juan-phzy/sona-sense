import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, disabled, ...props }, ref) => {
		return (
			<input
				type={type}
				className={twMerge(
					`
                flex
                w-full
                rounded
                bg-neutral-700
                border
                border-transparent
                px-3
                py-3
                text-sm
                file:text-white
                file:border-0
                file:bg-neutral-500
                file:rounded
                file:px-3
                file:py-2
                file:text-sm
                file:font-medium
                placeholder:text-neutral-400
                disabled:cursor-not-allowed
                focus:outline-none
            `,
					className
				)}
				disabled={disabled}
				ref={ref}
				{...props}
			/>
		);
	}
);

Input.displayName = "Input";

export default Input;
