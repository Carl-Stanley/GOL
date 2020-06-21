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
        
            <DropdownButton
              title="Grid Size"              
              id="size-menu"
              onSelect={this.handleSelect}
            >                      
              <Dropdown.Item className="btnitm" eventKey="1" href="#/eventKey-1">100x100</Dropdown.Item>
              <Dropdown.Item className="btnitm" eventKey="2" href="#/eventKey-2">70x70</Dropdown.Item>
              <Dropdown.Item className="btnitm" eventKey="3" href="#/eventKey-3">50x40</Dropdown.Item>

            </DropdownButton>
        
          </ButtonToolbar>
        
        </div>
      );
    }
  }

  export default Buttons;
  