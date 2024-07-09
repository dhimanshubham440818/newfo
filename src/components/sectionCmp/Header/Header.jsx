'use client'
import { HeaderData } from "@/DataFile/data"
import Link from "next/link"
import { useRouter } from "next/navigation";

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
        <header class="header me d f g y bc mb id ai">
            <div class="a">
                <div class="mb ca id ld e">
                    <div class="df cc oc">
                        <a href="index.html" class="header-logo bc kb ef xl">
                            <img src="/images/logo.svg" alt="logo" class="bc" />
                        </a>
                    </div>
                    <div class="mb df ld id bc">
                        <div>
                            <button id="navbarToggler" name="navbarToggler" aria-label="navbarToggler"
                                class="kb d h i/2 bd hl bj zh ff gf qd">
                                <span class="e dc pb da kb ne"></span>
                                <span class="e dc pb da kb ne"></span>
                                <span class="e dc pb da kb ne"></span>
                            </button>
                            <nav id="navbarCollapse" class="d hf yl zl dn oe vl th qd pc bc rl il h j ob el sk pm">
                                <ul class="ln fl">

                                    {menuLinks.map((ele, index) => (
                                        <>
                                            {!ele.subMenuLinks ? (
                                                <li class="e dj">
                                                    <Link href={ele.url} onClick={(e) => handleClick(e, ele.url)} class="menu-scroll ug jh gj if _l gl am mb ea zk _k vm">
                                                        {ele.linkTitle}
                                                    </Link>
                                                </li>
                                            ) : (
                                                <>
                                                    <li class="e dj submenu-item">
                                                        <Link href="javascript:void(0)"
                                                            class="ug jh gj if _l gl em fm mb ea zk _k vm e fi ki ji ni oi pi mi rm gi hi/2 li ii">
                                                            {ele.linkTitle}
                                                        </Link>
                                                        <div class="submenu ob e tk ec j uk g rd qm af el om rk ij sm tm oe bi ci">
                                                            {ele.subMenuLinks.map((ele) => (
                                                                <a href={ele.url} onClick={(e) => handleClick(e, ele.url)} class="kb vg jh sd ui jf df"> {ele.linkTitle} </a>
                                                            ))}
                                                        </div>
                                                    </li>
                                                </>
                                            )}
                                        </>
                                    ))}

                                </ul>
                            </nav>
                        </div>
                        <div class="nj jd ob xf gm">
                            <a href="#contact" class="ug dh kh pe td kf lf jk bm en yi si ai ei ci">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}