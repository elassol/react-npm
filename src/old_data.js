// List for the three filters
  var recipientData = [

  {value: 'him', text: 'For him'},
  {value: 'her', text: 'For her'},
  {value: 'kids', text: 'For a little one or teenager'}
  ];
  var relationData = {
  kids: [
  { text:  'Newborn', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-little-ones-and-teens/newborn' },
  { text:  'Under 5', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-little-ones-and-teens/under-5' },
  { text:  'Over 5', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-little-ones-and-teens/over-5' },
  { text:  'A teenager', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-little-ones-and-teens/teenagers' }
  ],
  her: [
  { text:  'Mum', value: 'mum' },
  { text:  'Partner', value: 'partnerher' },
  { text:  'Grandmother', value: 'grandmother' },
  { text:  'Friend', value: 'friendher' },
  { text:  'Sister', value: 'sister' },
  { text:  'Auntie', value: 'aunt' }
  ],
  him: [
  { text:  'Dad', value: 'dad' },
  { text:  'Brother', value: 'brother' },
  { text:  'Partner', value: 'partner' },
  { text:  'Friend', value: 'friend' },
  { text:  'Uncle', value: 'uncle' },
  { text:  'Grandfather', value: 'grandfather' }

  ]
  };

  var likesData = {

  mum: [
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/style' },
  { text: 'A Foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/foodie' },
  { text: 'Into music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/music-lover' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/traveller' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/pet-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/drinks-connoisseur' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/book-lover' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/craft-lover' },
  { text: 'sentimental', value: 'https://www.notonthehighstreet.com/themes/capturing-memories' },
  { text: 'sporty', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/sports-fan' }
  ],
  partnerher: [
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/style' },
  { text: 'A foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/foodie' },
  { text: 'Into music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/music-lover' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/traveller' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/pet-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/drinks-connoisseur' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/book-lover' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/craft-lover' },
  { text: 'sentimental', value: 'https://www.notonthehighstreet.com/themes/capturing-memories' },
  { text: 'sporty', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/sports-fan' }
  ],
  grandmother: [
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/style' },
  { text: 'A foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/foodie' },
  { text: 'Into music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/music-lover' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/traveller' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/pet-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/drinks-connoisseur' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/book-lover' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/craft-lover' },
  { text: 'sentimental', value: 'https://www.notonthehighstreet.com/themes/capturing-memories' },
  { text: 'sporty', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/sports-fan' }
  ],
  friendher: [
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/style' },
  { text: 'A foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/foodie' },
  { text: 'Into music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/music-lover' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/traveller' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/pet-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/drinks-connoisseur' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/book-lover' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/craft-lover' },
  { text: 'sentimental', value: 'https://www.notonthehighstreet.com/themes/capturing-memories' },
  { text: 'My best friend', value: 'https://www.notonthehighstreet.com/themes/for-your-bestest-of-friends' }
  ],
  sister: [
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/style' },
  { text: 'A foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/foodie' },
  { text: 'Into music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/music-lover' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/traveller' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/pet-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/drinks-connoisseur' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/book-lover' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/craft-lover' },
  { text: 'sentimental', value: 'https://www.notonthehighstreet.com/themes/capturing-memories' },
  { text: 'sporty', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/sports-fan' }
  ],
  aunt: [
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/style' },
  { text: 'A foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/foodie' },
  { text: 'Into music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/music-lover' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/traveller' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/pet-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/drinks-connoisseur' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/book-lover' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/craft-lover' },
  { text: 'sentimental', value: 'https://www.notonthehighstreet.com/themes/capturing-memories' },
  { text: 'sporty', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/sports-fan' }
  ],
  dad: [
  { text: 'A foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
  { text: 'Sporty', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
  { text: 'Into Music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
  { text: 'A wonderful man', value: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }

  ],
  partner: [
  { text: 'A foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
  { text: 'Sporty', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
  { text: 'Into Music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
  { text: 'A wonderful man', value: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }
  ],
  grandfather: [
  { text: 'A foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
  { text: 'Sporty', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
  { text: 'Into Music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
  { text: 'A wonderful man', value: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }
  ],
  brother: [
  { text: 'A foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
  { text: 'Sporty', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
  { text: 'Into Music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
  { text: 'A wonderful man', value: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }
  ],
  friend: [
  { text: 'A foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
  { text: 'Sporty', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
  { text: 'Into Music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
  { text: 'A wonderful man', value: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }
  ],
  uncle: [
  { text: 'A foodie', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
  { text: 'Sporty', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
  { text: 'Into Music', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
  { text: 'A Drinks Connoisseur', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
  { text: 'A wonderful man', value: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
  { text: 'A traveller', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
  { text: 'Hands-on', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
  { text: 'Super stylish', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
  { text: 'A bookworm', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
  { text: 'A pet lover', value: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }
  ]
  };
