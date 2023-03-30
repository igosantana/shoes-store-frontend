import { CategoriesRes } from "@/common/interfaces/categories.interface";
import { ProductRes } from "@/common/interfaces/productRes.interface";
import { getAllCategories, getAllProducts } from "@/common/utils/api";
import ProductCard from "@/components/Cards/ProductCard";
import Wrapper from "@/components/Wrapper";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type CategoryPageProps = {
  category: CategoriesRes;
  products: ProductRes;
  slug: string;
};

const Category: NextPage<CategoryPageProps> = ({
  category,
  products,
  slug,
}) => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
          <h1 className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
            {category.data[0].attributes.name}
          </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
          {products.data?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;

export const getStaticPaths: GetStaticPaths = async () => {
  const category = await getAllCategories("/api/categories?populate=*");
  const paths = category.data.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const category = await getAllCategories(
    `/api/categories?filters[slug][$eq]=${slug}`
  );

  const products = await getAllProducts(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`
  );

  return {
    props: {
      category,
      products,
      slug,
    },
  };
};
