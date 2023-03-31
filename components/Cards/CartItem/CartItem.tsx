import { CartSlice } from "@/common/interfaces/redux.interfaces";
import { removeItem, updateCart } from "@/redux/store/cartSlice";
import Image from "next/image";
import { ChangeEvent } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartItem: React.FC<CartSlice> = (data): JSX.Element => {
  const dispatch = useDispatch();
  const updateCartItem = (e: ChangeEvent, key: string) => {
    let payload = {
      key,
      val:
        key === "quantity"
          ? parseInt((e.target as HTMLSelectElement).value)
          : (e.target as HTMLSelectElement).value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
      <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
        <Image
          width={120}
          height={120}
          src={data.attributes.thumbnail.data.attributes.url}
          alt={data.attributes.name}
        />
      </div>
      <div className='w-full flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>
            {data.attributes.name}
          </div>
          <span className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>
            {`Preço: R$${data.attributes.price}`}
          </span>
        </div>
        <span className='text-md  font-medium text-black/[0.5] md:block'>
          {data.attributes.subtitle}
        </span>
        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
            <div className='flex items-center gap-1'>
              <span className='font-semibold'>Tamanho:</span>
              <select
                className='hover:text-black'
                onChange={(e: ChangeEvent) => updateCartItem(e, "selectedSize")}
                defaultValue={data.selectedSize}
              >
                {data.attributes.size.data.map((s, i) => {
                  return (
                    <option
                      key={i}
                      value={s.size}
                      disabled={!s.enabled ? true : false}
                      selected={data.selectedSize === s.size}
                    >
                      {s.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className='flex items-center gap-1'>
              <span className='font-semibold'>Quantidade:</span>
              <select
                className='hover:text-black'
                onChange={(e: ChangeEvent) => updateCartItem(e, "quantity")}
                defaultValue={data.quantity}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]'
            onClick={() => dispatch(removeItem({ id: data.id }))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
