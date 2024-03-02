import classNames from "classnames"
import Image from "next/image"
import React from "react"

export const ImageContainer = ({className, images}: {className?: string, images: {id: string, src: string, srcMobile?: string,  width: number, height: number, alt: string, description?: string | React.ReactNode}[]}) => {
    return <div className={classNames(`images-collection frames-${images.length}`, className)}>
        {images.map(i => <div key={i.src} className="image-container">
            <Image className={classNames({'tablet-min-up-only': i.srcMobile})} src={i.src} width={i.width} height={i.height} alt={i.alt} />
            {i.srcMobile && <Image className="mobile-max-down-only" src={i.srcMobile} width={i.width} height={i.height} alt={i.alt} />}
            {i.description && <div className="image-description">{i.description}</div>}
        </div>)}
    </div>
}