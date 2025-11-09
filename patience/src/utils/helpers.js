// Shuffle an array using Fisher-Yates algorithm
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Convert card value to numeric value
export const getCardValue = (value) => {
  const values = { 'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13 };
  return values[value] || 0;
};

// Get card color (red or black)
export const getCardColor = (suit) => {
  return (suit === 'hearts' || suit === 'diamonds') ? 'red' : 'black';
};

// Check if two cards are of opposite colors
export const areOppositeColors = (card1, card2) => {
  return getCardColor(card1.suit) !== getCardColor(card2.suit);
};

// Format time in minutes and seconds
export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

// Calculate score based on moves and time
export const calculateScore = (moves, timeInSeconds, isWon) => {
  if (!isWon) return 0;
  
  // Base score for winning
  const baseScore = 500;
  
  // Deduct points for moves (more moves = lower score)
  const movesPenalty = Math.min(300, moves * 2);
  
  // Deduct points for time (more time = lower score)
  const timePenalty = Math.min(200, timeInSeconds / 5);
  
  return Math.max(0, Math.floor(baseScore - movesPenalty - timePenalty));
};
