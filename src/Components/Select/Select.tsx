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
    const setVisibility = () => setCollapsed(!collapsed)


    return (
        <span className={s.selectBody}>
            <span className={s.selectActiveTitle} onClick={setVisibility}>{props.activeTitle}</span>
            {collapsed &&
                <div>
                    {props.items.map(i => {

                        const setActiveTitleOnClick =() => {
                            props.setActiveTitle(i.title)
                            setVisibility()
                        }

                            return (
                                <div
                                    onClick={setActiveTitleOnClick}
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