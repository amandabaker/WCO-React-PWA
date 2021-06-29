import React from 'react';
import Titlebar from './Titlebar';
import MainContent from './MainContent';

function App() {
  registerServiceWorker();
  return (
    <div className="App">
      <Titlebar></Titlebar>
      <MainContent></MainContent>
    </div>
  );
}

const registerServiceWorker = async () => {
  try {
    await navigator.serviceWorker.register('./sw.js', { scope: '/'});
    console.log('Service worker registered');
  } catch (e) {
    console.log(`Registration failed: ${e}`);
  }
}

export default App;
