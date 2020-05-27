import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';

import Papa from 'papaparse';

function App() {
  const [sheetData, setSheetData] = useState([]);
  const [sheetHeaders, setSheetHeaders] = useState([]);

  useEffect(() => {
    const source = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSCT-qGizC85dIjMYIt6EAxlAT1Z-7J5ktgc9RgWOxapCYArCPvi5TgoqaJ5AL0c2q0b3gN-v2yGcVS/pub?output=csv'
    try {
      return Papa.parse(source, {
        download: true,
        header: true,
        complete: updateData
      })
    } catch(error) {
      console.error('Parse error :(', error)
    }
  }, [])

  const updateData = (result) => {
    setSheetData(result.data)
    setSheetHeaders(Object.keys(result.data[0]));
  }

// 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Momi</h1>
      </header>
      <main>
        {!!sheetData && <table>
          <caption>Sheet content preview</caption>
          <thead>
            <tr>
        <th>{sheetHeaders[0]}</th>
        <th>{sheetHeaders[1]}</th>
        <th>{sheetHeaders[2]}</th>
            </tr>
          </thead>
          <tbody>
        {!!sheetData && sheetData.map(row => <tr key={Math.random().toString()}>
          <td>{row[sheetHeaders[0]]}</td>
          <td>{row[sheetHeaders[1]]}</td>
          <td>{row[sheetHeaders[2]]}</td>
        </tr>)}
          </tbody>
        </table>}
      </main>
    </div>
  );
}

export default App;
