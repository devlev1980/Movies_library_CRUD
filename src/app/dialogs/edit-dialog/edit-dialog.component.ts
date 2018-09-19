import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = new FormGroup({
      title: new FormControl(`${this.data.title}`, Validators.required),
      director: new FormControl(`${this.data.director}`, Validators.required),
      genre: new FormControl(`${this.data.genre}`, Validators.required),
      runtime: new FormControl(`${this.data.runtime}`, Validators.required),
      year: new FormControl(`${this.data.year}`, Validators.required),

    });
  }


  ngOnInit() {


  }


}
