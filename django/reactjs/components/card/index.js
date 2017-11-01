import React from 'react';
import styles from './styles.js';

const Card = ({
    name,
    img,
    config = {},
}) => {
   return (
        <div style={styles.card}>
            <h3 style={styles.title}>{name}</h3>
            <div style={styles.img}>
                <img src={img} />
            </div>
        </div>
   );
}
export default Card;