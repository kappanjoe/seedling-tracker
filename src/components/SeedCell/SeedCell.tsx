import React from 'react';
import { decoration, colors } from '../../App';
import { Checkbox } from '../Checkbox';
import structure from '../../seeds.json';

interface Prop {
    index: number;
    decorations: decoration[];
};

export const SeedCell: React.FC<Prop> = (props) => {
    var { index, decorations } = props;
    const colors = structure.colors;
    let deco = decorations[index];

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
        <div className={ 'SeedCell' } key={ "Cell-" + index }>
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
                    
                    return <Checkbox
                                index= { index }
                                decorations= { decorations }
                                checkState= { checked }
                                keyName= { key }
                                key= { key }/>;
                })}
            </div>
        </div>
    );
}