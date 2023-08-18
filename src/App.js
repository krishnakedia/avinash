import React from 'react';
import './App.css';
import Class2 from './component/class2/Class2';
//  import <function_name> from <path>
import Header from './component/header/Header';

const App = () => {
  // We have created a Js variable where we have declared group of Id,text
  const cg = [
    { id: 'q', text: 'Home' },
    { id: 'q1', text: 'About us' },
    { id: 'q2', text: 'testemoinal' },
    { id: 'q3', text: 'contact us' },
  ]

const addNewClass2 = () => {
  cg.push(Class2);
  console.log(cg);
}

  return (
    // we have pass the variable cg to header component
    <>
      <Class2 onAddClasss2={addNewClass2}  />
      <Header avi={cg} />
    </>
  );
}

export default App;
