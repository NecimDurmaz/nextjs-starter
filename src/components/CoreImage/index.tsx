import React from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'
import { DefaultImage } from '@/model/DefaultImage.model'
export default function CoreImage({ image }: { image: DefaultImage }) {
    image.src = image.src
        ? image.src
        : 'https://erspublic.blob.core.windows.net/test/1872313b-9a5f-7800-8b25-73238f1be000.jpeg'
    return (
        <>
            {image?.width && image?.height && (
                <div
                    className={styles.CoreImage}
                    style={{
                        height: image.wrapperWidth + 'px',
                        width: image.wrapperHeight + 'px',
                    }}
                >
                    <Image
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                        src={image.src}
                        placeholder="blur"
                        blurDataURL="https://erspublic.blob.core.windows.net/test/18721afc-bb5f-7215-8076-6a8c1f54c000.jpeg"
                    />
                </div>
            )}
            {image?.fill && (
                <div
                    className={styles.CoreImage}
                    style={{
                        height: image.wrapperWidth + 'px',
                        width: image.wrapperHeight + 'px',
                    }}
                >
                    <Image
                        fill
                        alt={image.alt}
                        src={image.src}
                        placeholder="blur"
                        blurDataURL="https://erspublic.blob.core.windows.net/test/18721afc-bb5f-7215-8076-6a8c1f54c000.jpeg"
                    />
                </div>
            )}
            {image?.isLocal && (
                <div
                    className={styles.CoreImage}
                    style={{
                        height: image.wrapperWidth + 'px',
                        width: image.wrapperHeight + 'px',
                    }}
                >
                    <Image
                        alt={image.alt}
                        src={image.localSrc}
                        placeholder="blur"
                        blurDataURL="https://erspublic.blob.core.windows.net/test/18721afc-bb5f-7215-8076-6a8c1f54c000.jpeg"
                    />
                </div>
            )}
        </>
    )
}
