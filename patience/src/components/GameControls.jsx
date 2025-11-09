import React from 'react';
import PropTypes from 'prop-types';
import '../styles/GameControls.css';

const GameControls = ({
  onUndo,
  onRedo,
  onAutoComplete,
  onNewGame,
  onSettings,
  onPause,
  canUndo,
  canRedo,
  canAutoComplete,
  isPaused,
  gameInProgress
}) => {
  return (
    <div className="game-controls">
      <button
        className="control-button"
        onClick={onUndo}
        disabled={!canUndo}
        title="Undo last move"
      >
        <span className="control-icon">↩</span>
        <span className="control-label">Undo</span>
      </button>

      <button
        className="control-button"
        onClick={onRedo}
        disabled={!canRedo}
        title="Redo move"
      >
        <span className="control-icon">↪</span>
        <span className="control-label">Redo</span>
      </button>

      <button
        className="control-button"
        onClick={onAutoComplete}
        disabled={!canAutoComplete}
        title="Auto-complete game"
      >
        <span className="control-icon">✓</span>
        <span className="control-label">Auto-Complete</span>
      </button>

      <button
        className="control-button"
        onClick={onNewGame}
        title="Start a new game"
      >
        <span className="control-icon">🔄</span>
        <span className="control-label">New Game</span>
      </button>

      <button
        className="control-button"
        onClick={onPause}
        disabled={!gameInProgress}
        title={isPaused ? "Resume game" : "Pause game"}
      >
        <span className="control-icon">{isPaused ? "▶" : "⏸"}</span>
        <span className="control-label">{isPaused ? "Resume" : "Pause"}</span>
      </button>

      <button
        className="control-button"
        onClick={onSettings}
        title="Game settings"
      >
        <span className="control-icon">⚙</span>
        <span className="control-label">Settings</span>
      </button>
    </div>
  );
};

GameControls.propTypes = {
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
  onAutoComplete: PropTypes.func.isRequired,
  onNewGame: PropTypes.func.isRequired,
  onSettings: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  canAutoComplete: PropTypes.bool.isRequired,
  isPaused: PropTypes.bool.isRequired,
  gameInProgress: PropTypes.bool.isRequired
};

export default GameControls;
