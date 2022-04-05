import React, { useEffect, useState } from 'react';
import logo from './Logo-Sortables2.svg'
import './App.css';
import { NavbarTitles, PoemPuzzle } from './Types';
import PoemPuzzles from './mockData.json'; // brings in as an array
import { idText, isTemplateExpression } from 'typescript';
import Navbar from './Navbar';
import Puzzle from './Puzzle';

console.log(PoemPuzzles) // check that json came in...

function App() {

const [displayData, setDisplayData ] = useState<PoemPuzzle>();

const [currentPoemId, setCurrentPoemId ] = useState<string>("1");

// an array of objects for navbar
const  poemTitles:NavbarTitles[] = PoemPuzzles.map((poempuzzle)=> {
  return {title:poempuzzle.title, id:poempuzzle.id}
}) 
console.log(poemTitles) //check that array was constructed

useEffect(() => {
  // return here to deal with poemTitles and navbar
  const currentPoem:any = PoemPuzzles.find((element) => {
    return element.id === currentPoemId;
    })
  setDisplayData(currentPoem);
},[currentPoemId])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
      <Navbar
      setCurrentPoemId={setCurrentPoemId}
      poemTitles={poemTitles}
      />
      <Puzzle 
      singlepoem={displayData}
      />

        <p>
          Brad, edit <code>src/App.tsx</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="http://puzzlepoesis.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Puzzle Poetry
        </a>
      </header>
    </div>
  );
}

export default App;
