import React from 'react';
import { decoration, category, colors } from '../../App';
import { SeedCell } from '../../components/SeedCell';
// import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface Prop {
    name: string;
    category: category;
    decorations: decoration[];
    clickHandler: (seed: decoration, key: keyof colors, value: string) => void;
};

export const Category: React.FC<Prop> = (props) => {
    const { name, category, decorations, clickHandler } = props;
    const prettyName = name.replace("-", " ");
    
    let output: JSX.Element[] = [];
    for (let i of category.values) {
        let deco = decorations[i];
        output.push(<SeedCell deco={ deco } clickHandler={ clickHandler } key={ deco.name } />);
    }

    return (
        <div className="Category" key={ name + "Container" } >
            <span className="CategoryName" key={ name }>{ prettyName }</span>
            {/* <ChevronRightIcon className={ } /> */}
            { output }
        </div>
    );
}