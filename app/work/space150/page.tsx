import { ImageContainer } from "app/components/design/ImageContainer";
import { ProductPageLayout } from "app/components/project-page-layout/ProjectPageLayout";
import Image from "next/image";
import { fullWidth } from "../sleep-number/page";

export default function Space150() {
    return <ProductPageLayout
        primaryTitle="space150 website"
        projectInfo={{
            snapshots: [
                { id: 'services', label: 'Services', content: [{ id: 'web-design', type: 'pill', message: 'Web Design' }, { id: 'Web Animation', type: 'pill', message: 'Web Animation' }] },
                { id: 'tools', label: 'Tools', content: [{ id: 'sketch', type: 'pill', message: 'Sketch' }, { id: 'invision', type: 'pill', message: 'InVision' }, { id: 'HTML', type: 'pill', message: 'HTML' }, { id: 'CSS', type: 'pill', message: 'CSS' }, { id: 'Javascript', type: 'pill', message: 'Javascript' }, { id: 'spiritapp', type: 'pill', message: 'spiritapp.io' }, { id: 'Contentful', type: 'pill', message: 'Contentful' }] },
                { id: 'date', label: 'Date', content: [{ id: 'date', type: 'date', message: '2019' }] }
            ],
            blurbs: [
                { id: 'blurb-1', message: 'space150 is an agency that has the unique goal of rebranding their website every 150 days. During my summer there as a graphic design intern I was brought aboard the team overseeing the company\'s current rebrand to assist with website design/animation.' },
                { id: 'blurb-2', message: 'I partnered with the creative director to implement a new brand style to the website and worked with front-end developers to craft fine-tuned web animations for the site. I also managed the transferring of project case studies to a new CMS.' },
            ]
        }}
    >
        <ImageContainer
            images={[
                {
                    id: 'screen-compilation',
                    src: '/static/images/space150/space150_Panel_01_Desktop.png',
                    srcMobile: '/static/images/space150/space150_Panel_01_Mobile.png',
                    width: fullWidth,
                    height: 600,
                    alt: 'Compilation of Space150 screens for desktop'
                },
            ]}
        />
        <Image
            className="full-vid"
            id='animation-2'
            src='/static/images/space150/space150_Desktop_02.gif'
            width={fullWidth}
            height={600}
            alt='Video capture of user opening up navigation menu of space150 website'
        />
        <ImageContainer
            images={[
                {
                    id: 'project-navigation',
                    src: '/static/images/space150/space150_Panel_03_Desktop.png',
                    srcMobile: '/static/images/space150/space150_Panel_03_Mobile.png',
                    width: fullWidth,
                    height: 600,
                    alt: 'space150 project navigation'
                },
            ]}
        />
        <Image
            className="full-vid"
            id='animation-4'
            src='/static/images/space150/space150_Desktop_04.gif'
            width={fullWidth}
            height={600}
            alt='Video capture of user scrolling throught the space150 about web page'
        />
        <ImageContainer
            className="mobile-max-down-only"
            images={[
                {
                    id: 'nike-stranger-things-collab',
                    src: '/static/images/space150/space150_Panel_05_Mobile.png',
                    width: fullWidth,
                    height: 600,
                    alt: 'space150 website page for Nike and Stranger Things collaboration'
                },
            ]}
        />
    </ProductPageLayout>
}