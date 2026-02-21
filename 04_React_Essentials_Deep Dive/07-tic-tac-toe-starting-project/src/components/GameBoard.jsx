import Player from "./Player";
import { useState } from 'react';


// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];



export default function GameBoard({onSelectSquare,board}) {


    // lifted up
//     let gameBoard = initialGameBoard;

//   for (const turn of turns) {
//     const { square, player } = turn;
//     const { row, col } = square;

//     gameBoard[row][col] = player;
//   }

    //lifting this state up  so the info can be used by other component as well
    // const [gameBoard,setGameBoard]=useState(initialGameBoard);


    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
    //         updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return(
        <ol id="game-board">
            {
                board.map((row,rowIndex)=>(
                    <li key={rowIndex}>
                        <ol>
                            {row.map((PlayerSymbol,colIndex)=>(
                                <li key={colIndex}>
                                    <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={PlayerSymbol!==null}>{PlayerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))
            }
        </ol>
    );
}