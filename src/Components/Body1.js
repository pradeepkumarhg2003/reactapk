import React, { useState } from 'react'

const Body = () => {
    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        { fruit: 'mango' }
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % fruits.length
        setIndex(newIndex)
    }
    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', alignItems:
        'center', flexDirection: 'column'}}>
            <p>i like this {fruits[index].fruit}</p>
            <button onClick={change}>Change me</button>
        </div>
        </div>
    )
}

export default Body