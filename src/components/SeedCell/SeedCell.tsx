import React from 'react';
import { decoration, colors } from '../../App';
import { Checkbox } from '../Checkbox';
import { CategoryName } from '../CategoryName';
import structure from '../../seeds.json';

interface Prop {
    deco: decoration;
    categories: string[];
    newCat: boolean;
    clickHandler: (seed: decoration, key: keyof colors, value: string) => void;
};

export const SeedCell: React.FC<Prop> = (props) => {
    var { deco, categories, newCat, clickHandler } = props;
    const colors = structure.colors;

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
        <div className={ "SeedCell " + categories[deco.catInd] }>
            <CategoryName seed={ deco } readyForCat={ newCat } categories={ categories }/>
            <span className='SeedName'>{ deco.name }</span>
            <div className='CheckboxBlock'>
                { colors.map((key: string) => {
                    // console.log(key + " " + seed.colors[key as keyof colors]);
                    var checked: string = deco.colors[key as keyof colors]!;
                    if (checked === "nil") {
                        return (
                            <div className='blankDiv' key={ Math.random() }></div>
                        )
                    }
                    
                    return (
                        <div className={ key + "Div" } key={ key }>
                            {/* <span className={ key + "Name" }>{ key }</span> */}
                            <Checkbox
                                deco= { deco }
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