import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Iamhobin from './Jwahobin.jsx'
import BigText from './BigText.jsx'

const Hi = [1,1,1,1,1,1]

const ManyHobin = () => {
  const items = []
  for (let i = 0; i < 5; i++) {
    items.push(<Iamhobin/>)
  }
  return items
}

const studentList = [
  "좌호빈", "조성주", "한유찬"
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {studentList.map((item, index) => (

      <BigText name={item} age={index}/>
))}
  </StrictMode>
)
