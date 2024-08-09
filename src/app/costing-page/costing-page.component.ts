import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-costing-page',
  templateUrl: './costing-page.component.html',
  styleUrls: ['./costing-page.component.css']
})
export class CostingPageComponent {
  title = 'clone';
  inceptionDate!: any;
  lastDrawDown!: any;
  firstRepayment!: any;
  isFacility: boolean = false;
  collateralState: boolean = false;
  releaseDate: any = '03/14/2023';

  get showFacility() {
    if (!this.inceptionDate) return false;
    return moment(this.inceptionDate).isSameOrAfter(moment(this.releaseDate));
  }
  get showCollateralFactor() {
    if (!this.inceptionDate) return false;
    return moment(this.inceptionDate).isAfter(moment(this.releaseDate));
  }
  get isFacilityChecked(){
    return this.isFacility = !this.isFacility;
  }
  get validateLastDrawDown(){
    if (!this.lastDrawDown) return false;
    return moment(this.lastDrawDown).isSameOrAfter(moment(this.firstRepayment));
  }

  collaterals: any = [
    {value: 'acceptance', viewValue: 'Acceptance'},
    {value: 'breakdown', viewValue: 'Breakdown'},
  ];

  changeClient(value :any) {
    console.log(value); 
    if (value ==='acceptance'){
      this.collateralState  = true;
    }
    else{
      this.collateralState  = false;
    }
}
}
