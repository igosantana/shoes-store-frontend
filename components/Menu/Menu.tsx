import { CategoriesRes } from "@/common/interfaces/categories.interface";
import { MenuData } from "@/common/interfaces/menu.interfaces";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { BsChevronDown } from "react-icons/bs";

const menuData: MenuData[] = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Sobre", url: "/sobre" },
  { id: 3, name: "Categorias", subMenu: true },
  { id: 4, name: "Contato", url: "/contato" },
];

type MenuProps = {
  showCatMenu: boolean;
  setShowCatMenu: Dispatch<SetStateAction<boolean>>;
  data: CategoriesRes;
};

const Menu: React.FC<MenuProps> = ({
  showCatMenu,
  setShowCatMenu,
  data,
}): JSX.Element => {
  return (
    <ul
      id='navbar'
      className='hidden md:flex items-center gap-8 font-medium text-black'
    >
      {menuData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item.subMenu ? (
              <li
                className='cursor-pointer flex items-center gap-2 relative'
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />
                {showCatMenu && (
                  <ul
                    className='bg-white absolute top-6 left-0 min-w-[250px] px-1 text-black shadow-lg'
                    id='submenu'
                  >
                    {data.data.map((subMenu) => {
                      return (
                        <Link
                          key={subMenu.id}
                          href={`/category/${subMenu.attributes.slug}`}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'>
                            {subMenu.attributes.name}
                            <span className='opacity-50 text-sm'>
                              ({subMenu.attributes.products.data.length})
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className='cursor-pointer'>
                <Link href={item.url || ""}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
