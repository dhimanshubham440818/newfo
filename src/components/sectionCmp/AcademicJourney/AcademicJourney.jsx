import { EducationData } from "@/DataFile/data"

export default function AcademicJourney() {
    return (
        <section id="academic_journey" className="ig oe  e z">
            <div className="a">
                <div className="zd de jg">
                    <div className="mb hd ca">
                        <div className="bc df">
                            <div className="vc fa sg gb">
                                <span className="fh _g mh kb ta"> {EducationData.sectionName} </span>
                                <h2 className="dh jh wg wj kk oa"> {EducationData.title} </h2>
                                <p className="eh _g lh">
                                    {EducationData.summary}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="e cg">
                        <span className="d f kb x vk/2 lc qb te"></span>
                        <div className="mb hd ga">
                            {
                                EducationData.education_journey.map((ele, index) => (
                                    index % 2 == 0 ?
                                        <>
                                            <div className="bc pl/2 df" key={index}>
                                                <div className="tl an bc ib mg uj em gm cl im e bg">
                                                    <span className="d i g wk xk mc yb td oe yd he"></span>
                                                    <h3 className="fh zg jh qa"> {ele.degreeName} </h3>
                                                    <p className="fh ug lh ua"> {ele.university} </p>
                                                    <span className="nb id kd if df td pe kh ah fh oa"> {ele.eop} </span>
                                                    <p className="eh ug lh">
                                                        {ele.summary}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bc pl/2 df"></div>
                                            <div className="bc pl/2 df"></div>
                                        </>
                                        :
                                        <>
                                            <div className="bc pl/2 df">
                                                <div className="tl an bc mg uj em dl e bg">
                                                    <span className="d i g yk mc yb td oe yd he"></span>
                                                    <h3 className="fh zg jh qa"> { ele.degreeName } </h3>
                                                    <p className="fh ug lh ua"> { ele.university } </p>
                                                    <span className="nb id kd if df td pe kh ah fh oa"> { ele.eop } </span>
                                                    <p className="eh ug lh">
                                                        { ele.summary }
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="d q f ba">
                    <svg width="455" height="1307" viewBox="0 0 455 1307" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.08" width="332.05" height="1060.35"
                            transform="matrix(-0.632736 -0.774367 -0.774367 0.632736 1031.2 139.128)" fill="url(#paint0_linear_0:1)" />
                        <rect opacity="0.08" width="509.849" height="1060.35"
                            transform="matrix(-0.632736 -0.774367 -0.774367 0.632736 1293.7 635.81)" fill="url(#paint1_linear_0:1)" />
                        <defs>
                            <linearGradient id="paint0_linear_0:1" x1="166.025" y1="0" x2="166.025" y2="1060.35"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4A6CF7" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_0:1" x1="254.924" y1="0" x2="254.924" y2="1060.35"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4A6CF7" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="d g k aa">
                    <svg width="416" height="1453" viewBox="0 0 416 1453" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.08" width="332.05" height="1030.82"
                            transform="matrix(0.632736 0.774368 0.774368 -0.632736 -603 1507.24)" fill="url(#paint0_linear_0:1)" />
                        <rect opacity="0.08" width="791.583" height="1060.35"
                            transform="matrix(0.632736 0.774368 0.774368 -0.632736 -906.263 670.922)" fill="url(#paint1_linear_0:1)" />
                        <defs>
                            <linearGradient id="paint0_linear_0:1" x1="166.025" y1="0" x2="166.025" y2="1030.82"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4A6CF7" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_0:1" x1="395.791" y1="0" x2="395.791" y2="1060.35"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4A6CF7" />
                                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </div>
        </section>
    )
}