import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type Props = {
  nameLabel: string;
  inputId: string;
  type?: "text" | "email" | "password";
  icon?: React.ReactNode;
  toggleShowPassword?: () => void;
  showPassword?: boolean;
};

const LoginInput = ({ nameLabel, inputId, type = "text", icon, toggleShowPassword, showPassword }: Props) => {
  return (
    <div className="w-60 mx-auto flex flex-col gap-1">
      <label htmlFor={inputId} className="text-gray-500 text-sm">{nameLabel}</label>

      <div className="flex items-center bg-fuchsia-200 rounded-2xl p-2">
        {icon && <span className="px-3 text-pink-500">{icon}</span>}
        <input
          type={type === "password" && showPassword ? "text" : type}
          id={inputId}
          className="flex-1 text-black outline-0 text-sm"
        />
        {type === "password" && toggleShowPassword && (
          <button
            type="button"
            className="ml-auto text-pink-300"
            onClick={toggleShowPassword}
          >
            {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginInput;
