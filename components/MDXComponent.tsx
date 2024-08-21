import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
import Container from './Container';
import NarrowContainer from './NarrowContainer';

const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({...runtime}).default;
}

const components = {
    Image,
    Container,
    NarrowContainer
}

interface MdxProps {
    code: string
}

export function MDXComponent({code}: MdxProps) {
    const Component = useMDXComponent(code);
    return <Component components={components} />
}