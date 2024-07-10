'use client'
import { ThreeDCardDemo } from '@/components/aceternityCmp/ThreeDCardDemo'
import { ProjectsData } from "@/DataFile/data"

export default function Projects() {
  return (
    <section id="projects" className="ig fg se">
      <div className="a">
        <div className="mb hd ca">
          <div className="bc df">
            <div className="vc fa sg gb">
              <span className="fh _g mh kb ta"> {ProjectsData.sectionName} </span>
              <h2 className="dh jh wg wj kk oa"> {ProjectsData.title} </h2>
              <p className="eh _g lh">
                {ProjectsData.summary}
              </p>
            </div>
          </div>
        </div>
        <div className="mb hd ga">
          {
            ProjectsData.Projects_journey.map((ele, index) => (
              <div className="bc pl/2 wm/3 df" key={index}>
                <ThreeDCardDemo data={ele} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}