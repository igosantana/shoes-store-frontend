import Image from "next/image";
import CartItem from "@/components/Cards/CartItem";
import Wrapper from "@/components/Wrapper";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootState } from "@/common/interfaces/redux.interfaces";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { useMemo, useState } from "react";
import { makePaymentRequest } from "@/common/utils/api";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

const Cart: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const cart = useSelector((state: RootState) => state.cart);
  const subTotal = useMemo(() => {
    return cart.reduce((total, val) => total + val.attributes.price, 0);
  }, [cart]);

  const handlePayment = async (): Promise<void> => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cart,
      });
      await stripe?.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        {cart.length > 0 && (
          <>
            {/* Heading and paragraph start */}
            <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
              <div className='text-[28px] md:text-[34px] mb-5 font-semibold'>
                Carrinho de compras
              </div>
            </div>
            {/* Heading and paragraph end */}

            {/* Cart Content Start */}
            <div className='flex flex-col lg:flex-row gap-12 py-10'>
              {/* Cart Items Start */}
              <div className='flex-[2]'>
                <div className='text-lg font-bold'>Produtos no carrinho</div>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    attributes={item.attributes}
                    id={item.id}
                    oneQuantityPrice={item.oneQuantityPrice}
                    quantity={item.quantity}
                    selectedSize={item.selectedSize}
                  />
                ))}
              </div>
              {/* Cart Items End */}

              {/* Summary Start */}
              <div className='flex-[1]'>
                <div className='flex-[1]'>Sumário</div>

                <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
                  <div className='flex justify-between'>
                    <span className='uppercase text-md md:text-lg font-medium text-black'>
                      Subtotal
                    </span>
                    <span className='text-md md:text-lg font-medium text-black'>
                      {`R$${subTotal}`}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handlePayment}
                  className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center'
                >
                  Checkout
                  {loading && <img src='/spinner.svg' />}
                </button>
              </div>
              {/* Summary End */}
            </div>
          </>
        )}
        {/* Cart Content End */}

        {cart.length < 1 && (
          <>
            <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
              <Image
                src='/empty-cart.jpg'
                alt='Imagem do carrinho vazio'
                width={300}
                height={300}
                className='w-[300px] md:w-[400px]'
              />
              <span className='text-xl font-bold'>
                Seu carrinho está vazio.
              </span>
              <span className='text-center mt-4'>
                Parece que você não adicionou nada ao seu carrinho.
                <br />
                Vamos lá e explore as categorias acima.
              </span>
              <Link
                href='/'
                className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
              >
                Continue comprando
              </Link>
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
