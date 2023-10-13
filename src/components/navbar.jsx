
import React,{useState} from 'react'
import "./styles/header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faSearch} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const tr = window.location.pathname;

   const [feedBack,setFeedBack]=useState("")
   const navbarItem = [{link:"/courses",text:"Courses"},{link:"/ebook",text:"eBook"},{link:"/blog",text:"Blog"},{link:"/project",text:"projects"},{ link:"/pricing",text:"pricing"}]

    window.onscroll =()=>{
        scrollF()
      }

      const scrollF =()=>{
          if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setFeedBack('subCap')
          }else{
            setFeedBack(' ')
          }
      }
  return (

    <div >
    <div className={` "header" ${feedBack}`}>
      <div className="Navbar">

            <div style={{width:"20%"}}><a href="/" className="Brand">Marat</a></div>
            {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password")  ? "":
            <div style={{width:"40%"}}>
        <div className="nacBar">
            {navbarItem.map((app,id)=>(
          <ul className="NavbarUl" >
            <li  key={id}><a href={app.link} className="navbar1_link">{app.text}</a></li>
    
          </ul>
          ))}
        </div>
        </div>
        }

        {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password") ? "" :
        <div style={{width:"15%"}}>
           <ul className="NavbarUl">
           {/* <li><FontAwesomeIcon icon={faSearch}  className=""/> Search</li>  */}
           {/* <li><button className='NowB'>ON</button></li> */}
           <li><a href="/register" className="navbar1_link">Log In</a></li>
           {/* <li><a href="/register" className="navbar1_link ">Join for free <FontAwesomeIcon icon={faArrowRight}  className=""/></a></li> */}
           </ul>
        </div>
        }
      </div>


     
         

    </div>
    </div>
  )
}

export default Header