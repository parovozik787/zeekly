import { Routes, Route } from 'react-router-dom';
import { Overview } from '../containers/Overview';
import { Default } from '../containers/Default';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/overview" element={<Overview />} />
      <Route path="*" element={<Default />} />
    </Routes>
  );
};

export default AppRoutes;
