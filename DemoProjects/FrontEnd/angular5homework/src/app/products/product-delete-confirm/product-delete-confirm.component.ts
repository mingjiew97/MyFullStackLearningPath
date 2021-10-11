import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-product-delete-confirm',
  templateUrl: './product-delete-confirm.component.html',
  styleUrls: ['./product-delete-confirm.component.scss']
})
export class ProductDeleteConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductDeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }
}
