import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-retrieve-product',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './retrieve-product.component.html',
  styleUrls: ['./retrieve-product.component.css']
})
export class RetrieveProductComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['productName', 'productType', 'productCategory'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}