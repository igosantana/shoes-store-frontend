import { ReactNode } from "react";

type WrapperProps = {
  className?: string;
  children: ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({
  className,
  children,
}): JSX.Element => {
  return (
    <div
      className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
