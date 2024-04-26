import React ,{useState}from 'react'
import "./styles/home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'
import Navbar from "./navbar"
import "./styles/modal.css"

import {  faPlus,faMinus, faPaperPlane,faVolleyball,faCheckToSlot, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
const Home = () => {

 const card =[ {name:"Chukwubuike k",img:"/img/bgf.svg", course:"Figma To React",time:"Oct 1, 2023", button:"Preview" ,price:"Free",price1:"₦10,000"},{name:"Kingsley C.",img:"/img/bgf.svg",course:"React-Native Tutorials",time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Samuel P.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Paul C.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Joseph P.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Daniel M.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"}]
 const card2 =[ {name:"Kingsley C.",img:"john",project:"Portfolio Project", button:"Preview" ,price:"Free",price1:"₦50,000"},{name:"Kingsley C.",img:"john",project:"Gaming Projects", button:"Preview" ,price:"Free",price1:"₦120,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"}]
 const [modal,setModal] = useState(false)


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
      <div className="navbarMainDiv" >
        {/* <Navbar/> */}
        {/* <div style={{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",background:"rgb(0 0 0 / 74%)"}}></div> */}
       <div className="heroDiv">
         {/* <p className="ExploreJ">Empower everyone with  <span className='ExploreJ exploreC'>the superpower</span> of coding </p> */}
                  <p className="ExploreJ"><span className='Ern'>Save</span> and <span className='Ern'>Grow</span> Your <div className="waviy Ern"> <span>E</span><span>a</span>r<span><span>n</span><span>i</span><span>n</span><span>g</span><span>s</span></span></div> </p>
        <div className="headerDivFle addHeaderDivFile">
           <div className="headerDivFle1">
             {/* <p className="Explore">Empower everyone with <span className='Explore exploreC'>the superpower</span> of coding</p> */}
              <p className="Explore"><span className='Ern'>Save</span> and <span className='Ern'>Grow</span> Your <span className='Ern'><span className="waviy"> <span >E</span><span>a</span>r<span><span>n</span><span>i</span><span>n</span><span>g</span><span>s</span></span></span></span> </p>
             <p className="Explore1">Secure a brighter financial future with us</p>
            <div className='CoursesB'> <button className="Explore2">Explore Courses</button></div>
             <p className="Explore3">Join <span className="millionPP">1.7 Million</span> traders,students,business owners and start saving.</p>
           

           </div>
           <div className="headerDivFle2">
                 <div className='imgFileDiv'> <img src="/img/do.webp" alt="Ailt" className="headerDivFle21"/></div>
               
           </div>
        </div>

      </div>


            </div>

<div  className="fareWo" >
      <div className="him"> 
      <div className="Rtme ">
          <div className="Free">
            <div><p className="EarnP">How It Works </p>
            <div className="divUnder"></div></div>
          
          </div>
         

          
                  <div className="goods1">
                    <div className="goods2">
                    <div className="inviteFr goods liom">Get Started with Easiest Steps</div>
                    <p className="proF">
Publish an article as a creator.</p>
           <div className='betStor ghFi likl'>
                  
                    <div className='bettors wanNy'>
                    <div className='bettorsDiv'>
                       <div className="ghFii19 cvcvcnc"><img src="/img/doop.png" alt=""  className="withTyb"/></div>
                        <p className='bettors1' >01</p>
                    </div>
                    <div className='AddTip ghFii1 amGet'>Sign Up With  Us</div>
                    <p className='itWell ghFii12'>Sign up with us to gain access and begin your journey towards saving.</p>
                    </div>
                
                 
                    <div className='bettors wanNy'>
                    <div className='bettorsDiv'>
                       <div className="ghFii19 cvcvcnc"><img src="/img/doop1.png" alt="" className="withTyb"  /></div>
                        <p className='bettors1' >02</p>
                    </div>
                    <div className='AddTip ghFii1 amGet'>Choose a Plan</div>
                    <p className='itWell ghFii12'>Select a plan and subscribe to start saving. All savings are on your dashboard.</p>
                    </div>
               
               
                    <div className='bettors wanNy'>
                    <div className='bettorsDiv'>
                       <div className="ghFii19 cvcvcnc"> <img src="/img/doop2.png" alt="" className="withTyb"/></div>
                        <p className='bettors1' >03</p>
                    </div>
                    <div className='AddTip ghFii1 amGet'>Deposit</div>
                    <p className='itWell ghFii12'>When you  deposit, you unlock ur wallet saving.</p>
                    </div>
               
            </div>
            </div>
            <div className="goods3  goods4"></div>
                 <div className="goods3 goods5"></div>
            </div>
            

                <div className="goods1">
                    <div className="goods2">
                    <div className="inviteFr goods">Choose a Plan</div>
                    <div></div>
                    <p className="from">Start savings by selecting the plan that best suits your needs</p>
                   
           <div className='betStor ghFi'>
                    <div className='bettors8'>
                    <div className='bettorsDiv'>
                       <div className="ghFii138"><img src="/img/doll.png" alt=""  /></div>
                        <p className='bettors1' >01</p>
                    </div>
                    <div className='AddTip8 ghFii1'>Money Savings</div>
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
                        <div className="dif">
                           <input type="checkbox" placeholder ="" checked />
                        <label className="saves">Yearly Savings</label>
                        </div>
                    </div>
                    <div className="SubP">
                     
    
      <div on>
        Subscribe
      </div>
   
    
  
 
                    </div>
                    </div>
                
                 
                    <div className='bettors8'>
                    <div className='bettorsDiv'>
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
                    <div className='bettorsDiv'>
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


                   <div className="roto">
                        <div style={{padding:"0 5px"}}>
          <div id="Faqc" data-aos="fade-up" data-aos-duration="3000"
             data-aos-easing="linear">
            <div className="firstTom" data-aos="fade-down" data-aos-duration="3000"
             data-aos-easing="linear" style={{color:"#fff",textAlign:"center", marginBottom:"10px"}}>FAQ</div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop}>
                <span> How do I join and subscribe to the  affiliate program?</span>{" "}
                <span className="IconSpace">
                {show? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show ? (
                  <div>
                    <div className="Qac"></div>
                <p className="ILOVEK">
                  {" "}
                 To join our affiliate program, Register as a user, go to your dashboard and subscribe by unlocking your affiliate wallet.{" "}
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop1}>
                <span>How much is the subscription?</span>
                <span className="IconSpace">
                {show1? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show1 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 Affiliate subscription is flexible. You can either subscribe for a monthly plan or yearly plan.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop2}>
                <span>  when I subscribe will I get daily tips? </span>
                <span className="IconSpace">
                  {show2? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show2 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
               No, Affiliate subscription only give you access to your affiliate dashboard and enable you to earn from your referrals when they unlock their affiliate wallet or subscribe to any Tipsters membership
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop3}>
                <span> what's my percentage share when when I refer an affiliate member? </span>
                <span className="IconSpace">
                  {show3? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show3 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                You can earn upto 75% when your referrals unlock their affiliate wallet and 20% each time they subscribe to any tipster membership.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop4}>
                <span>  If my referral renew their affiliate Subscription will I still earn? </span>
                <span className="IconSpace">
                  {show4? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show4 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                  Yes, you will continue to earn from any of your referral that renews his affiliate subscription.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="homeChange">
              <div className="HowFarBro" onClick={drop5}>
                <span>when I refer  users who buys membership subscription from  tipsters  without unlocking his affiliate wallet will I earn from their purchase? </span>
                <span className="IconSpace">
                  {show5? <FontAwesomeIcon icon={faMinus} className="PlusIcon" />:<FontAwesomeIcon icon={faPlus} className="PlusIcon" />}
                </span>
              </div>
              {show5 ? (
                <div>
                  <div className="Qac"></div>
                <p className="ILOVEK">
                 Yes, You earn upto 20% of their membership subscription to any tipster.
                </p>
                </div>
              ) : (
                ""
              )}
            </div>

          </div>
          </div>
          </div>
   

           
          
           </div>

           {/* <div className="glow glowLeft"></div> */}
            {/* <div className="glow glowRight"></div> */}
           </div> 

      
           </div>
         
    



      <div>

      </div>


    
  
      


      
{/* <div className="CNN"></div> */}
 
   {!modal ? 
   <details>
     <div className="details-modal-overlay"></div>
    <div className="details-modal">
      <div className="details-modal-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" />
        </svg>
      </div>
      <div className="details-modal-title">
        <h1>My details modal</h1>
      </div>
      <div className="details-modal-content">
        <p>
          You can click the X in the corner or click the overlay to close this modal.
          Something like this could be useful as a nice way to show additional information,
          but that's about as far as I would take it. It's just a nice way of styling the details element.
        </p>
      </div>
    </div>
    </details> : " " }  
    
  {/* <div>modal</div> */}
    </div>
  )
}

export default Home