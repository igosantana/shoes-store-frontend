import CartItem from "@/components/Cards/CartItem";
import Wrapper from "@/components/Wrapper";
import { NextPage } from "next";

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
          <div className='flex-[1]'>Sumário</div>
          {/* Summary End */}
        </div>
        {/* Cart Content End */}
      </Wrapper>
    </div>
  );
};

export default Cart;
