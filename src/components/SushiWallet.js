import React, {useState} from 'react'


export default function SushiWallet ({addMoney}) {
    const [value, setValue] = useState(0)

    function handleSubmit(evt) {
        evt.preventDefault()
        addMoney(value)
        setValue(0)
    }

    function handleChange(evt) {
     const value = parseInt(evt.target.value)
     setValue(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={value} onChange={handleChange}/>
            <button type="submit">Add $ to budget</button>
        </form>
    )
}