import React, { useState } from 'react';
import { decoration, colors } from '../../App';

interface Prop {
    deco: decoration;
    clickHandler: (seed: decoration, key: keyof colors, value: string) => void;
    checkState: string;
    keyName: string;
};

export const Checkbox: React.FC<Prop> = (props) => {
    const [checked, setChecked] = useState(props.checkState);
    
    function boolString(input: string) {
        if (input === "on") { return true; } else { return false; }
    }
    
    return ( 
        <input
            type="checkbox"
            checked={ boolString(checked) }
            className={ props.keyName + "Checkbox" }
            onChange={ (event) => {
                if (event.target.checked) {
                    setChecked("on");
                    props.clickHandler(props.deco, props.keyName as keyof colors, "on");
                } else {
                    setChecked("off");
                    props.clickHandler(props.deco, props.keyName as keyof colors, "off");
                }
            } }/>
    );
}