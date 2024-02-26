"use client";

import Image from "next/image";

import { HeadBlurb } from "app/components/design/HeadBlurb";
import { ImageContainer } from "app/components/design/ImageContainer";
import { ProjectInfo } from "app/components/design/ProjectInfo";

export default function SleepNumber() {
    const fullWidth = 1240;
    return (<div>
        <div className="page-heading-container">
            <h1 className="primary-title">Sleep Number</h1>
            <a href="/">
                <span className="sr-only">Back to Home</span>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="19.625" stroke="#636363" stroke-width="0.75"/>
                    <path d="M10.5884 11.1758L28.5296 29.117" stroke="#636363" stroke-width="0.75" stroke-linejoin="round"/>
                    <path d="M28.824 11.1758L10.8828 29.117" stroke="#636363" stroke-width="0.75" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
        <ProjectInfo
            snapshots={[
                {id: 'services', label: 'Services', content: [{id: 'graphic-design', type: 'pill', message: 'Graphic Design'}, {id: 'web-design', type: 'pill', message: 'Web Design'}, {id: 'production-design', type: 'pill', message: 'Production Design'}, {id: 'ux-ui-strategy', type: 'pill', message: 'UX/UI Strategy'}]},
                {id: 'tools', label: 'Tools', content: [{id: 'figma', type: 'pill', message: 'Figma'}, {id: 'sketch', type: 'pill', message: 'Sketch'}, {id: 'photoshop', type: 'pill', message: 'Photoshop'}, {id: 'illustrator', type: 'pill', message: 'Illustrator'}, {id: 'indesign', type: 'pill', message: 'InDesign'}, {id: 'after-effects', type: 'pill', message: 'After Effects'}]},
                {id: 'date', label: 'Date', content: [{id: 'date', type: 'date', message: '2019-2023'}]}
            ]}
            blurbs={[
                {id: 'intro', message: 'As an in-house graphic designer at Sleep Number, I created digital content for their website\'s marketing campaigns and sales events, utilizing Adobe CC and Figma to build a wide array of imagery and web page layouts. Collaborating with a versatile team of creatives ensured that the webite always remaned beaufigul, well maintained, and firmly unified with other creative channels'}
            ]}
        />
        <Image src="/static/images/sleep-number/SN_desktop_01.jpg" width={fullWidth} height={1025} alt="digital rendering of a sleep number bed" />
        <HeadBlurb
            heading={<>Styling an ever-changing website</>}
            blurbs={[
                {id: 'changing-1', message: 'Sleep Number is a fast-paced ecommerce brand whose marketing, boliday, and sales events are always on rotation, meaning that there was consistently high demand for new imagery and visual content for their wbesite'},
                {id: 'changing-2', message: 'Using Adobe CC and Figma, the imagery I devloped was stylized to work seamlessly and beautifully within the brand identity/system while also performing as accessible and responseive web elements. This involved creating multiple sizes/states of each asset to tensue that the visuals displayed perfectly across desktop and mobile screens.'}
            ]}
        />
        <ImageContainer
            images={[
                {id:'desktop-2', src: '/static/images/sleep-number/SN_desktop_02.png', width: fullWidth, height: 600, alt: ''},
            ]}
        />
        <ImageContainer
            images={[
                {id:'desktop-3', src: '/static/images/sleep-number/SN_desktop_03.png', width: fullWidth, height: 600, alt: ''},
            ]}
        />
        <ImageContainer 
            images={[
                {id:'desktop-4', src: '/static/images/sleep-number/SN_desktop_04.png', width: fullWidth, height: 310, alt: ''},
                {id:'desktop-5', src: '/static/images/sleep-number/SN_desktop_05.png', width: fullWidth, height: 310, alt: ''}
            ]}
        />
        <HeadBlurb
            heading="Building consistently great web experiences"
            blurbs={[
                {id: 'web-experiences-1', message: 'When working with a large-scale identity system, ensuring that every asset is designed to match brand expectations is paramount. Building web pages that met, and exceeded, the need to Sleep Number\'s brand was accomplished through Figma\'s component library system.'},
                {id: 'web-experiences-2', message: 'By master this library, projects involving new or updated web pages of any scale were easily and quickly buildable while maintaining brand identity'}
            ]}
        />
        <ImageContainer 
            images={[
                {id:'desktop-6', src: '/static/images/sleep-number/SN_desktop_06.png', width: fullWidth, height: 600, alt: ''},
            ]}
        />
        <ImageContainer 
            images={[
                {id:'desktop-7', src: '/static/images/sleep-number/SN_desktop_07.png', width: fullWidth, height: 600, alt: ''},
            ]}
        />
        <HeadBlurb heading="Collaborating to discover excellence" blurbs={[
            {id: 'collaborating-1', message: 'When working with a large-scale identity system, ensuring that every asset is designed to match brand expectations is paramount. Building web pages that met, and exceeded, the need to Sleep Number\'s brand was accomplished through Figma\'s component library system.'},
            {id: 'collaborating-2', message: 'Working cosely with marketing and UX teams, we identified opportunities for site improvement through the use of A/B testing; funneling customers to new approaches of content design nd arrangement against tried-and-true stategies, and utilizing the best results in future site initiatives.'},
            {id: 'collaborating-3', message: 'This would lead to increased traggic to the sales/event pages, higher purchase rate on product pages, and greater design solutions.'},
        ]}/>
        <ImageContainer 
            images={[
                {id:'desktop-8', src: '/static/images/sleep-number/SN_desktop_08.png', width: fullWidth, height: 1205, alt: ''},
                {id:'desktop-9', src: '/static/images/sleep-number/SN_desktop_09.png', width: fullWidth, height: 930, alt: ''},
            ]}
        />
        <ImageContainer 
            images={[
                {id:'desktop-7', src: '/static/images/sleep-number/SN_desktop_10.png', width: fullWidth, height: 600, alt: ''},
            ]}
        />
        <div className="blurb-collection">
            <div className="blurb">
                <p>A major goal for Sleep Number is to be able to give customers a shopping experience that is tailored to their individual needs as mattress shoppers. By partnering with marketing and research teams, I helped create a path to purchase journey for those visiting our website and whose intent of purchase randged from low, medium, and high.</p>
            </div>
            <div className="blurb">
                <p><b>Low intent</b> (first time) visitors to the website would be introduced Sleep Numbers mission and bed quiz.<b>Medium intent</b> (returning customers) were offered further insight into which smart bed was best for them. <b>High intent</b> (purchasing) customers carts would be remembered and additional financing options would be offerred to encourage ease of purchase.</p>
            </div>
        </div>
        <Image src="/static/images/sleep-number/SN_desktop_11.jpg" width={fullWidth} height={400} alt="digital rendering of a sleep number bed" />
        <div className="footer">
            <div className="secondary-title">Other Works</div>
        </div>
    </div>
)}