'use client'

import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

import { Inventory } from "./components/design/Inventory";
import { Switch } from "./components/molecules/work-switch";
import { ProjectNav } from "./components/project-navigation/ProjectNav";

import { NotWorkDisplay } from "./not-work/notWorkDisplay";
import styles from "./page.module.scss";

export default function Home() {
  const [isWorkMode, setIsWorkMode] = useState(true);

  return (
    <div className={classNames(styles['page-container'], { [styles["is-not-work"]]: !isWorkMode })}>
      <header id="top">
        <div className={styles['home-header']}>
          <h1 className="primary-title">Aaron Miller</h1>
          <div className={styles['actions-menu']}>
            <a className="ghostly-button" href="#profile">Info</a>
            <a className="ghostly-button" href="#contact">Contact</a>
          </div>
        </div>
        <p className={classNames(styles['header-description'])}>
          {isWorkMode
            ? 'A digital designer who builds efficient web experiences, creates beautiful graphic solutions, and practices iterative, empathetic, and collaborative design.'
            : 'A graphic designer, poster-maker, illustrator, and humble typography scientist.'
          }
        </p>
      </header>
      <main>
        <div className={styles['work-menu']}>
          <Switch isWorkMode={isWorkMode} setIsWorkMode={setIsWorkMode} />
        </div>
        {isWorkMode ? <ProjectNav ariaLabel="Secondary" /> : <NotWorkDisplay />}

        <div id="profile" className={styles['profile']}>
          <h2 className="secondary-title mobile-max-down-only">Hi, I&apos;m Aaron!</h2>
          <div>
            <Image className={classNames(styles['profile-pic-desktop'], 'tablet-min-up-only')} src='/static/images/aaron-profile-pic.png' alt="Aaron Miller headshot" width={1920} height={1080} />
            <Image className="mobile-max-down-only" src='/static/images/aaron-profile-pic_mobile.png' alt="Aaron Miller headshot" width={1920} height={1080} />
          </div>
          <div>
            <h2 className="secondary-title tablet-min-up-only">Hi, I&apos;m Aaron!</h2>
            <p>I am a digital designer who loves creating clean web and branding experiences. I also specialize in the design of graphics, print, and typography.</p>
            <p>As a designer, I have experience working with creative partners that range from directors, project leads, copywriters, front-end developers, and fellow designers to create products that function seamlessly and look beautiful. I implement my designs using Adobe applications and have been building web and app designs in Sketch and Figma since 2018.</p>
            <p>I earned my Bachelor&apos;s of Graphic Design from the Minneapolis College of Art and Design in 2018. I have enjoyed working in multiple creative roles in a diverse array of studios and companies, including HCL Technologies, space150, and Sleep Number.</p>
            <p>Currently living in Minneapolis with his wife, two cats, and puppy.</p>
            <Inventory snapshots={[
              { id: 'services', label: 'Services', content: [{ id: 'graphic-design', type: 'pill', message: 'Graphic Design' }, { id: 'web-design', type: 'pill', message: 'Web Design' }, { id: 'Production Design', type: 'pill', message: 'Production Design' }, { id: 'ux-ui-strategy', type: 'pill', message: 'UX/UI Strategy' }, { id: 'advertising', type: 'pill', message: 'Advertising' }, { id: 'signage', type: 'pill', message: 'Signage' }, { id: 'illustration', type: 'pill', message: 'Illustration' }, { id: 'web-animation', type: 'pill', message: 'Web Animation' }, { id: 'font-design', type: 'pill', message: 'Font Design' }, { id: 'book-layout', type: 'pill', message: 'Book Layout' }] },
              { id: 'tools', label: 'Tools', content: [{ id: 'figma', type: 'pill', message: 'Figma' }, { id: 'sketch', type: 'pill', message: 'Sketch' }, { id: 'photoshop', type: 'pill', message: 'Photoshop' }, { id: 'illustrator', type: 'pill', message: 'Illustrator' }, { id: 'indesign', type: 'pill', message: 'InDesign' }, { id: 'after-effects', type: 'pill', message: 'After Effects' }, { id: 'html', type: 'pill', message: 'HTML' }, { id: 'css', type: 'pill', message: 'CSS' }, { id: 'javascript', type: 'pill', message: 'Javascript' }] },
            ]}
            />
          </div>
        </div>
        <div className={styles['connect-container']}>
          <div className={styles['lets-connect']}>
            <h2 id="contact" className="secondary-title">Let&apos;s Connect!</h2>
            <p className={styles['get-in-touch-blurb']}>Want to get in touch? Reach out to me directly by email, or connect with me on LinkedIn.</p>
            <p>Talk soon!</p>
          </div>
          <div className={styles['my-links']}>
            <h2 className="secondary-title">My Links</h2>
            <a className="highlighted-button" href="mailto:awmiller1993@gmail.com">awmiller1993@gmail.com</a>
            <a className="highlighted-button" target="_blank" rel="noopener noreferrer" href="/static/files/Aaron_Miller_Resume.pdf">
              My Resume
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Opens new tab</title>
                <path d="M6.20033 3.39941H3C1.89543 3.39941 1 4.29484 1 5.39941V11C1 12.1046 1.89543 13 3 13H8.60061C9.70518 13 10.6006 12.1046 10.6006 11V7.79969" stroke="white" strokeWidth="1.25" />
                <path d="M8.20044 1C9.76263 1 13.0007 1 13.0007 1M13.0007 1C13.0007 1 13.0007 4.23811 13.0007 5.80031M13.0007 1L6.00017 8.00057" stroke="white" strokeWidth="1.25" />
              </svg>
            </a>
            <a className="highlighted-button" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amiller-design/">
              LinkedIn
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Opens new tab</title>
                <path d="M6.20033 3.39941H3C1.89543 3.39941 1 4.29484 1 5.39941V11C1 12.1046 1.89543 13 3 13H8.60061C9.70518 13 10.6006 12.1046 10.6006 11V7.79969" stroke="white" strokeWidth="1.25" />
                <path d="M8.20044 1C9.76263 1 13.0007 1 13.0007 1M13.0007 1C13.0007 1 13.0007 4.23811 13.0007 5.80031M13.0007 1L6.00017 8.00057" stroke="white" strokeWidth="1.25" />
              </svg>
            </a>
          </div>
        </div>

      </main>
      <footer className={styles['home-footer']}>
        <div>
          <p>Created in partnership with the lovely <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kiersten-miller-20a292166/">Kiersten Miller</a>. My wife and web developer!</p>
          <p>version 1.0 _ 2024</p>
        </div>
        <div className={styles['back-to-top-container']}>
          <a className="ghostly-button" href="#top">Back to The Top</a>
        </div>
      </footer>
    </div>
  );
}
