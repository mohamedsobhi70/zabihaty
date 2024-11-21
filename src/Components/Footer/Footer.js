import { Link } from "react-router-dom";
import SocialItem from "./SocialItem";
import logo from "../../images/icons/logo.svg";
import whatsapp from "../../images/icons/whatsapp.svg";
import fb from "../../images/icons/fb.svg";
import insta from "../../images/icons/insta.svg";
import snapchat from "../../images/icons/snapchat.svg";
import twitter from "../../images/icons/twitter.svg";

function Footer() {
    return (
        <footer>
            <div className="bg-white">
                <div className="container pt-20 pb-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-6 col-span-1 lg:col-span-2">
                        <Link to="/">
                            <img src={logo} width="69" height="69" alt="Logo" />
                        </Link>

                        <div className="flex items-center gap-4">
                            <SocialItem
                                link="https://wa.me/+201550417652"
                                img={whatsapp}
                                width="24"
                                height="24"
                                alt="whatsapp"
                            />
                            <SocialItem link="/fb" img={fb} width="15" height="28" alt="fb" />
                            <SocialItem
                                link="/insta"
                                img={insta}
                                width="24"
                                height="24"
                                alt="insta"
                            />
                            <SocialItem
                                link="/snapchat"
                                img={snapchat}
                                width="26"
                                height="24"
                                alt="snapchat"
                            />
                            <SocialItem
                                link="/twitter"
                                img={twitter}
                                width="24"
                                height="19"
                                alt="twitter"
                            />
                        </div>

                        <p className="text-[#525252] leading-6 w-3/4">
                            An Emirati company working to provide and develop services for
                            supplying and presenting carcasses and livestock in an advanced
                            manner to keep pace with modern life.
                        </p>
                    </div>

                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link
                                to="/"
                                className="text-[#525252] transition-all duration-300 font-medium hover:text-[#0A4C26]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/terms"
                                className="text-[#525252] transition-all duration-300 font-medium hover:text-[#0A4C26]"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/offers"
                                className="text-[#525252] transition-all duration-300 font-medium hover:text-[#0A4C26]"
                            >
                                Offers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="text-[#525252] transition-all duration-300 font-medium hover:text-[#0A4C26]"
                            >
                                Register as a Store
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/technicalsupport"
                                className="text-[#525252] transition-all duration-300 font-medium hover:text-[#0A4C26]"
                            >
                                Technical Support
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link
                                to="https://wa.me/0097128004664"
                                target="_blank"
                                className="text-[#525252] transition-colors duration-300 font-medium hover:text-[#0A4C26] hover:underline "
                            >
                                WhatsApp: 0097128004664
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="tel:8004664"
                                className="text-[#525252] transition-colors duration-300 font-medium hover:text-[#0A4C26] hover:underline "
                            >
                                Phone: 8004664
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="mailto:info@oasislivestock.com"
                                className="text-[#525252] transition-colors duration-300 font-medium hover:text-[#0A4C26] hover:underline "
                            >
                                info@oasislivestock.com
                            </Link>
                        </li>
                        <li>United Arab Emirates, Abu Dhabi</li>
                    </ul>
                </div>
            </div>
            
            <div className="bg-[#E5E5E5]">
                <p className="container py-6 flex items-center justify-between text-[#111827]">
                    <span>Privacy Policy Terms and Conditions</span>
                    <span>&copy; 2024 Zabehaty</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
