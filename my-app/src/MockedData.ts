import { Products } from './ProductItems/ProductItemss'
// import brallorPic from './ProductItems/ProductImage/byxorPlaceholder.jpg'
import coatPic from './ProductItems/ProductImage/leopard-coat.jpg';
import blazerPic from './ProductItems/ProductImage/blazer.jpg';
import bootsPic from './ProductItems/ProductImage/boots.jpg';
import sunglassesPic from './ProductItems/ProductImage/sunglasses.jpg';
import sneakersPic from './ProductItems/ProductImage/sneakers.jpg';
import jacketPic from './ProductItems/ProductImage/jacket.jpg'

export const mockedProducts: Products[] = [ 
{
    id: 1,
    name: 'Leopard Print Coat',
    description: 'Leopard print coat with neon accents.',
    price: '299',
    image: coatPic,
    quantity: 1
},
{
    id: 2,
    name: 'Round Sunglasses',
    description: 'Round, yellow sunglasses with a silver frame.',
    price: '279',
    image: sunglassesPic,
    quantity: 1
},
{
    id: 3,
    name: 'New Balance X-90 Pink',
    description: 'New Balance sneakers model X-90 in pale pink.',
    price: '599',
    image: sneakersPic,
    quantity: 1
},
{
    id: 4,
    name: 'Lounge Blazer',
    description: 'A slouchy, lounge blazer in cerise pink.',
    price: '449',
    image: blazerPic,
    quantity: 1
},
{
    id: 5,
    name: 'Satin Boots',
    description: 'A pair of boots in a cerise pink, made of smooth satin.',
    price: '389',
    image: bootsPic,
    quantity: 1
},
{
    id: 6,
    name: 'Gold Bomber Jacket',
    description: 'An oversized bomber jacket in a sparkly gold.',
    price: '629',
    image: jacketPic,
    quantity: 1
},
]
