import footerApiData from "../../api/footerApi.json";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

export const Footer = () => {
  const footerIcon = {
    IoIosCall: <IoIosCall />,
    CiLocationOn: <CiLocationOn />,
    CiMail: <CiMail />,
  };
  return (
    <footer>
      <div className="container grid grid-three-cols">
        {footerApiData.map((curElem, index) => {
          const { icon, title, details } = curElem;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};
