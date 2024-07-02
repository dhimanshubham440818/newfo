import { ThreeDCardDemo } from '@/components/aceternityCmp/ThreeDCardDemo'

export default function Projects() {
  return (
    <section id="news" class="ig fg se">
      <div class="a">
        <div class="mb hd ca">
          <div class="bc df">
            <div class="vc fa sg gb">
              <span class="fh _g mh kb ta"> Projects </span>
              <h2 class="dh jh wg wj kk oa">From The Blog</h2>
              <p class="eh _g lh">There are many variations of passages of Lorem Ipsum available but the majority have
                suffered alteration in some form.</p>
            </div>
          </div>
        </div>
        <div class="mb hd ga">
          <div class="bc pl/2 wm/3 df">
            <ThreeDCardDemo />
          </div>
          <div class="bc pl/2 wm/3 df">
            <ThreeDCardDemo />
          </div>
          <div class="bc pl/2 wm/3 df">
            <ThreeDCardDemo />
          </div>
        </div>
      </div>
    </section>
  )
}