export interface TakoyakiItem {
  id: string;
  name: string;
  description: string;
  prices: {
    '4pcs'?: number;
    '8pcs': number;
    '12pcs': number;
  };
  badge?: string;
  imagePlaceholder: string;
}

export const menuItems: TakoyakiItem[] = [
  {
    id: 'classic-octo',
    name: 'Classic Octopus',
    description: 'Authentic diced octopus with tenkasu, pickled ginger, and green onion. Drizzled with our signature sauce and kewpie mayo.',
    prices: { '4pcs': 60, '8pcs': 110, '12pcs': 150 },
    badge: 'Best Seller',
    imagePlaceholder: '🐙'
  },
  {
    id: 'ebimayo',
    name: 'Ebi Mayo (Shrimp)',
    description: 'Plump premium shrimp topped with a rich, toasted garlic mayo and aonori.',
    prices: { '4pcs': 70, '8pcs': 130, '12pcs': 180 },
    imagePlaceholder: '🍤'
  },
  {
    id: 'spicy-kani',
    name: 'Spicy Kani & Cheese',
    description: 'Shredded crabstick and melted cheddar with a kick of spicy togarashi.',
    prices: { '4pcs': 65, '8pcs': 120, '12pcs': 170 },
    badge: 'Spicy',
    imagePlaceholder: '🦀'
  }
];
