import React from 'react';
import styles from './styles.js';

const Card = ({
    name,
    img,
    config = {},
}) => {
   return (
       <div style={styles.card} className="card col-sm-4">
            <img src={img} alt="Avatar" style={styles.img} />
            <div style={styles.container}>
                <h4><b>{name}</b></h4> 
                <p>Presidente</p> 
            </div>
        </div>
   );
}
export default Card;