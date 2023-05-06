import React from "react";
import { Paper, Button } from '@mui/material';
import "./styles.css";

function Item(props)
{
    return (
        <Paper>
            <div className="mySlides" style={{textAlign: 'center'}}>
            <img src={props.item.image} alt={props.item.description} style={{width: '700', height: '500', paddingTop: '10px' }}/>
           
            </div>

            <Button variant="text" className="LinkButton">
            <a href={props.item.url} style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue', paddingLeft: '30px', fontSize: '40px' }} >{props.item.description}</a>
            </Button>
            <Button variant="text" className="GitButton">
            <a href={props.item.GitUrl} style={{ textDecoration: 'none', color: 'black', fontFamily: 'Bebas Neue', paddingLeft: '1000px', fontSize: '40px' }}>GitHub Repository </a>
            </Button>
        </Paper>
    )
}

export default Item;