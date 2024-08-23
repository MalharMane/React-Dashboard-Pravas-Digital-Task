  /*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './componentstemp/Sidebar';
import Header from './componentstemp/Header';
import Dashboard from './componentstemp/Dashboard';
import Page1 from './componentstemp/Page1';
import Page2 from './componentstemp/Page2';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="content">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

*/


 /*

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './componentstemp/Sidebar';
import Header from './componentstemp/Header';
import Dashboard from './componentstemp/Dashboard';
import Page1 from './componentstemp/Page1';
import Page2 from './componentstemp/Page2';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const handleAddData = (value) => {
    setData((prevData) => [...prevData, value]);
  };

  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="content">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard onAddData={handleAddData} />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 data={data} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
*/


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './componentstemp/Sidebar';
import Header from './componentstemp/Header';
import Dashboard from './componentstemp/Dashboard';
import Page1 from './componentstemp/Page1';
import Page2 from './componentstemp/Page2';
import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="content">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
