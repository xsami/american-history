import React, { Component } from "react";
import Card from "../../components/card";

import styles from "./styles";

const characters = [{ model: "history.character", pk: 4, fields: { name: "Joaquin Balaguer", profile_image: "djreact/static/images/characters/joaquin-balaguer_mwO3ewm.jpg" } }, { model: "history.character", pk: 5, fields: { name: "Leonel Fernandez", profile_image: "djreact/static/images/characters/leonel-fernandez.jpg" } }, { model: "history.character", pk: 6, fields: { name: "Pedro Santana", profile_image: "djreact/static/images/characters/Pedro_Santana.jpg" } }, { model: "history.character", pk: 7, fields: { name: "Buenaventura B\u00e1ez", profile_image: "djreact/static/images/characters/buenaventura_baez_BQl9Dbj.gif" } }];

export default class Board extends Component {

  getCharacterUrl = (profile_image) => {
    var r = profile_image.split('/');
    return process.env.STATIC_URL + r.splice(2, r.length-1).join('/');
	}
	

	render() {
			return <div style={styles.container}>
          {characters.map((element, key) => {
            return <Card name={element.fields.name} img={this.getCharacterUrl(element.fields.profile_image)} />;
          })}
        </div>;
	}
}