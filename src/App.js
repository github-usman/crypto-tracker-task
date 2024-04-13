import React, { Suspense } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Loading from './components/loading/Loading';
import HomePage from './page/HomePage';
// Lazy load components
// const Lazyfavorouties = React.lazy(() => import('./pages/favorouties'));


const App = () => {

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/favorouties" element={<Lazyfavorouties />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;