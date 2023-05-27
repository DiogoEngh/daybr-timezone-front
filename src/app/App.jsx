import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Init from './views/init'
import navigations from './navigations'
import Template from './template'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Init />}/>
        {navigations.map((elem, index) => {
          return <Route path={elem.path} key={index} element={<Template component={elem.component}/>}/>
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
