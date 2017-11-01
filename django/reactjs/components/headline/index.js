import React, {Component} from "react"

export default class Headline extends Component {
  render() {
    return (
      <h1>{ this.props.children }</h1>
    )
  }
}
