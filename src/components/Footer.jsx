import { FaRegCopyright,FaFacebookSquare,FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";


function Footer() {
    return (
            <div className="border border-t-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between gap-20 px-10 py-10">
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold mb-4">NestQuest</h2>
                        <img className="w-40" src={Logo}/>
                        <p>
                            “Luxury villas & stays in Morocco and beyond.”
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold">Quick Links</h2>
                        <ul className="flex flex-col gap-4">
                            <li className="cursor-pointer hover:text-gray-400"><Link  to="/"/>Home</li>
                            <li className="cursor-pointer hover:text-gray-400"><Link to="browse"/>Properties</li>
                            <li className="cursor-pointer hover:text-gray-400"><Link to="Contact"/>Contact</li>
                            <li className="cursor-pointer hover:text-gray-400"><Link to="faq"/>FAQ</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4" >
                        <h2 className="font-bold">Support</h2>
                        <ul className="flex flex-col gap-4">
                            <li className="cursor-pointer hover:text-gray-400"><Link  to="/">Help Center</Link></li>
                            <li className="cursor-pointer hover:text-gray-400"><Link to="browse">Cancellation Policy</Link></li>
                            <li className="cursor-pointer hover:text-gray-400"><Link to="Contact">Terms of Service</Link></li>
                            <li className="cursor-pointer hover:text-gray-400"><Link to="faq">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4" >
                        <h2 className="font-bold">Trust</h2>
                        <ul className="flex flex-col gap-4">
                            <li className="cursor-pointer hover:text-gray-400">Secure payments</li>
                            <li className="cursor-pointer hover:text-gray-400">Verified listings</li>
                            <li className="cursor-pointer hover:text-gray-400">24/7 support</li>
                            
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4" >
                        <h2 className="font-bold mb-5">Newsletter</h2>
                        <form className="flex items-center w-full max-w-md">
                            <input className="h-14 p-4 pr-14 outline-none border border-gray-500 rounded-full border-r-0 md:w-70 bg-transparent" placeholder="Email" type="email" required></input>
                            <button type="submit" className="bg-black text-white  p-4 rounded-full  -ml-14">Subscribe</button>
                        </form>
                    </div>


                </div>
                <div className="flex justify-between pt-4 pb-10 border-t border-t-gray-200 px-10">
                    <span className="flex items-center gap-1"><FaRegCopyright/> {new Date().getFullYear()} </span>
                    <ul className="flex gap-2 text-xl">
                        <li><FaFacebookSquare/></li>
                        <li><FaSquareXTwitter/></li>
                        <li><FaInstagram/></li>
                    </ul>
                </div>
            </div> 
    )
}

export default Footer
