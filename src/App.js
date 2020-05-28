import React, {useState, useEffect} from 'react';
import { Button, Drawer, Layout, Spin } from 'antd';
import Table from './components/Table/Table';
import './App.scss';

import Papa from 'papaparse';

function App() {
  const { Header, Footer, Content } = Layout;
  const [sheetData, setSheetData] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);

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
  }, [])

  const handleShowDrawer = () => {
    setShowDrawer(true);
  }
  const handleHideDrawer = () => {
    setShowDrawer(false);
  }




  const updateData = (result) => {
    setSheetData(result.data)
  }

  return (
    <Layout className="App">
      <Header className="AppHeader">
        <h1 className="AppName">Momi</h1>
      </Header>
      <Content className="Content">
        <Button onClick={handleShowDrawer}>Display all spreadsheet data</Button>
        <Drawer
          title="All spreadsheet data"
          closable={true}
          onClose={handleHideDrawer}
          visible={showDrawer}
          placement="right"
          width="500"
        >
          {!!sheetData.length ? <Table data={sheetData}/> : <Spin tip="Loading data..."/>}
        </Drawer>
      </Content>
      <Footer>&copy; 2020 by fadehelix</Footer>
    </Layout>
  );
}

export default App;
