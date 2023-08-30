import { getProductById } from '@/services/product.service';
import { cache } from 'react';
import 'server-only';


const getSingleProduct = cache(getProductById)

export default getSingleProduct;