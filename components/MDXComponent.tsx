import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
import Container from './Container';
import NarrowContainer from './NarrowContainer';
import Gallery from './gallery/Gallery';
import GalleryImage from './gallery/GalleryImage';

const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({...runtime}).default;
}

const components = {
    Image,
    Container,
    NarrowContainer,
    Gallery,
    GalleryImage
}

interface MdxProps {
    code: string
}

export function MDXComponent({code}: MdxProps) {
    const Component = useMDXComponent(code);
    return <Component components={components} />
}