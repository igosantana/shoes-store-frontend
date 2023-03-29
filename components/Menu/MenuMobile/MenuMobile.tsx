import { MenuData, SubMenuData } from "@/common/interfaces/menu.interfaces";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { BsChevronDown } from "react-icons/bs";

const data: MenuData[] = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Sobre", url: "/sobre" },
  { id: 3, name: "Categorias", subMenu: true },
  { id: 4, name: "Contato", url: "/contato" },
];

const subMenuData: SubMenuData[] = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

type MenuProps = {
  showCatMenu: boolean;
  setShowCatMenu: Dispatch<SetStateAction<boolean>>;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const MenuMobile: React.FC<MenuProps> = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
}): JSX.Element => {
  return (
    <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
      {data.map((item) => {
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
                    {subMenuData.map((subMenu) => {
                      return (
                        <Link
                          key={subMenu.id}
                          href='/'
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className='py-4 px-8 border-t flex justify-between'>
                            {subMenu.name}
                            <span className='opacity-50 text-sm'>78</span>
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
