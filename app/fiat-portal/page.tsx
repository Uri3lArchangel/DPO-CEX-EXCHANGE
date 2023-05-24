import React from "react";
import Footer from "../components/sections/Footer";
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/Section2";
import index from '@/app/styles/portal/scss/index.module.scss'

const page = () => {
  return (
    <>
      <article>
        <div className={index.HomeContainer}>
          <div className={index.Subcontainer}>
        <Section1 />
        <Section2 clientId={process.env.CLIENTID!} />
        </div>
        <Footer />
        </div>
      </article>
    </>
  );
};

export default page;
