import React, { useState } from 'react';
import logo from './Logo-Sortables2.svg'
import './App.css';
import { PoemPuzzle } from './Types';
// import * as PoemPuzzles from './mockData.JSON'; // Error: TS2307
import { idText, isTemplateExpression } from 'typescript';

var PoemPuzzles = require('./mockData.JSON') // imports JSON file?
const poems = Object.keys(PoemPuzzles) // convert to an array? (Is already an array?)

// // // testing map function -- not sure JSON coming in right
// // But this doesn't seem to work either
// const poems = [
//   { id: 1, title: "Cobbing", text: "wan do tree fear fife seeks siphon eat neighing den elephan twirl" },
//   { id: 2, title: "Naylor", text: "Hero, hero, hero Hero, hero... run! Hero, run hero. Hero run run! Run, hero hero Run, hero, run! Run run hero Run run run!" }
// ]

// FOR HOMEWORK: Display mock data on the App Level 
// Create a variable that is a PoemPuzzle array, should match the type

function App() {

const [displayData, setDisplayData ] = useState<PoemPuzzle>();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
        
        <div className="puzzpoemlist">
          {poems.map((poem) => (
            <li>
              {poem}
            </li>
          ))}
          </div>
  
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
