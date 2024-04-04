import classnames from "classnames";
// import { fingerPaint } from "@/utils/fonts";
import BrushStroke from "@/components/BrushStroke";

interface IHeaderProps {
  className?: string;
}

const Header = ({ className }: IHeaderProps) => {
  const headerClasses = classnames("p-4", "text-center", className);

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
