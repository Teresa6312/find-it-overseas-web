import React from 'react'
import Logo from '../../components/logo.component/logo.component';

const AboutPage = ()=>{
    return(
        <div className="about-page-content">
            
            <div className="about-page-content-header">
                Looking for somthing? 
                <br/>
                Let 
                <Logo className="logo-large gold center"/>
                <br/>
                helps you!
            </div>
            <div className="about-page-content-introduction"> If you heard about
                <span className ="about-page-content-introduction-six-degrees__span"
                title='Six degrees of separation is the idea that all people are six, or fewer, social connections away from each other.
                    As a result, a chain of "a friend of a friend" statements can be made to connect any two people in a maximum of six steps.'
                > Six Degrees of Separation</span>
                , you would know how we work.
            </div>
        </div>
    )
}



export default AboutPage;