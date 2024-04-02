import React, { useEffect, useState, MouseEvent } from 'react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Transition } from '@headlessui/react';
import { useSeedContext } from '../../contexts';
import { SeedCell } from '../SeedCell';
import { CountSpan } from '../CountSpan';
import { countColors } from '../../utils';

interface Props {
    catKey: string;
};

export const CategoryView: React.FC<Props> = (props) => {
    const { catKey } = props;
    const { categories, saveCats, contextLoaded, preferences } = useSeedContext();
    const [category, setCategory] = useState(categories[catKey]);
    const [isOpen, setIsOpen] = useState(category.isOpen);
    const [count, setCount] = useState(0);
    const [max, setMax] = useState(7);

    // Save category visibility state to localStorage
    function onClick(_: MouseEvent) {
        let newCats = { ...categories };
        newCats[catKey].isOpen = !isOpen;
        saveCats(newCats);
    }

    // Count category totals
    function countCategory() {
        let colorStates = category.decorationOrder.flatMap((decorKey) => {
           return Object.keys(category.decorations[decorKey].colors).map((colorKey) => {
               return category.decorations[decorKey].colors[colorKey as Color];
           });
        });

        let { count, max } = countColors(colorStates, preferences.doCountSeeds);
        setCount(count);
        setMax(max);
    }

    useEffect(() => {
        setCategory(categories[catKey]);
        setIsOpen(category.isOpen);
        countCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categories, saveCats]);

    return (
        <div className="Category" key={ catKey + " Container" } >
            <div className="CategoryName transition-colors" key={ category.key } onClick={ onClick }>
                <span>{ category.name }</span>
                <Transition
                    show={ !isOpen }
                    enter="transition-all origin-bottom"
                    enterFrom="scale-y-0"
                    enterTo="scale-y-100"
                    leave="transition-all origin-bottom"
                    leaveFrom="scale-y-100"
                    leaveTo="scale-y-0">
                        { contextLoaded && <CountSpan count={ count } max={ max } category/> }
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
                        { category.decorationOrder.map((decorKey) => {
                            return <SeedCell deco={ category.decorations[decorKey] }/>
                        }) }
                    </div>
            </Transition>
        </div>
    );
}