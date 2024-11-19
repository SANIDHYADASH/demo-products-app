import { Injectable } from '@angular/core';

export interface Product {
  productName: string;
  productType: string;
  productCategory: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly STORAGE_KEY = 'products';

  saveProduct(product: Product): void {
    const products = this.getProducts();
    products.push(product);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
    
    // Generate JSON file for download
    const blob = new Blob([JSON.stringify(products, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  getProducts(): Product[] {
    const products = localStorage.getItem(this.STORAGE_KEY);
    return products ? JSON.parse(products) : [];
  }
}