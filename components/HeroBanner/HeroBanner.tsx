import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroBanner: React.FC = (): JSX.Element => {
  return (
    <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto'>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <img
            src='/slide-1.png'
            alt='image carousel'
            className='aspect-[16/10] md:aspect-auto'
          />
          <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
            Compre Agora
          </div>
        </div>
        <div>
          <img
            src='/slide-2.png'
            alt='image carousel'
            className='aspect-[16/10] md:aspect-auto'
          />
          <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
            Compre Agora
          </div>
        </div>
        <div>
          <img
            src='/slide-3.png'
            alt='image carousel'
            className='aspect-[16/10] md:aspect-auto'
          />
          <div className='px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
            Compre Agora
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
