export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: string;
  oldPrice: string;
  numericPrice: number;
  discount: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  sku: string;
  inStock: boolean;
  stockCount: number;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  fit: string;
  fabric: string;
  care: string[];
  tags: string[];
}

export const products: Product[] = [
  {
    id: 'cotton-twill-tapered-chino',
    name: 'Cotton Twill Tapered Chino',
    category: 'Casual Wear',
    subcategory: 'Pants & Chinos',
    price: '₹4,760',
    oldPrice: '₹5,950',
    numericPrice: 4760,
    discount: '-20%',
    badge: 'Popular',
    rating: 4.9,
    reviewsCount: 48,
    sku: 'EQ-CHINO-01',
    inStock: true,
    stockCount: 5,
    images: [
      'https://images.pexels.com/photos/8069692/pexels-photo-8069692.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/37770976/pexels-photo-37770976.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/38670695/pexels-photo-38670695.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Olive Green', hex: '#556b2f' },
      { name: 'Khaki Beige', hex: '#c3b091' },
      { name: 'Charcoal Grey', hex: '#36454f' },
      { name: 'Navy Blue', hex: '#000080' },
    ],
    sizes: ['30', '32', '34', '36', '38'],
    description:
      'Engineered for everyday versatility, our Cotton Twill Tapered Chino blends refined tailoring with effortless comfort. Designed with a structured waistband, custom branded horn buttons, and a streamlined leg that gently tapers towards the hem.',
    fit: 'Modern Tapered Fit — Sits comfortably on the waist with ease through the thigh and slim leg opening. Model is 6’1” (185 cm) wearing size 32.',
    fabric: '98% Long-Staple Combed Cotton, 2% Elastane for breathable 2-way flex.',
    care: [
      'Machine wash cold inside out with like colors',
      'Do not bleach or soak',
      'Tumble dry low or hang dry in shade',
      'Warm iron on reverse side if needed',
    ],
    tags: ['Chinos', 'Casual', 'Best Seller', 'Pants'],
  },
  {
    id: 'cotton-twill-straight-chino',
    name: 'Cotton Twill Straight Chino',
    category: 'Casual Wear',
    subcategory: 'Pants & Chinos',
    price: '₹4,760',
    oldPrice: '₹5,950',
    numericPrice: 4760,
    discount: '-20%',
    badge: 'Sale',
    rating: 4.8,
    reviewsCount: 32,
    sku: 'EQ-CHINO-02',
    inStock: true,
    stockCount: 8,
    images: [
      'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/8069692/pexels-photo-8069692.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/38670695/pexels-photo-38670695.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/37770976/pexels-photo-37770976.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Stone Grey', hex: '#928e85' },
      { name: 'Desert Tan', hex: '#d2b48c' },
      { name: 'Midnight Black', hex: '#111111' },
    ],
    sizes: ['30', '32', '34', '36', '38'],
    description:
      'A classic straight-leg silhouette updated with an artisanal micro-sanded finish for an ultra-soft hand feel. Pair with a relaxed knit or button-down shirt for effortless daytime styling.',
    fit: 'Straight Regular Fit — Classic cut with generous ease through knee and hem. Model is 6’0” wearing size 32.',
    fabric: '100% Pre-Shrunk Egyptian Cotton Twill (280 GSM).',
    care: [
      'Machine wash cold gentle cycle',
      'Wash with dark colors separately',
      'Do not tumble dry',
      'Medium heat iron',
    ],
    tags: ['Straight Chino', 'Casual', 'Classic'],
  },
  {
    id: 'knit-straight-trouser',
    name: 'Knit Straight Trouser',
    category: 'Formal Wear',
    subcategory: 'Trousers',
    price: '₹5,160',
    oldPrice: '₹6,450',
    numericPrice: 5160,
    discount: '-20%',
    badge: 'Trending',
    rating: 4.9,
    reviewsCount: 29,
    sku: 'EQ-TRSR-03',
    inStock: true,
    stockCount: 4,
    images: [
      'https://images.pexels.com/photos/37770976/pexels-photo-37770976.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/38670695/pexels-photo-38670695.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/8069692/pexels-photo-8069692.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Muted Espresso', hex: '#4a3728' },
      { name: 'Heather Grey', hex: '#7d7f7d' },
      { name: 'Dark Navy', hex: '#1b263b' },
    ],
    sizes: ['30', '32', '34', '36'],
    description:
      'Seamlessly crossing the boundary between bespoke tailoring and lounge comfort. Our Knit Straight Trouser features double welt back pockets, a semi-elasticated inner waistband, and crisp pressed front creases.',
    fit: 'Tailored Straight Fit — Sharp formal appearance with hidden stretch. Model is 6’2” wearing size 32.',
    fabric: '68% Rayon Viscose, 27% Polyamide, 5% Spandex Ponte di Roma.',
    care: [
      'Dry clean recommended or machine wash cold in laundry bag',
      'Lay flat to dry',
      'Cool iron using a pressing cloth',
    ],
    tags: ['Formal', 'Trousers', 'Knit', 'Comfort'],
  },
  {
    id: 'tailored-formal-blazer',
    name: 'Tailored Wool-Blend Formal Blazer',
    category: 'Formal Wear',
    subcategory: 'Blazers & Suits',
    price: '₹11,960',
    oldPrice: '₹14,950',
    numericPrice: 11960,
    discount: '-20%',
    badge: 'Exclusive',
    rating: 5.0,
    reviewsCount: 52,
    sku: 'EQ-BLZR-04',
    inStock: true,
    stockCount: 3,
    images: [
      'https://images.pexels.com/photos/9464234/pexels-photo-9464234.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/4611666/pexels-photo-4611666.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Charcoal Herringbone', hex: '#33373b' },
      { name: 'Navy Glen Check', hex: '#1c2d42' },
      { name: 'Classic Camel', hex: '#c19a6b' },
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    description:
      'Crafted from a luxurious Italian wool-rich blend, this single-breasted two-button blazer exemplifies Equator’s commitment to thoughtful tailoring. Features notch lapels, pick-stitch detailing, functional interior passport pockets, and a silk-soft cupro lining.',
    fit: 'Structured Slim Fit — Defined shoulders and trimmed waist for a sculpted silhouette. Model is 6’1” wearing size 40R.',
    fabric: '70% Fine Merino Wool, 28% Poly, 2% Elastane. Lining: 100% Cupro.',
    care: [
      'Professional dry clean only',
      'Do not wash with water',
      'Store on wide-shoulder contoured wooden hanger',
      'Steam lightly to refresh',
    ],
    tags: ['Blazer', 'Formal', 'Wool', 'Luxury'],
  },
  {
    id: 'cotton-crew-neck-sweatshirt',
    name: 'Cotton Crew Neck Sweatshirt',
    category: 'Winter / Outerwear',
    subcategory: 'Sweatshirts',
    price: '₹3,960',
    oldPrice: '₹4,950',
    numericPrice: 3960,
    discount: '-20%',
    badge: 'Winter / 26',
    rating: 4.8,
    reviewsCount: 41,
    sku: 'EQ-SWT-05',
    inStock: true,
    stockCount: 12,
    images: [
      'https://images.pexels.com/photos/15353312/pexels-photo-15353312.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/4118957/pexels-photo-4118957.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/8069692/pexels-photo-8069692.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Oatmeal Heather', hex: '#d6cfc4' },
      { name: 'Forest Moss', hex: '#3d4f3b' },
      { name: 'Washed Black', hex: '#232323' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'A heavyweight 420 GSM loopback French terry crewneck engineered for crisp drape and longevity. Features ribbed triangular collar insert, durable flatlock stitching, and resilient rib cuffs.',
    fit: 'Relaxed Boxy Fit — Dropped shoulders and slightly cropped body length. Model is 6’0” wearing size L.',
    fabric: '100% Organic Loopback French Terry Cotton (420 GSM).',
    care: [
      'Machine wash cold with gentle detergent',
      'Reshape while damp',
      'Dry flat in shade',
      'Do not dry clean',
    ],
    tags: ['Sweatshirt', 'Winter', 'Streetwear', 'Casual'],
  },
  {
    id: 'space-pullover-hoodie',
    name: 'Space Pullover Heavyweight Hoodie',
    category: 'Winter / Outerwear',
    subcategory: 'Hoodies',
    price: '₹4,760',
    oldPrice: '₹5,950',
    numericPrice: 4760,
    discount: '-20%',
    badge: 'Hot Drop',
    rating: 4.9,
    reviewsCount: 65,
    sku: 'EQ-HOD-06',
    inStock: true,
    stockCount: 9,
    images: [
      'https://images.pexels.com/photos/4118957/pexels-photo-4118957.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/15353312/pexels-photo-15353312.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/4862895/pexels-photo-4862895.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Space Ash Grey', hex: '#5b616a' },
      { name: 'Midnight Onyx', hex: '#1a1a1a' },
      { name: 'Dusty Clay', hex: '#a67b5b' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Engineered with double-layered crossover hood and zero exterior drawstrings for a sleek minimalist appearance. Kangaroo pocket with reinforced bar-tacks and soft brushed fleece interior for winter warmth.',
    fit: 'Oversized Contemporary Fit. Model is 6’1” wearing size L.',
    fabric: '80% Combed Cotton, 20% Brushed Poly Fleece (450 GSM).',
    care: [
      'Turn garment inside out before washing',
      'Machine wash gentle at 30°C',
      'Hang dry away from direct heat',
    ],
    tags: ['Hoodie', 'Winter', 'Heavyweight', 'Fleece'],
  },
  {
    id: 'twill-half-zip-sweatshirt',
    name: 'Twill Half Zip Sweatshirt',
    category: 'Winter / Outerwear',
    subcategory: 'Sweaters',
    price: '₹3,960',
    oldPrice: '₹4,950',
    numericPrice: 3960,
    discount: '-20%',
    badge: 'Staff Pick',
    rating: 4.7,
    reviewsCount: 24,
    sku: 'EQ-ZIP-07',
    inStock: true,
    stockCount: 6,
    images: [
      'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/8069692/pexels-photo-8069692.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/15353312/pexels-photo-15353312.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/4118957/pexels-photo-4118957.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Deep Sage', hex: '#4f5d52' },
      { name: 'French Navy', hex: '#162238' },
      { name: 'Ecru Off-White', hex: '#f0ece1' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Combining sport heritage with minimalist luxury, this high-collar half-zip pullovers features custom antique metal YKK hardware and twill shoulder reinforcement panels.',
    fit: 'Regular Tailored Fit — Layer comfortably over tees or under topcoats.',
    fabric: '100% Premium Compact Pique Cotton (360 GSM).',
    care: [
      'Close zipper before washing',
      'Cold machine wash',
      'Cool iron',
    ],
    tags: ['Half Zip', 'Sweatshirt', 'Casual', 'Layering'],
  },
  {
    id: 'merino-wool-ribbed-sweater',
    name: 'Merino Wool Ribbed Turtleneck Sweater',
    category: 'Winter / Outerwear',
    subcategory: 'Sweaters',
    price: '₹6,360',
    oldPrice: '₹7,950',
    numericPrice: 6360,
    discount: '-20%',
    badge: 'Premium',
    rating: 5.0,
    reviewsCount: 38,
    sku: 'EQ-SWTR-08',
    inStock: true,
    stockCount: 4,
    images: [
      'https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/9464234/pexels-photo-9464234.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/4611666/pexels-photo-4611666.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Ivory Cream', hex: '#fdfbf7' },
      { name: 'Chestnut Brown', hex: '#63422d' },
      { name: 'Ink Black', hex: '#181818' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Spun from 100% extra-fine Australian Merino wool (19.5 micron), naturally breathable and temperature regulating. 7-gauge fisherman rib stitch provides thermal loft without excessive bulk.',
    fit: 'Tailored Knit Fit — Hugs shoulders and falls cleanly around hips.',
    fabric: '100% Extra-Fine Merino Wool.',
    care: [
      'Hand wash cold with wool shampoo',
      'Do not wring or twist',
      'Dry flat on clean towel',
    ],
    tags: ['Knitwear', 'Merino Wool', 'Turtleneck', 'Winter'],
  },
  {
    id: 'oxford-cotton-formal-shirt',
    name: 'Premium Oxford Cotton Formal Shirt',
    category: 'Formal Wear',
    subcategory: 'Formal Shirts',
    price: '₹3,560',
    oldPrice: '₹4,450',
    numericPrice: 3560,
    discount: '-20%',
    badge: 'Essentials',
    rating: 4.9,
    reviewsCount: 56,
    sku: 'EQ-SHIRT-09',
    inStock: true,
    stockCount: 15,
    images: [
      'https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/9464234/pexels-photo-9464234.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/4611666/pexels-photo-4611666.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Crisp White', hex: '#ffffff' },
      { name: 'Sky Blue', hex: '#87ceeb' },
      { name: 'Micro Stripe Blue', hex: '#5a738e' },
      { name: 'Soft Lilac', hex: '#b695c0' },
    ],
    sizes: ['15', '15.5', '16', '16.5', '17'],
    description:
      'The quintessential formal dress shirt. Woven from 100-ply double twisted Egyptian Giza cotton with an easy-iron treatment. Features semi-spread collar with removable brass stays, single mitred cuffs, and mother-of-pearl buttons.',
    fit: 'Slim Executive Fit — Clean silhouette designed to stay neatly tucked.',
    fabric: '100% Giza Long-Staple Cotton with Easy-Care finish.',
    care: [
      'Warm machine wash at 40°C',
      'Hang to dry immediately to minimize ironing',
      'Hot iron while slightly damp',
    ],
    tags: ['Formal Shirt', 'Oxford', 'Office', 'Business'],
  },
  {
    id: 'heritage-field-jacket',
    name: 'Heritage Weatherproof Field Jacket',
    category: 'Winter / Outerwear',
    subcategory: 'Jackets',
    price: '₹9,560',
    oldPrice: '₹11,950',
    numericPrice: 9560,
    discount: '-20%',
    badge: 'Limited Edition',
    rating: 5.0,
    reviewsCount: 31,
    sku: 'EQ-JCKT-10',
    inStock: true,
    stockCount: 3,
    images: [
      'https://images.pexels.com/photos/4611666/pexels-photo-4611666.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/17459777/pexels-photo-17459777.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/9464234/pexels-photo-9464234.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'British Racing Green', hex: '#004225' },
      { name: 'Tuscan Tan', hex: '#b38b6d' },
      { name: 'Matte Charcoal', hex: '#2b2b2b' },
    ],
    sizes: ['M', 'L', 'XL'],
    description:
      'A rugged yet sophisticated outerwear staple. Constructed with a dry-wax water-repellent cotton shell, tartan lining, corduroy-lined stand collar, storm flap zip closure, and 4 bellow utility pockets.',
    fit: 'Utility Regular Fit — Allows ample room for a chunky knit beneath.',
    fabric: 'Waxed Cotton Canvas (340 GSM). Lining: 100% Tartan Cotton.',
    care: [
      'Do not machine wash or dry clean',
      'Sponge clean with cold water only',
      'Rewax annually with garment wax',
    ],
    tags: ['Jackets', 'Field Jacket', 'Weatherproof', 'Heritage'],
  },
  {
    id: 'pure-linen-casual-shirt',
    name: 'Pure French Linen Casual Shirt',
    category: 'Casual Wear',
    subcategory: 'Casual Shirts',
    price: '₹3,760',
    oldPrice: '₹4,700',
    numericPrice: 3760,
    discount: '-20%',
    badge: 'New In',
    rating: 4.8,
    reviewsCount: 19,
    sku: 'EQ-LINEN-11',
    inStock: true,
    stockCount: 7,
    images: [
      'https://images.pexels.com/photos/35009242/pexels-photo-35009242.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/36013228/pexels-photo-36013228.png?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/17459777/pexels-photo-17459777.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/4118957/pexels-photo-4118957.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Natural Sand', hex: '#d8c8b8' },
      { name: 'Pastel Sage', hex: '#9eb29a' },
      { name: 'Ocean Mist', hex: '#8cb1bc' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Garment-washed French flax linen delivering lived-in softness from day one. Styled with a casual band collar, curved hem, and relaxed sleeve cuffs designed to be rolled up.',
    fit: 'Easy Casual Fit — Relaxed through the chest with an airy drape.',
    fabric: '100% Certified French Normandy Flax Linen.',
    care: [
      'Cold gentle wash',
      'Air dry in breeze',
      'Iron damp or embrace the natural linen texture',
    ],
    tags: ['Linen', 'Casual Shirt', 'Breathable', 'Resort'],
  },
  {
    id: 'selvedge-stretch-denim-jeans',
    name: 'Raw Indigo Selvedge Stretch Denim',
    category: 'Casual Wear',
    subcategory: 'Jeans & Denim',
    price: '₹5,560',
    oldPrice: '₹6,950',
    numericPrice: 5560,
    discount: '-20%',
    badge: 'Raw Denim',
    rating: 4.9,
    reviewsCount: 44,
    sku: 'EQ-DNM-12',
    inStock: true,
    stockCount: 6,
    images: [
      'https://images.pexels.com/photos/38670695/pexels-photo-38670695.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/37770976/pexels-photo-37770976.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/8069692/pexels-photo-8069692.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Raw Deep Indigo', hex: '#17223b' },
      { name: 'Washed Charcoal', hex: '#3d3d3d' },
    ],
    sizes: ['30', '32', '34', '36'],
    description:
      'Woven on traditional shuttle looms with red-line selvedge ticker along the outseam. Custom antique copper rivets, button fly, and vegetable-tanned leather patch on the waistband.',
    fit: 'Slim Straight Fit — Mid rise with a clean leg line.',
    fabric: '99% Ringspun Cotton, 1% Comfort Stretch (13.5 oz Selvedge).',
    care: [
      'Wash rarely to achieve custom personal fade marks',
      'Cold wash inside out',
      'Hang dry only',
    ],
    tags: ['Denim', 'Jeans', 'Selvedge', 'Indigo'],
  },
  {
    id: 'washed-vintage-fleece-crewneck',
    name: 'Washed Vintage Fleece Crewneck',
    category: 'Winter / Outerwear',
    subcategory: 'Sweatshirts',
    price: '₹3,760',
    oldPrice: '₹4,700',
    numericPrice: 3760,
    discount: '-20%',
    badge: 'Winter / 26',
    rating: 4.8,
    reviewsCount: 36,
    sku: 'EQ-SWT-13',
    inStock: true,
    stockCount: 8,
    images: [
      'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/15353312/pexels-photo-15353312.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/4118957/pexels-photo-4118957.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/8069692/pexels-photo-8069692.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Faded Cobalt', hex: '#3b5998' },
      { name: 'Heather Charcoal', hex: '#444444' },
      { name: 'Bone White', hex: '#eae6df' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Mineral garment-dyed crewneck offering an authentic sun-faded patina and broken-in warmth. Features heavyweight brushed fleece and rib-knit cuffs.',
    fit: 'Relaxed Drop-Shoulder Fit. Model is 6’1” wearing size L.',
    fabric: '100% Combed Heavy Cotton Fleece (400 GSM).',
    care: [
      'Machine wash cold with like colors',
      'Do not bleach',
      'Tumble dry low',
    ],
    tags: ['Sweatshirt', 'Fleece', 'Winter', 'Streetwear'],
  },
  {
    id: 'cable-knit-cashmere-sweater',
    name: 'Cable-Knit Cashmere Blend Sweater',
    category: 'Winter / Outerwear',
    subcategory: 'Sweaters',
    price: '₹7,160',
    oldPrice: '₹8,950',
    numericPrice: 7160,
    discount: '-20%',
    badge: 'Winter / 26',
    rating: 4.9,
    reviewsCount: 42,
    sku: 'EQ-SWTR-14',
    inStock: true,
    stockCount: 5,
    images: [
      'https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/4611666/pexels-photo-4611666.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/9464234/pexels-photo-9464234.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Oatmeal Melange', hex: '#d9d2c9' },
      { name: 'Smoky Charcoal', hex: '#383838' },
      { name: 'Rich Pine', hex: '#1c3b2b' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Timeless heritage cable-knit silhouette knitted with 10% Mongolian cashmere and 90% Australian merino wool. Soft, lofty, and insulating.',
    fit: 'Classic Tailored Fit. Model is 6’0” wearing size M.',
    fabric: '90% Merino Wool, 10% Cashmere.',
    care: [
      'Hand wash cold or gentle dry clean',
      'Dry flat in shade',
      'Do not wring',
    ],
    tags: ['Knitwear', 'Cashmere', 'Sweaters', 'Winter'],
  },
  {
    id: 'classic-spread-collar-dress-shirt',
    name: 'Classic Spread-Collar Luxury Dress Shirt',
    category: 'Formal Wear',
    subcategory: 'Formal Shirts',
    price: '₹3,960',
    oldPrice: '₹4,950',
    numericPrice: 3960,
    discount: '-20%',
    badge: 'Year Round',
    rating: 4.9,
    reviewsCount: 39,
    sku: 'EQ-SHIRT-15',
    inStock: true,
    stockCount: 10,
    images: [
      'https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/9464234/pexels-photo-9464234.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/35009242/pexels-photo-35009242.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Pristine White', hex: '#ffffff' },
      { name: 'Ice Blue', hex: '#a8c5db' },
      { name: 'Graphite Pinpoint', hex: '#525b68' },
    ],
    sizes: ['15', '15.5', '16', '16.5', '17'],
    description:
      'Impeccably tailored from 120s two-ply superfine Egyptian cotton with natural luster and crease recovery. Styled with Italian cutaway collar.',
    fit: 'Contemporary Slim Fit. Model is 6’1” wearing size 15.5.',
    fabric: '100% Superfine Two-Ply Egyptian Cotton (120s).',
    care: [
      'Machine wash warm gentle cycle',
      'Hang to dry immediately',
      'Steam or medium hot iron',
    ],
    tags: ['Formal Shirt', 'Spread Collar', 'Suits', 'Business'],
  },
  {
    id: 'double-breasted-italian-wool-blazer',
    name: 'Double-Breasted Italian Wool Blazer',
    category: 'Formal Wear',
    subcategory: 'Blazers & Suits',
    price: '₹13,560',
    oldPrice: '₹16,950',
    numericPrice: 13560,
    discount: '-20%',
    badge: 'Exclusive',
    rating: 5.0,
    reviewsCount: 33,
    sku: 'EQ-BLZR-16',
    inStock: true,
    stockCount: 4,
    images: [
      'https://images.pexels.com/photos/9464234/pexels-photo-9464234.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/4611666/pexels-photo-4611666.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: [
      { name: 'Midnight Navy', hex: '#111e33' },
      { name: 'Charcoal Black', hex: '#222222' },
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    description:
      'A masterclass in sartorial tailoring. 6x2 double-breasted closure with peak lapels, horn buttons, dual vents, and fully cantered canvas chest construction.',
    fit: 'Tailored Structured Fit. Model is 6’2” wearing size 40R.',
    fabric: '100% Super 130s Italian Virgin Wool. Lining: 100% Bemberg Cupro.',
    care: [
      'Professional dry clean only',
      'Store in breathable garment bag on contoured wooden hanger',
    ],
    tags: ['Blazer', 'Double Breasted', 'Wool', 'Formal', 'Tailoring'],
  },
];

export interface CollectionInfo {
  slug: string;
  name: string;
  season: string;
  description: string;
  bannerImage: string;
  productIds: string[];
}

export const collections: Record<string, CollectionInfo> = {
  'sweatshirts': {
    slug: 'sweatshirts',
    name: 'Sweatshirts & Hoodies',
    season: 'webnibo Winter / 26',
    description: 'Heavyweight organic French terry and plush loopback fleece crafted with dropped shoulders and minimalist tailoring for the winter season.',
    bannerImage: 'https://images.pexels.com/photos/10482937/pexels-photo-10482937.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    productIds: [
      'cotton-crew-neck-sweatshirt',
      'space-pullover-hoodie',
      'twill-half-zip-sweatshirt',
      'washed-vintage-fleece-crewneck',
      'heritage-field-jacket',
      'cotton-twill-tapered-chino',
    ],
  },
  'sweaters-and-knitwear': {
    slug: 'sweaters-and-knitwear',
    name: 'Sweaters & Knitwear',
    season: 'webnibo Winter / 26',
    description: 'Extra-fine Australian merino wool and cashmere blends engineered with tactile rib-stitches and breathable thermal regulation.',
    bannerImage: 'https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    productIds: [
      'merino-wool-ribbed-sweater',
      'cable-knit-cashmere-sweater',
      'twill-half-zip-sweatshirt',
      'knit-straight-trouser',
      'cotton-twill-straight-chino',
      'tailored-formal-blazer',
    ],
  },
  'formal-shirts-and-suits': {
    slug: 'formal-shirts-and-suits',
    name: 'Formal Shirts & Suits',
    season: 'webnibo Year Round',
    description: 'Crisp Egyptian Giza cotton dress shirts, pick-stitched blazers, and sharp tailored trousers engineered for executive distinction.',
    bannerImage: 'https://images.pexels.com/photos/10040313/pexels-photo-10040313.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    productIds: [
      'oxford-cotton-formal-shirt',
      'classic-spread-collar-dress-shirt',
      'tailored-formal-blazer',
      'double-breasted-italian-wool-blazer',
      'knit-straight-trouser',
      'cotton-twill-tapered-chino',
    ],
  },
  'blazers-and-tailoring': {
    slug: 'blazers-and-tailoring',
    name: 'Blazers & Tailoring',
    season: 'webnibo Winter / 26',
    description: 'Bespoke-inspired Italian wool blazers, structured shoulders, and refined double-breasted silhouettes designed for modern elegance.',
    bannerImage: 'https://images.pexels.com/photos/9464234/pexels-photo-9464234.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    productIds: [
      'tailored-formal-blazer',
      'double-breasted-italian-wool-blazer',
      'knit-straight-trouser',
      'oxford-cotton-formal-shirt',
      'cotton-twill-tapered-chino',
      'classic-spread-collar-dress-shirt',
    ],
  },
};

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  const current = getProductById(currentId);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== currentId)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}

export function getCollectionBySlug(slug: string): CollectionInfo | undefined {
  const normalized = slug.toLowerCase().trim();
  if (collections[normalized]) return collections[normalized];
  if (normalized === 'sweaters-knitwear' || normalized === 'knitwear') return collections['sweaters-and-knitwear'];
  if (normalized === 'formal-shirts-suits' || normalized === 'formal-shirts') return collections['formal-shirts-and-suits'];
  if (normalized === 'blazers-tailoring' || normalized === 'blazers') return collections['blazers-and-tailoring'];
  return undefined;
}

export function getProductsByCollection(slug: string): Product[] {
  const collection = getCollectionBySlug(slug);
  if (collection) {
    const list = collection.productIds
      .map((id) => getProductById(id))
      .filter((p): p is Product => Boolean(p));
    if (list.length > 0) return list;
  }
  const clean = slug.toLowerCase().replace(/-/g, ' ');
  const matched = products.filter(
    (p) =>
      p.category.toLowerCase().includes(clean) ||
      p.subcategory.toLowerCase().includes(clean) ||
      p.tags.some((t) => t.toLowerCase().includes(clean))
  );
  return matched.length > 0 ? matched : products.slice(0, 8);
}
