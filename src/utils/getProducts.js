import 'server-only';


import { cache } from 'react';
import { getProductFromDb } from '@/services/product.service';

const getProducts = cache(getProductFromDb)

export default getProducts;