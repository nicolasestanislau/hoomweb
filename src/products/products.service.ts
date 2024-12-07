import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [];

  create(product: any) {
    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  update(id: number, updateProductDto: any) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      return null;
    }
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updateProductDto,
    };
    return this.products[productIndex];
  }

  remove(id: number) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) {
      return null;
    }
    const product = this.products[productIndex];
    this.products.splice(productIndex, 1);
    return product;
  }
}
