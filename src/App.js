import React from 'react';

import Navbar from "./Components/common/Navigation/Navbar";
import Page1 from './Components/Page1/page1';
import Page2 from './Components/Page2/page2';
import Page3 from './Components/Page3/page3';
import Page4 from './Components/Page4/page4';
import Page5 from './Components/Page5/page5';
import Page6 from './Components/Page6/page6';
import Page7 from './Components/Page7/page7';
import Footer from './Components/common/Footer/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Footer />
    </div>
  );
}

export default App;
