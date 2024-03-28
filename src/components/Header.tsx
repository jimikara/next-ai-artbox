import classnames from "classnames";
// import { fingerPaint } from "@/utils/fonts";
import BrushStroke from "@/components/BrushStroke";

const Header = ({ className }) => {
  const headerClasses = classnames(
    "p-4",
    "text-center",
    // fingerPaint.className,
    className
  );

  return (
    <header className={headerClasses}>
      <div className='relative flex justify-center'>
        <h1 className='text-2xl lg:text-3xl absolute top-8 text-white'>
          AI Artbox
        </h1>
        <BrushStroke className='w-[380px] fill-palette-blue-800' />
      </div>
    </header>
  );
};

export default Header;
