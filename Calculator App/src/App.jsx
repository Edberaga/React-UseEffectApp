import './App.css'
import {calculate} from './calculate'
import Calculator from './components/Calculator'

function App() {

  return (
  <main>
    <Calculator/>
    {calculate(5, 0, '+')}
  </main>
  )
}

export default App
