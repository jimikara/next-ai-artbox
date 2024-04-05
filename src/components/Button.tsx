import classnames from "classnames";
import { robotoMono } from "@/utils/fonts";

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  className,
  fullWidth,
  isDisabled,
  onClick,
}: IButtonProps) => {
  const buttonClasses = classnames(
    "border-2",
    "border-palette-brown-500",
    "bg-white",
    "px-3",
    "py-2",
    "rounded-md",
    "transition-colors",
    "text-nowrap",
    "font-semibold",
    // robotoMono.className,
    className,
    {
      "w-full": fullWidth,
    },
    {
      "cursor-not-allowed text-gray-300 border-palette-brown-300": isDisabled,
    },
    {
      "cursor-pointer hover:bg-palette-brown-200 hover:border-palette-brown-900":
        !isDisabled,
    }
  );

  return (
    <button className={buttonClasses} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
