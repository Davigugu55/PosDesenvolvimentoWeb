import {Product, ProductCategory} from "skeleton/dist/types";
import * as fs from 'fs';
import axios from 'axios';

const getProducts = async (): Promise<Product[]> => {
  try {
    const fileContents = fs.readFileSync('../base/products.json', 'utf-8');
    const products = JSON.parse(fileContents);

    // Exibe os produtos no console
    // console.log(products);
    console.log(products.length);

    return products;
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
    return [];
  }
};

const getAllowedCategory = async (product: Product) => {

  const response = await axios.get(`https://posdesweb.igormaldonado.com.br/api/allowedCategory?category=${product.category}`);

  console.log(`${product.id} - ${response.data.allowed} - ${product.category}`);

  return response.data.allowed;

}

const discardNotAllowedProducts = async (products: Product[]) => {

  const allowedProducts = [];
  for (const product of products) {
    if ( await getAllowedCategory(product) ) {
      allowedProducts.push(product);
    }else{
      // console.log(`Discarded ${product.id}`);
    }
  }
  return allowedProducts;
}

(async () => {
  const products = await getProducts();
  const allowedProducts = await discardNotAllowedProducts(products);

  fs.writeFileSync('../base/processed.json', JSON.stringify(allowedProducts.map(product => ({
    id: product.id,
    name: product.name
  })), null, 2));

  // console.log(allowedProducts);
  console.log(allowedProducts.length);
})();

const a: ProductCategory = ProductCategory.Moda;