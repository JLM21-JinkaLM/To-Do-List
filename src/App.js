import React, { useEffect, useState } from 'react'
import InputButton from './Components/InputButton'
import CardList from './Components/CardList'
import './App.css'


function App() {
  let arrayData = localStorage.getItem('arrayData') ? JSON.parse(localStorage.getItem('arrayData')) : []
  let [globalArray, setGlobalArray] = useState([...arrayData])
  let [edit, setEdit] = useState([])
  let [input, setInput] = useState('')

  useEffect(() => {
    localStorageAdder()
  })


  function editHandler(id) {
    let findX = globalArray.find((data) => {
      return data.id === id
    })
    if (findX) {
      setEdit(findX)
      setInput(findX.text)
    }
  }
  function deleteHandler(id) {
    setGlobalArray((prev) => {
      return prev.filter((data) => {
        return data.id !== id
      })
    })
    localStorageAdder()
  }


  function localStorageAdder() {
    localStorage.setItem('arrayData', JSON.stringify(globalArray))
  }






  return (
    <div className='container'>
      <div>
        <div className='box'>
          <h1>To-DO-List Project</h1>
          <InputButton globalArray={globalArray} setGlobalArray={setGlobalArray} edit={edit} setEdit={setEdit} input={input} setInput={setInput} localStorageAdder={localStorageAdder}></InputButton>
        </div>
        <hr></hr>
        <CardList globalArray={globalArray} editHandler={editHandler} deleteHandler={deleteHandler}></CardList>
      </div>
    </div>
  )
}

export default App