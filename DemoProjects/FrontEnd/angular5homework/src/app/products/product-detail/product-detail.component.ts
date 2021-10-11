import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {ProductsService} from '../../shared/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  addMode: boolean = true;
  myFBFormGroup: FormGroup;
  editProductName: string;

  constructor(
    private ar: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private ps: ProductsService
  ) { }

  ngOnInit() {
    this.myFBFormGroup = this.fb.group({
      name: '',
      brand: '',
      price: 0,
      stock: 0,
      image: ''
    });
    this.editProductName = this.ar.snapshot.params.name;
    if (this.editProductName) {
      this.addMode = false;
    }
    this.ps.getProduct(this.editProductName)
      .subscribe(p=> {
        if(p) {
          this.myFBFormGroup.setValue(p);
          this.myFBFormGroup.get('name').disable();
        }
      });
  }

  onSubmit() {
    if (this.myFBFormGroup.valid) {
      if (this.addMode) {
        this.ps.postProducts(this.myFBFormGroup.value)
          .subscribe(res => {
            this.router.navigate(['/products']);
          });
      } else {
        this.ps.putProducts(this.myFBFormGroup.value)
          .subscribe(res => {
            this.router.navigate(['/products']);
          });
      }
    } else {
      return false;
    }
  }

  onCancel() {
    this.router.navigate(['/products']);
  }

}
