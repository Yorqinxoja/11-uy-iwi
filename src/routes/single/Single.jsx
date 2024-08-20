import { useTranslation } from "react-i18next";
import React from "react";
import img from "../../assets/Rectangle 7.png";
import img5 from "../../assets/Group 3.svg";
import img6 from "../../assets/Group 2.svg";
import img7 from "../../assets/Group 4.svg";  

const Single = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="h-[700px]">
      <img className="w-[1100px] my-[100px]" src={img} alt="" />
      <div className="m-w-[1100px] my-[100px] mx-[170px]">
        <h1 className=" text-[#3A0CA3] text-[42px] font-bold ">{t("s1")}</h1>
        <br />
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s2")}</p>
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s3")}</p>
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s3")}</p>
      </div>
      <div className="w-[1100px]">
        <h2 className=" text-[#3A0CA3] text-[36px] font-bold ">{t("s4")}</h2>
        <br />
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s2")}</p>
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s3")}</p>
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s3")}</p>
      </div>

      <div className=" w-[1440px] h-[60px] mt-12 flex items-center gap-[80px]">
      <strong class="block text-[30px] text-black-700" >{t("c01")}</strong>
      <a className="text-[16px] font-[600]" href="">gblog@gmail.com</a>
      <div className="w-[140px] flex">
        <a href=""><img src={img5} alt="" /></a>
        <a href=""><img src={img6} alt="" /></a>
        <a href=""><img src={img7} alt="" /></a>
      </div>
      </div>
    </div>
  );
};

export default Single;
