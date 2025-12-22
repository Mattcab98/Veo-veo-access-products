import { twMerge } from "tailwind-merge";

type Props = {
    nameButton?: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
    className?: string;
}

const Button = ({ nameButton, disabled, onClick, type, className }: Props) => {
    return (
        <>
            <button
                disabled={disabled}
                onClick={onClick}
                type={type}
                className={twMerge(
                    "w-60 mx-auto p-1.5 text-white bg-pink-600 shadow-xl shadow-pink-900/50 rounded-2xl",
                    className
                )}
            >
                {nameButton}
            </button>
        </>
    )
}
export default Button;