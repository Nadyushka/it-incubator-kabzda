import React from 'react';

type ItemType = {
    value:string
    title:string
}

type PropsType = {
    items: ItemType[]
}

const Select = (props:PropsType) => {
    
    return (
        <span>
            <span>Active value</span>
            <div>
                {props.items.map(i=>{
                    return (
                        <div key={i.value}>{i.title}</div>
                    )
                }
                )}
            </div>
        </span>
    );
};

export default Select;