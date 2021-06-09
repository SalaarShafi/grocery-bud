import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isNotSubmitted, setIsNotSubmitted] = useState(false)
    const [isEdited, setIsEdited] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [idToChange, setIdToChange] = useState('')
    console.log(isEditing);

    useEffect(() => {
        let myEdit = setTimeout(() => {
        setIsEdited(false)
        }, 2000); 
        return ()=> {
            clearTimeout(myEdit)
        }
    }, [isEdited])

    useEffect(() => {
        let mySubmit = setTimeout(() => {
            setIsSubmitted(false)
        }, 2000); 
        return () => {
            clearTimeout(mySubmit)
        }
    }, [isSubmitted])

    useEffect(() => {
        let myNotSubmitted = setTimeout(() => {
            setIsNotSubmitted(false)
        }, 3000); 
        return () => {
            clearTimeout(myNotSubmitted)
        }
    }, [isNotSubmitted])

    function handleSubmit(e) {
        e.preventDefault()
        if (name.length > 0) {
        setItems([...items, {name, id: new Date().getTime().toString()}])
        setName('')
        setIsNotSubmitted(false)
        setIsSubmitted(true)
        } else {
        setIsSubmitted(false)
        setIsNotSubmitted(true)
        }
    }
    console.log(items);
    
    function clearList() {
        setItems([])
    }

    // function handleEdit(idToChange) {
    //     const newItems = items.forEach((item, index)=> {
    //         if (item.id == idToChange && name.length > 0) {
    //             items.splice(index, 1, {name: name, id:idToChange}) 
    //         }
    //     })
    //     setName('')
    //     setIsEditing(!isEditing)
    //     setItems(newItems)
    // }
    // console.log(idToChange);

    function handleEdit(e) {
        e.preventDefault()
        const newItems = [];
        items.forEach((item)=> {
            if (item.id !== idToChange) {
                newItems.push(item)
            } else if (item.id == idToChange && name.length > 0) {
                newItems.push({name: name, id: idToChange})
                setIsEdited(true)
            }
        })
        console.log(newItems);
        setName('')
        setIsEditing(false)
        setItems(newItems)
        
    }
    console.log(idToChange);
    
    


    const handleDelete= (id)=> {
        setItems(items.filter((item)=> item.id !== id))
    }

return (
    <section className='section-center'>

        < Alert isEdited={isEdited} isSubmitted={isSubmitted} isNotSubmitted={isNotSubmitted} />
        {!isEditing && 
        <form onSubmit={handleSubmit}    className='grocery-form'>
            <h3>Grocery Bud</h3>
            <div className='form-control'>
                <input onChange={(e)=> setName(e.target.value)} value={name} type="text" className='grocery'/>
                <button type='submit' className='submit-btn'>Submit</button>
            </div>
        </form>}
        {isEditing && 
        <form onSubmit={handleEdit}    className='grocery-form'>
            <h3>Grocery Bud</h3>
            <div className='form-control'>
                <input onChange={(e)=> setName(e.target.value)} value={name} type="text" className='grocery'/>
                <button type='submit' className='submit-btn'>Edit</button>
            </div>
        </form>}
        <div className='grocery-container'>
            <List setIdToChange={setIdToChange} isEditing={isEditing} setIsEditing={setIsEditing} name={name} items={items} handleEdit={handleEdit} handleDelete={handleDelete}></List>
            <button className='clear-btn' onClick={clearList}>
            clear items
            </button>
        </div>
    </section>
)
}

export default App
