import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
