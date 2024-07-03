import { ImageContainer } from "app/components/design/ImageContainer";
import { ProductPageLayout } from "app/components/project-page-layout/ProjectPageLayout";
import Image from "next/image";
import { fullWidth } from "../sleep-number/page";

export default function TorqueFitness() {
    return <ProductPageLayout
        primaryTitle="Torque Fitness"
        projectInfo={{
            snapshots: [
                { id: 'role', label: 'Role', content: [{ id: 'role', type: 'pill', message: 'Contract Designer' }, { id: 'role', type: 'pill', message: 'Web Designer' }, { id: 'role', type: 'pill', message: 'Production Designer' }] },
                { id: 'services', label: 'Services', content: [{ id: 'web-design', type: 'pill', message: 'Web Design' }, { id: 'social-media-design', type: 'pill', message: 'Social Media Design' }, { id: 'publication-design', type: 'pill', message: 'Publication Design' }] },
                { id: 'tools', label: 'Tools', content: [{ id: 'figma', type: 'pill', message: 'Figma' }, { id: 'in-design', type: 'pill', message: 'InDesign' }, { id: 'photoshop', type: 'pill', message: 'Photoshop' }] },
            ],
            blurbs: [
                { id: 'blurb-1', message: 'Torque is a Minneapolis fitness equipment manufacturer whose gear is as hard-edged and sturdy as its customers. They asked me to update the product page for one of their top-selling products to improve user experience and web sales. They also requested that I design social media content and a magazine advertisement for another of their products.' },
                { id: 'blurb-2', message: 'The results were three separate projects that elevated their brand presence while functioning seamlessly within Torque\'s established brand identity.' },
            ]
        }}
    >
        <div className="bare-images-collection three-column">
            <Image
                className="image-block"
                id='social-media-1'
                src='/static/images/torque-fitness/torque-fitness_panel_1_desktop.png'
                width={fullWidth}
                height={600}
                alt=''
            />
            <Image
                className="image-border"
                id='social-media-2'
                src='/static/images/torque-fitness/torque-fitness_panel_2_desktop.jpg'
                width={fullWidth}
                height={600}
                alt=''
            />
            <Image
                className="image-border"
                id='social-media-3'
                src='/static/images/torque-fitness/torque-fitness_panel_3_desktop.jpg'
                width={fullWidth}
                height={600}
                alt=''
            />
        </div>
        <div className="bare-images-collection">
            <Image
                id='magazine-1'
                src='/static/images/torque-fitness/torque-fitness_panel_4_desktop.png'
                width={fullWidth}
                height={600}
                alt=''
            />
            <Image
                className="image-border"
                id='magazine-2'
                src='/static/images/torque-fitness/torque-fitness_panel_5_desktop.png'
                width={fullWidth}
                height={600}
                alt=''
            />
        </div>
        <ImageContainer
            images={[
                {
                    id: 'screen-compilation-1',
                    src: '/static/images/torque-fitness/torque-fitness_panel_6_desktop.png',
                    srcMobile: '/static/images/torque-fitness/torque-fitness_panel_6_mobile.png',
                    width: fullWidth,
                    height: 600,
                    alt: ''
                },
            ]}
        />
        <ImageContainer
            images={[
                {
                    id: 'screen-compilation-2',
                    src: '/static/images/torque-fitness/torque-fitness_panel_7_desktop.png',
                    srcMobile: '/static/images/torque-fitness/torque-fitness_panel_7_mobile.png',
                    width: fullWidth,
                    height: 600,
                    alt: ''
                },
            ]}
        />
    </ProductPageLayout>
}