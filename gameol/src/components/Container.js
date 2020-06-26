import React from "react";
import Buttons from './Buttons';
import Grid from './Grid';
import '../style/index.css';
 
function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

// Mail Container class.
class Container extends React.Component {
    constructor() {
      super();
      this.speed = 100;
      this.rows = 25;
      this.cols = 25;
  
      this.state = {
        generation: 0,
        gridFull: Array(this.rows)
          .fill()
          .map(() => Array(this.cols).fill(false))
      };
    }
  
    componentDidMount() {
      this.seed();
      this.playButton();
    }
  
    selectBox = (row, col) => {
      const gridFull = this.state.gridFull.map((rowArr, rowIdx) =>
        rowArr.map(
          (item, colIdx) => (rowIdx === row && colIdx === col ? !item : item)
        )
      );
      this.setState(() => ({ gridFull }));
    };
  
    seed = () => {
      const gridFull = this.state.gridFull.map(rowArr =>
        rowArr.map(() => Math.floor(Math.random() * 4) === 1)
      );
      this.setState(() => ({ gridFull }));
    };
  
    playButton = () => {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(this.play, this.speed);
    };
  
    pauseButton = () => {
      clearInterval(this.intervalId);
    };
  
    slow = () => {
      this.speed = 1000;
      this.playButton();
    };
  
    fast = () => {
      this.speed = 100;
      this.playButton();
    };
  
    clear = () => {
      const gridFull = Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false));
  
      this.setState(() => ({
        gridFull,
        generation: 0
      }));
    };
     
    // Determine grid size. 
    gridSize = size => {
      switch (size) {
        case "1":
          this.cols = 100;
          this.rows = 50;
          break;
        case "2":
          this.cols = 50;
          this.rows = 50;
          break;
        default:
          this.cols = 25;
          this.rows = 25;
      }
      this.clear();
    };
  
    play = () => {
      
      let g = this.state.gridFull;
      
      let g2 = arrayClone(this.state.gridFull);

  // Grid check on whether or not cell is alive or dead. 
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          let count = 0;
          if (i > 0) if (g[i - 1][j]) count++;
          if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
          if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
          if (j < this.cols - 1) if (g[i][j + 1]) count++;
          if (j > 0) if (g[i][j - 1]) count++;
          if (i < this.rows - 1) if (g[i + 1][j]) count++;
          if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
          if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1]) count++;
          if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
          if (!g[i][j] && count === 3) g2[i][j] = true;
        }
      }
      this.setState(prevState => ({
        gridFull: g2,
        generation: prevState.generation + 1
      }));
    };
  
    render() {
      return (
        <div>
          <h1><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a></h1>
          <h2>Generations: {this.state.generation}</h2>
          <Buttons
            playButton={this.playButton}
            pauseButton={this.pauseButton}
            slow={this.slow}
            fast={this.fast}
            clear={this.clear}
            seed={this.seed}
            gridSize={this.gridSize}
          />
          <Grid
            gridFull={this.state.gridFull}
            rows={this.rows}
            cols={this.cols}
            selectBox={this.selectBox}
          />
          
        </div>
      );
    }
  }

  export default Container;

