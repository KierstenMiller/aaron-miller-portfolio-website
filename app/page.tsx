"use client";

import Image from "next/image";
import { ModalTrigger } from "./components/modals/modalTrigger/modalTrigger";

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
        <div className="projects-menu">
          <ModalTrigger
            triggerConfig={{
              text: <>
                <span className="sr-only">Sleep Number Work</span>
                <Image src="/images/sleep-number-work-thumbnail.png" width={600} height={310} alt="" />
              </>
            }}
            modalConfig={{
              header: { content: 'Header' },
              body: <div>Sleep Number Body</div>,
            }}
          />
          <ModalTrigger
            triggerConfig={{
              text: <>
                <span className="sr-only">Space150 Website</span>
                <Image src="/images/space150-website-thumbnail.png" width={600} height={310} alt="" />
              </>
            }}
            modalConfig={{
              header: { content: 'Header' },
              body: <div>Space150 Website</div>,
            }}
          />
          <ModalTrigger
            triggerConfig={{
              text: <>
                <span className="sr-only">Music Analytics App</span>
                <Image src="/images/music-analytics-app-thumbnail.png" width={600} height={310} alt="" />
              </>
            }}
            modalConfig={{
              header: { content: 'Header' },
              body: <div>Music Analytics Body</div>,
            }}
          />
          <ModalTrigger
            triggerConfig={{
              text: <>
                <span className="sr-only">Medtronic Project</span>
                <Image src="/images/medtronic-project-thumbnail.png" width={600} height={310} alt="" />
              </>
            }}
            modalConfig={{
              header: { content: 'Header' },
              body: <div>Medtronic Body</div>,
            }}
          />
        </div>
        
        <nav aria-label="Secondary" className="projects-menu">
          <ul>
            <li>
              <a href="/work/sleep-number">
                
              </a>
            </li>
            <li>
              <a href="/work/space150">
                
              </a>
            </li>
            <li>
              <a href="/work/music-analytics-app">
                
              </a>
            </li>
            <li>
              <a href="/work/medtronic-project">
                
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
