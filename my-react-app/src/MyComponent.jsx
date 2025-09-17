import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState('mama');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={() => {setName('ahmad')}}>change</button>
            <p>Age: {age}</p>
            <button onClick = {() => {setAge(age+1)}}>increment age</button>
            <p>Is employed: {isEmployed ? 'yes' : 'no'}</p>
            <button onClick = {() => {setIsEmployed(!isEmployed)}}>toggle status</button>
        </div>
    )
}

export default MyComponent