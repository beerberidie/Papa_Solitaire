import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { shuffleArray } from '../utils/helpers';
import '../styles/Deck.css';

const Deck = ({ onDeckReady }) => {
  const [deck, setDeck] = useState([]);
  
  // Initialize and shuffle the deck
  useEffect(() => {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    // Create a new deck
    const newDeck = [];
    suits.forEach(suit => {
      values.forEach(value => {
        newDeck.push({
          id: `${suit}-${value}`,
          suit,
          value,
          faceUp: false
        });
      });
    });
    
    // Shuffle the deck
    const shuffledDeck = shuffleArray([...newDeck]);
    setDeck(shuffledDeck);
    
    // Notify parent component that deck is ready
    onDeckReady && onDeckReady(shuffledDeck);
  }, [onDeckReady]);
  
  // Reshuffle the deck
  const reshuffleDeck = () => {
    const reshuffled = shuffleArray([...deck].map(card => ({ ...card, faceUp: false })));
    setDeck(reshuffled);
    onDeckReady && onDeckReady(reshuffled);
    return reshuffled;
  };
  
  // Deal cards for initial tableau setup
  const dealTableau = () => {
    let currentDeck = [...deck];
    const tableau = Array(7).fill().map(() => []);
    
    // Deal cards to tableau piles
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j <= i; j++) {
        const card = { ...currentDeck.pop(), faceUp: j === i };
        tableau[i].push(card);
      }
    }
    
    // Update the deck
    setDeck(currentDeck);
    
    return {
      tableau,
      remainingDeck: currentDeck
    };
  };
  
  // Draw cards from the deck
  const drawCards = (count = 1) => {
    if (deck.length === 0) return { drawnCards: [], remainingDeck: [] };
    
    const drawnCards = [];
    const currentDeck = [...deck];
    
    for (let i = 0; i < count && currentDeck.length > 0; i++) {
      const card = { ...currentDeck.pop(), faceUp: true };
      drawnCards.push(card);
    }
    
    setDeck(currentDeck);
    
    return {
      drawnCards,
      remainingDeck: currentDeck
    };
  };
  
  return {
    deck,
    reshuffleDeck,
    dealTableau,
    drawCards
  };
};

Deck.propTypes = {
  onDeckReady: PropTypes.func
};

export default Deck;
