export interface CategoriesRes {
  data: CategoryData[];
  meta: Meta;
}

interface CategoryData {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  products: Products;
}

interface Products {
  data: ProductsData[];
}

interface ProductsData {
  id: number;
  attributes: ProductAtt;
}

interface ProductAtt {
  name: string;
  subtitle: string;
  price: number;
  description: string;
  size: Size;
  original_price?: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Size {
  data: DataEntity2[];
}

interface DataEntity2 {
  size: string;
  enabled: boolean;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

