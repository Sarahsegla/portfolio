import React from "react";
import "./styles.css";
import Me from "../../image/me.jpg";


function Home () {
    return (
        <div>
            <div className="header">
                <h1 className="name" style={{  fontFamily: 'Bebas Neue', float: 'left', padding: '10px', paddingRight: '20px' }}>Sarah Segla</h1>
            </div>
           <img src={Me} alt="me" style={{paddingLeft: '300px', paddingTop: '20px'}}/>

            
            <article>
                <div className="about" style={{float: 'left'}}>
                Hi, welcome to my portfolio page. I'm Web developer that is committed and has a positive work attitude. Experienced working alone and  in group collaborations.
         Dedicated to improving my skills and learning more to  deliver feature rich websites.</div>
            </article>
           
        </div>
    )
}

export default Home;