

type Props = {
    nameButton: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

const Button = ({ nameButton, disabled, onClick, type }: Props) => {
    return (
        <>

            <button
                disabled={disabled}
                onClick={onClick}
                type={type}
                className="w-60 mx-auto p-1.5 text-white bg-pink-600 shadow-xl shadow-pink-300 rounded-2xl ">
                    {nameButton}
            </button>
        </>
    )
}
export default Button;