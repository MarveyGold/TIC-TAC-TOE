'use client';
import { useState } from 'react';
import styles from '../page.module.css';
export default function Main() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    function handleClick(index) {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index]= isNext ? "X" : "O";
        setBoard(newBoard);
        setIsNext(isNext);
        
        const gameWinner = calculateWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        }
    };
   
    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
        function resetGame() {
            setBoard(Array(9).fill(null));
            setIsNext(true);
            
        }


    return(
        
        <>
        <span> <button className={styles.tic} onClick={handleClick(0)} >{board[0]} </button> <button className={styles.tic} onClick={handleClick(1)}>{board[1]}</button> <button className={styles.tic} onClick={handleClick(2)}>{board[2]}</button></span>
        <span> <button className={styles.tic} onClick={handleClick(3)}>{board[3]}</button> <button className={styles.tic} onClick={handleClick(4)}>{board[4]}</button> <button className={styles.tic} onClick={handleClick(5)}>{board[5]}</button></span>
        <span> <button className={styles.tic} onClick={handleClick(6)}>{board[6]}</button> <button className={styles.tic} onClick={handleClick(7)}>{board[7]}</button> <button className={styles.tic} onClick={handleClick(8)}>{board[8]}</button></span>
        </>
    )
}