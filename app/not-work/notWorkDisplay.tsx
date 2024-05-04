
import classNames from "classnames";
import Image from "next/image";
import styles from "./notWorkDisplay.module.scss";

export const NotWorkDisplay = () => {
    const sharedImages = {
        arcana: {
            icon1Mobile: { id: 'arcana-icon-1-mobile', src: '/static/images/not-work/arcana-icon-1-mobile.png', alt: 'Arcana Icon 1 Mobile' },
            icon2Mobile: { id: 'arcana-icon-2-mobile', src: '/static/images/not-work/arcana-icon-2-mobile.png', alt: 'Arcana Icon 2 Mobile' },
            icon3Mobile: { id: 'arcana-icon-3-mobile', src: '/static/images/not-work/arcana-icon-3-mobile.png', alt: 'Arcana Icon 3 Mobile' },
            imageDetailMobile: { id: 'arcana-image-detail-mobile', src: '/static/images/not-work/arcana-image-detail-mobile.png', alt: 'Arcana Image Detail Mobile' },
            posterDesktop: { id: 'arcana-poster-desktop', src: '/static/images/not-work/arcana-poster-desktop.png', alt: 'Arcana Poster Desktop' },
            posterMobile: { id: 'arcana-poster-mobile', src: '/static/images/not-work/arcana-poster-mobile.png', alt: 'Arcana Poster Mobile' },
            ticketDesktop: { id: 'arcana-ticket-desktop', src: '/static/images/not-work/arcana-ticket-desktop.png', alt: 'Arcana Ticket Desktop' },
            ticketMobile: { id: 'arcana-ticket-mobile', src: '/static/images/not-work/arcana-ticket-mobile.png', alt: 'Arcana Ticket Mobile' },
            type1: { id: 'arcana-type-1', src: '/static/images/not-work/arcana-type-1-desktop.png', alt: 'Arcana Type 1' },
            type2: { id: 'arcana-type-2', src: '/static/images/not-work/arcana-type-2-desktop.png', alt: 'Arcana Type 2' },
            type3: { id: 'arcana-type-3', src: '/static/images/not-work/arcana-type-3-desktop.png', alt: 'Arcana Type 3' },
        },
        feast: {
            icon1: { id: 'feast-icon-1', src: '/static/images/not-work/feast-icon-1.png', alt: 'Feast Icon 1' },
            icon2: { id: 'feast-icon-2', src: '/static/images/not-work/feast-icon-2.png', alt: 'Feast Icon 2' },
            imageDetailDesktop: { id: 'feast-image-detail-desktop', src: '/static/images/not-work/feast-image-detail-desktop.png', alt: 'Feast Image Detail Desktop' },
            imageDetailMobile: { id: 'feast-image-detail-mobile', src: '/static/images/not-work/feast-image-detail-mobile.png', alt: 'Feast Image Detail Mobile' },
            posterDesktop: { id: 'feast-poster-desktop', src: '/static/images/not-work/feast-poster-desktop.png', alt: 'Feast Poster Desktop' },
            posterMobile: { id: 'feast-poster-mobile', src: '/static/images/not-work/feast-poster-mobile.png', alt: 'Feast Poster Mobile' },
            type: { id: 'feast-type', src: '/static/images/not-work/feast-type.png', alt: 'Feast Type' },
        },
        forestDweller: {
            imageDetailMobile: { id: 'forest-dweller-image-detail-mobile', src: '/static/images/not-work/forest-dweller-image-detail-mobile.png', alt: 'Forest Dweller Image Detail Mobile' },
            imageDetail: { id: 'forest-dweller-image-detail', src: '/static/images/not-work/forest-dweller-image-detail.png', alt: 'Forest Dweller Image Detail' },
            mobile: { id: 'forest-dweller-mobile', src: '/static/images/not-work/forest-dweller-mobile.png', alt: 'Forest Dweller Mobile' },
            poster: { id: 'forest-dweller-poster', src: '/static/images/not-work/forest-dweller-poster.png', alt: 'Forest Dweller Poster' },
            shirtMobile: { id: 'forest-dweller-shirt-mobile', src: '/static/images/not-work/forest-dweller-shirt-mobile.png', alt: 'Forest Dweller Shirt Mobile' },
            shirt: { id: 'forest-dweller-shirt', src: '/static/images/not-work/forest-dweller-shirt.png', alt: 'Forest Dweller Shirt' },
            type1Desktop: { id: 'forest-dweller-type-1-desktop', src: '/static/images/not-work/forest-dweller-type-1-desktop.png', alt: 'Forest Dweller Type 1 Desktop' },
            type2Desktop: { id: 'forest-dweller-type-2-desktop', src: '/static/images/not-work/forest-dweller-type-2-desktop.png', alt: 'Forest Dweller Type 2 Desktop' },
            type3Desktop: { id: 'forest-dweller-type-3-desktop', src: '/static/images/not-work/forest-dweller-type-3-desktop.png', alt: 'Forest Dweller Type 3 Desktop' },
            typeMobile: { id: 'forest-dweller-type-mobile', src: '/static/images/not-work/forest-dweller-type-mobile.png', alt: 'Forest Dweller Type Mobile' },
        },
        tasty: {
            icon1: { id: 'tasty-icon-1', src: '/static/images/not-work/tasty-icon-1.png', alt: 'Tasty Icon 1' },
            icon2: { id: 'tasty-icon-2', src: '/static/images/not-work/tasty-icon-2.png', alt: 'Tasty Icon 2' },
            imageDetailDesktop: { id: 'tasty-image-detail-desktop', src: '/static/images/not-work/tasty-image-detail-desktop.png', alt: 'Tasty Image Detail Desktop' },
            imageDetailMobile: { id: 'tasty-image-detail-mobile', src: '/static/images/not-work/tasty-image-detail-mobile.png', alt: 'Tasty Image Detail Mobile' },
            posterDesktop: { id: 'tasty-poster-desktop', src: '/static/images/not-work/tasty-poster-desktop.png', alt: 'Tasty Poster Desktop' },
            posterMobile: { id: 'tasty-poster-mobile', src: '/static/images/not-work/tasty-poster-mobile.png', alt: 'Tasty Poster Mobile' },
            type: { id: 'tasty-type', src: '/static/images/not-work/tasty-type.png', alt: 'Tasty Type' },
        }
    }

    return <div>
        <div id="mobile" className={classNames('mobile-max-down-only', styles['top-stack'])}>
            <div id="forest" className={styles['stack']}>
                <div className={styles['mobile-one-row']}>
                    <Image {...sharedImages.forestDweller.poster} width={350} height={350} />
                </div>
                <div className={styles['mobile-two-equal-row']}>
                    <div className={styles['stack']}>
                        <Image {...sharedImages.forestDweller.shirtMobile} width={350} height={350} />
                        <Image {...sharedImages.forestDweller.typeMobile} width={350} height={350} />
                    </div>
                    <Image {...sharedImages.forestDweller.imageDetailMobile} width={350} height={350} />
                </div>
            </div>
            <div id="feast" className={styles['stack']}>
                <div className={styles['mobile-one-row']}>
                    <Image {...sharedImages.feast.posterMobile} width={350} height={350} />
                </div>
                <div className={styles['mobile-one-row']}>
                    <Image {...sharedImages.feast.type} width={350} height={350} />
                </div>
                <div className={styles['mobile-two-equal-row']}>
                    <Image {...sharedImages.feast.icon1} width={350} height={350} />
                    <Image {...sharedImages.feast.icon2} width={350} height={350} />
                </div>
                <div className={styles['mobile-one-row']}>
                    <Image {...sharedImages.feast.imageDetailMobile} width={350} height={350} />
                </div>
            </div>
            <div id="tasty" className={styles['stack']}>
                <div className={styles['mobile-one-row']}>
                    <Image {...sharedImages.tasty.posterMobile} width={350} height={350} />
                </div>
                <div className={styles['mobile-one-row']}>
                    <Image {...sharedImages.tasty.type} width={350} height={350} />
                </div>
                <div className={styles['mobile-two-equal-row']}>
                    <Image {...sharedImages.tasty.icon1} width={350} height={350} />
                    <Image {...sharedImages.tasty.icon2} width={350} height={350} />
                </div>
            </div>
            <div id="arcana" className={styles['stack']}>
                <div className={styles['mobile-one-row']}>
                    <Image {...sharedImages.arcana.posterMobile} width={350} height={350} />
                </div>
                <div className={styles['mobile-two-equal-row']}>
                    <Image {...sharedImages.arcana.ticketMobile} width={350} height={350} />
                    <div className={styles['stack']}>
                        <Image {...sharedImages.arcana.type1} width={350} height={350} />
                        <Image {...sharedImages.arcana.type2} width={350} height={350} />
                        <Image {...sharedImages.arcana.type3} width={350} height={350} />
                        <Image {...sharedImages.arcana.imageDetailMobile} width={350} height={350} />
                    </div>
                </div>
            </div>
        </div>
        <div id="desktop" className={classNames('tablet-min-up-only', styles['top-stack'])}>
            <div id="forest" className={styles['stack']}>
                <div className={styles['feature-detail-row']}>
                    <Image {...sharedImages.forestDweller.poster} width={820} height={820} />
                    <div className={styles["stack"]}>
                        <Image {...sharedImages.forestDweller.shirt} width={820} height={820} />
                        <Image {...sharedImages.forestDweller.imageDetail} width={820} height={820} />
                    </div>
                </div>
                <div className={styles['three-equal-row']}>
                    <Image {...sharedImages.forestDweller.type1Desktop} width={820} height={820} />
                    <Image {...sharedImages.forestDweller.type2Desktop} width={820} height={820} />
                    <Image {...sharedImages.forestDweller.type3Desktop} width={820} height={820} />
                </div>
            </div>
            <div id="feast" className={styles['stack']}>
                <div className={styles['feature-detail-row']}>
                    <Image {...sharedImages.feast.posterDesktop} width={820} height={820} />
                    <div className={styles["stack"]}>
                        <Image {...sharedImages.feast.imageDetailDesktop} width={820} height={820} />
                        <div className={styles['two-equal-row']}>
                            <Image {...sharedImages.feast.icon1} width={820} height={820} />
                            <Image {...sharedImages.feast.icon2} width={820} height={820} />
                        </div>
                    </div>
                </div>
                <div className={styles['one-row']}>
                    <Image {...sharedImages.feast.type} width={1240} height={820} />
                </div>
            </div>
            <div id="tasty" className={styles['feature-detail-row']}>
                <Image {...sharedImages.tasty.posterDesktop} width={820} height={820} />
                <div className={styles["stack"]}>
                    <Image {...sharedImages.tasty.type} width={820} height={820} />
                    <div className={styles['two-equal-row']}>
                        <Image {...sharedImages.tasty.icon1} width={820} height={820} />
                        <Image {...sharedImages.tasty.icon2} width={820} height={820} />
                    </div>
                    <Image {...sharedImages.tasty.imageDetailDesktop} width={820} height={820} />
                </div>
            </div>
            <div id="arcana" className={styles['stack']}>
                <div className={styles['feature-detail-row']}>
                    <Image {...sharedImages.arcana.posterDesktop} width={820} height={820} />
                    <Image {...sharedImages.arcana.ticketDesktop} width={820} height={820} />
                </div>
                <div className={styles['three-equal-row']}>
                    <Image {...sharedImages.arcana.type1} width={820} height={820} />
                    <Image {...sharedImages.arcana.type2} width={820} height={820} />
                    <Image {...sharedImages.arcana.type3} width={820} height={820} />
                </div>
            </div>
        </div>
    </div>


}