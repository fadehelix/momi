import React, {useState, useEffect, useCallback} from 'react';
import { Button, Drawer, Layout, Spin, Space} from 'antd';
import Table from './components/Table/Table';
import './App.scss';
import './ant-design.overrides.scss';

import Papa from 'papaparse';
import Exercise from './components/Exercise/Exercise';

const getRandomArrayIndexWithRange = (min, max) => Math.ceil(Math.random() * (max - 1- min));
const getRandomPhrase = (sheetData) => {
  const randomIndex = getRandomArrayIndexWithRange(0, sheetData.length);
  return {
    en: sheetData[randomIndex]['EN'],
    pl: sheetData[randomIndex]['PL'],
    context: sheetData[randomIndex]['Context'],
  }
};

function App() {
  const { Header, Footer, Content } = Layout;
  const [sheetData, setSheetData] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [randomPhrase, setRandomPhrase] = useState(undefined);

  const updateData = useCallback(result => {
    setSheetData(result.data);
    setRandomPhrase(getRandomPhrase(result.data));
  }, [])

  useEffect(() => {
    const source = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSCT-qGizC85dIjMYIt6EAxlAT1Z-7J5ktgc9RgWOxapCYArCPvi5TgoqaJ5AL0c2q0b3gN-v2yGcVS/pub?output=csv'
    try {
      return Papa.parse(source, {
        download: true,
        header: true,
        complete: updateData
      })
    } catch(error) {
      console.error('Something was wrong. Cannot load spreadsheet ;(', error)
    }
  }, [updateData])

  const handleShowDrawer = () => {
    setShowDrawer(true);
  }
  const handleHideDrawer = () => {
    setShowDrawer(false);
  }

  const handleRefreshExercise = () => {
    setRandomPhrase(getRandomPhrase(sheetData));
  }

  return (
    <Layout className="App">
      <Header className="AppHeader">
        <h1 className="AppName">Momi</h1>
      </Header>
      {!sheetData.length ? 
      <Content className="Content">
        <Spin tip="Loading data..."/>
      </Content> 
      : 
      <Content className="Content">
        <Space direction="vertical">
          <Exercise phrase={randomPhrase} />
          <Space >
            <Button onClick={handleRefreshExercise} >Get Random Phrase</Button>
            <Button onClick={handleShowDrawer}>Display all spreadsheet data</Button>
          </Space>
        </Space>
        <Drawer
          title="All spreadsheet data"
          closable={true}
          onClose={handleHideDrawer}
          visible={showDrawer}
          placement="right"
          width="500"
        >
          <Table data={sheetData}/>
        </Drawer>
      </Content>}
      <Footer>&copy; 2020 by fadehelix</Footer>
    </Layout>
  );
}

export default App;
