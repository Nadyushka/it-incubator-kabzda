import React, {useState} from 'react';
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
    const [hoveredTitle, setHoveredTitle] = useState<string>('1')
    const selectedItem = props.items.find(t=>t.value === props.activeValue)

    const setVisibility = () => setCollapsed(!collapsed)


    return (
        <span className={s.selectBody}>
            <span className={s.selectActiveTitle} onClick={setVisibility}>{selectedItem && selectedItem.title}
                <span className={s.triangle + ' '+ (collapsed ? s.triangleBottom : s.triangleTop )}></span>
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
        </span>
    )
        ;
};

export default Select;