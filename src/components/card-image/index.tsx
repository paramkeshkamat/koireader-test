import { ImageWrapper } from "../../styled";

type CardImageProps = {
  src: string;
  alt: string;
};

export default function CardImage({ src, alt }: CardImageProps) {
  return (
    <ImageWrapper>
      <img src={src} alt={alt} width={100} />
    </ImageWrapper>
  );
}
