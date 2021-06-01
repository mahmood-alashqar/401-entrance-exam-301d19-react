import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
export class MyFav extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      data: [],
      url: ''

    }
    componentDidMount = async () => {
      const req = await axios.get(`${this.state.url}/favorite`);
      this.setState = {
        data: req,
        characterName: '',
        gender: '',
        power: ''
      }
    }
  }
  deleteCharacter = async (slug) => {
    const req = await axios.delete(`${THIS.state.url}/favorite/${slug}`);
    this.setState = {
      data: req,
    }
  }
  updateCharacter = (e) => this.setState({
    characterName: e.target.name.value,
    gender: e.target.gender.value,
    power: e.target.powerName.value,
  })
  updateItINMyApi = async (e) => {
    e.preventDefault();
    const req = await axios.put(`${this.state.url}/favorite/${slug}`, {
      charachterName: this.state.charachterName,
      gender: this.state.gender,
      power: this.state.power
    });
    this.setState({ data: req });
  }

  render() {
    return (
      <div>
        {this.props.data.map(data1 => {
        <button type="submit"  value="Submit">delete</button>
        <button type="submit"  value="Submit">update</button>
          <h2 >{data1.charachterName}</h2>
          <h4 >{data1.gender}</h4>
         <ul>
           {data1.psiPowers.name}
         </ul>
      </div>})
}}}

export default MyFav;
