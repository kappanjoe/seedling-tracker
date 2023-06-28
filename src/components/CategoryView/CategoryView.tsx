import React, { useState, MouseEvent } from 'react';
import { SeedCell } from '../SeedCell';
import { CountSpan } from '../CountSpan';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Transition } from '@headlessui/react';

interface Prop {
    index: number;
    categories: Category[];
    decorations: Decoration[];
    updateFullCount: () => void;
};

export const CategoryView: React.FC<Prop> = (props) => {
    const { index, decorations, updateFullCount } = props;
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
        seedCells.push(<SeedCell index={ i } decorations={ decorations } key={ i } updateFullCount={ updateFullCount }/>);
    }

    // Count category totals
    function countCategory() {
        var current = 0;
        var maxCount = 0;
        for (let i of category.values) {
            for (let j of Object.keys(decorations[i].colors)) {
                if (decorations[i].colors[j as keyof ColorSet] === "on") {
                    current++;
                    maxCount++;
                } else if (decorations[i].colors[j as keyof ColorSet] === "off") {
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
                <Transition
                    show={ !isOpen }
                    enter="transition-all origin-bottom"
                    enterFrom="scale-y-0"
                    enterTo="scale-y-100"
                    leave="transition-all origin-bottom"
                    leaveFrom="scale-y-100"
                    leaveTo="scale-y-0">
                        { countCategory() }
                </Transition>
                <ChevronUpIcon className={ isOpen? 'transition-transform rotate-0 transform-gpu' : 'transition-transform rotate-180 transform-gpu' }/>
            </div>
            <Transition
                show={ isOpen }
                enter="transition-all origin-top transform-gpu"
                enterFrom="scale-y-0"
                enterTo="scale-y-100"
                leave="transition-all origin-top tranform-gpu"
                leaveFrom="scale-y-100"
                leaveTo="scale-y-0">
                    <div key={ category.name + "Seeds" }>
                        { seedCells }
                    </div>
            </Transition>
        </div>
    );
}