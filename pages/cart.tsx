import Image from "next/image";
import CartItem from "@/components/Cards/CartItem";
import Wrapper from "@/components/Wrapper";
import { NextPage } from "next";
import Link from "next/link";

const Cart: NextPage = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        {/* Heading and paragraph start */}
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
          <h1 className='text-[28px] md:text-[34px] mb-5 font-semibold'>
            Carrinho de compras
          </h1>
        </div>
        {/* Heading and paragraph end */}

        {/* Cart Content Start */}
        <div className='flex flex-col lg:flex-row gap-12 py-10'>
          {/* Cart Items Start */}
          <div className='flex-[2]'>
            <h2 className='text-lg font-bold'>Produtos no carrinho</h2>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* Cart Items End */}

          {/* Summary Start */}
          <div className='flex-[1]'>
            <div className='flex-[1]'>Sumário</div>

            <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
              <div className='flex justify-between'>
                <span className='uppercase text-md md:text-lg font-medium text-black'>Subtotal</span>
                <span className='text-md md:text-lg font-medium text-black'>R$ 3000,00</span>
              </div>
            </div>
            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
              Checkout
            </button>
          </div>
          {/* Summary End */}
        </div>
        {/* Cart Content End */}

        {/* 
        --Empty page
        <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
          <Image src='/empty-cart.jpg' alt='Imagem do carrinho vazio' width={300} height={300} className='w-[300px] md:w-[400px]' />
          <span className='text-xl font-bold'>Seu carrinho está vazio.</span>
          <span className='text-center mt-4'>
            Parece que você não adicionou nada ao seu carrinho.
            <br />
            Vamos lá e explore as categorias acima.
          </span>
          <Link href='/' className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'>
            Continue comprando
          </Link>
        </div>
*/}
      </Wrapper>
    </div>
  );
};

export default Cart;
