import React from 'react'
import GameBoard from './components/GameBoard'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Patience: Classic Card Solitaire</h1>
      </header>
      <main>
        <GameBoard />
      </main>
      <footer className="app-footer">
        <p>© 2025 Patience Card Game</p>
      </footer>
    </div>
  )
}

export default App
