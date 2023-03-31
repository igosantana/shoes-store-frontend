export interface ProductRes {
  data: ProductData[];
  meta: Meta;
}

export interface ProductData {
  id: number;
  attributes: ProductAttributes;
}

export interface ProductAttributes {
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
  image: Image;
  thumbnail: Thumbnail;
  categories: Categories;
}

interface Size {
  data: DataSize[];
}

interface DataSize {
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

export interface Image {
  data: ImageData[];
}

interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  name: string;
  alternativeText?: string;
  caption?: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  large?: LargeOrSmallOrMediumOrThumbnail;
  small: LargeOrSmallOrMediumOrThumbnail1;
  medium?: LargeOrSmallOrMediumOrThumbnail2;
  thumbnail: LargeOrSmallOrMediumOrThumbnail1;
}

interface LargeOrSmallOrMediumOrThumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

interface LargeOrSmallOrMediumOrThumbnail1 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

interface LargeOrSmallOrMediumOrThumbnail2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export interface ThumbnailAttributes {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: FormatsThumb;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
}

export interface FormatsThumb {
  small: SmallOrThumbnail;
  thumbnail: SmallOrThumbnail;
}

export interface SmallOrThumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadataThumb;
}

export interface ProviderMetadataThumb {
  public_id: string;
  resource_type: string;
}

interface ThumbnailData {
  id: number;
  attributes: ThumbnailAttributes;
}

interface Thumbnail {
  data: ThumbnailData;
}

interface Categories {
  data: CategoriesData[];
}

interface CategoriesData {
  id: number;
  attributes: CategoriesAttributes;
}

interface CategoriesAttributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
