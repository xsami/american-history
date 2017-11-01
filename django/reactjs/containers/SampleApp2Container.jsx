import React from "react"
import Headline from "../components/Headline"

export default class SampleApp2Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Sample App Two!</Headline>
          </div>
        </div>
      </div>
    )
  }
}
