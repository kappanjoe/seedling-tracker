import React, { MouseEventHandler } from 'react';
// import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface Prop {
    name: string;
};

export const CategoryName: React.FC<Prop> = (props) => {
    const { name } = props;
    const prettyName = name.replace("-", " ");

    return (
        <div className="Category" key={ name + "Container" } >
            <span className="CategoryName" key={ name }>{ prettyName }</span>
            {/* <ChevronRightIcon className={ } /> */}
        </div>
    );
}