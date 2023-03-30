import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductDetailCarousel from "@/components/Product/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import { NextPage } from "next";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails: NextPage = () => {
  return (
    <>
      <div className='w-full md:py-20'>
        <Wrapper>
          <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
            {/* left coloumn start */}
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
              <ProductDetailCarousel />
            </div>
            {/* left coloumn end */}

            {/* right column start */}
            <div className='flex-[1] py-3'>
              <div className='text-[34px] font-semibold mb-2'>
                Jordan Retro 6 G
              </div>
              <div className='text-lg font-semibold mb-5'>Tênis Masculino</div>
              <div className='text-lg font-semibold'>Preço: R$600.00</div>

              <div className='mb-10'>
                <div className='flex justify-between mb-2'>
                  <div className='text-md font-semibold'>Escolha o Tamanho</div>
                  <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                    Tamanho Selecionado
                  </div>
                </div>

                <div className='grid grid-cols-3 gap-2'>
                  <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    US 6
                  </div>
                  <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    US 6
                  </div>
                  <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    US 6
                  </div>
                  <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    US 6
                  </div>
                  <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    US 6
                  </div>
                  <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    US 6
                  </div>
                  <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                    US 6
                  </div>
                </div>
                <div className='text-red-600 mt-10'>
                  Obrigatório selecionar o tamanho
                </div>
                <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                  Adicionar ao carrinho
                </button>

                <button className='w-full py-4 rounded-full flex items-center justify-center text-black text-lg font-medium transition-transform active:scale-95 mb-10 hover:opacity-75 border border-black'>
                  Lista de desejo
                  <IoMdHeartEmpty size={20} />
                </button>

                <h3 className='text-lg font-bold mb-5'>Detalhe do Produto</h3>
                <p className='text-md mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque eligendi ducimus provident eos debitis quo repellendus
                  magnam reprehenderit ut recusandae dolores, natus in, cumque
                  pariatur. Ipsa, praesentium? Perspiciatis, eveniet eum.
                </p>
                <p className='text-md mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque eligendi ducimus provident eos debitis quo repellendus
                  magnam reprehenderit ut recusandae dolores, natus in, cumque
                  pariatur. Ipsa, praesentium? Perspiciatis, eveniet eum.
                </p>
              </div>
            </div>
            {/* right column end */}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ProductDetails;
