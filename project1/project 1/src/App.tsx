import { useState } from 'react';
import words from "./wordList.json";
import [HangmanDrawing] from "./HangmanDrawing";
import [HangmanWord] from "./HangmanWord";
import [keyboard] from "./keyboard";


function App() {
  const [wordToGuess,setWordToGuess] = useState(() => {
 return words[Math.floor(math.random () * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]><[]>
  console.log(wordToGuess)
  return (
    <div 
    style= {{
        maxWidth:"800px",
        display:"flex",
      flexDirection:"column",
      gap:"2rem",
      margin:"0 auto",
      alignItems:"center",
    }}
    >
    <div style ={{fontSize:"2rem",textAlign:"center"}}>
Lose
win
    </div>
    <HangmanDrawing/>
    <HangmanWord/>
    <keyboard/>
    </div>
  )

}

export default App;
