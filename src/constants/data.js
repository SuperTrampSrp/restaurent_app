import images from './images';

const wines = [
  {
    title: 'Payasam Sorbet',
    price: '$56',
    tags: 'AU | Plate',
  },
  {
    title: 'Pappadam',
    price: '$59',
    tags: 'AU | Plate',
  },
  {
    title: 'Ularthu Masala',
    price: '$44',
    tags: 'FR | Plate',
  },
  {
    title: 'Tender Coconut Korma',
    price: '$31',
    tags: 'CA | Plate',
  },
  {
    title: 'Fish Pollichathu',
    price: '$26',
    tags: 'IE | Plate',
  },
];

const cocktails = [
  {
    title: 'Shiraz Rosé',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
