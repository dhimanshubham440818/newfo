'use client'

import { SkillsData } from "@/DataFile/data"
import { CardHoverEffectDemo } from "@/components/aceternityCmp/CardHoverEffectDemo"

export default function Skills() {
    return (
        <section id="skills">
            <div class="a">
                <div class="ig dg _d de">
                    <div class="mb hd ca">
                        <div class="bc df">
                            <div class="vc fa sg fb">
                                <span class="fh _g mh kb ta"> What I Offer? </span>
                                <h2 class="dh jh wg wj kk oa">{SkillsData.title}</h2>
                                <p class="eh _g lh">{SkillsData.summary}</p>
                            </div>
                        </div>
                    </div>
                    <div class="mb hd ca">
                        <CardHoverEffectDemo items={SkillsData.skills} />
                    </div>
                </div>
            </div>
        </section>
    )
}