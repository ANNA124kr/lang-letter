import React, { useState } from 'react';
import { vocabulary, Item } from '../../constants/dictionary/dictionaryMock';
import { Box, Button } from '@mui/material';


const getRandomItem = (array: Item[]): Item => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const Dashboard: React.FC = () => {
  const [randomItem, setRandomItem] = useState<Item>(getRandomItem(vocabulary));

  const handleClick = () => {
    setRandomItem(getRandomItem(vocabulary));
  };

  return (
    <Box>
      <h2>{randomItem.word}</h2>
      <p>{randomItem.translation}</p>
      <Button variant='outlined' onClick={handleClick} > Next Word </Button>
    </Box>
  );
};

export default Dashboard;