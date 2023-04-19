import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StudentTable from './StudentTable'
import StudentForm from './StudentForm'


function App() {
  return (
    <>
      <StudentForm/>
      <StudentTable />
    </>
  )
}

export default App
