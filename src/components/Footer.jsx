import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
export default function Footer(){
    return (
        <footer className="bg-emerald-700 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center">
                        <span className=" font-bold text-3xl text-emerald-500">Keen<span className="text-emerald-200">Keeper</span></span>
                
                <p className="text-emerald-100 max-w-md mx-auto mb-8 text-sm md:text-base">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <div className="mb-10">
                    <p className="text-emerald-100 text-xm mb-3 font-bold">Social Links</p>
                    <div className="flex justify-center gap-6 text-3xl">
                        <a href=""><img src={facebook} alt="facebook" /></a>
                        <a href=""><img src={instagram} alt="instagram" /></a>
                        <a href=""><img src={twitter} alt="twitter" /></a>
                    </div>
                </div>
                <div className="pt-8 border-t border-emerald-600 text-xs text-emerald-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>2026 KeenKeeper. All rights reserved</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition">Terms of Service</a>
                            <a href="#" className="hover:text-white transition">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}