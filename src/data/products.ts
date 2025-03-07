import type { Product } from '../types';

export const products: Product[] = [
    {
      id: '1',
      name: 'Nivea Soft Light Moisturizer',
      brand: 'Nivea',
      category: 'Moisturizer',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1734801195/51I_flzkpML._AC_UF1000_1000_QL80__jiqqti.jpg',
      rating: 4,
      ingredients: [
        { name: 'Glycerin', riskLevel: 1, concerns: ['May cause greasiness'] },
        { name: 'Vitamin E', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Skin irritation'] },
      ],
    },
    {
      id: '2',
      name: 'Pond’s Light Moisturizer',
      brand: 'Pond’s',
      category: 'Moisturizer',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1734801247/51n5hrNRCkL_ihgudc.jpg',
      rating: 3,
      ingredients: [
        { name: 'Niacinamide', riskLevel: 1, concerns: [] },
        { name: 'Mineral Oil', riskLevel: 2, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: [] },
      ],
    },
    {
      id: '3',
      name: 'Himalaya Nourishing Skin Cream',
      brand: 'Himalaya',
      category: 'Moisturizer',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801317/71Zmzk7rg4L_pa9nj8.jpg',
      rating: 4,
      ingredients: [
        { name: 'Aloe Vera', riskLevel: 1, concerns: ['May cause allergic reaction in sensitive skin'] },
        { name: 'Winter Cherry', riskLevel: 1, concerns: [] },
        { name: 'Indian Kino Tree', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '4',
      name: 'Biotique Morning Nectar Flawless Skin Moisturizer',
      brand: 'Biotique',
      category: 'Moisturizer',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801378/biotique-bio-morning-nectar-flawless-skin-lotion_tldmlu.jpg',
      rating: 5,
      ingredients: [
        { name: 'Nectar', riskLevel: 1, concerns: [] },
        { name: 'Honey', riskLevel: 1, concerns: ['May attract dirt due to stickiness'] },
        { name: 'Wheat Germ', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '5',
      name: 'Plum Green Tea Mattifying Moisturizer',
      brand: 'Plum',
      category: 'Moisturizer',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801396/51kW4gYUcvL_pcqyey.jpg',
      rating: 4,
      ingredients: [
        { name: 'Green Tea Extract', riskLevel: 1, concerns: ['Mild dryness'] },
        { name: 'Glycolic Acid', riskLevel: 1, concerns: [] },
        { name: 'Sodium PCA', riskLevel: 1, concerns: [] },
      ],
    },
    // Cleansers and Face Wash
    {
      id: '6',
      name: 'Himalaya Neem Face Wash',
      brand: 'Himalaya',
      category: 'Cleanser',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801456/81iagtr9c3L_yyoft8.jpg',
      rating: 3,
      ingredients: [
        { name: 'Neem Extract', riskLevel: 2, concerns: [] },
        { name: 'Turmeric', riskLevel: 1, concerns: [] },
        { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '7',
      name: 'Mamaearth Ubtan Natural Face Wash',
      brand: 'Mamaearth',
      category: 'Cleanser',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801475/61EhOk8Z2bL._SL1200__fiqtur.jpg',
      rating: 5,
      ingredients: [
        { name: 'Turmeric', riskLevel: 1, concerns: [] },
        { name: 'Saffron', riskLevel: 1, concerns: ['Mild staining on fabrics'] },
        { name: 'Carrot Seed Oil', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '8',
      name: 'Clean & Clear Foaming Face Wash',
      brand: 'Clean & Clear',
      category: 'Cleanser',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801528/CnC_ESSN_CLNSR_PUMP_8oz_ECMBL_CarouselBuild_1_JPG_pfgkow.png',
      rating: 7,
      ingredients: [
        { name: 'Salicylic Acid', riskLevel: 1, concerns: ['May cause redness with overuse'] },
        { name: 'Glycerin', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Mild irritation'] },
      ],
    },
    {
      id: '9',
      name: 'Pond’s Pure White Anti-Pollution Face Wash',
      brand: 'Pond’s',
      category: 'Cleanser',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801574/71MInAC3ylL._AC_UF350_350_QL80__jc4yhx.jpg',
      rating: 3,
      ingredients: [
        { name: 'Activated Charcoal', riskLevel: 1, concerns: [] },
        { name: 'Vitamin B3', riskLevel: 1, concerns: [] },
        { name: 'Glycerin', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '10',
      name: 'Plum Green Tea Pore Cleansing Face Wash',
      brand: 'Plum',
      category: 'Cleanser',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801619/GTFW-100ml_1080X1080_f5636970-a84d-4e62-933f-97cf8621be72_f2l4y4.jpg',
      rating: 4,
      ingredients: [
        { name: 'Green Tea Extract', riskLevel: 1, concerns: ['May cause dryness'] },
        { name: 'Glycolic Acid', riskLevel: 1, concerns: [] },
        { name: 'Cellulose Beads', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '11',
      name: 'Mamaearth Skin Illuminate Vitamin C Serum',
      brand: 'Mamaearth',
      category: 'Serum',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801655/71QRD1panRL_dhgsna.jpg',
      rating: 5,
      ingredients: [
        { name: 'Vitamin C', riskLevel: 1, concerns: ['Mild sensitivity to sunlight'] },
        { name: 'Turmeric', riskLevel: 1, concerns: [] },
        { name: 'Sodium Hyaluronate', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '12',
      name: 'Lakmé Absolute Perfect Radiance Skin Serum',
      brand: 'Lakmé',
      category: 'Serum',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801676/s-l1200_iifitr.jpg',
      rating: 4,
      ingredients: [
        { name: 'Niacinamide', riskLevel: 1, concerns: [] },
        { name: 'Vitamin B3', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['May irritate sensitive skin'] },
      ],
    },
    {
      id: '13',
      name: 'The Derma Co 10% Niacinamide Serum',
      brand: 'The Derma Co',
      category: 'Serum',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801705/51nDK2uZuFL._SL1200__pmdev6.jpg',
      rating: 5,
      ingredients: [
        { name: 'Niacinamide', riskLevel: 1, concerns: [] },
        { name: 'Zinc PCA', riskLevel: 1, concerns: [] },
        { name: 'Fragrance-Free', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '14',
      name: 'Plum Bright Years Cell Renewal Serum',
      brand: 'Plum',
      category: 'Serum',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801734/51dL_wRRHFL._SL1024__rxf9u5.jpg',
      rating: 4,
      ingredients: [
        { name: 'Retinol', riskLevel: 2, concerns: ['May cause peeling or irritation'] },
        { name: 'Vitamin C', riskLevel: 1, concerns: [] },
        { name: 'Plant Stem Cells', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '15',
      name: 'WOW Skin Science Hyaluronic Acid Face Serum',
      brand: 'WOW Skin Science',
      category: 'Serum',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734801762/63fd9adc080eced3cf864b17_wow-skin-science-hyaluronic-acid-serum-30ml_ujqxnw.jpg',
      rating: 4,
      ingredients: [
        { name: 'Hyaluronic Acid', riskLevel: 1, concerns: ['Overuse may cause dryness'] },
        { name: 'Vitamin E', riskLevel: 1, concerns: [] },
        { name: 'Aloe Vera Extract', riskLevel: 1, concerns: [] },
      ],
    },
  
    // Sunscreens
    {
      id: '16',
      name: 'Lotus Herbals Safe Sun UV Screen Matte Gel SPF 50',
      brand: 'Lotus Herbals',
      category: 'Sunscreen',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734802347/159-12_bmuv1z.jpg',
      rating: 4,
      ingredients: [
        { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
        { name: 'Vitamin E', riskLevel: 1, concerns: [] },
        { name: 'Silica', riskLevel: 2, concerns: ['May cause dryness'] },
      ],
    },
    {
      id: '17',
      name: 'Lakmé Sun Expert SPF 50 PA+++ Ultra Matte Gel',
      brand: 'Lakmé',
      category: 'Sunscreen',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734802494/LakmeSunExpertUltraMatteGelSunscreenSPF50PA_50ML_058ca54b-59d8-43d4-96c6-2f3cb75031f8_bohrzi.jpg',
      rating: 5,
      ingredients: [
        { name: 'Zinc Oxide', riskLevel: 1, concerns: [] },
        { name: 'Titanium Dioxide', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['May cause sensitivity'] },
      ],
    },
    {
      id: '18',
      name: 'Neutrogena Ultra Sheer Dry-Touch Sunscreen SPF 50',
      brand: 'Neutrogena',
      category: 'Sunscreen',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734802446/neutrogena-ultra-sheer-dry-touch-sunblock-spf-50-front1-en-in_gtv1l3.jpg',
      rating: 4,
      ingredients: [
        { name: 'Avobenzone', riskLevel: 1, concerns: [] },
        { name: 'Oxybenzone', riskLevel: 2, concerns: ['May disrupt hormones'] },
        { name: 'Homosalate', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '19',
      name: 'Biotique Bio Sandalwood 50+ SPF UVA/UVB Sunscreen',
      brand: 'Biotique',
      category: 'Sunscreen',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734802551/61HWA6Ct1sL_clu4vp.jpg',
      rating: 4,
      ingredients: [
        { name: 'Sandalwood', riskLevel: 1, concerns: [] },
        { name: 'Saffron', riskLevel: 1, concerns: [] },
        { name: 'Honey', riskLevel: 1, concerns: ['May attract dirt'] },
      ],
    },
    {
      id: '20',
      name: 'Mamaearth Ultra Light Indian Sunscreen SPF 50',
      brand: 'Mamaearth',
      category: 'Sunscreen',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734802601/2_64_ixcc12.jpg',
      rating: 5,
      ingredients: [
        { name: 'Carrot Seed Oil', riskLevel: 1, concerns: [] },
        { name: 'Turmeric', riskLevel: 1, concerns: [] },
        { name: 'Zinc Oxide', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '21',
      name: 'Parachute Coconut Hair Oil',
      brand: 'Parachute',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734802799/400-pure-coconut-hair-oil-400-ml-parachute-original-imag8zn9zzzhqjzz_lunfox.jpg',
      rating: 5,
      ingredients: [
        { name: 'Coconut Oil', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['May irritate sensitive scalp'] },
      ],
    },
    {
      id: '22',
      name: 'Indulekha Bringha Hair Oil',
      brand: 'Indulekha',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734802857/61IxF1ljJHL._AC_UF1000_1000_QL80__hok135.jpg',
      rating: 4,
      ingredients: [
        { name: 'Bhringraj', riskLevel: 1, concerns: [] },
        { name: 'Amla', riskLevel: 1, concerns: [] },
        { name: 'Mineral Oil', riskLevel: 2, concerns: ['May clog pores'] },
      ],
    },
    {
      id: '23',
      name: 'Dove Intense Repair Shampoo',
      brand: 'Dove',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803218/127831872_jjtrxf.jpg',
      rating: 5,
      ingredients: [
        { name: 'Keratin Actives', riskLevel: 1, concerns: [] },
        { name: 'Sodium Laureth Sulfate', riskLevel: 3, concerns: ['May cause dryness'] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Irritation for sensitive scalps'] },
      ],
    },
    {
      id: '24',
      name: 'Pantene Pro-V Hair Fall Control Shampoo',
      brand: 'Pantene',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803246/04902430790468_C1N1-1600x1600_uwawct.jpg',
      rating: 4,
      ingredients: [
        { name: 'Pro-Vitamin B5', riskLevel: 1, concerns: [] },
        { name: 'Silicone', riskLevel: 2, concerns: ['May weigh down hair'] },
        { name: 'Sodium Laureth Sulfate', riskLevel: 3, concerns: ['May cause dryness'] },
      ],
    },
    {
      id: '25',
      name: 'WOW Apple Cider Vinegar Shampoo',
      brand: 'WOW',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734802946/717uSnG8xpL._AC_UF1000_1000_QL80__pdyd55.jpg',
      rating: 5,
      ingredients: [
        { name: 'Apple Cider Vinegar', riskLevel: 1, concerns: [] },
        { name: 'Sweet Almond Oil', riskLevel: 1, concerns: [] },
        { name: 'D Panthenol', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '26',
      name: 'L’Oreal Paris Total Repair 5 Shampoo',
      brand: 'L’Oreal Paris',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734802982/51LIE5W5ajL_tb7jgq.jpg',
      rating: 4,
      ingredients: [
        { name: 'Ceramide', riskLevel: 1, concerns: [] },
        { name: 'Sodium Laureth Sulfate', riskLevel: 3, concerns: ['May cause dryness'] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Sensitivity concerns'] },
      ],
    },
    {
      id: '27',
      name: 'Mamaearth Onion Hair Oil',
      brand: 'Mamaearth',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803005/71vQKir4MhL_lmkmc4.jpg',
      rating: 4,
      ingredients: [
        { name: 'Onion Seed Oil', riskLevel: 1, concerns: [] },
        { name: 'Bhringraj Oil', riskLevel: 1, concerns: [] },
        { name: 'Mineral Oil', riskLevel: 2, concerns: ['Clogging issues'] },
      ],
    },
    {
      id: '28',
      name: 'TRESemmé Keratin Smooth Shampoo',
      brand: 'TRESemmé',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803030/61G2dDBEGTL._SL1000__cqaffq.jpg',
      rating: 4,
      ingredients: [
        { name: 'Keratin', riskLevel: 1, concerns: [] },
        { name: 'Argan Oil', riskLevel: 1, concerns: [] },
        { name: 'Sodium Laureth Sulfate', riskLevel: 3, concerns: ['Dryness issues'] },
      ],
    },
    {
      id: '29',
      name: 'Biotique Bio Kelp Protein Shampoo',
      brand: 'Biotique',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803055/41YpL-jtHSL_llajlz.jpg',
      rating: 5,
      ingredients: [
        { name: 'Kelp Extract', riskLevel: 1, concerns: [] },
        { name: 'Neem Oil', riskLevel: 1, concerns: [] },
        { name: 'Honey', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '30',
      name: 'Khadi Natural Herbal Hair Cleanser',
      brand: 'Khadi Natural',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803085/Artboard1copy_d0038645-183a-4f31-a60c-de575807a5f5_xkkdrq.jpg',
      rating: 4,
      ingredients: [
        { name: 'Shikakai', riskLevel: 1, concerns: [] },
        { name: 'Amla', riskLevel: 1, concerns: [] },
        { name: 'Neem', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '31',
      name: 'Aveda Shampure Shampoo',
      brand: 'Aveda',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803529/av_sku_AR5K01_98357_355x600_0_fzpqed.jpg',
      rating: 5,
      ingredients: [
        { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
        { name: 'Jojoba Oil', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Sensitivity concerns'] },
      ],
    },
    {
      id: '32',
      name: 'OGX Argan Oil of Morocco Shampoo',
      brand: 'OGX',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803545/ogx-renewing-argan-oil-of-morocco-shampoo-385ml_zac3sg.jpg',
      rating: 4,
      ingredients: [
        { name: 'Argan Oil', riskLevel: 1, concerns: [] },
        { name: 'Sodium Chloride', riskLevel: 2, concerns: ['Dryness issues'] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Sensitivity issues'] },
      ],
    },
    {
      id: '33',
      name: 'Garnier Fructis Fall Fight Shampoo',
      brand: 'Garnier',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803562/Fructis-Fall-Fight-Family-Shampoo_75b463ad-460a-4d46-8d27-fd4a06a93a23.36dfeb7623253fbbe93e2671b5138048_ziubqx.jpg',
      rating: 4,
      ingredients: [
        { name: 'Vitamin B3', riskLevel: 1, concerns: [] },
        { name: 'Sodium Laureth Sulfate', riskLevel: 3, concerns: ['May cause dryness'] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Scalp irritation'] },
      ],
    },
    {
      id: '34',
      name: 'Herbal Essences Bio:Renew Repair Argan Oil Shampoo',
      brand: 'Herbal Essences',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803588/Argan-oil-of-Morocco-shampoo-775x775_xx4euw.webp',
      rating: 4,
      ingredients: [
        { name: 'Argan Oil', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Irritation for sensitive scalps'] },
      ],
    },
    {
      id: '35',
      name: 'Head & Shoulders Classic Clean Shampoo',
      brand: 'Head & Shoulders',
      category: 'Haircare',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803611/71FpHXDGZOL_a3s23m.jpg',
      rating: 5,
      ingredients: [
        { name: 'Pyrithione Zinc', riskLevel: 1, concerns: [] },
        { name: 'Sodium Chloride', riskLevel: 2, concerns: ['Dryness'] },
      ],
    },
    {
      id: '36',
      name: 'Lakmé 9 to 5 Weightless Mousse Foundation',
      brand: 'Lakmé',
      category: 'Makeup',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803633/51RuiH7IZzL_ifzbb0.jpg',
      rating: 4,
      ingredients: [
        { name: 'Titanium Dioxide', riskLevel: 1, concerns: [] },
        { name: 'Dimethicone', riskLevel: 2, concerns: ['Can clog pores'] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Possible irritation'] },
      ],
    },
    {
      id: '37',
      name: 'Maybelline Fit Me Foundation',
      brand: 'Maybelline',
      category: 'Makeup',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803658/Maybelline-Fit-Me-Matte-Poreless-Liquid-Foundation-Makeup-320-Natural-Tan-1-fl-oz_53131542-ec69-4f62-82b8-84b7995cce1b.e4f93009def73d9302a310fa2a8dd245_wyupah.jpg',
      rating: 5,
      ingredients: [
        { name: 'Water', riskLevel: 1, concerns: [] },
        { name: 'Dimethicone', riskLevel: 2, concerns: ['Can clog pores'] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Possible irritation'] },
      ],
    },
    {
      id: '38',
      name: 'Colorbar Perfect Match Primer',
      brand: 'Colorbar',
      category: 'Makeup',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803678/51wEShxtkxL._AC_UL210_SR210_210__ovmehg.jpg',
      rating: 4,
      ingredients: [
        { name: 'Dimethicone', riskLevel: 2, concerns: ['Can clog pores'] },
        { name: 'Silica', riskLevel: 1, concerns: [] },
        { name: 'Cyclopentasiloxane', riskLevel: 2, concerns: ['Can cause irritation for sensitive skin'] },
      ],
    },
    {
      id: '39',
      name: 'Lakmé Absolute Shine Line Eyeliner',
      brand: 'Lakmé',
      category: 'Makeup',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803698/lakme-absolute-shine-loner_k4eu2c.jpg',
      rating: 4,
      ingredients: [
        { name: 'Water', riskLevel: 1, concerns: [] },
        { name: 'Iron Oxides', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Possible irritation'] },
      ],
    },
    {
      id: '40',
      name: 'Maybelline New York Colossal Kajal',
      brand: 'Maybelline',
      category: 'Makeup',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803720/maybelline-new-york-the-colossal-kajal-035g-deep-black_regular_653650e4c2e33_enb6sh.jpg',
      rating: 5,
      ingredients: [
        { name: 'Mineral Oil', riskLevel: 2, concerns: ['May cause breakouts'] },
        { name: 'Iron Oxides', riskLevel: 1, concerns: [] },
        { name: 'Vitamin E', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '41',
      name: 'Revlon Super Lustrous Lipstick',
      brand: 'Revlon',
      category: 'Makeup',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803757/717CJF-ZTtL_jqnfc7.jpg',
      rating: 5,
      ingredients: [
        { name: 'Castor Oil', riskLevel: 1, concerns: [] },
        { name: 'Dimethicone', riskLevel: 2, concerns: ['Can clog pores'] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Can cause irritation'] },
      ],
    },
    {
      id: '42',
      name: 'L’Oreal Paris Infallible Pro-Matte Foundation',
      brand: 'L’Oreal Paris',
      category: 'Makeup',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803775/L-Oreal-Paris-Infallible-Pro-Matte-Foundation-1-fl-oz_adc204ca-a49f-4907-bef0-4cc91d7b548c.4eec2ae6cffc9ba7e2e34480774584d4_avmdx3.jpg',
      rating: 4,
      ingredients: [
        { name: 'Dimethicone', riskLevel: 2, concerns: ['Can clog pores'] },
        { name: 'Water', riskLevel: 1, concerns: [] },
        { name: 'Titanium Dioxide', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '43',
      name: 'Maybelline New York Instant Age Rewind Concealer',
      brand: 'Maybelline',
      category: 'Makeup',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803803/713aIfJzCrL_j3hv3b.jpg',
      rating: 5,
      ingredients: [
        { name: 'Titanium Dioxide', riskLevel: 1, concerns: [] },
        { name: 'Dimethicone', riskLevel: 2, concerns: ['Can clog pores'] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Possible irritation'] },
      ],
    },
    {
      id: '44',
      name: 'Nyx Professional Makeup Matte Setting Spray',
      brand: 'Nyx',
      category: 'Makeup',
      image: 'https://example.com/nyx-matte-setting-spray.jpg',
      rating: 4,
      ingredients: [
        { name: 'Alcohol Denat.', riskLevel: 3, concerns: ['Can cause dryness'] },
        { name: 'Water', riskLevel: 1, concerns: [] },
        { name: 'Propylene Glycol', riskLevel: 2, concerns: ['Can cause irritation'] },
      ],
    },
    {
      id: '45',
      name: 'Benefit Cosmetics Hoola Matte Bronzer',
      brand: 'Benefit Cosmetics',
      category: 'Makeup',
      image: '',
      rating: 5,
      ingredients: [
        { name: 'Silica', riskLevel: 1, concerns: [] },
        { name: 'Mica', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Possible irritation'] },
      ],
    },
    {
      id: '46',
      name: 'Dove Deep Moisture Body Lotion',
      brand: 'Dove',
      category: 'Body Care',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803855/Dove-Body-Love-Deep-Nourishment-Non-Greasy-Body-Lotion-Cream-for-Dry-Skin-13-5-fl-oz_8d31beb7-6a07-4ef2-8eac-367f7acd5b5a.ee4bb962ee966d41166703e29cd372e1_bhscpw.jpg',
      rating: 5,
      ingredients: [
        { name: 'Aqua', riskLevel: 1, concerns: [] },
        { name: 'Petrolatum', riskLevel: 2, concerns: ['Can clog pores'] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['May irritate sensitive skin'] },
      ],
    },
    {
      id: '47',
      name: 'Nivea Body Milk Lotion',
      brand: 'Nivea',
      category: 'Body Care',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803889/51-ORWzH2hL_sipfc7.jpg',
      rating: 4,
      ingredients: [
        { name: 'Water', riskLevel: 1, concerns: [] },
        { name: 'Glycerin', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Possible irritation'] },
      ],
    },
    {
      id: '48',
      name: 'Himalaya Cocoa Butter Body Lotion',
      brand: 'Himalaya',
      category: 'Body Care',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803929/51JgkpaRWwL_pdvclw.jpg',
      rating: 4,
      ingredients: [
        { name: 'Cocoa Butter', riskLevel: 1, concerns: [] },
        { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['May cause irritation for sensitive skin'] },
      ],
    },
    {
      id: '49',
      name: 'Parachute Advanced Body Lotion',
      brand: 'Parachute',
      category: 'Body Care',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803953/61uNV1bYzwL._AC_UL210_SR210_210__lodz3k.jpg',
      rating: 5,
      ingredients: [
        { name: 'Coconut Oil', riskLevel: 1, concerns: [] },
        { name: 'Glycerin', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Possible irritation'] },
      ],
    },
    {
      id: '50',
      name: 'Biotique Bio Apricot Refreshing Body Wash',
      brand: 'Biotique',
      category: 'Body Care',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734803970/41cmjIg7HHL_ri7pel.jpg',
      rating: 4,
      ingredients: [
        { name: 'Apricot Kernel Oil', riskLevel: 1, concerns: [] },
        { name: 'Sodium Chloride', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Can cause irritation for sensitive skin'] },
      ],
    },
    {
      id: '51',
      name: 'Vaseline Intensive Care Body Lotion',
      brand: 'Vaseline',
      category: 'Body Care',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734857626/61JikdfXzTL_k6dzfd.jpg',
      rating: 5,
      ingredients: [
        { name: 'Petrolatum', riskLevel: 2, concerns: ['May clog pores'] },
        { name: 'Glycerin', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Possible irritation'] },
      ],
    },
    {
      id: '52',
      name: 'The Body Shop Shea Body Butter',
      brand: 'The Body Shop',
      category: 'Body Care',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734857665/SheaBodyButter200ML_1200x1200_m0zvh6.jpg',
      rating: 5,
      ingredients: [
        { name: 'Shea Butter', riskLevel: 1, concerns: [] },
        { name: 'Almond Oil', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['May irritate sensitive skin'] },
      ],
    },
    {
      id: '53',
      name: 'Himalaya Herbals Refreshing Body Wash',
      brand: 'Himalaya',
      category: 'Body Care',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734857731/b00vhsu69o-himalaya-refreshing-body-lotion-aloe-and-cucumber-200ml-0-320x320h_fycdhq.jpg',
      rating: 4,
      ingredients: [
        { name: 'Sodium Lauryl Sulfate', riskLevel: 3, concerns: ['Can cause dryness'] },
        { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Possible irritation'] },
      ],
    },
    {
      id: '54',
      name: 'Godrej No. 1 Sandalwood Soap',
      brand: 'Godrej',
      category: 'Soap',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734859163/61slwblSbaL_ihcsr7.jpg',
      rating: 4,
      ingredients: [
        { name: 'Sodium Palmate', riskLevel: 1, concerns: [] },
        { name: 'Sodium Palm Kernelate', riskLevel: 1, concerns: [] },
        { name: 'Perfume', riskLevel: 2, concerns: ['May cause skin irritation'] },
        { name: 'Triclocarban', riskLevel: 2, concerns: ['May disrupt hormones'] },
        { name: 'Sodium Chloride', riskLevel: 1, concerns: [] },
        { name: 'Glycerin', riskLevel: 1, concerns: [] },
        { name: 'Disodium EDTA', riskLevel: 1, concerns: [] },
        { name: 'BHT', riskLevel: 2, concerns: ['May cause skin irritation'] },
      ],
    },
    {
      id: '55',
      name: 'Garnier Light Complete White Speed Body Lotion',
      brand: 'Garnier',
      category: 'Body Care',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734857806/original-garnier-bright-complete_beyr1c.jpg',
      rating: 4,
      ingredients: [
        { name: 'Vitamin C', riskLevel: 1, concerns: [] },
        { name: 'Glycerin', riskLevel: 1, concerns: [] },
        { name: 'Fragrance', riskLevel: 2, concerns: ['Can irritate sensitive skin'] },
      ],
    },
    {
      id: '56',
      name: 'Patanjali Aloe Vera Gel',
      brand: 'Patanjali',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734857830/6173zQlOpEL._AC_UF350_350_QL80__ftmv7s.jpg',
      rating: 3,
      ingredients: [
        { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '57',
      name: 'Forest Essentials Facial Ubtan Multani Mitti',
      brand: 'Forest Essentials',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734857862/71_udg55eIL_lptazo.jpg',
      rating: 2,
      ingredients: [
        { name: 'Multani Mitti', riskLevel: 1, concerns: [] },
        { name: 'Sandalwood', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '58',
      name: 'SoulTree Revitalizing Hair Oil',
      brand: 'SoulTree',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734857888/61WKUo4xaVL_hjqnwq.jpg',
      rating: 3,
      ingredients: [
        { name: 'Bhringraj', riskLevel: 1, concerns: [] },
        { name: 'Amla', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '59',
      name: 'Biotique Bio Almond Oil',
      brand: 'Biotique',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734857912/ffg00112-1_bkqrfh.jpg',
      rating: 5,
      ingredients: [
        { name: 'Brahmi', riskLevel: 2, concerns: ['May cause mild irritation for sensitive skin'] },
        { name: 'Hibiscus', riskLevel: 2, concerns: ['May cause allergic reactions in some individuals'] },
      ],
    },
    {
      id: '60',
      name: 'Patanjali Kesh Kanti Hair Cleanser',
      brand: 'Patanjali',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858309/51NwAh3MokL_angf9y.jpg',
      rating: 6,
      ingredients: [
        { name: 'Shikakai', riskLevel: 2, concerns: ['May be drying for certain hair types'] },
        { name: 'Neem', riskLevel: 2, concerns: ['Strong smell may not be suitable for everyone'] },
      ],
    },
    {
      id: '61',
      name: 'Kama Ayurveda Rose Water',
      brand: 'Kama Ayurveda',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858327/67ae43a8906014831154_1_hkgjs2.jpg',
      rating: 3,
      ingredients: [
        { name: 'Rose Water', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '62',
      name: 'Just Herbs Green Tea Skin Toner',
      brand: 'Just Herbs',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858357/just-herbs-kumuda-sacred-lotus-green-tea-skin-recovery-toner-all-skin-types-100-ml_7_display_1607576980_787d8904_ddatn9.jpg',
      rating: 4,
      ingredients: [
        { name: 'Green Tea Extract', riskLevel: 1, concerns: [] },
        { name: 'Cucumber Extract', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '63',
      name: 'Kama Ayurveda Kumkumadi Miraculous Beauty Fluid',
      brand: 'Kama Ayurveda',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858382/61pBnfosd1L_xxv63j.jpg',
      rating: 6,
      ingredients: [
        { name: 'Saffron', riskLevel: 2, concerns: ['May cause irritation for sensitive skin'] },
        { name: 'Almond Oil', riskLevel: 2, concerns: ['May clog pores for some skin types'] },
      ],
    },
    {
      id: '64',
      name: 'Himalaya Herbals Revitalizing Night Cream',
      brand: 'Himalaya Herbals',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858405/revitalizing-night-cream_nbzuf6.jpg',
      rating: 5,
      ingredients: [
        { name: 'Ashvagandha', riskLevel: 2, concerns: ['Can cause irritation in some cases'] },
        { name: 'Almond Oil', riskLevel: 2, concerns: ['May clog pores'] },
      ],
    },
    {
      id: '65',
      name: 'Khadi Natural Amla and Bhringraj Hair Oil',
      brand: 'Khadi Natural',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858432/Artboard1copy_1018edea-96c5-4bed-94af-ea3eaa1838f0_jai37t.jpg',
      rating: 4,
      ingredients: [
        { name: 'Amla', riskLevel: 1, concerns: [] },
        { name: 'Bhringraj', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '66',
      name: 'Biotique Bio Saffron Dew Whitening Day Cream',
      brand: 'Biotique',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858454/71WepLDJmUL_jfecg2.jpg',
      rating: 7,
      ingredients: [
        { name: 'Saffron', riskLevel: 3, concerns: ['May cause skin sensitivity'] },
        { name: 'Carrot Seed Oil', riskLevel: 2, concerns: ['Can cause mild irritation'] },
      ],
    },
    {
      id: '67',
      name: 'Ayur Herbal Aloe Vera Gel',
      brand: 'Ayur Herbal',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858498/astringent-500ml_rr6hdi.jpg',
      rating: 2,
      ingredients: [
        { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '68',
      name: 'Patanjali Divya Kanti Lep',
      brand: 'Patanjali',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858517/patanjali_divya_kantilep_50gm_0_rpjocr.jpg',
      rating: 5,
      ingredients: [
        { name: 'Sandalwood', riskLevel: 1, concerns: [] },
        { name: 'Turmeric', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '69',
      name: 'Kama Ayurveda Anti-Acne Oil',
      brand: 'Kama Ayurveda',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858546/61Efr_Un75L_rofewk.jpg',
      rating: 7,
      ingredients: [
        { name: 'Tea Tree Oil', riskLevel: 3, concerns: ['May cause dryness or irritation for sensitive skin'] },
        { name: 'Neem', riskLevel: 2, concerns: ['Can cause dryness or irritation for some skin types'] },
      ],
    },
    {
      id: '70',
      name: 'Khadi Natural Lavender and Ylang Ylang Soap',
      brand: 'Khadi Natural',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858574/b00afrvibs-khadi-natural-lavender-ylang-ylang-with-lavender-flowers-soap-herbal-soap-for-soft-skin-herbal-soap-with-essential-oil-handmade-bathing-soap-suitable-for-all-skin-types-100gm-0-320x320w_ecwx9a.jpg',
      rating: 4,
      ingredients: [
        { name: 'Lavender Oil', riskLevel: 1, concerns: [] },
        { name: 'Ylang Ylang Oil', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '71',
      name: 'Himalaya Herbals Refreshing Face Wash',
      brand: 'Himalaya Herbals',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858597/Himalaya_Herbal_Gentle_Refreshing_Face_Wash_400x400_qdviif.jpg',
      rating: 5,
      ingredients: [
        { name: 'Cucumber', riskLevel: 1, concerns: [] },
        { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
      ],
    },
    {
      id: '72',
      name: 'Khadi Natural Aloe Vera and Cucumber Soap',
      brand: 'Khadi Natural',
      category: 'Ayurvedic & Herbal',
      image: 'https://res.cloudinary.com/df0w1pbso/image/upload/v1734858623/Artboard1copy_8577eb16-45f3-4401-a2a9-d9101da1e5dd_wqa7ur.jpg',
      rating: 3,
      ingredients: [
        { name: 'Aloe Vera', riskLevel: 1, concerns: [] },
        { name: 'Cucumber', riskLevel: 1, concerns: [] },
      ],
    },
  ];