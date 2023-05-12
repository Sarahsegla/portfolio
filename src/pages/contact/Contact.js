import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import './styles.css';
import Email from "../../components/email/email";



function Contact () {
    return (
        <div>
            <div className='contact' style={{ textAlign: 'center' }}>
        <p>Contact Me:</p><MailIcon/>
        <p><a id="contact1" style={{ textDecoration: 'none', color: 'black' }} href={"https://www.linkedin.com/in/sarah-segla-6788a4203/"} >Linkedin</a></p>
        <p>Github:<a id="contact1" style={{ textDecoration: 'none', color: 'black' }} href={"https://github.com/Sarahsegla"}> Sarahsegla</a></p>
        <p><a id="contact1" style={{ textDecoration: 'none', color: 'black' }} href={"mailto:ablavisarahsegla@gmail.com"}>Ablavisarahsegla@gmail.com</a></p>
        <Email />
        </div>
        </div>
    )
}

export default Contact;