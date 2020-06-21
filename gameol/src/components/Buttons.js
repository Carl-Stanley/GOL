import React from "react";
import { ButtonToolbar, Dropdown, DropdownButton} from "react-bootstrap";
 

// The buttons and Grid size Dropdown. 
class Buttons extends React.Component {
    handleSelect = eventKey => {
      this.props.gridSize(eventKey);
    };
  
    render() {
      return (
        <div className="center">
          <ButtonToolbar>
            <button className="btn btn-default" onClick={this.props.playButton}>
              Play
            </button>
            <button className="btn btn-default" onClick={this.props.pauseButton}>
              Pause
            </button>
            <button className="btn btn-default" onClick={this.props.clear}>
              Clear
            </button>
            <button className="btn btn-default" onClick={this.props.slow}>
              Slow
            </button>
            <button className="btn btn-default" onClick={this.props.fast}>
              Fast
            </button>
            <button className="btn btn-default" onClick={this.props.seed}>
              Seed
            </button>
            <div display="inline-block">
            <DropdownButton
            title="Grid Size"
            id="size-menu"
            drop="down"
            onSelect={this.handleSelect}
          >
            <Dropdown.Item  eventKey="1"> [  100x50  ] </Dropdown.Item >
            <Dropdown.Item  eventKey="2"> [  50x50 ] </Dropdown.Item >
            <Dropdown.Item  eventKey="3"> [  25x25  ] </Dropdown.Item >
          </DropdownButton>
          </div>
          </ButtonToolbar>
        
        </div>
      );
    }
  }

  export default Buttons;
  