import React, { useState } from 'react'
import "../css/Board.css"
import Cell from './Cell'
const BOARD_INIT = [0, 0, 0, 0, 0, 0, 0, 0, 0];//-1:X 0:empty 1:O

const Board = ({ currentPlayer, setCurrentPlayer,setIsGameActive,setMenuMessage }) => {

    const [cellGrid, setCellGrid] = useState(BOARD_INIT) 
    
    function checkWinCondition(grid){
        //check rows
        if(grid[0]+grid[1]+grid[2] === 3 || grid[0]+grid[1]+grid[2] === -3){return true;}
        if(grid[3]+grid[4]+grid[5] === 3 || grid[3]+grid[4]+grid[5] === -3){return true;}
        if(grid[6]+grid[7]+grid[8] === 3 || grid[6]+grid[7]+grid[8] === -3){return true;}
        //check columns
        if(grid[0]+grid[3]+grid[6] === 3 || grid[0]+grid[3]+grid[6] === -3){return true;}
        if(grid[1]+grid[4]+grid[7] === 3 || grid[1]+grid[4]+grid[7] === -3){return true;}
        if(grid[2]+grid[5]+grid[8] === 3 || grid[2]+grid[5]+grid[8] === -3){return true;}
        //check diagonals
        if(grid[0]+grid[4]+grid[8] === 3 || grid[0]+grid[4]+grid[8] === -3){return true;}
        if(grid[2]+grid[4]+grid[6] === 3 || grid[2]+grid[4]+grid[6] === -3){return true;}
        //check all cells filled
        return false; //no winning condition
    }
    function checkAllTilesFilled(grid){
        if(!grid.some(cell=>cell===0)){
            return true;
        }
        else{
            return false;
        }
    }
    function handleClick(index) {
        if (cellGrid[index] !== 0) {
            return;
        }
        else {
            setCellGrid((oldGrid) => {
                let newGrid = [];
                oldGrid.forEach((oldItem, oldIndex) => {
                    if (index === oldIndex) {
                        newGrid.push(currentPlayer === 1 ? -1 : 1)
                    }
                    else {
                        newGrid.push(oldItem);
                    }
                })
                if (checkWinCondition(newGrid)){
                    setMenuMessage({title:"Oyun Bitti!",message:`${currentPlayer}. oyuncu kazandı!`});
                    setIsGameActive(false);
                    
                }
                if (checkAllTilesFilled(newGrid)){
                    setMenuMessage({title:"Oyun Bitti!",message:`Kazanan yok.`});
                    setIsGameActive(false);
                    
                }
                return newGrid;
            })
            setCurrentPlayer((oldPlayer)=>(oldPlayer===1?2:1))
        }
    }

    return (
        <div className="board">
            {/* LINE VISUALS NOT IN LAYOUT*/}
            <div className='v-line --left'></div>
            <div className='v-line --right'></div>
            <div className='h-line --top'></div>
            <div className='h-line --bottom'></div>
            {/* CLICKABLE CELLS*/}
            <div className="board-grid">
                {cellGrid.map((cell, index) =>
                (<div onClick={() => { handleClick(index)}} key={"cell-" + index}>
                    <Cell cellValue={cell} />
                </div>))}
            </div>
        </div>
    )
}

export default Board