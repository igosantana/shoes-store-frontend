import ProductCard from "@/components/Cards/ProductCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <main>
        <HeroBanner />
        <Wrapper>
          <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
            <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
              Amortecedor para Suas Milhas
            </div>
            <div className='text-md md:text-xl'>
              Uma sola intermediária leve Nike ZoomX é combinada com o aumento
              da altura para ajudar a proporcionar amortecimento durante longos
              trechos de corrida.
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Wrapper>
      </main>
    </>
  );
};

export default IndexPage;
