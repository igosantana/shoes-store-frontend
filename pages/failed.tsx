import Wrapper from "@/components/Wrapper";
import { NextPage } from "next";
import Link from "next/link";

const Failed: NextPage = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">Falha no pagamento</div>
          <div className="text-base mt-5">
            Por qualquer produto que esteja procurando, envie um email
          </div>
          <div className="underline">shoeshopcontact@shop.com</div>

          <Link href="/" className="font-bold mt-5">
            Continue comprando
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Failed;
