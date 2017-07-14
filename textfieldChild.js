import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SerialNoTextFields extends Component{


  render(){
    return(
      <tr>
          <th scope="row" id={this.props.rowID}>{this.props.rowTitle}</th>
        <td>
            <input type="number"  id={this.props.minID} name={this.props.nameForMinval} className="textfieldsmall" max="6" onkeypress={this.props.onkeypress} onChange={this.props.handleChange} value={this.props.minValue}/>
            <span name={this.props.minID} className="hideError"></span>
        </td>
        <td>
            <input type="number"   id={this.props.maxID} name={this.props.nameForMaxval} className="textfieldsmall" max="6" onChange={this.props.handleChange} value={this.props.maxValue}/>
            <span name={this.props.maxID} className="hideError"></span>
        </td>
        <td>
            <input type="number"  id={this.props.allocID} name={this.props.nameForAllocNo} className="textfieldsmall" max="6" onChange={this.props.handleChange} value={this.props.allocNo}/>
            <span name={this.props.allocID} className="hideError"></span>
        </td>
      </tr>

    );



  }
}
