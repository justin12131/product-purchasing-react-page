// App.js
import React from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Product Purchasing</h1>
      </header>
      <main className="app-main">
        <MyComponent />
      </main>
      <footer className="app-footer">
        <p>Product Purchasing</p>
      </footer>
    </div>
  );
}

export default App;