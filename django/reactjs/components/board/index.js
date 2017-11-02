import React, { Component } from "react";
import Card from "../../components/card";

import styles from "./styles";

export default class Board extends Component {

    getCharacterUrl = (profile_image) => {
    var r = profile_image.split('/');
    return process.env.STATIC_URL + r.splice(2, r.length-1).join('/');
  }

	render() {
			return (
				<div style={styles.container}>
					{/*
							this.props.characters.map((element, key) => {
									return <Card name={element.fields.name} img={this.getCharacterUrl(element.fields.profile_image)} />;
							})
					*/} 
					</div>
			);
	}
}