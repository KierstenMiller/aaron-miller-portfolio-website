export type SnapshotsT = {id: string, label: string, content: {id: string, type: 'pill' | 'date', message: string}[]}[]

export interface InventoryI {
    snapshots: SnapshotsT,
}


export interface ProjectInfoI {
    snapshots: SnapshotsT,
    blurbs: {id: string, message: string}[]
}

export const Inventory = ({ snapshots } : InventoryI) => {
    return <div className="inventory-collection">
        {snapshots.map(s => <div key={s.id} className={`inventory ${s.id}`}>
            <div className="inventory-label">{s.label}:</div>
            <div className="inventory-content">
                {s.content.map(c => <div key={c.id} className={c.type}>{c.message}</div>)}
            </div>
        </div>)}
    </div>
}



export const ProjectInfo = ({ snapshots, blurbs } : ProjectInfoI) => {
     const Blurbs = () => (
        <div className="project-blurb-collection">
            {blurbs.map(b => <p key={b.id}>{b.message}</p>)}
        </div>
     )
    return <>
        <div className="project-info desktop">
            <Inventory snapshots={snapshots}/>
            <Blurbs />
        </div>
        <div className="project-info mobile">
            <Blurbs />
            <Inventory snapshots={snapshots}/>
        </div>
    </>
}