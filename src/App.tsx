import React, {useState} from 'react';
import './App.css';
import Rating from "./Components/Rating/Rating";
import Select from './Components/Select/Select';

function App() {

    const [activeTitle,setActiveTitle] = useState<string>('Minsk')

    return (
        <div className="App">
            {/*<Rating/>*/}


            <Select
                activeTitle={activeTitle}
                setActiveTitle={setActiveTitle}
                items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'}
            ]}/>
        </div>
    );
}

export default App;
