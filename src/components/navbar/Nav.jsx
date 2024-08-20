import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import logo  from "../../assets/Group 5.svg";

const Nav = () => {
  const [t, i18n] = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <div className="p-8 flex justify-between items-center shadow-md gap-[320px]">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="font-[700] text-[24px] w-[300px]">
              <NavLink to="/single" className="nav-link hover:text-[#5A47AB]">{t("t1")}</NavLink>
        </div>
        <div>
        <select
          defaultValue={i18n.language}
          onChange={handleChange}
          className="select-custom text-[18px] font-[400] hover:text-[#5A47AB] cursor-[pointer]"
        >
          <option value="uz">UZ</option>
          <option value="en">EN</option>
          <option value="ru">РУ</option>
        </select>
        </div>
      </div>
    </>
  );
};

export default Nav;
