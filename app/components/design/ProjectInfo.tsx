export interface ProjectInfoI {
    snapshots: {id: string, label: string, content: {id: string, type: 'pill' | 'date', message: string}[]}[],
    blurbs: {id: string, message: string}[]
}

export const ProjectInfo = ({ snapshots, blurbs } : ProjectInfoI) => {
    return <div className="project-info">
         <div className="inventory-collection">
            {snapshots.map(s => <div key={s.id} className={`inventory ${s.id}`}>
                <div className="inventory-label">{s.label}:</div>
                <div className="inventory-content">
                    {s.content.map(c => <div key={c.id} className={c.type}>{c.message}</div>)}
                </div>
            </div>)}
        </div>
        <div className="blurb-collection-FIX-NAMESPACE-ISSUE">
            {blurbs.map(b => <p key={b.id}>{b.message}</p>)}
        </div>
    </div>
}