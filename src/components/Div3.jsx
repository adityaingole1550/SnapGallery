import React, { useState } from 'react'

const Div3 = (e) => {
  const [B1, setB1] = useState(1)
  const [B2, setB2] = useState(2)
  const [B3, setB3] = useState(4)
  const [B4, setB4] = useState(3)
  const [B5, setB5] = useState(5)
  const [B6, setB6] = useState(99)
  const [B7, setB7] = useState(100)
  const [Active, setActive] = useState("B1")
  const [DotBox, setDotBox] = useState(<div className={`h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] flex items-center justify-center ${e.isOn?"text-[#969595]":"text-[#969595]"}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis preview-icon"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></div>)
  const Box99 = <div onClick={()=>setActive("B6")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B6"?"text-white":"")} xl:text-[20px] ${Active == "B6"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""}`}>{B6}</div>
  return (
    <div className="flex justify-center">
      <div className='flex gap-1.5 xl:gap-6 py-3'>
        <div className={`cursor-pointer flex items-center justify-center gap-1 h-[7vw] w-[22vw] xl:h-[3vw] xl:w-[8vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] xl:text-[20px] ${(B1 == 1 && Active == "B1")?"text-[#adacac]":"bg-[#9474e7] text-white"} ${e.isOn?"text-white":""}`} ><div><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>arrow-left-linear</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4M10 18L4 12L10 6"/></svg></div><div>Previous</div></div>
            <div className='flex items-center gap-0.5 xl:gap-4 '>
                <div onClick={()=>setActive("B1")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B1"?"text-white":"")} xl:text-[20px] ${Active == "B1"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""}`}>{B1}</div>
                <div onClick={()=>setActive("B2")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B2"?"text-white":"")} xl:text-[20px] ${Active == "B2"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""}`}>{B2}</div>
                <div onClick={()=>setActive("B3")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B3"?"text-white":"")} xl:text-[20px] ${Active == "B3"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""}`}>{B3}</div>
                <div onClick={()=>setActive("B4")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B4"?"text-white":"")} xl:text-[20px] ${Active == "B4"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""}`}>{B4}</div>
                <div onClick={()=>setActive("B5")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B5"?"text-white":"")} xl:text-[20px] ${Active == "B5"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""}`}>{B5}</div>
                {DotBox}
                <div onClick={()=>setActive("B7")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B7"?"text-white":"")} ${Active == "B7"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""} xl:text-[20px]`}>{B7}</div>
            </div>
        <div onClick={()=>{Active=="B1"?setActive("B2"):(Active=="B2"?setActive("B3"):(Active=="B3"?setActive("B4"):(Active=="B4"?setActive("B5"):(Active=="B5"?(B5 != 98 ?(setB1(B1+1),setB2(B2+1),setB3(B3+1),setB4(B4+1),setB5(B5+1)):setDotBox(Box99)):""))))}} className={`cursor-pointer flex items-center justify-center gap-1 h-[7vw] w-[14vw] xl:h-[3vw] xl:w-[6vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] xl:text-[20px] ${(B7 == 100 && Active == "B7")?"text-[#adacac]":"bg-[#9474e7] text-white"}`}><div>Next</div><div> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>arrow-right-outline-thin</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 12h16"/><path d="m15 7 5 5 -5 5"/></g></svg></div></div>
      </div>
    </div>
  )
}

export default Div3
