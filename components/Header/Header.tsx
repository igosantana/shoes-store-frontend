import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Menu from "../Menu";
import Wrapper from "../Wrapper";
import MenuMobile from "../Menu/MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { CategoriesRes } from "@/common/interfaces/categories.interface";
import { getAllCategories } from "@/common/utils/api";
import { RootState } from "@/common/interfaces/redux.interfaces";
import Image from "next/image";

const Header: React.FC = (): JSX.Element => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [showCatMenu, setShowCatMenu] = useState<boolean>(false);
  const [show, setShow] = useState<string>("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [categories, setCategories] = useState<CategoriesRes>({
    data: [],
    meta: { pagination: { page: 0, pageCount: 0, pageSize: 0, total: 0 } },
  });

  const controlNavbar = (): void => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
      } else {
        setShow("shadow-sm");
      }
      setShow("-translate-y-[80px]");
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, controlNavbar]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async (): Promise<void> => {
    const response = await getAllCategories("/api/categories?populate=*");
    setCategories(response);
  };

  const cart = useSelector((state: RootState) => state.cart);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className='h-[60px] flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            width={40}
            height={40}
            className='w-[40px] md:w-[60px]'
            alt='Logo'
          />
        </Link>

        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          data={categories}
        />

        {mobileMenu && (
          <MenuMobile
            data={categories}
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className='flex items-center gap-2 text-black'>
          {/* Icon start */}
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
            <IoMdHeartEmpty className='text-[19px] md:text-[24px]' />
            <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] mc:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>
              5
            </div>
          </div>
          {/* Icon end */}

          {/* Icon start */}
          <Link href='/cart'>
            <div
              id='cart-icon'
              className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'
            >
              <BsCart className='text-[15px] md:text-[20px]' />
              {cart.length > 0 && (
                <div
                  id='quantity-cart'
                  className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] mc:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'
                >
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
          {/* Icon end */}

          {/* Menu Icon Start */}
          <div className='w-8 md:w-12 h-8 md:h-12 md:hidden rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
            {mobileMenu ? (
              <VscChromeClose
                className='text-[16px]'
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className='text-[20px]'
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Menu Icon End */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
