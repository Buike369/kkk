import React ,{useState}from 'react'
import "./styles/home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'
import Navbar from "./navbar"

import {  faPlus,faMinus, faPaperPlane,faVolleyball,faCheckToSlot, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
const Item = () => {

 const card =[ {name:"Chukwubuike k",img:"/img/bgf.svg", course:"Figma To React",time:"Oct 1, 2023", button:"Preview" ,price:"Free",price1:"₦10,000"},{name:"Kingsley C.",img:"/img/bgf.svg",course:"React-Native Tutorials",time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Samuel P.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Paul C.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Joseph P.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Daniel M.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"}]
 const card2 =[ {name:"Kingsley C.",img:"john",project:"Portfolio Project", button:"Preview" ,price:"Free",price1:"₦50,000"},{name:"Kingsley C.",img:"john",project:"Gaming Projects", button:"Preview" ,price:"Free",price1:"₦120,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"}]


  const [show,setShow]= useState(false)
  const [show1,setShow1]= useState(false)
  const [show2,setShow2]= useState(false)
  const [show3,setShow3]= useState(false)
  const [show4,setShow4]= useState(false)
  const [show5,setShow5]= useState(false)
  const [show6,setShow6]= useState(false)
  const [show7,setShow7]= useState(false)

   const drop =()=>{
     setShow(!show)
     setShow1(false)
     setShow2(false)
     setShow3(false)
     setShow4(false)
     setShow5(false)
     setShow6(false)
     setShow7(false)
  }
  const drop1 =()=>{
    setShow(false)
    setShow1(!show1)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(false)
    setShow6(false)
    setShow7(false)
    
  }
  const drop2 =()=>{

    setShow(false)
    setShow1(false)
    setShow2(!show2)
    setShow3(false)
    setShow4(false)
    setShow5(false)
    setShow6(false)
    setShow7(false)
    
  }
  const drop3 =()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(!show3)
    setShow4(false)
    setShow5(false)
    setShow6(false)
    setShow7(false)
  }
  const drop4 =()=>{

    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(!show4)
    setShow5(false)
    setShow6(false)
    setShow7(false)
    
  }
  const drop5 =()=>{
    setShow(false)
    setShow1(false)
    setShow2(false)
    setShow3(false)
    setShow4(false)
    setShow5(!show5)
    setShow6(false)
    setShow7(false)
  }
  const card1 =[ {name:"Matthew O.",img:"/img/gripa.png",course:"HTML/CSS", button:"Preview" ,price:"Free",price1:"₦15,000"},{name:"Philip E.",img:"/img/gripa3.png",course:"JavaScript",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Micheal K.",img:"/img/gripa4.png",course:"React",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Joy M.",img:"/img/gripa5.png",course:"Nodejs",button:"preview",price:"Free",price1:"₦30,000"},{name:"Francisca K.",img:"/img/gripa6.png",course:"MySql",button:'Preview',price:"Free",price1:"₦15,000"},{name:"Emmanuel J.",img:"/img/grip7.png",course:"Python",button:'Preview',price:"Free",price1:"₦25,000"}]
  return (
    <div>
  

<div  className="fareWo" >
      <div className="him"> 
      <div className="Rtme ">
          <div className="Free">
            <div><p className="EarnP">How It Works </p>
            <div className="divUnder"></div></div>
          
          </div>
         

          
            
            

                <div className="goods1">
                  {/* <div className="dsa">daily Savings</div> */}
                    <div className="goods2">
                    <div className="inviteFr goods">Choose a Plan</div>
                    <div></div>
                    <p className="from">Start savings by selecting the plan that best suits your needs</p>
           <div className='betStor ghFi'>
                  
                    <div className='bettors8'>
                    <div className='bettorsDiv monTh1'>
                       <div className="ghFii138"><img src="/img/doll.png" alt=""  /></div>
                        <p className='bettors1' >01</p>
                    </div>
                    <div className="monTh">3.2% charge monthly</div>
                    <div className='AddTip8 ghFii1'><input  type="number" placeholder="$400" className="fis"/></div>
                   <p className='pl'>Lock Duration</p>
                    <div>
                      <div className="dif">
                        <input type="checkbox" placeholder =""  />
                        <label className="saves">Locked Weekly</label>
                      </div>
                       <div className="dif">
                         <input type="checkbox" placeholder ="" />
                        <label className="saves">Locked Monthly</label>
                       </div>
                        <div className="dif">
                           <input type="checkbox" placeholder =""  />
                        <label className="saves">Locked Yearly</label>
                        </div>
                    </div>
                    <div className="SubP">
                      Start Saving
                    </div>
                    </div>
                
                 
                    <div className='bettors8'>
                    <div className='bettorsDiv monTh1'>
                       <div className="ghFii138"><img src="/img/doll.png" alt=""  /></div>
                        <p className='bettors1' >02</p>
                    </div>
                    <div className='AddTip8 ghFii1'>USDT Savings</div>
                   <p className='pl'>Plans</p>
                    <div>
                      <div className="dif">
                        <input type="checkbox" placeholder =""  checked/>
                        <label className="saves">Daily Savings</label>
                      </div>
                       <div className="dif">
                         <input type="checkbox" placeholder =""  checked/>
                        <label className="saves">Monthly Savings</label>
                       </div>
                        {/* <div>
                           <input type="checkbox" placeholder ="" checked />
                        <label className="saves">Yearly Savings</label>
                        </div> */}
                    </div>
                    <div className="SubP">
                      Get Started
                    </div>
                    </div>
               
               
                    <div className='bettors8'>
                    <div className='bettorsDiv monTh1'>
                       <div className="ghFii138"> <img src="/img/doll.png" alt="" /></div>
                        <p className='bettors1' >03</p>
                    </div>
                    <div className='AddTip8 ghFii1'>Item Savings</div>
                <p className='pl'>Plans</p>
                    <div>
                      <div className="dif">
                        <input type="checkbox" placeholder =""  checked/>
                        <label className="saves">Quarterly Savings</label>
                      </div>
                       <div className="dif">
                         <input type="checkbox" placeholder =""  checked/>
                        <label className="saves">Semi Annual Savings</label>
                       </div>
                        <div className="dif">
                           <input type="checkbox" placeholder ="" checked />
                        <label className="saves">Yearly Savings</label>
                        </div>
                    </div>
                    <div className="SubP">
                      Subscribe
                    </div>
                    </div>
               
            </div>
            </div>
            <div className="goods3  goods4"></div>
                 <div className="goods3 goods5"></div>
            </div>


        
   

           
          
           </div>

           {/* <div className="glow glowLeft"></div> */}
            {/* <div className="glow glowRight"></div> */}
           </div> 

      
           </div>
         
    



      <div>

      </div>


    
  
      


      
{/* <div className="CNN"></div> */}
 
     
    

    </div>
  )
}

export default Item