
// import React from 'react'
// import AhadComp from './AhadComp'

// function App() {
//   return (
//     <><div className="bg-red-500">App111111111111111111111111111111111</div>
//     <AhadComp/> 
//     </>
    
  
//   )
// }

// export default App

import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (winner || board[i]) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    const currentWinner = calculateWinner(newBoard);
    if (currentWinner) {
      setWinner(currentWinner);
      setShowModal(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setShowModal(false);
  };

  const renderSquare = (i) => {
    return (
      <button
        className="w-20 h-20 border border-gray-500 bg-white text-3xl font-bold"
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </button>
    );
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4 text-3xl font-bold">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <div key={i}>{renderSquare(i)}</div>
          ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-2xl font-bold mb-4">{`Winner: ${winner}`}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={resetGame}
            >
              New Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
