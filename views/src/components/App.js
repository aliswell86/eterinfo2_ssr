import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import {
  SamplePage, ItemsPage
} from 'pages';
// import { Helmet } from "react-helmet";

// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-123320555-1');

// const logPageView = () => {
//   ReactGA.set({ page: window.location.pathname });
//   ReactGA.pageview(window.location.pathname);
//   return null;  
// }

class App extends Component {
  render() {
    return (
      <div>
        {/* <Helmet>
          <title>Sample Page</title>
        </Helmet> */}
        {/* <Route path="/" component={logPageView} /> */}
        <Routes>
          <Route path="/" element={<SamplePage/>} />
          <Route path="/wp" element={<ItemsPage/>} />
        </Routes>
      </div>
    );
  }
}

export default App;