import { ProductPageLayout } from "app/components/project-page-layout/ProjectPageLayout";

export default function MusicAnalyticsApp() {
    return <ProductPageLayout
        primaryTitle="Music Analytics App"
        projectInfo={{
            snapshots: [
                {id: 'services', label: 'Services', content: [{id: 'graphic-design', type: 'pill', message: 'Graphic Design'}, {id: 'web-design', type: 'pill', message: 'Web Design'}, {id: 'production-design', type: 'pill', message: 'Production Design'}, {id: 'ux-ui-strategy', type: 'pill', message: 'UX/UI Strategy'}]},
                {id: 'tools', label: 'Tools', content: [{id: 'figma', type: 'pill', message: 'Figma'}, {id: 'sketch', type: 'pill', message: 'Sketch'}, {id: 'photoshop', type: 'pill', message: 'Photoshop'}, {id: 'illustrator', type: 'pill', message: 'Illustrator'}, {id: 'indesign', type: 'pill', message: 'InDesign'}, {id: 'after-effects', type: 'pill', message: 'After Effects'}]},
                {id: 'date', label: 'Date', content: [{id: 'date', type: 'date', message: '2019-2023'}]}
            ],
            blurbs: [
                {id: 'intro', message: 'As an in-house graphic designer at Sleep Number, I created digital content for their website\'s marketing campaigns and sales events, utilizing Adobe CC and Figma to build a wide array of imagery and web page layouts. Collaborating with a versatile team of creatives ensured that the webite always remaned beaufigul, well maintained, and firmly unified with other creative channels'}
            ]
        }}
    >
        MUSIC ANALYTICS APP CONTENT WIP
    </ProductPageLayout>
}