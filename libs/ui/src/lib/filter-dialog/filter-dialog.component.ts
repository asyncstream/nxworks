import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterConfig } from '../model/filter-config';

@Component({
  selector: 'nxworks-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {

  public operators: string[];
  public filterConfig:FilterConfig;

  form: FormGroup;
  description:string;

  constructor( private fb: FormBuilder,
    private dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.description = data.description;
      this.filterConfig = data.filterConfig;
    }

  ngOnInit(): void {
    this.form = this.fb.group({
      attribute: [null, [Validators.required]],
      operator: [null,[Validators.required]],
      value: [null, [Validators.required]]
    });

  }

  save() {
      const hashVal = this.hashCode(JSON.stringify(this.form.value));
      const filterCriteria = {...this.form.value, hash:hashVal};
      this.dialogRef.close(filterCriteria);      
  }

  close() {
      this.dialogRef.close();
  }

  reloadOperators(){
    this.filterConfig.filterAttributes.forEach(it => {
      if(it.attribute === this.form.controls['attribute'].value){
        this.operators = it.operators;
      }
    });        
  }


  hashCode(s):number {
    let h;
    for(let i = 0; i < s.length; i++) {
      h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    }            
    return h;
  };
}
