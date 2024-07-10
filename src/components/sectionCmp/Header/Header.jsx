'use client'
import { HeaderData } from "@/DataFile/data"
import Link from "next/link"
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
    
    const router = useRouter();
    const { menuLinks } = HeaderData;
    const handleClick = (e, href) => {
        e.preventDefault();
        if (href.startsWith('#')) {
            const id = href.substring(1);
            if (id) {
                router.push(`#${id}`, undefined, { shallow: true });
            }
        } else {
            router.push(href);
        }
    };

    return (
        <header className="header me d f g y bc mb id ai">
            <div className="a">
                <div className="mb ca id ld e">
                    <div className="df cc oc">
                        <a href="index.html" className="header-logo bc kb ef xl">
                            <img src="/images/logo.svg" alt="logo" className="bc" />
                        </a>
                    </div>
                    <div className="mb df ld id bc">
                        <div>
                            <button id="navbarToggler" name="navbarToggler" aria-label="navbarToggler"
                                className="kb d h i/2 bd hl bj zh ff gf qd">
                                <span className="e dc pb da kb ne"></span>
                                <span className="e dc pb da kb ne"></span>
                                <span className="e dc pb da kb ne"></span>
                            </button>
                            <nav id="navbarCollapse" className="d hf yl zl dn oe vl th qd pc bc rl il h j ob el sk pm">
                                <ul className="ln fl">

                                    {menuLinks.map((ele, index) => (
                                        <React.Fragment key={index}>
                                            {!ele.subMenuLinks ? (
                                                <li className="e dj" key={index+ele.linkTitle}>
                                                    <Link href={ele.url} onClick={(e) => handleClick(e, ele.url)} className="menu-scroll ug jh gj if _l gl am mb ea zk _k vm">
                                                        {ele.linkTitle}
                                                    </Link>
                                                </li>
                                            ) : (
                                                <>
                                                    <li className="e dj submenu-item" key={index}>
                                                        <Link href="javascript:void(0)"
                                                            className="ug jh gj if _l gl em fm mb ea zk _k vm e fi ki ji ni oi pi mi rm gi hi/2 li ii">
                                                            {ele.linkTitle+ele.linkTitle}
                                                        </Link>
                                                        <div className="submenu ob e tk ec j uk g rd qm af el om rk ij sm tm oe bi ci">
                                                            {ele.subMenuLinks.map((ele) => (
                                                                <a href={ele.url} key={index+ele.linkTitle} onClick={(e) => handleClick(e, ele.url)} className="kb vg jh sd ui jf df"> {ele.linkTitle} </a>
                                                            ))}
                                                        </div>
                                                    </li>
                                                </>
                                            )}
                                        </React.Fragment>
                                    ))}

                                </ul>
                            </nav>
                        </div>
                        <div className="nj jd ob xf gm">
                            <a href="#contact" className="ug dh kh pe td kf lf jk bm en yi si ai ei ci">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}