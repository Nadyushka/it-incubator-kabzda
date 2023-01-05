import React, {KeyboardEvent, useState} from 'react';
import s from './select.module.css'

type ItemType = {
    value: string
    title: string
}

type PropsType = {
    items: ItemType[]
    activeValue: string
    setActiveValue: (newTitle: string) => void
}

const Select = (props: PropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [hoveredTitle, setHoveredTitle] = useState<string>(props.activeValue)
    const selectedItem = props.items.find(t => t.value === props.activeValue)

    const setVisibility = () => setCollapsed(!collapsed)
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length; i++) {
                if (hoveredTitle === props.items[i].value) {
                    e.key === 'ArrowUp' ?
                        props.items[i - 1] && setHoveredTitle(props.items[i - 1].value) :
                        props.items[i + 1] && setHoveredTitle(props.items[i + 1].value)
                    break
                }
            }
        }
        if (e.key === 'Enter') {
            props.setActiveValue(hoveredTitle)
            setVisibility()
        }
    }

    return (
        <div className={s.selectBody} onKeyUp={onKeyUpHandler} tabIndex={0}>
            <span className={s.selectActiveTitle} onClick={setVisibility}>{selectedItem && selectedItem.title}
                <span className={s.triangle + ' ' + (collapsed ? s.triangleBottom : s.triangleTop)}></span>
            </span>
            {collapsed &&
                <div className={s.selectTitles}>
                    {props.items.map(i => {

                            const setActiveTitleOnClick = () => {
                                props.setActiveValue(i.value)
                                setVisibility()
                            }

                            return (
                                <div
                                    className={hoveredTitle === i.value ? s.hoveredTitle : s.normalTitle}
                                    onClick={setActiveTitleOnClick}
                                    onMouseOver={() => {
                                        setHoveredTitle(i.value);
                                        // props.setActiveTitle(i.title)
                                    }
                                    }
                                    key={i.value}>{i.title}</div>
                            )
                        }
                    )}

                </div>
            }
        </div>
    )
        ;
};

export default Select;