import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SerialNoTextFields extends Component{


  render(){
      let elem = "";

      if(this.props.nameForMinval == 'min_val'){
        elem = <td><input id={id} type="text" name={this.props.nameForMinval} className="textfieldsmall" maxLength="6" onChange={this.props.handleChangeMin} value={this.props.minValue}/></td>
      }
      if(this.props.nameForMaxval == 'max_val'){
        elem = <td><input id={id} type="text" name={this.props.nameForMaxval} className="textfieldsmall" maxLength="6" onChange={this.props.handleChangeMax} value={this.props.maxValue}/></td>
      }
      if(this.props.nameForAllocNo == 'alloc_no'){
        elem =<td><input id={id} type="text" name={this.props.nameForAllocNo} className="textfieldsmall" maxLength="6" onChange={this.props.handleChangeOnAlloc} value={this.props.allocNo}/></td>
      }

    return elem;
  }
}
