import React, { useState } from 'react'
import Div1 from './components/Div1'
import Div2 from './components/Div2';
import Try from './components/Try';
import Div3 from './components/Div3';


const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [Page, setPage] = useState(1)
  return (
    <div className={`min-h-screen w-full ${isOn ?"bg-[#08101d]":"bg-white"} pb-4`}>
      <Div1 isOn={isOn} setIsOn={setIsOn}/>
      <div className='h-[0.9px] w-full bg-[#bcbcbc]'></div>
      <Try Page={Page} setPage={setPage}/>
      <Div3 isOn={isOn} setIsOn={setIsOn} Page={Page} setPage={setPage}/>
    </div>
  )
}

export default App
