import { useTranslation } from "react-i18next";
import React from "react";
import img1 from "../../assets/Group 9.png";
import img2 from "../../assets/Rectangle 7.png";
import img3 from "../../assets/Rectangle 8.png";
import img4 from "../../assets/Rectangle 9.png";
import img5 from "../../assets/Group 3.svg";
import img6 from "../../assets/Group 2.svg";
import img7 from "../../assets/Group 4.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  const [t, i18n] = useTranslation();
  return (

    <div className="h-[980px] p-6">

      <div class="flex gap-[10px] p-[50px] h-[800px]" >

        <div class="w-[220px] h-[500px] ">
          <strong class="block text-[30px] text-black-700">{t("c1")}</strong>
          <h2 class="text-xl font-semibold mt-5 text-[#000000]">{t("c2")}</h2>

          <div className="flex w-[138px] h-[36px] mx-[0px] mt-8">
              <img src={img1} alt="" />
            <div className="">
              <p className="font-[600] text-[12px]">Husni Ramdani</p>
              <p className="font-[400] text-[8px]">30 November 2021</p>
            </div>
          </div>

          <div className="w-[220px] h-[1px] bg-[gray] mt-6"></div>

          <strong class="block text-[30px] text-black-700">{t("c1")}</strong>
          <h2 class="text-xl font-semibold mt-5 text-[#000000]">{t("c2")}</h2>
          <div className="w-[220px] h-[1px] bg-[gray] mt-6"></div>
        </div>

        <div class="w-[285px] h-[500px]">
          <img src={img2} alt="" />
          <strong class="block text-[30px] text-black-700">{t("c1")}</strong>
          <h2 class="text-xl font-semibold mt-5 text-[#000000]">{t("c02")}</h2>

          <div className="flex w-[138px] h-[36px] mx-[0px] mt-8">
              <img src={img1} alt="" />
            <div className="">
              <p className="font-[600] text-[12px]">Husni Ramdani</p>
              <p className="font-[400] text-[8px]">30 November 2021</p>
            </div>
          </div>
          <div className="w-[285px] h-[1px] bg-[gray] mt-6"></div>
        </div>

        <div class="w-[220px] h-[500px] ">
          <img src={img3} alt="" />
          <strong class="block text-[30px] text-black-700">{t("c1")}</strong>
          <h2 class="text-xl font-semibold mt-5 text-[#000000]">{t("c002")}</h2>
          <div className="w-[220px] h-[1px] bg-[gray] mt-6"></div>

          <div className="mt-6">
          <img src={img4} alt="" />
          <strong class="block text-[30px] text-black-700">{t("c1")}</strong>
          <h2 class="text-xl font-semibold mt-5 text-[#000000]">{t("c002")}</h2>
          <div className="w-[220px] h-[1px] bg-[gray] mt-6"></div>
          </div>
        </div>

        <div class="w-[285px] h-[500px]">
          <strong class="block text-[30px] text-black-700">{t("c1")}</strong>
          <h2 class="text-xl font-semibold mt-5 text-[#000000]">{t("c02")}</h2>

          <div className="flex w-[138px] h-[36px] mx-[0px] mt-8">
              <img src={img1} alt="" />
            <div className="">
              <p className="font-[600] text-[12px]">Husni Ramdani</p>
              <p className="font-[400] text-[8px]">30 November 2021</p>
            </div>
          </div>
          <div className="w-[285px] h-[1px] bg-[gray] mt-12"></div>

          <strong class="block text-[30px] text-black-700 mt-12" >{t("c1")}</strong>
          <h2 class="text-xl font-semibold mt-5 text-[#000000]">{t("c02")}</h2>

          <div className="flex w-[138px] h-[36px] mx-[0px] mt-8">
              <img src={img1} alt="" />
            <div className="">
              <p className="font-[600] text-[12px]">Husni Ramdani</p>
              <p className="font-[400] text-[8px]">30 November 2021</p>
            </div>
          </div>
          <div className="w-[285px] h-[1px] bg-[gray] mt-8"></div>
        </div>

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

export default Banner;
