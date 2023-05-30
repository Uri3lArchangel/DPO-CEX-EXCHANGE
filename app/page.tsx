import React from "react";
import Footer from "@/app/components/sections/Footer";
import Section1 from "@/app/components/sections/Section1";
import Section2 from "@/app/components/sections/Section2";
import index from '@/app/styles/portal/scss/index.module.scss'

const page = () => {
  return (
    <>
        <div className={index.HomeContainer}>
          <div className={index.Subcontainer}>
        <Section1 />
        <Section2 clientId={process.env.CLIENTID!} />
        </div>
        <Footer />
        </div>
    </>
  );
};

export default page;
