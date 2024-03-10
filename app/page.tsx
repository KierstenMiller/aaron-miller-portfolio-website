"use client";

import classNames from "classnames";
import Image from "next/image";

import { Inventory } from "./components/design/Inventory";
import { ProjectNav } from "./components/project-navigation/ProjectNav";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <header id="top">
        <div className={styles['home-header']}>
          <h1 className="primary-title mb-24">Aaron Miller</h1>
          <div className={styles['actions-menu']}>
            <a className="ghostly-button" href="#profile">Info</a>
            <a className="ghostly-button" href="#contact">Contact</a>
          </div>
        </div>
        <p className={classNames('primary-title', styles['header-description'], 'mb-24')}>A digital designer who creates efficient web experiences, beautiful graphic solutions, and experimental typography.</p>
      </header>
      <main>
        {/* <nav aria-label="Primary" className="work-menu mb-24">
          <ul>
            <li className="main-link work"><a href="">Work</a></li>
            <li className="main-link not-work"><a href="/not-work">Not Work</a></li>
          </ul>
        </nav> */}
        <ProjectNav ariaLabel="Secondary" />
        <div className={styles['profile']}>
        <h2 className="secondary-title mobile-max-down-only">Hi, I&apos;m Aaron!</h2>
          <div>
            <Image className="tablet-min-up-only" src='/static/images/aaron-profile-pic.jpg' alt="Aaron Miller" width={1920} height={1080} />
            <Image className="mobile-max-down-only" src='/static/images/aaron-profile-pic_mobile.jpg' alt="Aaron Miller" width={1920} height={1080} />
          </div>
          <div>
            <h2 id="profile" className="secondary-title tablet-min-up-only">Hi, I&apos;m Aaron!</h2>
            <p>I am a digital designer who loves creating clean user experiences for web experiences while also specializing in the design of graphics, print, and typography.</p>
            <p>I earned my Bachelor of Graphic Design from the Minneapolis College of Art and Design in 2018 and have worked design internships at HCL Technologies and space150. Most recently I was a Graphic Designer for Sleep Number’s web team.</p>
            <p>Currently lives in Minneapolis with his wife, two cats, and puppy.</p>
            <Inventory snapshots={[
                {id: 'services', label: 'Services', content: [{id: 'graphic-design', type: 'pill', message: 'Graphic Design'}, {id: 'web-design', type: 'pill', message: 'Web Design'}, {id: 'Production Design', type: 'pill', message: 'Production Design'}, {id: 'ux-ui-strategy', type: 'pill', message: 'UX/UI Strategy'}, {id: 'advertising', type: 'pill', message: 'Advertising'}, {id: 'signage', type: 'pill', message: 'Signage'}, {id: 'illustration', type: 'pill', message: 'Illustration'}, {id: 'web-animation', type: 'pill', message: 'Web Animation'}, {id: 'font-design', type: 'pill', message: 'Font Design'}, {id: 'book-layout', type: 'pill', message: 'Book Layout'}]},
                {id: 'tools', label: 'Tools', content: [{id: 'figma', type: 'pill', message: 'Figma'}, {id: 'sketch', type: 'pill', message: 'Sketch'}, {id: 'photoshop', type: 'pill', message: 'Photoshop'}, {id: 'illustrator', type: 'pill', message: 'Illustrator'}, {id: 'indesign', type: 'pill', message: 'InDesign'}, {id: 'after-effects', type: 'pill', message: 'After Effects'}, {id: 'html', type: 'pill', message: 'HTML'}, {id: 'css', type: 'pill', message: 'CSS'}, {id: 'javascript', type: 'pill', message: 'Javascript'}]},
              ]}
            />
          </div> 
        </div>
        <div className="gray-container">
          <div className={styles['connect-container']}>
            <div className={styles['lets-connect']}>
              <h2 id="contact" className="secondary-title">Let&apos;s Connect!</h2>
              <p>Want to get in touch? Reach me by emailing me directly, or reaching out to me on LinkedIn.</p>
              <p>Talk soon!</p>
            </div>
            <div className={styles['my-links']}>
              <h2 className="secondary-title">My Links</h2>
              <a className="highlighted-button" href="mailto:awmiller1993@gmail.com">awmiller1993@gmail.com</a>
              <a className="highlighted-button" target="_blank" rel="noopener noreferrer" href="">My Resume</a>
              <a className="highlighted-button" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amiller-design/">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className={styles['back-to-top-container']}>
          <a className="ghostly-button" href="#top">Back to The Top</a>
        </div>
      </main>
      <footer className={styles['home-footer']}>
        <p>Created in partnership with the lovely <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kiersten-miller-20a292166/">Kiersten Miller</a>. My wife and web developer!</p>
        <p>version 1.0 _ 2024</p>
      </footer>
    </div>
  );
}
