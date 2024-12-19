import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Natural Face Moisturizer',
    brand: 'Pure Beauty',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1556229162-5c63ed9c4efb?auto=format&fit=crop&w=600',
    rating: 2,
    ingredients: [
      { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
      { name: 'Jojoba Oil', riskLevel: 1, concerns: [] },
      { name: 'Vitamin E', riskLevel: 1, concerns: [] }
    ]
  },
  {
    id: '2',
    name: 'Vitamin C Serum Plus',
    brand: 'Glow Labs',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600',
    rating: 7,
    ingredients: [
      { name: 'Vitamin C', riskLevel: 2, concerns: [] },
      { name: 'Phenoxyethanol', riskLevel: 7, concerns: ['Allergies', 'Irritation'] },
      { name: 'Fragrance', riskLevel: 8, concerns: ['Allergies', 'Hormone Disruption'] }
    ]
  },
  {
    id: '3',
    name: 'Organic Lip Balm',
    brand: "Nature's Best",
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=600',
    rating: 1,
    ingredients: [
      { name: 'Shea Butter', riskLevel: 1, concerns: [] },
      { name: 'Coconut Oil', riskLevel: 1, concerns: [] },
      { name: 'Beeswax', riskLevel: 1, concerns: [] }
    ]
  },
  {
    id: '4',
    name: 'Age Defense Night Cream',
    brand: 'Luxe Beauty',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=600',
    rating: 8,
    ingredients: [
      { name: 'Retinol', riskLevel: 5, concerns: ['Sun Sensitivity', 'Irritation'] },
      { name: 'Parabens', riskLevel: 8, concerns: ['Hormone Disruption', 'Cancer Risk'] },
      { name: 'Synthetic Fragrance', riskLevel: 8, concerns: ['Allergies', 'Hormone Disruption'] }
    ]
  },
  {
    id: '5',
    name: 'Pure Clay Mask',
    brand: 'Earth Elements',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600',
    rating: 2,
    ingredients: [
      { name: 'Kaolin Clay', riskLevel: 1, concerns: [] },
      { name: 'Green Tea Extract', riskLevel: 1, concerns: [] },
      { name: 'Honey', riskLevel: 1, concerns: [] }
    ]
  },
  {
    id: '6',
    name: 'Hydrating Toner',
    brand: 'Aqua Pure',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1573575155376-b5010099301b?auto=format&fit=crop&w=600',
    rating: 5,
    ingredients: [
      { name: 'Hyaluronic Acid', riskLevel: 1, concerns: [] },
      { name: 'Witch Hazel', riskLevel: 2, concerns: ['Sensitivity'] },
      { name: 'Propylene Glycol', riskLevel: 5, concerns: ['Irritation'] }
    ]
  },
  { 
    id: '7',
    name: 'Revitalizing Eye Cream', 
    brand: 'Fresh Glow', 
    category: 'Skincare', 
    image: 'https://unsplash.com/photos/person-holding-white-plastic-tube-8ZQ2jpAagSQ', 
    rating: 6, 
    ingredients: [ 
      { name: 'Caffeine', riskLevel: 2, concerns: ['Dehydration'] }, 
      { name: 'Retinol', riskLevel: 5, concerns: ['Sun Sensitivity', 'Irritation'] }, 
      { name: 'Dimethicone', riskLevel: 4, concerns: ['Pore Clogging'] } 
    ] 
  }, 
  { 
    id: '8', 
    name: 'Soothing Body Lotion', 
    brand: 'Smooth Essentials', 
    category: 'Bodycare', 
    image: 'https://unsplash.com/photos/nivea-creme-on-white-table-idbGFFT2kOg', 
    rating: 3, 
    ingredients: [ 
      { name: 'Shea Butter', riskLevel: 1, concerns: [] }, 
      { name: 'Glycerin', riskLevel: 1, concerns: [] }, 
      { name: 'Methylparaben', riskLevel: 6, concerns: ['Allergies', 'Cancer Risk'] }
     ]
  },
  {
    id: '9',
    name: 'Hydrating Face Cream',
    brand: 'Glow Nature',
    category: 'Skincare',
    image: 'https://unsplash.com/photos/grown-alchemist-bottle-with-black-background-QodV5ti37WA',
    rating: 4,
    ingredients: [
      { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
      { name: 'Vitamin E', riskLevel: 1, concerns: [] },
      { name: 'Fragrance', riskLevel: 4, concerns: ['Skin Irritation'] }
    ]
  },
  {
    id: '10',
    name: 'Nourishing Hand Cream',
    brand: 'Pure Touch',
    category: 'Bodycare',
    image: 'https://unsplash.com/photos/person-holding-white-plastic-bottle-SGmgCPxv8OI',
    rating: 4,
    ingredients: [
      { name: 'Coconut Oil', riskLevel: 1, concerns: [] },
      { name: 'Almond Oil', riskLevel: 1, concerns: [] },
      { name: 'Parabens', riskLevel: 5, concerns: ['Hormonal Disruption'] }
    ]
  },
  {
    id: '14',
    name: 'Deep Cleansing Face Wash',
    brand: 'Clean Face',
    category: 'Skincare',
    image: 'https://unsplash.com/photos/neutrogena-ultra-sheer-touch-sunscreen-lotion-RrL19hOvmgU',
    rating: 3,
    ingredients: [
      { name: 'Tea Tree Oil', riskLevel: 1, concerns: [] },
      { name: 'Salicylic Acid', riskLevel: 2, concerns: ['Dryness', 'Skin Irritation'] },
      { name: 'Sodium Lauryl Sulfate', riskLevel: 6, concerns: ['Skin Irritation'] }
    ]
  },
  {
    id: '15',
    name: 'Aloe Vera Gel',
    brand: 'Nature’s Touch',
    category: 'Skincare',
    image: 'https://images.app.goo.gl/xc6xAuu6gBn6tCsH9',
    rating: 5,
    ingredients: [
      { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
      { name: 'Citric Acid', riskLevel: 2, concerns: ['Irritation for Sensitive Skin'] },
      { name: 'Xanthan Gum', riskLevel: 1, concerns: [] }
    ]
  },
  {
    id: '16',
    name: 'Repairing Hair Mask',
    brand: 'Healthy Tresses',
    category: 'Haircare',
    image: 'https://unsplash.com/photos/a-table-topped-with-a-jar-of-hair-mask-next-to-a-plant-omY18KP7_Cw',
    rating: 4,
    ingredients: [
      { name: 'Keratin', riskLevel: 2, concerns: [] },
      { name: 'Coconut Oil', riskLevel: 1, concerns: [] },
      { name: 'Silicone', riskLevel: 4, concerns: ['Build-Up'] }
    ]
  },
  {
    id: '17',
    name: 'Herbal Shampoo',
    brand: 'Herbal Clean',
    category: 'Haircare',
    image: 'https://unsplash.com/photos/a-bottle-of-lotion-next-to-a-bouquet-of-flowers-8S5HpbGOKYo',
    rating: 4,
    ingredients: [
      { name: 'Hibiscus Extract', riskLevel: 1, concerns: [] },
      { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
      { name: 'Sodium Chloride', riskLevel: 3, concerns: [] }
    ]
  },
  {
    id: '18',
    name: 'Argan Oil Shampoo',
    brand: 'Moroccan Bliss',
    category: 'Haircare',
    image: 'https://unsplash.com/photos/black-and-white-plastic-pump-bottle-KgyuyzxYyRw',
    rating: 5,
    ingredients: [
      { name: 'Argan Oil', riskLevel: 1, concerns: [] },
      { name: 'Sodium Lauryl Sulfate', riskLevel: 6, concerns: ['Skin Irritation'] },
      { name: 'Fragrance', riskLevel: 4, concerns: ['Irritation'] }
    ]
  },
  {
    id: '19',
    name: 'Coconut Curl Cream',
    brand: 'Tropical Locks',
    category: 'Haircare',
    image: 'https://unsplash.com/photos/ice-cream-in-coconut-beside-spoon-4ZvmH7yzEsA',
    rating: 4,
    ingredients: [
      { name: 'Coconut Oil', riskLevel: 1, concerns: [] },
      { name: 'Shea Butter', riskLevel: 1, concerns: [] },
      { name: 'Synthetic Fragrance', riskLevel: 5, concerns: ['Allergies'] }
    ]
  },
  {
    id: '20',
    name: 'Brightening Face Mask',
    brand: 'Glow Naturals',
    category: 'Skincare',
    image: 'https://unsplash.com/photos/a-woman-is-putting-a-mask-on-her-face-U0_AdQhzaz8',
    rating: 6,
    ingredients: [
      { name: 'Vitamin C', riskLevel: 2, concerns: [] },
      { name: 'Hyaluronic Acid', riskLevel: 1, concerns: [] },
      { name: 'Fragrance', riskLevel: 3, concerns: ['Irritation'] }
    ]
  },
  {
    id: '21',
    name: 'Matte Liquid Foundation',
    brand: 'Flawless Finish',
    category: 'Makeup',
    image: 'https://unsplash.com/photos/two-labeled-bottles-xBqYLnRhfaI',
    rating: 7,
    ingredients: [
      { name: 'Dimethicone', riskLevel: 3, concerns: [] },
      { name: 'Titanium Dioxide', riskLevel: 2, concerns: [] },
      { name: 'Fragrance', riskLevel: 5, concerns: ['Irritation'] }
    ]
  },
  {
    id: '22',
    name: 'Charcoal Body Scrub',
    brand: 'Earthy Elements',
    category: 'Bodycare',
    image: 'https://unsplash.com/photos/black-fire-pit-on-sand-OTsKXDu2O_g',
    rating: 3,
    ingredients: [
      { name: 'Activated Charcoal', riskLevel: 1, concerns: [] },
      { name: 'Sugar', riskLevel: 1, concerns: [] },
      { name: 'Parabens', riskLevel: 6, concerns: ['Hormone Disruption'] }
    ]
  },
  {
    id: '23',
    name: 'Volumizing Mascara',
    brand: 'Lash Luxe',
    category: 'Makeup',
    image: 'https://unsplash.com/photos/a-close-up-of-a-lipstick-jvgtNgShmFo',
    rating: 9,
    ingredients: [
      { name: 'Beeswax', riskLevel: 1, concerns: [] },
      { name: 'Iron Oxides', riskLevel: 2, concerns: [] },
      { name: 'Phenoxyethanol', riskLevel: 7, concerns: ['Irritation'] }
    ]
  },
  {
    id: '24',
    name: 'Keratin Repair Serum',
    brand: 'Silky Locks',
    category: 'Haircare',
    image: 'https://unsplash.com/photos/white-and-brown-plastic-bottles-rwfklNB26T4',
    rating: 8,
    ingredients: [
      { name: 'Keratin', riskLevel: 1, concerns: [] },
      { name: 'Silicones', riskLevel: 3, concerns: ['Build-up'] },
      { name: 'Fragrance', riskLevel: 4, concerns: ['Irritation'] }
    ]
  },
  {
    id: '25',
    name: 'Hydrating Lip Gloss',
    brand: 'Luxe Lips',
    category: 'Makeup',
    image: 'https://unsplash.com/photos/a-person-brushing-the-teeth-eFb06JAw4mg',
    rating: 8,
    ingredients: [
      { name: 'Beeswax', riskLevel: 1, concerns: [] },
      { name: 'Castor Oil', riskLevel: 1, concerns: [] },
      { name: 'Parabens', riskLevel: 6, concerns: ['Hormone Disruption'] }
    ]
  },
  {
    id: '26',
    name: 'Rosewater Facial Mist',
    brand: 'Petal Glow',
    category: 'Skincare',
    image: 'https://unsplash.com/photos/two-clear-glass-canister-jars-AnLG86L_6nU',
    rating: 2,
    ingredients: [
      { name: 'Rosewater', riskLevel: 1, concerns: [] },
      { name: 'Glycerin', riskLevel: 1, concerns: [] },
      { name: 'Alcohol', riskLevel: 4, concerns: ['Dryness'] }
    ]
  },
  {
    id: '27',
    name: 'SPF 50 Sunscreen Lotion',
    brand: 'Sun Safe',
    category: 'Skincare',
    image: 'https://unsplash.com/photos/pink-and-white-plastic-tube-bottle-BibJjO4sYrI',
    rating: 8,
    ingredients: [
      { name: 'Zinc Oxide', riskLevel: 2, concerns: [] },
      { name: 'Octinoxate', riskLevel: 5, concerns: ['Hormone Disruption'] },
      { name: 'Fragrance', riskLevel: 4, concerns: ['Irritation'] }
    ]
  },
  {
    id: '28',
    name: 'Detoxifying Hair Mask',
    brand: 'Hair Essentials',
    category: 'Haircare',
    image: 'https://unsplash.com/photos/white-and-black-usb-flash-drive-DuNXXPScbJM',
    rating: 7,
    ingredients: [
      { name: 'Bentonite Clay', riskLevel: 1, concerns: [] },
      { name: 'Apple Cider Vinegar', riskLevel: 1, concerns: [] },
      { name: 'Fragrance', riskLevel: 4, concerns: ['Irritation'] }
    ]
  },
  {
    id: '29',
    name: 'Herbal Conditioner',
    brand: 'Green Glow',
    category: 'Haircare',
    image: 'https://unsplash.com/photos/a-bottle-of-wine-sitting-next-to-a-potted-plant-XEhqEoGCJdM',
    rating: 3,
    ingredients: [
      { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
      { name: 'Hibiscus Extract', riskLevel: 1, concerns: [] },
      { name: 'Fragrance', riskLevel: 4, concerns: ['Irritation'] }
    ]
  },
];