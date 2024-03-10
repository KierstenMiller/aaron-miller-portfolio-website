import classNames from 'classnames'
import styles from './Inventory.module.scss'

export type SnapshotsT = {id: string, label: string, content: {id: string, type: 'pill' | 'date', message: string}[]}[]

export interface InventoryI {
    snapshots: SnapshotsT,
}

export const Inventory = ({ snapshots } : InventoryI) => {
    return <div className={classNames(styles['inventory-collection'], 'inventory-collection')}>
        {snapshots.map(s => <div key={s.id} className={classNames(styles['inventory'], 'inventory', styles[s.id])}>
            <div className={classNames(styles['inventory-label'], 'inventory-label')}>{s.label}:</div>
            <div className={classNames(styles['inventory-content'], 'inventory-content')}>
                {s.content.map(c => <div key={c.id} className={classNames(styles[c.type], c.type)}>{c.message}</div>)}
            </div>
        </div>)}
    </div>
}