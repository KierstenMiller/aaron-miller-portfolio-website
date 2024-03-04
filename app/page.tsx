"use client";

import { ProjectNav } from "./components/project-navigation/ProjectNav";

export default function Home() {
  return (
    <div>
      <header>
        <h1>
          <div className="primary-title mb-24">Aaron Miller</div>
          <div className="secondary-title hidden md:block mb-24">A digital designer who creates efficient web experiences, beautiful graphic solutions, and experimental typography.</div>
          <div className="secondary-title md:hidden mb-16">A graphic designer who specializes in Web Design, Branding, and UX/UI. Currenly based in Minneapolis</div>
        </h1>
      </header>
      <main>
        {/* <nav aria-label="Primary" className="work-menu mb-24">
          <ul>
            <li className="main-link work"><a href="">Work</a></li>
            <li className="main-link not-work"><a href="/not-work">Not Work</a></li>
          </ul>
        </nav> */}
        <ProjectNav ariaLabel="Secondary" />
      </main>
    </div>
  );
}
