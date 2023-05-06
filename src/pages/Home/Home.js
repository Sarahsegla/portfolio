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
                <h2 style={{  fontFamily: 'Bebas Neue', float: 'left', padding: '10px', paddingRight: '20px' }}>Front-End Web Developer</h2>
            </div>
            <article>
                <div className="about" style={{float: 'left'}}>
                Hi, welcome to my portfolio page. I'm Web developer that is committed and has a positive work attitude. Experienced working alone and  in group collaborations.
         Dedicated to improving my skills and learning more to  deliver feature rich websites.</div>
            </article>

          
        </Grid>
        <Grid item xs={8}>
        
          <img src={Me} alt="me" style={{paddingLeft: '30px', paddingTop: '20px'}}/>
          
        </Grid>
      </Grid>
            
           

            
            
           </Box>
        </div>
    )
}

export default Home;