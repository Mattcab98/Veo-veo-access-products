import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { twMerge } from "tailwind-merge";

type Props = {
  nameLabel?: string;
  inputId: string;
  type?: "text" | "email" | "password";
  icon?: React.ReactNode;
  toggleShowPassword?: () => void;
  showPassword?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  className?: string;
};

const LoginInput = ({ nameLabel, inputId, type = "text", icon, toggleShowPassword, showPassword, value, onChange, placeholder, className }: Props) => {
  return (
    <div className="w-60 mx-auto flex flex-col gap-1">
      <label htmlFor={inputId} className="text-gray-500 text-sm">{nameLabel}</label>

      <div className="flex items-center bg-fuchsia-200 rounded-2xl p-2 relative">
        {icon && <span className="px-3 text-pink-500">{icon}</span>}
        <input
          type={type === "password" && showPassword ? "text" : type}
          id={inputId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={twMerge(
            "flex-1 text-black outline-0 text-sm bg-transparent",
            className
          )}
        />

        {toggleShowPassword && (
          <button
            type="button"
            className="text-pink-500 absolute right-2"
            onClick={toggleShowPassword}
          >
            {showPassword ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginInput;
