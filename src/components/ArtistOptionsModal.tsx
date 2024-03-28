import ArtistOptions from "@/components/ArtistOptions";
import CloseButton from "@/components/CloseButton";
import classNames from "classnames";

const ArtistOptionsModal = ({ onClose }) => {
  const containerClasses = classNames(
    "w-screen",
    "h-dvh",
    "flex",
    "flex-row",
    "justify-center",
    "absolute",
    "right-0",
    "bottom-0",
    "left-0",
    "z-50",
    "bg-palette-pink-500",
    'bg-[url("/assets/bg-shape-blue.svg")]',
    'before:content-[""]',
    "before:block",
    "before:w-full",
    "before:h-full",
    "before:bg-white",
    "before:absolute",
    "before:top-0",
    "before:opacity-40",
    "lg:w-[716px]",
    "lg:h-[164px]",
    "lg:rounded-xl",
    "lg:left-[50%]",
    "lg:translate-x-[-50%]",
    "lg:top-[-80px]",
    "animate-fadeIn"
  );

  return (
    <div className={containerClasses}>
      <span className='absolute top-3 right-3 z-50 lg:top-[-42px] lg:right-[-42px]'>
        <CloseButton
          fillColor='[&_circle]:fill-palette-blue-700'
          strokeColor='[&_path]:fill-white'
          onClick={onClose}
        />
      </span>
      <div className='h-full w-full relative flex flex-row items-center justify-center'>
        <ArtistOptions closeModal={onClose} />
      </div>
    </div>
  );
};

export default ArtistOptionsModal;
