import React, { useState, MouseEvent } from 'react';
import { ColorState } from '../../types/classes.d';

interface Props {
    index: number;
    decorations: Decoration[];
    checkState: string;
    keyName: string;
    smallCountHandler: (value: number) => void;
    updateFullCount: () => void;
};

export const Checkbox: React.FC<Props> = (props) => {
    const [checked, setChecked] = useState(props.checkState);
    const { index, keyName, smallCountHandler, updateFullCount } = props;
    var decorations = props.decorations;

    // Save checkbox state to respective value in localStorage
    function updateValue(value: ColorState) {
        decorations[index].colors[keyName as keyof ColorSet] = value;
        localStorage.setItem("decorations", JSON.stringify(decorations));

        let count = 0;
        Object.keys(decorations[index].colors).forEach( (x) => {
            if (decorations[index].colors[x as keyof ColorSet] === "on") { count++; }
        });
        smallCountHandler(count);
        updateFullCount();
        setChecked(value);
    }

    // Convert string to boolean for updating checkbox state
    function boolString(input: string) {
        if (input === "on") { return true; } else { return false; }
    }

    // Click handler to allow checkbox parent to update state, effectively increasing tap target
    function clickHandler(event: MouseEvent) {
        if ((event.currentTarget.firstChild! as HTMLInputElement).checked) {
            updateValue(ColorState.Off)
        } else {
            updateValue(ColorState.On)
        }
    }

    return (
        <div className={ boolString(checked)? keyName + 'Checked transition-colors' : keyName + 'Unchecked transition-colors' } key= { keyName } onClick={ clickHandler }>
            <input
                type="checkbox"
                checked={ boolString(checked) }
                className={ keyName + "Checkbox" }
                onChange={ (event) => {
                    if (event.target.checked) {
                        updateValue(ColorState.On);
                    } else {
                        updateValue(ColorState.Off);
                    }
                }}
                key={ keyName + "Checkbox" }/>
        </div>
    );
}