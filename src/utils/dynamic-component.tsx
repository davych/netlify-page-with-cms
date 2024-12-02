import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { ContentObject, ContentTypeNames } from '../types/app';
import * as React from 'react';
import { Annotated } from './annotations';
import { Profile } from '../components/Profile';

const componentMap: Partial<Record<ContentTypeNames, React.ComponentType<any>>> = {
    ContentfulHero: Hero,
    ContentfulAbout: About,
    ContentfulStats: Stats,
    ContentfulProfile: Profile
};

export const DynamicComponent: React.FC<ContentObject> = (props) => {
    const Component = componentMap[props.__typename];
    if (!Component) {
        throw new Error(`No component matches type: '${props.__typename}'`);
    }

    return (
        <Annotated content={props}>
            <Component {...props} />
        </Annotated>
    );
};
