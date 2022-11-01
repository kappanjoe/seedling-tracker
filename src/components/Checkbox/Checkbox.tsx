import React, { useState, MouseEvent } from 'react';
import { decoration, colors } from '../../App';

interface Prop {
    index: number;
    decorations: decoration[];
    checkState: string;
    keyName: string;
    smallCountHandler: (value: number) => void;
    updateFullCount: () => void;
};

export const Checkbox: React.FC<Prop> = (props) => {
    const [checked, setChecked] = useState(props.checkState);
    const { index, keyName, smallCountHandler, updateFullCount } = props;
    var decorations = props.decorations;
    
    // Save checkbox state to respective value in localStorage
    function updateValue(value: string) {
        decorations[index].colors[keyName as keyof colors] = value;
        localStorage.setItem("decorations", JSON.stringify(decorations));

        let count = 0;
        Object.keys(decorations[index].colors).forEach( (x) => {
            if (decorations[index].colors[x as keyof colors] === "on") { count++; } 
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
            updateValue("off")
        } else {
            updateValue("on")
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
                        updateValue("on");
                    } else {
                        updateValue("off");
                    }
                }}
                key={ keyName + "Checkbox" }/>
        </div>
    );
}