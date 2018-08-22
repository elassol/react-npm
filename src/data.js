const data = [
  { name: 'him', value: 'for him', url: '', edits: [
      { name: 'dad', value: 'dad', url: '', edits: [
        { name: 'a foodie', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
        { name: 'sporty', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
        { name: 'into usic', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
        { name: 'a drinks connoisseur', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
        { name: 'a wonderful man', url: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
        { name: 'a traveller', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
        { name: 'hands-on', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
        { name: 'super stylish', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
        { name: 'a bookworm', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
        { name: 'a pet lover', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }
      ] },
      { name: 'brother', value: 'brother', url: '', edits: [
        { name: 'a foodie', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
        { name: 'Sporty', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
        { name: 'Into Music', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
        { name: 'A Drinks Connoisseur', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
        { name: 'A wonderful man', url: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
        { name: 'A traveller', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
        { name: 'Hands-on', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
        { name: 'Super stylish', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
        { name: 'A bookworm', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
        { name: 'A pet lover', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }
      ] },
      { name: 'Partner', value: 'partner', url: '', edits: [
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
      ] },
      { name: 'Friend', value: 'friend', url: '', edits: [
        { name: 'A foodie', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
        { name: 'Sporty', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
        { name: 'Into Music', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
        { name: 'A Drinks Connoisseur', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
        { name: 'A wonderful man', url: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
        { name: 'A traveller', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
        { name: 'Hands-on', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
        { name: 'Super stylish', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
        { name: 'A bookworm', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
        { name: 'A pet lover', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }
      ] },
      { name: 'Uncle', value: 'uncle', url: '', edits: [
        { name: 'A foodie', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
        { name: 'Sporty', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
        { name: 'Into Music', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
        { name: 'A Drinks Connoisseur', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
        { name: 'A wonderful man', url: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
        { name: 'A traveller', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
        { name: 'Hands-on', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
        { name: 'Super stylish', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
        { name: 'A bookworm', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
        { name: 'A pet lover', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }
      ] },
      { name: 'Grandfather', value: 'grandfather', url: '', edits: [
        { name: 'A foodie', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
        { name: 'Sporty', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
        { name: 'Into Music', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
        { name: 'A Drinks Connoisseur', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
        { name: 'A wonderful man', url: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
        { name: 'A traveller', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
        { name: 'Hands-on', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
        { name: 'Super stylish', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
        { name: 'A bookworm', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
        { name: 'A pet lover', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }
      ] }
    ]
  },
  { name: 'her', text: 'For her', url: '', edits: [
      { name: 'Mum', value: 'mum', url: '', edits: [
        { name: 'Super stylish', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/style' },
        { name: 'A Foodie', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/foodie' },
        { name: 'Into music', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/music-lover' },
        { name: 'A traveller', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/traveller' },
        { name: 'A pet lover', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/pet-lover' },
        { name: 'A Drinks Connoisseur', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/drinks-connoisseur' },
        { name: 'A bookworm', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/book-lover' },
        { name: 'Hands-on', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/craft-lover' },
        { name: 'sentimental', url: 'https://www.notonthehighstreet.com/themes/capturing-memories' },
        { name: 'sporty', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-her/sports-fan' }
      ]
    },
      { name: 'Partner', value: 'partnerher', url: '', edits: [
        { name: 'A foodie', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/foodie' },
        { name: 'Sporty', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/sports-fan' },
        { name: 'Into Music', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/music-lover' },
        { name: 'A Drinks Connoisseur', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/drinks-connoisseur' },
        { name: 'A wonderful man', url: 'https://www.notonthehighstreet.com/themes/the-most-wonderful-men' },
        { name: 'A traveller', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/traveller' },
        { name: 'Hands-on', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/diy-enthusiast' },
        { name: 'Super stylish', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/style' },
        { name: 'A bookworm', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/book-lover' },
        { name: 'A pet lover', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-him/pet-lover' }
      ]
    },
      { name: 'Grandmother', value: 'grandmother', url: '', edits: [
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
        ]
    },
      { name: 'Friend', value: 'friendher', url: '', edits: [
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
      ]
    },
      { name: 'Sister', value: 'sister', url: '', edits: [
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
      ]
    },
      { name: 'Auntie', value: 'aunt', url: '', edits: [
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
      ]
    }
  ]},
  {
    name: 'kids',
    text: 'For a little one or teenager',
    url: '',
    edits: [
      { name: 'Newborn', value: '', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-little-ones-and-teens/newborn', edits:[] },
      { name: 'Under 5', value: '', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-little-ones-and-teens/under-5', edits:[] },
      { name: 'Over 5', value: '', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-little-ones-and-teens/over-5', edits:[] },
      { name: 'A teenager', value: '', url: 'https://www.notonthehighstreet.com/gifts/gift-matcher/for-little-ones-and-teens/teenagers', edits:[] }
    ]
  },

]

export default data;
