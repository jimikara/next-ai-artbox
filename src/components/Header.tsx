import classnames from "classnames";

interface IHeaderProps {
  className?: string;
}

const Header = ({ className }: IHeaderProps) => {
  const headerClasses = classnames("p-4", "text-center", className);

  return (
    <header className={headerClasses}>
      <div className='relative flex justify-center'>
        <h1 className='text-2xl lg:text-4xl top-8 text-black bg-white/50 p-3'>
          AI Artbox
        </h1>
      </div>
    </header>
  );
};

export default Header;
