
import styles from "./HeadBlurb.module.scss"

export const HeadBlurb = ({heading, blurbs}: {heading:string | React.ReactNode, blurbs: {id: string, message: string}[]}) => {
    return <div className={styles['head-blurb']}>
        <h2 className="secondary-title">{heading}</h2>
        <div className={styles['blurbs-container']}>
            {blurbs.map(b => <p key={b.id}>{b.message}</p>)}
        </div>
    </div>
}