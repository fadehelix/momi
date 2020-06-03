import React, {useState, useEffect} from 'react';

const Table = props => {
  const {data} = props;
  const [tableData, setTableData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  
  useEffect(() => {
    setTableData(data);
    setTableHeaders(Object.keys(data[0]));
  }, [data])

  const formatPhraseContext = (context, phrase)=> {
    return context.replace(new RegExp(phrase, 'i'), `<span style="font-weight: bold">${phrase}</span>`)
  }

  return(
    <table>
          <thead>
            <tr>
              <th>{tableHeaders[0]}</th>
              <th>{tableHeaders[1]}</th>
              <th>{tableHeaders[2]}</th>
            </tr>
          </thead>
          <tbody>
            {!!tableData && tableData.map(row => <tr key={Math.random().toString()}>
              <td>{row[tableHeaders[0]]}</td>
              <td>{row[tableHeaders[1]]}</td>
              <td dangerouslySetInnerHTML={{__html: formatPhraseContext(row[tableHeaders[2]], row[tableHeaders[0]])}}></td>
            </tr>)}
          </tbody>
        </table>
  )
}

export default Table;