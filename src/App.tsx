import React, {useState} from 'react';
import './App.css';
import Rating from "./Components/Rating/Rating";
import Select from './Components/Select/Select';

function App() {

    const [activeValue,setActiveValue] = useState<string>('1')

    return (
        <div className="App">
            {/*<Rating/>*/}


            <Select
                activeValue={activeValue}
                setActiveValue={setActiveValue}
                items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'}
            ]}/>
        </div>
    );
}

export default App;
