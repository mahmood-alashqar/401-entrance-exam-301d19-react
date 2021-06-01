// no need for usfel comment i think the name will explain everything
import React, { Component } from 'react'
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewAllBackedData from './components/ViewAllBackedData';
import MyFav from './components/MyFav';
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
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/401-entrance-exam-301d19-react/frontend/src/components/ViewAllBackedData.js'>
              <ViewAllBackedData data={this.state.myAPIdata} />
            </Route>
            <Route path='/401-entrance-exam-301d19-react/frontend/src/components/MyFav.js'>

            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App
