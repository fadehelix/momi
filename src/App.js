import React, {useState, useEffect, useCallback} from 'react';
import { Button, Drawer, Layout, Spin, Space} from 'antd';
import Papa from 'papaparse';

import Table from './components/Table/Table';
import Exercise from './components/Exercise/Exercise';

import logoImage from './logo.png';

import './App.scss';
import './ant-design.overrides.scss';

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
        <div className="AppLogo">
          <img src={logoImage} alt="App logo" className="AppLogo__image"/>
        </div>
        <h1 className="AppName">Phraser</h1>
        <p className="AppSlogan">English - Polish scrum dictionary </p>
      </Header>
      {!sheetData.length ? 
      <Content className="Content">
        <Spin tip="Loading data..."/>
      </Content> 
      : 
      <Content className="Content">
        <Space direction="vertical">
          <Exercise phrase={randomPhrase} refresh={handleRefreshExercise}/>
          <Button onClick={handleShowDrawer}>Show dictionary</Button>
        </Space>
        <Drawer
          title="Dictionary"
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
