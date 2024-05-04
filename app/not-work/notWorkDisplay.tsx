
import styles from "./notWorkDisplay.module.scss";

export const NotWorkDisplay = () => {
    const sharedImages = {
        forestDwellerPoster: { id: 'forest-dweller-poster', src: '/static/images/forest-dweller-poster.jpg', alt: 'Forest Dweller Poster' },
        forestDwellerShirt: { id: 'forest-dweller-shirt', src: '/static/images/forest-dweller-shirt.jpg', alt: 'Forest Dweller Shirt' },
        fortestDwellerImageDetail: { id: 'forest-dweller-image-detail', src: '/static/images/forest-dweller-image-detail.jpg', alt: 'Forest Dweller Image Detail' },
        forestDwellerType1: { id: 'forest-dweller-type-1', src: '/static/images/forest-dweller-type-1.jpg', alt: 'Forest Dweller Type 1' },
        forestDwellerType2: { id: 'forest-dweller-type-2', src: '/static/images/forest-dweller-type-2.jpg', alt: 'Forest Dweller Type 2' },
        forestDwellerType3: { id: 'forest-dweller-type-3', src: '/static/images/forest-dweller-type-3.jpg', alt: 'Forest Dweller Type 3' },
        feastPoster: { id: 'feast-poster', src: '/static/images/feast-poster.jpg', alt: 'Feast Poster' },
        feastType: { id: 'feast-type', src: '/static/images/feast-type.jpg', alt: 'Feast Type' },
        feastImageDetailDesktop: { id: 'feast-image-detail-desktop', src: '/static/images/feast-image-detail-desktop.jpg', alt: 'Feast Image Detail Desktop' },
        feastImageDetailMobile: { id: 'feast-image-detail-mobile', src: '/static/images/feast-image-detail-mobile.jpg', alt: 'Feast Image Detail Mobile' },
        feastIcon1: { id: 'feast-icon-1', src: '/static/images/feast-icon-1.jpg', alt: 'Feast Icon 1' },
        feastIcon2: { id: 'feast-icon-2', src: '/static/images/feast-icon-2.jpg', alt: 'Feast Icon 2' },
        tastyPoster: { id: 'tasty-poster', src: '/static/images/tasty-poster.jpg', alt: 'Tasty Poster' },
        tastyImageDetailDesktop: { id: 'tasty-image-detail-desktop', src: '/static/images/tasty-image-detail-desktop.jpg', alt: 'Tasty Image Detail Desktop' },
        tastyImageDetailMobile: { id: 'tasty-image-detail-mobile', src: '/static/images/tasty-image-detail-mobile.jpg', alt: 'Tasty Image Detail Mobile' },
        tastyIcon1: { id: 'tasty-icon-1', src: '/static/images/tasty-icon-1.jpg', alt: 'Tasty Icon 1' },
        tastyIcon2: { id: 'tasty-icon-2', src: '/static/images/tasty-icon-2.jpg', alt: 'Tasty Icon 2' },
        arcanaPoster: { id: 'arcana-poster', src: '/static/images/arcana-poster.jpg', alt: 'Arcana Poster' },
        arcanaTicket: { id: 'arcana-ticket', src: '/static/images/arcana-ticket.jpg', alt: 'Arcana Ticket' },
        arcanaType1: { id: 'arcana-type-1', src: '/static/images/arcana-type-1.jpg', alt: 'Arcana Type 1' },
        arcanaType2: { id: 'arcana-type-2', src: '/static/images/arcana-type-2.jpg', alt: 'Arcana Type 2' },
        arcanaType3: { id: 'arcana-type-3', src: '/static/images/arcana-type-3.jpg', alt: 'Arcana Type 3' },
    }

    return <div className={styles['stack']}>
        <div className={styles['stack']}>
            <div className={styles['feature-detail-row']}>
                <div className={styles['image']}>forest image</div>
                <div className={styles["stack"]}>
                    <div className={styles['image']}>forest image</div>
                    <div className={styles['image']}>forest image</div>
                </div>
            </div>
            <div className={styles['three-equal-row']}>
                <div className={styles['image']}>forest image</div>
                <div className={styles['image']}>forest image</div>
                <div className={styles['image']}>forest image</div>
            </div>
        </div>
        <div className={styles['stack']}>
            <div className={styles['feature-detail-row']}>
                <div className={styles['image']}>tasty image</div>
                <div className={styles["stack"]}>
                    <div className={styles['image']}>tasty image</div>
                    <div className={styles['two-equal-row']}>
                        <div className={styles['image']}>tasty image</div>
                        <div className={styles['image']}>tasty image</div>
                    </div>
                </div>
            </div>
            <div className={styles['one-row']}>
                <div className={styles['image']}>tasty image</div>
            </div>
        </div>
        <div className={styles['stack']}>
            <div className={styles['feature-detail-row']}>
                <div className={styles['image']}>arcana image</div>
                <div className={styles['image']}>arcana image</div>
            </div>
            <div className={styles['three-equal-row']}>
                <div className={styles['image']}>arcana image</div>
                <div className={styles['image']}>arcana image</div>
                <div className={styles['image']}>arcana image</div>
            </div>
        </div>
    </div>
}