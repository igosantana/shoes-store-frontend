export type MenuData = {
  id: number;
  name: string;
  url?: string;
  subMenu?: boolean;
};

export type SubMenuData = {
  id: number;
  name: string;
  doc_count: number;
};
