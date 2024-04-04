import Image from "next/image";

interface IOptionImageProps {
  image: string;
  alt: string;
}

const OptionImage = ({ image, alt }: IOptionImageProps) => {
  return (
    <Image src={image} width='90' height='90' alt={alt} priority={true}></Image>
  );
};

export default OptionImage;
