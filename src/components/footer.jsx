import React from 'react'
import "./styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin,faTwitter,faGithub,faTelegram,faYoutube,faFacebook} from "@fortawesome/free-brands-svg-icons"

const footer = () => {
 const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebook,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{ icon:faGithub,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faLinkedin,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faTelegram,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]

  return (
    <div>
        <div className='footerHouse'></div>
        <div className="footerBackgroundColor">
            <div className='padG'>
            <div  className='subEmail'>
                <p className='misOut'>Don't miss out on Fantastic News</p>
                <p className='misOut1'>Subscribe to our newsletter and be the first to receive news.</p>
                <form className='FormPP'>
                    <div>
                        <input type="" placeholder='Enter your Email' className='yourEmail'/>
                        <FontAwesomeIcon icon={faPaperPlane}  className="HomeV" style={{fontSize:"20px"}}/>
                    </div>
                </form>
            </div>
            </div>

        <div>
            <div className='footerW'>
               
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Products</div></li>
                        <li className='pin pin6'><a href="/courses" className='then'>Courses</a></li>
                        <li className='pin pin7'><a href="/project" className='then'>Projects</a></li>
                        <li className='pin  pin6'><a href="/ebook" className='then'>eBooks</a></li>
                        <li className='pin  pin7'><a href="#" className='then'>MBT</a></li>
                        <li className='pin1  pin6'><a href="/" className='then'>Assessments</a></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">About Us</div></li>
                        <li className='pin pin6'><a href="#" className='then'>Our Team</a></li>
                        <li className='pin pin7'><a href="/about" className='then'>About</a></li>
                        <li className='pin  pin6'><a href="/contact" className='then'>Contact Us</a></li>
                        <li className='pin  pin7'><a href="/terms" className='then'>Careers</a></li>
                        <li className='pin1  pin6'><a href="#" className='then'>Press</a></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Legal</div></li>
                        <li className='pin pin6'><a href="/privacy" className='then'>Privacy Policy</a></li>
                        <li className='pin pin7'><a href="/terms" className='then'>Terms & Conditions</a></li>
                        <li className='pin  pin6'><a href="#" className='then'>Cookie Policy</a></li>
                        <li className='pin  pin7'><a href="#" className='then'>Disclaimer</a></li>
                      
                    </ul>
                </div>
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Resources</div></li>
                        <li className='pin pin6'><a href="/" className='then'>Blog</a></li>
                        <li className='pin pin7'><a href="#" className='then'>Become an Author</a></li>
                        <li className='pin  pin6'><a href="#" className='then'>Become an Affiliate</a></li>
                        <li className='pin  pin7'><a href="#" className='then'>Pricing</a></li>
                        <li className='pin1  pin6'><a href="/privacy" className='then'></a></li>
                    </ul>
                </div>
            </div>
        </div>
         <div className='MobileT12'>
            <div className='MobileT1'>
                <div className='MobileT'>
                    <div className="R1">About Us</div>
                    <a href="/" className='mnm mmm2'>About</a>
                    <a href="/contact" className='mnm mmm2'> Contact Us </a>
                    <a href="#" className='mnm mmm2'>Careers</a>
                     <a href="#" className='mnm mmm2'>Press</a>
                </div>
                <div className='MobileT'>
                    <div className="R1 R2">Products</div>
                    <a href="/about" className='mnm mmm1 '> Courses</a>
                    <a href="/terms" className='mnm mmm1'>Projects</a>
                    <a href="/privacy" className='mnm mmm1'>eBooks</a>
                    <a href="/privacy" className='mnm mmm1'>Assessments</a>
                </div>
            </div>
        </div>
         <div className='MobileT12'>
            <div className='MobileT1'>
                <div className='MobileT'>
                    <div className="R1">Legal</div>
                    <a href="/" className='mnm mmm2'>Privacy Policy </a>
                    <a href="/contact" className='mnm mmm2'>Terms & Conditions</a>
                    <a href="#" className='mnm mmm2'>Disclaimer</a>
                                        <a href="#" className='mnm mmm2'>Cookie Policy</a>
                </div>
                <div className='MobileT'>
                    <div className="R1 R2">Resources</div>
                    <a href="/about" className='mnm mmm1 '>Blog</a>
                    <a href="/terms" className='mnm mmm1'>Become an Author</a>
                    <a href="/privacy" className='mnm mmm1'>Become an Affiliate</a>
                    <a href="/privacy" className='mnm mmm1'>Pricing</a>
                </div>
            </div>
        </div>
        <div className='boy'>
        <div className='footerMainDiv'>
          
            <div className='footerName' >
                © 2023 Marat Technology Projects. All Rights Reserved
            </div>
            <div style={{width:"20%"}}>
                <div className="hot">
                {socialLink.map((app,id)=>(
                <ul key={id} className="hot">
                    <li><a href={app.link} target="_blank"><FontAwesomeIcon icon={app.icon}  className="iconHoverColor" style={{fontSize:"20px"}} /></a></li>
                </ul>
                ))}
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default footer