import React from "react";

// Each little box. 
class Gridbox extends React.Component {
    selectBox = () => {
      this.props.selectBox(this.props.row, this.props.col);
    };
  
    render() {
      return (
        <div
          className={this.props.boxClass}
          id={this.props.id}
          onClick={this.selectBox}
        />
      );
    }
  }

  export default Gridbox;
