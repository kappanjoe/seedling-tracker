import React, { useState, MouseEvent } from 'react';
import { decoration, category, colors } from '../../App';
import { SeedCell } from '../../components/SeedCell';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { CountSpan } from '../CountSpan';

interface Prop {
    index: number;
    categories: category[];
    decorations: decoration[];
    bigCountHandler: () => void;
};

export const Category: React.FC<Prop> = (props) => {
    const { index, decorations, bigCountHandler } = props;
    var categories = props.categories;
    let category = categories[index]
    const prettyName = category.name.replace("-", " ");
    const [isOpen, setIsOpen] = useState(category.isOpen);

    // Save category visibility state to localStorage
    function onClick(event: MouseEvent) {
        categories[index].isOpen = !isOpen;
        localStorage.setItem("categories", JSON.stringify(categories));
        setIsOpen(!isOpen);
    }
    
    // Create array to populate category with appropriate decoration types
    let seedCells: JSX.Element[] = [];
    for (let i of category.values) {
        seedCells.push(<SeedCell index={ i } decorations={ decorations } key={ i } bigCountHandler={ bigCountHandler }/>);
    }

    // Count category totals
    function countCategory() {
        var current = 0;
        var maxCount = 0;
        for (let i of category.values) {
            for (let j of Object.keys(decorations[i].colors)) {
                if (decorations[i].colors[j as keyof colors] === "on") {
                    current++;
                    maxCount++;
                } else if (decorations[i].colors[j as keyof colors] === "off") {
                    maxCount++;
                }
            }
        }
        return <CountSpan count={ current } max={ maxCount } category={ true }/>;
    }

    return (
        <div className="Category" key={ category.name + "Container" } >
            <div className="CategoryName transition-colors" key={ category.name } onClick={ onClick }>
                <span>{ prettyName }</span>
                { isOpen? null : countCategory() }
                <ChevronUpIcon className={ isOpen? 'transition-transform rotate-0' : 'transition-transform rotate-180' }/>
            </div>
            <div className={ isOpen? 'transition-all scale-y-100 origin-top' : `transition-all scale-y-0 h-0 origin-top` } key={ category.name + "Seeds" }>
                { seedCells }
            </div>
        </div>
    );
}