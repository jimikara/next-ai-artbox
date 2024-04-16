import classnames from "classnames";

interface IHeaderProps {
  className?: string;
}

const Header = ({ className }: IHeaderProps) => {
  const headerClasses = classnames("p-2", "text-center", "bg-white", className);

  return (
    <header className={headerClasses}>
      <div className='relative flex justify-center '>
        <h1 className='text-2xl lg:text-2xl top-8 text-gray-800 md:p-3'>
          AI Artbox
        </h1>
      </div>
    </header>
  );
};

export default Header;
