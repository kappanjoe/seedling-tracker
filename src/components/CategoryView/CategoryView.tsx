import React, { useEffect, useState, MouseEvent } from 'react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Transition } from '@headlessui/react';
import { useSeedContext } from '../../contexts';
import { SeedCell } from '../SeedCell';
import { CountSpan } from '../CountSpan';
import { ColorState }  from '../../types/classes.d';

interface Props {
    index: number;
};

export const CategoryView: React.FC<Props> = (props) => {
    const { index } = props;
    const { decorations, categories, saveCats, contextLoaded, preferences } = useSeedContext();
    const category = categories[index];
    const [isOpen, setIsOpen] = useState(category.isOpen);
    const prettyName = category.name.replace("-", " ");

    // Save category visibility state to localStorage
    function onClick(event: MouseEvent) {
        let newCats = [...categories];
        newCats[index].isOpen = !isOpen;
        saveCats(newCats);
    }

    // Create array to populate category with appropriate decoration types
    let seedCells: JSX.Element[] = [];
    for (let i of category.values) {
        seedCells.push(<SeedCell index={ i } key={ i }/>);
    }

    // Count category totals
    function countCategory() {
        var current = 0;
        var maxCount = 0;
        for (let i of category.values) {
            for (let j of Object.keys(decorations[i].colors)) {
                if (decorations[i].colors[j as keyof ColorSet] === ColorState.On) {
                    current++;
                    maxCount++;
                } else if (decorations[i].colors[j as keyof ColorSet] === ColorState.Off) {
                    maxCount++;
                } else if (decorations[i].colors[j as keyof ColorSet] === ColorState.Seed) {
                    if (preferences.doCountSeeds) {
                        current++;
                    }
                    maxCount++;;
                }
            }
        }
        return ( contextLoaded && <CountSpan count={ current } max={ maxCount } category={ true }/>);
    }

    useEffect(() => {
        let updatedCat = categories[index];
        setIsOpen(updatedCat.isOpen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories]);

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
                <ChevronUpIcon className={ isOpen ? 'transition-transform rotate-0 transform-gpu' : 'transition-transform rotate-180 transform-gpu' }/>
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