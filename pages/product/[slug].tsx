import { ProductRes } from "@/common/interfaces/productRes.interface";
import { getAllProducts } from "@/common/utils/api";
import ProductDetailCarousel from "@/components/Product/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import { addToCart } from "@/redux/store/cartSlice";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type ProductDetailsProps = {
  product: ProductRes;
};

const ProductDetails: NextPage<ProductDetailsProps> = ({ product }) => {
  const [selectedSize, setSelectSize] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const dispatch = useDispatch();
  const p = product.data[0].attributes;

  const notify = (): void => {
    toast.success("Sucesso. Dê uma olhada no carrinho!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <ToastContainer />
      <div className='w-full md:py-20'>
        <Wrapper>
          <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
            {/* left coloumn start */}
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
              <ProductDetailCarousel images={p.image} />
            </div>
            {/* left coloumn end */}

            {/* right column start */}
            <div className='flex-[1] py-3 gap-10'>
              <div className='text-[34px] font-semibold mb-2'>{p.name}</div>
              <div className='text-lg font-semibold mb-5'>{p.subtitle}</div>
              <div className='text-lg font-semibold'>{`Preço: R$${p.price}`}</div>

              <div className='mb-10'>
                <div className='flex justify-between mb-2'>
                  <span className='text-md font-semibold'>
                    Escolha o Tamanho
                  </span>
                </div>

                <div id='sizesGrid' className='grid grid-cols-3 gap-2'>
                  {p.size.data.map((s, i) => (
                    <div
                      key={i}
                      className={`border rounded-md text-center py-3 font-medium ${
                        s.enabled
                          ? "hover:border-black cursor-pointer"
                          : "cursor-not-allowed bg-black/[0.1] opacity-50"
                      } ${selectedSize === s.size ? "border-black" : ""}`}
                      onClick={() => {
                        setSelectSize(s.size);
                        setShowError(false);
                      }}
                    >
                      {s.size}
                    </div>
                  ))}
                </div>
                <div className='text-red-600 mb-10'>
                  {showError && "*Obrigatório selecionar o tamanho"}
                </div>
                <button
                  className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'
                  onClick={() => {
                    if (!selectedSize) {
                      setShowError(true);
                      document.getElementById("sizesGrid")?.scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      });
                    } else {
                      dispatch(
                        addToCart({
                          ...product.data[0],
                          selectedSize,
                          oneQuantityPrice: p.price,
                          quantity: 0,
                        })
                      );
                      notify();
                    }
                  }}
                >
                  Adicionar ao carrinho
                </button>

                <button className='w-full py-4 rounded-full flex items-center justify-center text-black text-lg font-medium transition-transform active:scale-95 mb-10 hover:opacity-75 border border-black'>
                  Lista de desejo
                  <IoMdHeartEmpty size={20} />
                </button>

                <h3 className='text-lg font-bold mb-5'>Detalhe do Produto</h3>
                <div className='text-md mb-5 text-justify'>
                  <ReactMarkdown>{p.description}</ReactMarkdown>
                </div>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts("/api/products?populate=*");
  const paths = products.data.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const product = await getAllProducts(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  return {
    props: {
      product,
    },
  };
};
