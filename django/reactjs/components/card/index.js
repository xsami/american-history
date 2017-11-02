import React from 'react';
import styles from './styles.js';

const Card = ({
    name,
    img,
    config = {},
}) => {
   return (
       <div style={styles.card} className="card">
            <img src={img} alt="Avatar" style={styles.img} />
            <div style={styles.container}>
                <h4><b>{name}</b></h4> 
                <p>Interior Designer</p> 
            </div>
            <br />
        </div>
   );
}
export default Card;