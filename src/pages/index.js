import * as React from "react"
import Header from "../components/header"

import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Header />
    <section className="section2 flex pl-32 pb-36 justify-around sm:flex flex-col sm:flex-row max-[600px]:bg-sky-300 max-[600px]:flex">
        <div className="">


            <h1
                className="roboto-mono text-[#61088A] text-[40px] font-medium text-6xl md:text-4xl lg:text-4xl leading-[57.65px]">
                Hello There, <br /> I'm Olive
            </h1>
            <p className="text-[17px] pt-10 roboto-mono">I love photography</p>
            <p className=" ps-8 roboto-mono pl-[10.25rem] pt-[10.25rem]">I love Coding</p>
        </div>

        <div className="pt-[5.25rem] md:shrink-0">
            <img className="sm:max-w-xl" src="undraw_my_documents_re_13dc 1.svg" />
        </div>

        <div>
            <p className="roboto-mono pr-[9.75rem] pt-20">I am a passionate and proficient <br />WordPress designer and
                experience<br /> designer.</p>
            <p className="roboto-mono ps-8 pt-[12.25rem] pl-40 ">I love solving problems</p>
        </div>
        <div className=" social-sidebar fixed top-2/3 transform -translate-y-1/2 left-0 text-indigo-600 ml-14 text-2xl p-5">
            <ul className="social-icons list-none p-0">
                <li className="bg-white p-2 rounded-full mb-4"><a href="https://github.com/uzomaolive" target="_blank"><i
                            className="fa-brands fa-github  rounded-full p-2"></i></a></li>

                <li className="bg-white p-2 rounded-full mb-4"><a href="https://www.instagram.com/oliveuzoma/"
                        target="_blank"><i className="fa-brands fa-instagram rounded-full p-2"></i></a></li>
                <li className="bg-white p-2 rounded-full mb-4"><a href="https://www.linkedin.com/in/olive-uzoma-27baa9172"
                        target="_blank"><i className="fa-brands fa-linkedin-in rounded-full p-2"></i></a></li>

                <li className="bg-white p-2 rounded-full mb-4"><a href="https://twitter.com/UzomaOlive" target="_blank"><i
                            className="fa-brands fa-twitter rounded-full p-2"></i></a></li>
            </ul>
        </div>
    </section>
    
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
