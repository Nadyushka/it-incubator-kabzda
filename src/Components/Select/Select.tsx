import React, {useState} from 'react';
import s from './select.module.css'

type ItemType = {
    value: string
    title: string
}

type PropsType = {
    items: ItemType[]
    activeTitle: string | null
    setActiveTitle: (newTitle: string) => void
}

const Select = (props: PropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [hoveredTitle, setHoveredTitle] = useState<string>('Minsk')

    const setVisibility = () => setCollapsed(!collapsed)


    return (
        <span className={s.selectBody}>
            <span className={s.selectActiveTitle} onClick={setVisibility}>{props.activeTitle}
                <span className={s.triangle + ' '+ (collapsed ? s.triangleBottom : s.triangleTop )}></span>
            </span>
            {collapsed &&
                <div className={s.selectTitles}>
                    {props.items.map(i => {

                            const setActiveTitleOnClick = () => {
                                props.setActiveTitle(i.title)
                                setVisibility()
                            }

                            return (
                                <div
                                    className={hoveredTitle === i.title ? s.hoveredTitle : s.normalTitle}
                                    onClick={setActiveTitleOnClick}
                                    onMouseOver={() => {
                                        setHoveredTitle(i.title);
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