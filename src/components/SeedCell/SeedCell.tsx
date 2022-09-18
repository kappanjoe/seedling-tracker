import React from 'react';
import { Checkbox, seedType, colors } from '../Checkbox';

interface Prop {
    seed: seedType;
    categories: string[];
    clickHandler: (seed: seedType, key: keyof colors, value?: string) => void;
};

export const SeedCell: React.FC<Prop> = (props) => {
    var { seed, categories, clickHandler } = props;

        // TODO: Create "onChange" property
        // TODO: Categories
        // TODO: Implement group-based counting (i.e., don't count special variants)
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
            <span className='SeedName'>{ seed.name }</span>
            <div className='checkboxes'>
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