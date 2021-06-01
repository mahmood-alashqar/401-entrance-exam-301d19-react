import React, { Component } from 'react'

export class ViewAllBackedData extends Component {


  render() {

    {
      this.props.data.map(data1 => {
        return (<>
          <button type="submit" f value="Submit">Save to Fav</button>
          <h2 >{data1.charachterName}</h2>
          <h4 >{data1.gender}</h4>
          <img src={data1.image} alt='' />
          <img src={data1.psiPowers.img} />
        </>})
    }


  }
}




export default ViewAllBackedData;
