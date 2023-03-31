import { ProductRes } from "@/common/interfaces/productRes.interface";
import { getAllProducts } from "@/common/utils/api";
import ProductCard from "@/components/Cards/ProductCard";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";

type HomeProps = {
  products: ProductRes;
};

const IndexPage: NextPage<HomeProps> = ({ products }) => {
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
            {products.data?.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </Wrapper>
      </main>
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const products: ProductRes = await getAllProducts("/api/products?populate=*");
  return {
    props: { products: products },
  };
};
