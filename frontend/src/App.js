// no need for usfel comment i think the name will explain everything
import React, { Component } from 'react'
import axios from "axios";
import ViewAllBackeddata from './components/ViewAllBackeddata';
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myAPIdata: [],
      myAPIurl: '',

    }
  };
  componentDidCatch = async () => {
    const comeingData = await axios.get(`${this.state.myAPIurl}/get-characters`);
    this.setState = {
      myAPIdata: comeingData,
    }
  }
  render() {
    return (
      <div>
        <ViewAllBackeddata data={this.state.myAPIdata} />

      </div>
    )
  }
}

export default App
