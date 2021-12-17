import React,  { useState } from 'react';
import './App.css';
import PageOne from './components/PageOne';
// import PageTwo from './components/PageTwo';
// import PageThree from './components/PageThree';

function App() {

  const [route, setRoute] = useState('PageOne')
  const [component, setComponent] = useState();
  const onRouteChange = (route) => {
    //No Code Splitting
    // setRoute(route)
    //Code Splitting
    if(route==='PageOne') {
      setRoute(route)
    } else if (route==='PageTwo') {
      //Import returns a promise.
      import('./components/PageTwo').then((PageTwo) => {
        setRoute(route);
        setComponent(PageTwo.default);
      })
    } else if (route === 'PageThree') {
      import('./components/PageThree').then((PageThree) => {
        setRoute(route);
        setComponent(PageThree.default);
      })
    }
  }

  if(route === 'PageOne') {
    return <PageOne onRouteChange={onRouteChange} />
  } else {
    return <component onRouteChange={onRouteChange} />
  }
}

export default App;
