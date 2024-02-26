import Image from "next/image"

export const ProjectNav = ({ariaLabel}: {ariaLabel: string}) => {
    return <nav aria-label={ariaLabel}>
    <ul className="projects-menu">
      <li>
        <a href="/work/sleep-number">
          <span className="sr-only">Sleep Number Work</span>
          <Image src="/static/images/sleep-number-work-thumbnail.png" width={600} height={310} alt="" />   
        </a>
      </li>
      <li>
        <a href="/work/space150">
          <span className="sr-only">Space150 Website</span>
          <Image src="/static/images/space150-website-thumbnail.png" width={600} height={310} alt="" /> 
        </a>
      </li>
      <li>
        <a href="/work/music-analytics-app">
          <span className="sr-only">Music Analytics App</span>
          <Image src="/static/images/music-analytics-app-thumbnail.png" width={600} height={310} alt="" />
        </a>
      </li>
      <li>
        <a href="/work/medtronic-project">
          <span className="sr-only">Medtronic Project</span>
          <Image src="/static/images/medtronic-project-thumbnail.png" width={600} height={310} alt="" />
        </a>
      </li>
    </ul>
  </nav>
}