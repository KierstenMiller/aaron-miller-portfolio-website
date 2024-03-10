import { ProjectInfo, ProjectInfoI } from "app/components/design/ProjectInfo";
import { ProjectNav } from "app/components/project-navigation/ProjectNav";

import styles from "./ProjectPageLayout.module.scss";

export const fullWidth = 1240;

export const ProductPageLayout = ({primaryTitle, projectInfo, children}:{ primaryTitle: string, projectInfo: ProjectInfoI, children: React.ReactNode;}) => {
    return (<div>
        <header id="top">
            <div className={styles['page-heading-container']}>
                <h1 className="primary-title">{primaryTitle}</h1>
                <div className={styles['x-home-container']}>
                    <a className={styles['x-home-button']} href="/">
                        <span className="sr-only">Back to Home</span>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.625" fill="#fff" opacity={0.7}/>
                            <circle cx="20" cy="20" r="19.625" stroke="#636363" stroke-width="0.75"/>
                            <path d="M10.5884 11.1758L28.5296 29.117" stroke="#636363" stroke-width="0.75" stroke-linejoin="round"/>
                            <path d="M28.824 11.1758L10.8828 29.117" stroke="#636363" stroke-width="0.75" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
                
            </div>
        </header>
        <main> 
            <ProjectInfo
                snapshots={projectInfo.snapshots}
                blurbs={projectInfo.blurbs}
            />
            { children }
        </main>
        <footer className={styles['footer-container']}>
            <h2 className="sr-only">Footer</h2>
            <div className={styles['footer']}>
                <div className={styles['footer-heading-container']}>
                    <h3 className="secondary-title">Other works</h3>
                    <a className={styles['back-to-top']} href="#top">Back to The Top</a>
                </div>
                <ProjectNav ariaLabel="Primary" />
                <div className={styles['partnership']}>
                    <p>Created in partnership with the lovely <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kiersten-miller-20a292166/">Kiersten Miller</a>. My wife and web developer!</p>
                    <p>version 1.0 _ 2024</p>
                </div>
            </div>   
        </footer>
    </div>
)}