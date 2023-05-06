import React from "react";
import "./styles.css";
import Me from "../../image/me.jpg";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



function Home () {
    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          
          <div className="header">
                <h1 className="name" style={{  fontFamily: 'Bebas Neue', float: 'left', padding: '10px', paddingRight: '20px' }}>Sarah Segla</h1>
                <h2 style={{  fontFamily: 'Bebas Neue', float: 'left', paddingLeft: '10px', paddingRight: '20px' }}>Front-End Web Developer</h2>
            </div>
            <article>
                <h3 className="about" style={{float: 'left', paddingLeft: '10px', fontFamily: 'Comic Neue'}}>
                Hi, welcome to my portfolio page. I'm web developer that is committed and has a positive work attitude. Experienced working alone and  in group collaborations.
         Dedicated to improving my skills and learning more to  deliver feature rich websites. I have experience working with HTML5, CSS3, JavaScript,
         jQuery, React.js Node and application programming interfaces.
         </h3>
            </article>
            <div className='MoreInfo' style={{float: 'left', paddingLeft: '10px', fontFamily: 'Bebas Neue'}}><h4>Experience: 1+</h4>
                <h4>Location: South Yorkshire, UK</h4>
            </div>
        </Grid>
        <Grid item xs={8}>
        
          <img className="pic" src={Me} alt="me" style={{paddingLeft: '30px', paddingTop: '20px'}}/>
          
        </Grid>
      </Grid>
            
           

            
            
           </Box>
        </div>
    )
}

export default Home;