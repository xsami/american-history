import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import ReduxSweetAlert, { swal, close } from "react-redux-sweetalert";
import "sweetalert/dist/sweetalert.css";

import Card from "../../components/card";

import styles from "./styles";

const characters = [
  {
    model: "history.character",
    pk: 4,
    fields: {
      name: "Fotor Ipsum",
      profile_image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png"
    }
  },
  {
    model: "history.character",
    pk: 5,
    fields: {
      name: "Lorem Pilor",
      profile_image: "https://image.flaticon.com/teams/slug/freepik.jpg"
    }
  },
];

class Board extends Component {
  getCharacterUrl = profile_image => {
    var r = profile_image.split("/");
    return process.env.STATIC_URL + r.splice(2, r.length - 1).join("/");
  };
  
  static propTypes = {
    swal: PropTypes.func.isRequired
  };

  render() {
    return <div style={styles.container}>
        <div className="row">
          {characters.map((element, key) => {
            return <Card key={element.pk} name={element.fields.name} img={element.fields.profile_image} />;
                /* img={this.getCharacterUrl(element.fields.profile_image)} */
          })}
        </div>
          <button className="btn btn-default" onClick={() => this.props.swal("Good job!", "You clicked the button!", "success")}>
            Iniciar
          </button>
          <ReduxSweetAlert />
      </div>;
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(null, {
  swal
})(Board);
