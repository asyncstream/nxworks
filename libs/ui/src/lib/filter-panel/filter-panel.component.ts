import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {FilterDialogComponent} from '../filter-dialog/filter-dialog.component'
import { FilterCriteria, FilterConfig } from '../model/filter-config';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'nxworks-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @Input() criteriaList: FilterCriteria[];
  
  @Input() filterConfig: FilterConfig;

  removable = true;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {     
  }

  ngOnInit(): void {
    console.log(this.criteriaList);
  }


  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Filter Criteria',
      filterConfig: this.filterConfig
    };

    const dialogRef = this.dialog.open(FilterDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {    
          if(data){
            if(!this.isCriteriaExists(data.hash)){
              this.criteriaList.push(data);
            }else {
              this.snackBar.open('Filter criteria already exists', 'Undo', {
                duration: 2000,
              });
            }  
          }
        }
    );  
}

isCriteriaExists(hash:number): boolean{
  let isExist = false;
  this.criteriaList.forEach(it => {
    if(it.hash === hash){
      isExist = true;
    }
  });
  return isExist;
}

remove(criteria: FilterCriteria): void {
  const index = this.criteriaList.indexOf(criteria);

  if (index >= 0) {
    this.criteriaList.splice(index, 1);
  }
}
  

}
