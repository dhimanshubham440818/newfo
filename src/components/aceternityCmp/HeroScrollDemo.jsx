"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <div  className=" mb hd ca">
                            <div className="bc df">
                                <div className="vc fa sg">
                                    <span className="fh _g mh kb ta"> Let's Connect ! </span>
                                    <h2  id="contact" className="dh jh wg wj kk oa"> Interested in <span className="mh" > Collaboration?  </span> </h2>
                                    <p  className="eh _g lh"> Design Scalable Architectures & Implement Server-Side Logic  </p>
                                </div>
                            </div>
                        </div>
                    </>
                }
            >
                <div className=" mb kd ga mt-20">
                    <div className="bc ql/12 df">
                        <form>
                            <div className="mb hd ga">
                                <div className="bc ek/2 df">
                                    <div className="eb">
                                        <input type="text" placeholder="Enter your name" className="input-field" />
                                    </div>
                                </div>
                                <div className="bc ek/2 df">
                                    <div className="eb">
                                        <input type="text" placeholder="Company (Optional)" className="input-field" />
                                    </div>
                                </div>
                                <div className="bc ek/2 df">
                                    <div className="eb">
                                        <input type="email" placeholder="Enter your email" className="input-field" />
                                    </div>
                                </div>
                                <div className="bc ek/2 df">
                                    <div className="eb">
                                        <input type="text" placeholder="Phone number" className="input-field" />
                                    </div>
                                </div>
                                <div className="bc df">
                                    <div className="eb">
                                        <textarea rows="4" placeholder="Tell me about your project" className="input-field ed"></textarea>
                                    </div>
                                </div>
                                <div className="bc df">
                                    <div className="pg sg">
                                        <button className="nb kd id sf tf td fh kh pe fa ai ci ei yi si">
                                            Contact Me
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </ContainerScroll>
        </div>
    );
}
