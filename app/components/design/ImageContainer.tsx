import Image from "next/image"
import React from "react"

export const ImageContainer = ({images}: {images: {id: string, src: string, width: number, height: number, alt: string, description?: string | React.ReactNode}[]}) => {
    return <div className={`images-collection frames-${images.length}`}>
        {images.map(i => <div key={i.src} className="image-container">
            <Image src={i.src} width={i.width} height={i.height} alt={i.alt} />
            <div className="image-description">{i.description}</div>
        </div>)}
    </div>
}