import * as React from "react"
import { Link } from "gatsby"
import { FaPhoneVolume } from "react-icons/fa6";

const Header = ({ siteTitle }) => (
  <header>
    <nav class="">
        <div class="hidden md:flex justify-between items-center">

            <div class="flex space-x-4 py-5 ps-4 pl-7">
                <div class="pb-11 pt-7 pl-16 pr-20 w-72">

                    <Link to="/" class="items-center py-5 roboto-mono "> <img alt="logo" src="logo.svg" /></Link> </div>

                <div>
                    <ul class="flex sm:flex-row md:flex-row items-center space-x-1 almarai py-7 px-5 ">
                        <li class=" py-5 px-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link
                                to="#">Home</Link></li>
                        <li class=" py-5 px-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link
                                to="#">About</Link></li>
                        <li class=" py-5 px-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link
                                to="#">Services</Link></li>
                        <li class=" py-5 px-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link
                                to="#">Projects</Link></li>
                        <li class=" py-5 px-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><Link
                                to="#">Blog</Link></li>

                    </ul>
                </div>
            </div>
            <div class="flex items-center space-x-1 almarai py-7 pl-20 pr-28 mb-5">
                <Link to="#" class="py-7 px-3">Contact</Link>
                <div className="text-white bg-[#6C63FF] rounded-full p-2 hover:bg-[#61088A]">
                <FaPhoneVolume />
                </div>

            </div>
        </div>

        <div class="mobile-nav w-full flex flex-col items-center md:hidden">
            <Link to="#" class="size-20 pt-6"><img src="logo.svg" alt="logo" /></Link>
            <div class="flex flex-wrap">
                <ul>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Projects</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
)

export default Header
