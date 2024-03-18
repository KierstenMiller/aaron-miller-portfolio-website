"use client";

import Image from "next/image";

import { HeadBlurb } from "app/components/design/HeadBlurb";
import { ImageContainer } from "app/components/design/ImageContainer";
import { ProductPageLayout } from "app/components/project-page-layout/ProjectPageLayout";

export const fullWidth = 1240;

export default function SleepNumber() {
    
    return (
        <ProductPageLayout
            primaryTitle="Sleep Number"
            projectInfo={{
                snapshots: [
                    {id: 'services', label: 'Services', content: [{id: 'graphic-design', type: 'pill', message: 'Graphic Design'}, {id: 'web-design', type: 'pill', message: 'Web Design'}, {id: 'production-design', type: 'pill', message: 'Production Design'}, {id: 'ux-ui-strategy', type: 'pill', message: 'UX/UI Strategy'}]},
                    {id: 'tools', label: 'Tools', content: [{id: 'figma', type: 'pill', message: 'Figma'}, {id: 'sketch', type: 'pill', message: 'Sketch'}, {id: 'photoshop', type: 'pill', message: 'Photoshop'}, {id: 'illustrator', type: 'pill', message: 'Illustrator'}, {id: 'indesign', type: 'pill', message: 'InDesign'}, {id: 'after-effects', type: 'pill', message: 'After Effects'}]},
                    {id: 'date', label: 'Date', content: [{id: 'date', type: 'date', message: '2019 - 2023'}]}
                ],
                blurbs: [
                    {id: 'intro', message: 'As an in-house graphic designer at Sleep Number, I created digital content for their website’s marketing campaigns and sales events, utilizing Adobe CC and Figma to build a wide array of imagery and web page layouts. Collaborating with a versatile team of creatives ensured that the website always remained beautiful, well maintained, and firmly unified with other creative channels.'}
                ]
            }}
        >
            <div>
                <Image className="bare-image tablet-min-up-only" src="/static/images/sleep-number/SN_Desktop_01.jpg" width={fullWidth} height={1025} alt="digital rendering of a sleep number bed" />
                <Image className="bare-image mobile-max-down-only" src="/static/images/sleep-number/SN_Mobile_01.jpg" width={fullWidth} height={1025} alt="digital rendering of a sleep number bed" />
                <HeadBlurb
                    heading={<>Styling an ever-changing website</>}
                    blurbs={[
                        {id: 'changing-1', message: 'Sleep Number is a fast-paced ecommerce brand whose marketing, holiday, and sales events are always on rotation, meaning that there was consistently high demand for new imagery and visual content for their website.'},
                        {id: 'changing-2', message: 'Using Adobe CC and Figma, the imagery I developed was stylized to work seamlessly and beautifully within the brand identity/system while also performing as accessible and responsive web elements. This involved creating multiple sizes/states of each asset to ensure that the visuals displayed perfectly across desktop and mobile screens.'}
                    ]}
                />
                <ImageContainer
                    images={[
                        {
                            id:'desktop-2',
                            src: '/static/images/sleep-number/SN_Desktop_02.png',
                            srcMobile: '/static/images/sleep-number/SN_Mobile_02.png',
                            alt: 'compilation of screenshots of the sleep number website',
                            width: fullWidth,
                            height: 600,
                        },
                    ]}
                />
                <ImageContainer
                    className="mobile-max-down-only"
                    images={[
                        {
                            id:'desktop-3', 
                            src: '/static/images/sleep-number/SN_Mobile_03.png', 
                            width: fullWidth,
                            height: 600,
                            alt: 'Another compilation of screenshots of the sleep number website from a different sales event'
                        },
                    ]}
                />
                <ImageContainer
                    images={[
                        {
                            id:'desktop-3', 
                            src: '/static/images/sleep-number/SN_Desktop_03.png', 
                            srcMobile: '/static/images/sleep-number/SN_Mobile_04.png', 
                            width: fullWidth, 
                            height: 600, 
                            alt: 'two different banners from the sleep number website, one to promot their smart beds and one for a holiday event'
                        },
                    ]}
                />
                <ImageContainer 
                    images={[
                        {
                            id:'desktop-4',
                            src: '/static/images/sleep-number/SN_Desktop_04.png',
                            width: fullWidth,
                            height: 310,
                            alt: 'Various visual treatments to Sleep Number\'s mobile call to action content cards'
                        },
                        {
                            id:'desktop-5', 
                            src: '/static/images/sleep-number/SN_Desktop_05.png', 
                            width: fullWidth, 
                            height: 310, 
                            alt: 'Various visual treatments to Sleep Number\'s desktop call to action content cards'
                        }
                    ]}
                />
                <HeadBlurb
                    heading="Building consistently great web experiences"
                    blurbs={[
                        {id: 'web-experiences-1', message: 'When working with a large-scale identity system, ensuring that every asset is designed to match brand expectations is paramount. Building web pages that met, and exceeded, the needs of Sleep Number’s brand was accomplished through Figma’s component library system.'},
                        {id: 'web-experiences-2', message: 'By mastering this library, projects involving new or updated web pages of any scale were easily and quickly buildable while maintaining brand identity.'}
                    ]}
                />
                <ImageContainer 
                    images={[
                        {
                            id:'desktop-6',
                            src: '/static/images/sleep-number/SN_Desktop_06.png',
                            srcMobile: '/static/images/sleep-number/SN_Mobile_07.png',
                            width: fullWidth,
                            height: 600,
                            alt: 'Wireframe of final design of a sleep number website page'
                        },
                    ]}
                />
                <ImageContainer
                    className="mobile-max-down-only"
                    images={[
                        {
                            id:'desktop-3', 
                            src: '/static/images/sleep-number/SN_Mobile_08.png', 
                            width: fullWidth, 
                            height: 600, 
                            alt: 'Complete final design displayed as wireframe previously above this image'
                        },
                    ]}
                />
                <ImageContainer 
                    images={[
                        {
                            id:'desktop-7',
                            src: '/static/images/sleep-number/SN_Desktop_07.png',
                            srcMobile: '/static/images/sleep-number/SN_Mobile_09.png',
                            width: fullWidth,
                            height: 600,
                            alt: 'Compilation of sleep number\'s and the N.F.L\'s collaboration on the sleep number website'
                        },
                    ]}
                />
                <ImageContainer
                    className="mobile-max-down-only"
                    images={[
                        {
                            id:'desktop-3', 
                            src: '/static/images/sleep-number/SN_Mobile_10.png', 
                            width: fullWidth, 
                            height: 600, 
                            alt: 'Desktop and mobile versions of Sleep Number\'s Ideal Temp promotional website page'
                        },
                    ]}
                />
                <HeadBlurb
                    heading="Collaborating to discover excellence"
                    blurbs={[
                        {id: 'collaborating-1', message: 'Sleep Number is always seeking ways to maximize customer engagement, with new ideas constantly in the pipeline for how customers interact with the many pages of their website.'},
                        {id: 'collaborating-2', message: 'Working closely with marketing and UX teams, we identified opportunities for site improvement through the use of A/B testing; funneling customers to new approaches of content design and arrangement against tried-and-true strategies, and utilizing the best results in future site initiatives.'},
                        {id: 'collaborating-3', message: 'This would lead to increased traffic to the sales/event pages, higher purchase rate on product pages, and greater design solutions.'},
                    ]}
                />
                <ImageContainer 
                    images={[
                        {
                            id:'desktop-8', 
                            src: '/static/images/sleep-number/SN_Desktop_08.png', 
                            description: "April 2023 - Sales Page", 
                            width: fullWidth, 
                            height: 1205, 
                            alt: 'Screenshot of April 2023 sales page for Sleep Number'
                        },
                        {
                            id:'desktop-9', 
                            src: '/static/images/sleep-number/SN_Desktop_09.png', 
                            description: "June 2023 - Sales Page", 
                            width: fullWidth, 
                            height: 930, 
                            alt: 'Sreenshot of June 2023 sales page for Sleep Number'
                        },
                    ]}
                />
                <ImageContainer 
                    className="tablet-min-up-only"
                    images={[
                        {
                            id:'desktop-7',
                            src: '/static/images/sleep-number/SN_Desktop_10.png',
                            width: fullWidth,
                            height: 600,
                            alt: '3 screenshots of the same promotional page for Sleep Number\'s smart beds',
                            description: <>
                                <span>Low intent of purchase</span>
                                <span>Medium intent of purchase</span>
                                <span>High intent of purchase</span>
                            </>
                        },
                    ]}
                />
                <div className="blurb-collection">
                    <div className="blurb tablet-min-up-only">
                        <p>A major goal for Sleep Number is to be able to give customers a shopping experience that is tailored to their individual needs as mattress shoppers. By partnering with marketing and research teams, I helped create a path-to-purchase journey for those visiting our website and whose intent of purchase ranged from low, medium, and high.</p>
                    </div>
                    <div className="blurb tablet-min-up-only">
                        <p><b>Low intent</b> (first time) visitors to the website would be introduced Sleep Number&apos;s mission and bed quiz. <b>Medium intent</b> (returning customers) were offered further insight into which smart bed was best for them. <b>High intent</b> (purchasing) customer&apos;s carts would be remembered and additional financing options would be offerred to encourage ease of purchase.</p>
                    </div>
                </div>
                <div className="blurb-collection mobile-max-down-only">
                    <div className="blurb">
                        <p>A major goal for Sleep Number is to be able to give customers a shopping experience that is tailored to their individual needs as mattress shoppers. By partnering with marketing and research teams, I helped create a path-to-purchase journey for those visiting our website and whose intent of purchase ranged from low, medium, and high.</p>
                    </div>
                </div>
                <ImageContainer
                    className="mobile-max-down-only"
                    images={[
                        {
                            id:'desktop-3', 
                            src: '/static/images/sleep-number/SN_Mobile_13.png', 
                            width: fullWidth, 
                            height: 600, 
                            alt: 'Screenshot of the low intent of purchase version of a Sleep Number promotion'
                        },
                    ]}
                />
                <div className="blurb-collection mobile-max-down-only">
                    <div className="blurb">
                        <p><b>Low intent</b> (first time) visitors to the website would be introduced Sleep Number&apos;s mission and bed quiz.</p>
                    </div>
                </div>
                <ImageContainer
                    className="mobile-max-down-only"
                    images={[
                        {
                            id:'desktop-3', 
                            src: '/static/images/sleep-number/SN_Mobile_14.png', 
                            width: fullWidth, 
                            height: 600, 
                            alt: 'Screenshot of the medium intent of purchase version of a Sleep Number promotion'
                        },
                    ]}
                />
                <div className="blurb-collection mobile-max-down-only">
                    <div className="blurb">
                        <p><b>Medium intent</b> (return customers) were offered further insight into which smart bed was best for them.</p>
                    </div>
                </div>
                <ImageContainer
                    className="mobile-max-down-only"
                    images={[
                        {
                            id:'desktop-3', 
                            src: '/static/images/sleep-number/SN_Mobile_15.png', 
                            width: fullWidth, 
                            height: 600, 
                            alt: 'Screenshot of the high intent of purchase version of a Sleep Number promotion'
                        },
                    ]}
                />
                <div className="blurb-collection mobile-max-down-only">
                    <div className="blurb">
                        <p><b>High intent</b> (purchasing) customer&apos;s carts would be remembered and additional financing options would be offerred to encourage ease of purchase.</p>
                    </div>
                </div>
                <Image 
                    className="bare-image tablet-min-up-only" 
                    src="/static/images/sleep-number/SN_Desktop_11.jpg" 
                    width={fullWidth} 
                    height={400} 
                    alt="digital rendering of a sleep number bed"
                />
                <Image 
                    className="bare-image mobile-max-down-only"
                    src="/static/images/sleep-number/SN_Mobile_16.jpg"
                    width={fullWidth} height={400}
                    alt="digital rendering of a sleep number bed"
                />
            </div>
        </ProductPageLayout>
    )
}