import frankoniaCard from '../../images/img/unsplash.png'
import lakesCard from '../../images/img/unsplash_2.png'
import weekendCard from '../../images/img/unsplash_3.png'
import frankoniaLarge from '../../images/img/unsplash_big-card.png'
import lakesLarge from '../../images/img/unsplash_big-card2.png'
import weekendLarge from '../../images/img/unsplash_big-card3.png'

export const tours = [
  {
    id: 'frankonia',
    name: 'Frankonia',
    eyebrow: 'Mountain trail',
    groupSize: 12,
    duration: '5 days',
    difficulty: 2,
    route: 'Star Pass · Sota River · Valley of Snow · Stone Village · Blooming Pass',
    summary:
      'A balanced five-day route through high passes, quiet valleys and traditional mountain villages.',
    cardImage: frankoniaCard,
    largeImage: frankoniaLarge,
  },
  {
    id: 'lakes',
    name: 'Lakes',
    eyebrow: 'Alpine escape',
    groupSize: 8,
    duration: '7 days',
    difficulty: 3,
    route: 'Lake Sophia · Tears of a Woman · Cat’s Eyes · Dark Glass · Lake Love',
    summary:
      'Our most immersive journey: a full week between clear alpine lakes and remote ridgelines.',
    cardImage: lakesCard,
    largeImage: lakesLarge,
  },
  {
    id: 'weekend',
    name: 'Weekend',
    eyebrow: 'Easy adventure',
    groupSize: 24,
    duration: '2 days',
    difficulty: 1,
    route: 'Lake Sophia · Foot of Mount Moreo',
    summary:
      'A compact, friendly introduction to camping for anyone who needs fresh air without a long itinerary.',
    cardImage: weekendCard,
    largeImage: weekendLarge,
  },
]

export const testimonials = [
  {
    quote:
      'The route felt wild, but the team made every detail feel effortless. I came home already planning the next one.',
    name: 'Maya',
    tour: 'Frankonia tour',
  },
  {
    quote:
      'Seven days without noise, surrounded by water and sky. The Lakes tour was exactly the reset I needed.',
    name: 'Daniel',
    tour: 'Lakes tour',
  },
  {
    quote:
      'My first night in a tent could not have been better. Warm people, a beautiful place and a proper campfire.',
    name: 'Sofia',
    tour: 'Weekend tour',
  },
]
