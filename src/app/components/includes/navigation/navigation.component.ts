import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  totalQuantity:number =0 ;
constructor(
  private counterService:CounterService
){}
ngOnInit(){
  this.counterService.getTotalQuantity().subscribe(total =>{
    this.totalQuantity = total ;
  })
}

}
