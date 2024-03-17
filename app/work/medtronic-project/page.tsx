import { ImageContainer } from "app/components/design/ImageContainer";
import { ProductPageLayout } from "app/components/project-page-layout/ProjectPageLayout";
import Image from "next/image";
import { fullWidth } from "../sleep-number/page";

export default function MedtronicProject() {
    return <ProductPageLayout
        primaryTitle="Medtronic - Live More"
        projectInfo={{
            snapshots: [
                {id: 'services', label: 'Services', content: [{id: 'web-design', type: 'pill', message: 'Web Design'}, {id: 'advertising', type: 'pill', message: 'Advertising'}, {id: 'signage', type: 'pill', message: 'Signage'}]},
                {id: 'tools', label: 'Tools', content: [{id: 'sketch', type: 'pill', message: 'Sketch'}, {id: 'InVision', type: 'pill', message: 'InVision'}, {id: 'photoshop', type: 'pill', message: 'Photoshop'}, {id: 'illustrator', type: 'pill', message: 'Illustrator'}, {id: 'indesign', type: 'pill', message: 'InDesign'}]},
                {id: 'date', label: 'Date', content: [{id: 'date', type: 'date', message: '2019'}]}
            ],
            blurbs: [
                {id: 'blurb-1', message: 'During my internship at space150, I had the opportunity to work with their client Medtronic, who had recently asked our team to produce web content and advertisements for their latest product campaign.'},
                {id: 'blurb-2', message: 'During it’s run, the campaign featured Medtronic’s newest devices that monitor insulin levels for those with diabetes, helping them achieve their health and life goals. My contribution to the project was designing two new webpages that showcased the new products, and signage to help generate greater campaign awareness.'},
            ]
        }}
    >
        <ImageContainer
            images={[
                {
                    id:'medtronic-top-display',
                    src: '/static/images/medtronic/Medtronic_Dekstop_01.png',
                    srcMobile: '/static/images/medtronic/Medtronic_Mobile_01.png',
                    width: fullWidth, height: 600, alt: ''
                },
            ]}
        />
        <ImageContainer 
            images={[
                {id:'medtronic-laptop', src: '/static/images/medtronic/Medtronic_Desktop_02.png', width: fullWidth, height: 310, alt: ''},
                {id:'medtronic-phone', src: '/static/images/medtronic/Medtronic_Desktop_03.png', width: fullWidth, height: 310, alt: ''}
            ]}
        />
        <ImageContainer
            images={[
                {
                    id:'the-future',
                    src: '/static/images/medtronic/Medtronic_Desktop_04.png',
                    srcMobile: '/static/images/medtronic/Medtronic_Mobile_04.png',
                    width: fullWidth,
                    height: 600,
                    alt: ''
                },
            ]}
        />
        <ImageContainer
            images={[
                {
                    id:'the-today',
                    src: '/static/images/medtronic/Medtronic_Desktop_05.png',
                    srcMobile: '/static/images/medtronic/Medtronic_Mobile_05.png',
                    width: fullWidth,
                    height: 600,
                    alt: ''
                },
            ]}
        />
        <Image className="bare-image" src="/static/images/medtronic/Medtronic_Desktop_06.jpg" width={fullWidth} height={400} alt="digital rendering of a sleep number bed" />
        <div className="bare-images-collection">
            <Image src="/static/images/medtronic/Medtronic_Desktop_07.jpg" width={fullWidth} height={400} alt="digital rendering of a sleep number bed" />
            <Image src="/static/images/medtronic/Medtronic_Desktop_08.jpg" width={fullWidth} height={400} alt="digital rendering of a sleep number bed" />
        </div>
        <ImageContainer
            images={[
                {
                    id:'signage-collection',
                    src: '/static/images/medtronic/Medtronic_Desktop_09.png',
                    srcMobile: '/static/images/medtronic/Medtronic_Mobile_09.png',
                    width: fullWidth,
                    height: 600,
                    alt: ''
                },
            ]}
        />
        <ImageContainer
            className="mobile-max-down-only"
            images={[
                {
                    id:'signage-collection',
                    src: '/static/images/medtronic/Medtronic_Mobile_10.png',
                    width: fullWidth,
                    height: 600,
                    alt: ''
                },
            ]}
        />
         <ImageContainer
            className="mobile-max-down-only"
            images={[
                {
                    id:'signage-collection',
                    src: '/static/images/medtronic/Medtronic_Mobile_11.png',
                    width: fullWidth,
                    height: 600,
                    alt: ''
                },
            ]}
        />
         <ImageContainer
            className="mobile-max-down-only"
            images={[
                {
                    id:'signage-collection',
                    src: '/static/images/medtronic/Medtronic_Mobile_12.png',
                    width: fullWidth,
                    height: 600,
                    alt: ''
                },
            ]}
        />
    </ProductPageLayout>
}