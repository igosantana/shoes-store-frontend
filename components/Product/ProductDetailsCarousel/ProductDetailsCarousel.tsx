import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Image } from "@/common/interfaces/productRes.interface";

type ProductDetailCatrouselProps = {
  images: Image;
};

const ProductDetailCarousel: React.FC<ProductDetailCatrouselProps> = ({
  images,
}): JSX.Element => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
      <Carousel
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'
      >
        {images.data.map((img) => (
          <img
            key={img.id}
            src={img.attributes.url}
            alt={img.attributes.name}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailCarousel;
