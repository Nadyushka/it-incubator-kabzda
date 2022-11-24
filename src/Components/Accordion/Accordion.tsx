import React, {useState} from 'react';


function Accordion(props: any) {

    let [visibility, setVisibility] = useState<boolean>(true)

    const changeButtonVisability = () => {
        setVisibility(!visibility)
    }

    return (
        <div>
            <button onClick={changeButtonVisability}> Menu</button>
            <AccordionBody visibility={visibility}/>
        </div>
    )
}

type AccordionBodyPropsType = {
    visibility: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
    if (props.visibility) {
        return (
            <ul>
                <li> one</li>
                <li> two</li>
                <li> three</li>
            </ul>
        )
    }
    return <></>
}


export default Accordion

