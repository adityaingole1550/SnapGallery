import React, { useState } from 'react'

const DIv1 = (e) => {
  return (
    <div className='px-4 py-[4vh] flex items-center justify-between b-amber-500 h-[6vw] xl:h-[3vw]'>
      <div className=' flex items-center justify-center gap-1'>
        <div className='h-full'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="" viewBox="0 0 24 24"><title>gallery-linear</title><g fill="none" stroke="#7143db" stroke-linecap="round" stroke-width="1.3"><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"/><circle cx="16" cy="8" r="2"/><path d="M2 12.5001L3.75159 10.9675C4.66286 10.1702 6.03628 10.2159 6.89249 11.0721L11.1822 15.3618C11.8694 16.0491 12.9512 16.1428 13.7464 15.5839L14.0446 15.3744C15.1888 14.5702 16.7369 14.6634 17.7765 15.599L21 18.5001"/></g></svg></div>
        <div className='flex h-full'><div className={`font-semibold font-[Arial] text-2xl ${ (e.isOn)?"text-white":"text-black"}`}>Snap</div><div className='font-semibold text-2xl font-[Arial] text-[#7143db]'>Gallery</div></div>
      </div>
      <div className='flex items-center gap-1.5'>
        <div>{!e.isOn?<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><title>light-mode-outline-rounded</title><path fill="currentColor" d="M14.125 14.125Q15 13.25 15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15t2.125-.875m-5.663 1.413Q7 14.075 7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17t-3.537-1.463M2 13q-.425 0-.712-.288T1 12t.288-.712T2 11h2q.425 0 .713.288T5 12t-.288.713T4 13zm18 0q-.425 0-.712-.288T19 12t.288-.712T20 11h2q.425 0 .713.288T23 12t-.288.713T22 13zm-8.712-8.287Q11 4.425 11 4V2q0-.425.288-.712T12 1t.713.288T13 2v2q0 .425-.288.713T12 5t-.712-.288m0 18Q11 22.426 11 22v-2q0-.425.288-.712T12 19t.713.288T13 20v2q0 .425-.288.713T12 23t-.712-.288M5.65 7.05L4.575 6q-.3-.275-.288-.7t.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7t-.275.7t-.687.288t-.713-.288M18 19.425l-1.05-1.075q-.275-.3-.275-.712t.275-.688q.275-.3.688-.287t.712.287L19.425 18q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M16.95 7.05q-.3-.275-.288-.687t.288-.713L18 4.575q.275-.3.7-.288t.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275t-.7-.275M4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.712-.275t.688.275q.3.275.288.688t-.288.712L6 19.425q-.275.3-.7.288t-.725-.288M12 12"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><title>dark-mode-outline</title><path fill="white" d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"/></svg>}</div>
        <div>
          <button onClick={()=>e.setIsOn(!e.isOn)} className={`w-14 h-7 rounded-full flex items-center p-1 transition-colors ${
        e.isOn ? "bg-[#7143db]" : "bg-gray-300"
      }`}><span className={`h-5 w-5 rounded-full bg-white shadow-md transform transition-transform ${e.isOn? "translate-x-7":"translate-x-0"}`}/></button></div>
      </div>
      
    </div>
  )
}

export default DIv1
