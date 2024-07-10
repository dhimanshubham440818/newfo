'use client'

import { SkillsData } from "@/DataFile/data"
import { CardHoverEffectDemo } from "@/components/aceternityCmp/CardHoverEffectDemo"

export default function Skills() {
    return (
        <section id="skills">
            <div className="a">
                <div className="ig dg _d de">
                    <div className="mb hd ca">
                        <div className="bc df">
                            <div className="vc fa sg fb">
                                <span className="fh _g mh kb ta"> What I Offer? </span>
                                <h2 className="dh jh wg wj kk oa">{SkillsData.title}</h2>
                                <p className="eh _g lh">{SkillsData.summary}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb hd ca">
                        <CardHoverEffectDemo items={SkillsData.skills} />
                    </div>
                </div>
            </div>
        </section>
    )
}