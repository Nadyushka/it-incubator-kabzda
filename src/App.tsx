import React from 'react';
import './App.css';
import Rating from "./Components/Rating/Rating";
import Select from './Components/Select/Select';

function App() {
    return (
        <div className="App">
            {/*<Rating/>*/}


            <Select items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'}
            ]}/>
        </div>
    );
}

export default App;
