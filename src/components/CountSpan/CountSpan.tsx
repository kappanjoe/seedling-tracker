import React from 'react';

interface Prop {
    count: number;
    max: number;
    category: boolean;
};

export const CountSpan: React.FC<Prop> = (props) => {
    const { count, max, category } = props;
    var countClass = "";
    var countText = "";

    if (count === max) {
        countClass = "ColorComplete transition-all"
        countText = "Completed!";
    } else {
        countClass = "ColorCount transition-all"
        countText = count + " / " + max;
    }

    if (category) {
        countClass += " !my-0 !py-0"
    }

    return (
        <span className={ countClass }>{ countText }</span>
    );
}