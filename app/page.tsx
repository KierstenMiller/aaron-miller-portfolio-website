import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <h1>
          <div className="primary-title mb-24">Aaron Miller</div>
          <div className="secondary-title hidden md:block mb-24"> A graphic designer who specializes in Web Design, Branding, and UX/UI. Currenly based in Minneapolis</div>
          <div className="secondary-title md:hidden mb-16"> A design specialist for web and brands</div>
        </h1>
      </header>
      <main>
        <nav aria-label="Main" className="work-menu mb-24">
          <ul>
            <li className="main-link work"><a href="">Work</a></li>
            <li className="main-link not-work"><a href="/not-work">Not Work</a></li>
          </ul>
        </nav>
        <nav aria-label="Secondary" className="projects-menu">
          <ul>
            <li>
              <a href="/work/sleep-number">
                <span className="sr-only">Sleep Number Work</span>
                <Image src="/images/sleep-number-work-thumbnail.png" width={600} height={310} alt="" />
              </a>
            </li>
            <li>
              <a href="/work/space150">
                <span className="sr-only">Space150 Website</span>
                <Image src="/images/space150-website-thumbnail.png" width={600} height={310} alt="" />
              </a>
            </li>
            <li>
              <a href="/work/music-analytics-app">
                <span className="sr-only">Music Analytics App</span>
                <Image src="/images/music-analytics-app-thumbnail.png" width={600} height={310} alt="" />
              </a>
            </li>
            <li>
              <a href="/work/medtronic-project">
                <span className="sr-only">Medtronic Project</span>
                <Image src="/images/medtronic-project-thumbnail.png" width={600} height={310} alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
