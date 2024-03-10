import classNames from 'classnames'
import { Inventory, SnapshotsT } from './Inventory'
import styles from './ProjectInfo.module.scss'

export interface ProjectInfoI {
    snapshots: SnapshotsT,
    blurbs: {id: string, message: string}[]
}



export const ProjectInfo = ({ snapshots, blurbs } : ProjectInfoI) => {
     const Blurbs = () => (
        <div className={classNames(styles['blurb-collection'])}>
            {blurbs.map(b => <p key={b.id}>{b.message}</p>)}
        </div>
     )
    return <>
        <div className={classNames(styles['project-info'], styles['desktop'])}>
            <Inventory snapshots={snapshots}/>
            <Blurbs />
        </div>
        <div className={classNames(styles['project-info'], styles['mobile'])}>
            <Blurbs />
            <Inventory snapshots={snapshots}/>
        </div>
    </>
}