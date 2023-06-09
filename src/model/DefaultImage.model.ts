import { StaticImageData } from 'next/image'

export interface DefaultImage {
    alt: string
    src?: string
    width?: number
    height?: number
    wrapperWidth?: number
    wrapperHeight?: number
    fill?: boolean
    isLocal?: boolean
    localSrc?: StaticImageData
}
