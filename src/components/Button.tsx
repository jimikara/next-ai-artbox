import classnames from "classnames";

const Button = (props) => {
  const buttonClasses = classnames(
    "border-2",
    "border-palette-brown-500",
    "bg-white",
    "px-3",
    "py-2",
    "rounded-md",
    "transition-colors",
    "text-nowrap",
    props.className,
    {
      "w-full": props.fullWidth,
    },
    {
      "cursor-not-allowed text-gray-300 border-palette-brown-300":
        props.isDisabled,
    },
    {
      "cursor-pointer hover:bg-palette-brown-200 hover:border-palette-brown-900":
        !props.isDisabled,
    }
  );

  return (
    <button
      className={buttonClasses}
      disabled={props.isDisabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
