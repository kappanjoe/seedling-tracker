import React, { useState, MouseEvent } from 'react';
import { decoration, colors } from '../../App';

interface Prop {
    index: number;
    decorations: decoration[];
    checkState: string;
    keyName: string;
};

export const Checkbox: React.FC<Prop> = (props) => {
    const [checked, setChecked] = useState(props.checkState);
    const { index, keyName } = props;
    var decorations = props.decorations;
    
    // Save checkbox state to respective value in storage
    function updateValue(value: string) {
        decorations[index].colors[keyName as keyof colors] = value;
        localStorage.setItem("decorations", JSON.stringify(decorations));
        setChecked(value);
    }

    function boolString(input: string) {
        if (input === "on") { return true; } else { return false; }
    }

    function clickHandler(event: MouseEvent) {
        if ((event.currentTarget.firstChild! as HTMLInputElement).checked) {
            updateValue("off")
        } else {
            updateValue("on")
        }
    }
    
    return ( 
        <div className={ boolString(checked)? keyName + 'Checked' : keyName + 'Unchecked' } key= { keyName } onClick={ clickHandler }>
            {/* <span className={ key + "Name" }>{ key }</span> */}
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