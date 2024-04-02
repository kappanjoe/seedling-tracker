import React, { useEffect, useState } from 'react';
import { useSeedContext } from '../../contexts';
import { Checkbox } from '../Checkbox';
import { CountSpan } from '../CountSpan';
import defaultSeeds from '../../constants/seeds';
import { countColors } from '../../utils';

interface Props {
    deco: Decoration;
};

export const SeedCell: React.FC<Props> = (props) => {
    const { deco } = props;
    const { preferences } = useSeedContext();
    const [colorCount, setColorCount] = useState(0);
    const [colorMax, setColorMax] = useState(0);
    const [cellLoading, setCellLoading] = useState(true);
    const colors = defaultSeeds.colors;

    useEffect(() => {
        let { count, max } = countColors(Object.keys(deco.colors).map(colorKey => deco.colors[colorKey as Color]), preferences.doCountSeeds);
        setColorCount(count);
        setColorMax(max);
        setCellLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deco]);

    return (
        <div className={ 'SeedCell' } key={ "Cell-" + deco.name }>
            <div className='SeedInfo'>
                <span className='SeedName'>{ deco.name }:</span>
                { !cellLoading && <CountSpan count={ colorCount } max={ colorMax } category={ false }/> }
            </div>
            <div className='CheckboxBlock transition-colors'>
                { colors.map((key: Color) => {
                    // console.log(key + " " + deco.colors[key]);
                    var checked: string = deco.colors[key]!;
                    if (checked === "nil") {
                        return (
                            <div className='blankDiv transition-colors' key={ key }></div>
                        )
                    }

                    return <Checkbox
                                deco={ deco }
                                colorKey= { key }
                                />;
                })}
            </div>
        </div>
    );
}