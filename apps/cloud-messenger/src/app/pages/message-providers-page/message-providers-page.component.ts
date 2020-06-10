import { Component, OnInit } from '@angular/core';
import { FilterConfig, FilterCriteria } from '@nxworks/ui';

@Component({
  selector: 'nxworks-message-providers-page',
  templateUrl: './message-providers-page.component.html',
  styleUrls: ['./message-providers-page.component.scss']
})
export class MessageProvidersPageComponent implements OnInit {

  public filterCriteriaList: FilterCriteria[];
  
  public filterConfig:FilterConfig = {
    filterAttributes:[
      { attribute: "Test1", operators: ["eq", "ne"]},
      { attribute: "Test2", operators: ["eq", "gte"]},
      { attribute: "Test3", operators: ["eq", "lte"]},
    ]
  }

  constructor() { 
    this.filterCriteriaList = [];
  }

  ngOnInit(): void {    
  }

}
