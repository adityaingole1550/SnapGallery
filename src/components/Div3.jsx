import React, { useEffect, useState } from 'react'

const Div3 = (e) => {
  const [B1, setB1] = useState(1)
  const [B2, setB2] = useState(2)
  const [B3, setB3] = useState(3)
  const [B4, setB4] = useState(4)
  const [B5, setB5] = useState(5)
  const [IsDotBoxOn, setIsDotBoxOn] = useState(true)
  const [IsDotBoxOn2, setIsDotBoxOn2] = useState(false)
  const DotSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis preview-icon"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
  const [B6, setB6] = useState(DotSVG)
  const [B7, setB7] = useState(100)
  const [Active, setActive] = useState("B1")

  useEffect(()=>{
    e.setPage(e.Page+1);
    e.setData([])
  },[Active])

  return (
    <div className="flex justify-center">
      <div className='flex gap-1.5 xl:gap-6 py-3'>
        <div onClick={()=>{(Active=="B7" && IsDotBoxOn == false)?setActive("B6"):(Active =="B6"?setActive("B5"):(Active =="B5"?setActive("B4"):(Active=="B4"?setActive("B3"):((Active=="B3" && B3 == 3) ?(setB2(2),setIsDotBoxOn2(false),setB6(DotSVG),setIsDotBoxOn(true),setActive("B2"),setB7(100)):(Active=="B2"?setActive("B1"):(Active=="B3" && B3 != 3 && IsDotBoxOn2 == true)?(setB3(B3-1),setB4(B4-1),setB5(B5-1),setB6(B6-1),setB7(B7-1)):((Active=="B7" && IsDotBoxOn == true)?(setB2(DotSVG),setB1(1),setB3(96),setB4(97),setB5(98),setIsDotBoxOn(false),setIsDotBoxOn2(true),setB6(99),setActive("B6")):((Active=="B3" && IsDotBoxOn2 == false)?(setActive("B2")):((Active=="B1" && B1 != 1)?(setB1(B1-1),setB2(B2-1),setB3(B3-1),setB4(B4-1),setB5(B5-1)):""))))))))}} className={`cursor-pointer flex items-center justify-center gap-1 h-[7vw] w-[22vw] xl:h-[3vw] xl:w-[8vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] xl:text-[20px] ${(B1 == 1 && Active == "B1")?"text-[#adacac]":"bg-[#9474e7] text-white"} ${e.isOn?"text-white":""}`} ><div><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>arrow-left-linear</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4M10 18L4 12L10 6"/></svg></div><div>Previous</div></div>
            <div className='flex items-center gap-0.5 xl:gap-4 '>
                <div onClick={()=>setActive("B1")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B1"?"text-white":"")} xl:text-[20px] ${Active == "B1"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""}`}>{B1}</div>
                <div onClick={()=>IsDotBoxOn2?"":setActive("B2")} className={`${IsDotBoxOn2?"":"cursor-pointer"} h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] ${IsDotBoxOn2?"":"border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw]"}  flex items-center justify-center ${e.isOn?("text-white"):(Active=="B2"?"text-white":"")} xl:text-[20px] ${IsDotBoxOn2 == false?(Active == "B2"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""):""}`}>{B2}</div>
                <div onClick={()=>setActive("B3")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B3"?"text-white":"")} xl:text-[20px] ${Active == "B3"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""}`}>{B3}</div>
                <div onClick={()=>setActive("B4")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B4"?"text-white":"")} xl:text-[20px] ${Active == "B4"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""}`}>{B4}</div>
                <div onClick={()=>setActive("B5")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B5"?"text-white":"")} xl:text-[20px] ${Active == "B5"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""}`}>{B5}</div>
                <div onClick={()=>IsDotBoxOn?"":setActive("B6")} className={`${IsDotBoxOn?"":"cursor-pointer"} h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] ${IsDotBoxOn?"":"border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw]"}  flex items-center justify-center ${e.isOn?("text-white"):(Active=="B6"?"text-white":"")} xl:text-[20px] ${Active == "B6"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""}`}>{B6}</div>
                <div onClick={()=>setActive("B7")} className={`cursor-pointer h-[7vw] w-[7vw] xl:h-[3vw] xl:w-[3vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] flex items-center justify-center ${e.isOn?("text-white"):(Active=="B7"?"text-white":"")} ${Active == "B7"?(e.isOn?"bg-[#7143db]":"bg-[#9474e7]"):""} xl:text-[20px]`}>{B7}</div>
            </div>
        <div onClick={()=>{(Active=="B1" && IsDotBoxOn2 == false)?setActive("B2"):(Active=="B2"?setActive("B3"):(Active=="B3"?setActive("B4"):(Active=="B4"?setActive("B5"):(Active=="B5"?((B5 != 98 && IsDotBoxOn == true) ?(setB1(B1+1),setB2(B2+1),setB3(B3+1),setB4(B4+1),setB5(B5+1)):(IsDotBoxOn == true?(setActive("B6"),setIsDotBoxOn(false),setIsDotBoxOn2(true),setB6(99),setB1(1),setB2(DotSVG),setIsDotBoxOn2(true)):(setActive("B6")))):(Active =="B6"?(setActive("B7")):((Active=="B1" && IsDotBoxOn2 == true)?(setIsDotBoxOn2(false),setB2(2),setB3(3),setB4(4),setB5(5),setB6(DotSVG),setB7(100),setActive("B2"),setIsDotBoxOn(true)):((Active=="B7" && B7 != 100)?(setB3(B3+1),setB4(B4+1),setB5(B5+1),setB6(B6+1),setB7(B7+1)):"")))))))}} className={`cursor-pointer flex items-center justify-center gap-1 h-[7vw] w-[14vw] xl:h-[3vw] xl:w-[6vw] border-[#e0dede] border-[.3vw] rounded-[1vw] xl:border-[.1vw] xl:rounded-[0.7vw] xl:text-[20px] ${(B7 == 100 && Active == "B7")?"text-[#adacac]":"bg-[#9474e7] text-white"}`}><div>Next</div><div> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title>arrow-right-outline-thin</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 12h16"/><path d="m15 7 5 5 -5 5"/></g></svg></div></div>
      </div>
    </div>
  )
}

export default Div3
