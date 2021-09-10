import { React, Component } from "react";
import HornedBeast from "./HornedBeast";
import beastData from '../data.json'

class Main extends Component {
  render() {
    return (
      <>
        {
          beastData.map(item => {
          return <HornedBeast
            keyword={item.keyword}
            image_url={item.image_url}
            title={item.title}
            description={item.description}
            horns={item.horns} 
            handleOpen={this.props.handleOpen}
        />
        })
        }
      </>
    )
  }
}

export default Main;