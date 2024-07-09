'use client'
import { ThreeDCardDemo } from '@/components/aceternityCmp/ThreeDCardDemo'
import { ProjectsData } from "@/DataFile/data"

export default function Projects() {
  return (
    <section id="projects" class="ig fg se">
      <div class="a">
        <div class="mb hd ca">
          <div class="bc df">
            <div class="vc fa sg gb">
              <span class="fh _g mh kb ta"> {ProjectsData.sectionName} </span>
              <h2 class="dh jh wg wj kk oa"> {ProjectsData.title} </h2>
              <p class="eh _g lh">
                {ProjectsData.summary}
              </p>
            </div>
          </div>
        </div>
        <div class="mb hd ga">
          {
            ProjectsData.Projects_journey.map((ele, index) => (
              <div class="bc pl/2 wm/3 df" key={index}>
                <ThreeDCardDemo data={ele} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}