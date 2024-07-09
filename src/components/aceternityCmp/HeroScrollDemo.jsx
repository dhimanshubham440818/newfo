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
                        <div  class=" mb hd ca">
                            <div class="bc df">
                                <div class="vc fa sg">
                                    <span class="fh _g mh kb ta"> Let's Connect ! </span>
                                    <h2  id="contact" class="dh jh wg wj kk oa"> Interested in <span className="mh" > Collaboration?  </span> </h2>
                                    <p  class="eh _g lh"> Design Scalable Architectures & Implement Server-Side Logic  </p>
                                </div>
                            </div>
                        </div>
                    </>
                }
            >
                <div class=" mb kd ga mt-20">
                    <div class="bc ql/12 df">
                        <form>
                            <div class="mb hd ga">
                                <div class="bc ek/2 df">
                                    <div class="eb">
                                        <input type="text" placeholder="Enter your name" class="input-field" />
                                    </div>
                                </div>
                                <div class="bc ek/2 df">
                                    <div class="eb">
                                        <input type="text" placeholder="Company (Optional)" class="input-field" />
                                    </div>
                                </div>
                                <div class="bc ek/2 df">
                                    <div class="eb">
                                        <input type="email" placeholder="Enter your email" class="input-field" />
                                    </div>
                                </div>
                                <div class="bc ek/2 df">
                                    <div class="eb">
                                        <input type="text" placeholder="Phone number" class="input-field" />
                                    </div>
                                </div>
                                <div class="bc df">
                                    <div class="eb">
                                        <textarea rows="4" placeholder="Tell me about your project" class="input-field ed"></textarea>
                                    </div>
                                </div>
                                <div class="bc df">
                                    <div class="pg sg">
                                        <button class="nb kd id sf tf td fh kh pe fa ai ci ei yi si">
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
