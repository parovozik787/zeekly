import { BrowserRouter } from 'react-router-dom';
import { Flex } from 'antd';

import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './routes/AppRoutes';

import './assets/styles/globals.scss';

function App() {
  return (
    <BrowserRouter>
      <Flex>
        <Sidebar />
        <AppRoutes />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
