import React from 'react'
import './inputButton.css'

let idNumber = 1
function InputButton({setGlobalArray,edit,setEdit,input,setInput,localStorageAdder}) {


    function inputHandler(e) {
        setInput(e.target.value)
    }

    function addHandler() {
        if(edit.text){
            setGlobalArray((prev)=>{
                return prev.map((data)=>{
                    if(data.id===edit.id){
                        return {...data,text:input}
                    }
                    else{
                        return data
                    }
                })
            })
            localStorageAdder()
            setEdit('')
        }
        else{
            if(input) {
                let data = {
                    id: idNumber,
                    text: input
                }
                idNumber++
                setGlobalArray((prev)=>{
                    return [...prev,data]
                })
                localStorageAdder()
            }
            else{
                alert('Please Enter Input Value')
            }
        } 
        setInput('')
    }

  
    return (
        <div className='inputBox'>
            <input type="text" value={input} onChange={inputHandler} />
            <button onClick={addHandler}  className="btn btn-primary mx-1">ADD</button>
        </div>
    )
}

export default InputButton