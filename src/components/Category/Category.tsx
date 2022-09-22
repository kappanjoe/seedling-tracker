import React, { useState, MouseEvent } from 'react';
import { decoration, category } from '../../App';
import { SeedCell } from '../../components/SeedCell';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface Prop {
    index: number;
    categories: category[];
    decorations: decoration[];
};

export const Category: React.FC<Prop> = (props) => {
    const { index, decorations } = props;
    var categories = props.categories;
    let category = categories[index]
    const prettyName = category.name.replace("-", " ");
    const [isOpen, setIsOpen] = useState(category.isOpen);

    function onClick(event: MouseEvent) {
        categories[index].isOpen = !isOpen;
        localStorage.setItem("categories", JSON.stringify(categories));
        setIsOpen(!isOpen);
    }

    let seedCells: JSX.Element[] = [];
    for (let i of category.values) {
        seedCells.push(<SeedCell index={ i } decorations={ decorations }/>);
    }

    return (
        <div className="Category" key={ category.name + "Container" } >
            <div className="CategoryName" key={ category.name } onClick={ onClick }>
                <span>{ prettyName }</span>
                <ChevronRightIcon className={ isOpen? 'rotate-90-transform' : '' } />
            </div>
            <div className={ isOpen? 'SeedsOpen' : 'SeedsClosed' } key={ category.name + "Seeds" }>
                { seedCells }
            </div>
        </div>
    );
}