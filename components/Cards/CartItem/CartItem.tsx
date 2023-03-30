const CartItem = () => {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
      <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
        <img src='/product-1.webp' />
      </div>
      <div className='w-full flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between'>
          <h3 className='text-lg md:text-2xl font-semibold text-black/[0.8]'>
            Jordan Retro
          </h3>
          <span className='text-sm md:text-md font-medium text-black/[0.5] block'>
            Tênis Masculino
          </span>
          <span className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>
            Preço: R$ 800.00
          </span>
        </div>
        <span className='text-md  font-medium text-black/[0.5] hidden md:block'>
          Tênis Masculino
        </span>
        <div className='flex items-center justify-between mt-4'></div>
      </div>
    </div>
  );
};

export default CartItem;
