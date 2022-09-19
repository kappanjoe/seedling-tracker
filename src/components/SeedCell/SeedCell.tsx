import React from 'react';
import { Checkbox, seedType, colors } from '../Checkbox';
import { CategoryName } from '../CategoryName';

interface Prop {
    seed: seedType;
    categories: string[];
    nextCat: boolean;
    clickHandler: (seed: seedType, key: keyof colors, value?: string) => void;
};

export const SeedCell: React.FC<Prop> = (props) => {
    var { seed, categories, nextCat, clickHandler } = props;

        // TODO: Add blank checkboxes to allow grid alignment
        // TODO: Implement group-based counting (i.e., don't count special variants)
        //
        // --- Commented code below counts every seedling ---
        // var count = 0;
        // var total = 0;
        // for (key of colors) {
        //     total++;
        //     if (colors.key) { count ++; }
        // }
        // var output = <span className='ColorCount'>{ count + " / " + total }</span>

    return (
        <div className={ "SeedCell " + categories[seed.catInd] }>
            <CategoryName seed={ seed } readyForCat={ nextCat } categories={ categories }/>
            <span className='SeedName'>{ seed.name }</span>
            <div className='CheckboxBlock'>
                { Object.keys(seed.colors).map((key: string) => {
                    // console.log(key + " " + seed.colors[key as keyof colors]);
                    var checked: string = seed.colors[key as keyof colors]!;
                    return (
                        <div className={ key + "Div" } key={ key }>
                            <span className={ key + "Name" }> { key }</span>
                            <Checkbox
                                seed= { seed }
                                clickHandler= { clickHandler }
                                checkState= { checked }
                                keyName= { key }/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}