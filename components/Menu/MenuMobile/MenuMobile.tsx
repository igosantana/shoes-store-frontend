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
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
  data: CategoriesRes;
};

const MenuMobile: React.FC<MenuProps> = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  data,
}): JSX.Element => {
  return (
    <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
      {menuData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item.subMenu ? (
              <li
                className='cursor-pointer py-4 px-5 border-b flex flex-col relative'
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className='flex justify-between items-center'>
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                    {data.data.map((subMenu) => {
                      return (
                        <Link
                          key={subMenu.id}
                          href={`/category/${subMenu.attributes.slug}`}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className='py-4 px-8 border-t flex justify-between'>
                            {subMenu.attributes.name}
                            <span className='opacity-50 text-sm'>
                              {subMenu.attributes.products.data.length}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className='py-4 px-5 border-b'>
                <Link
                  href={item.url || ""}
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
