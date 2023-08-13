import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {
  constructor(private route: ActivatedRoute){}
data:any;
 param?:number;

ngOnInit():void{
  this.param = this.route.snapshot.params['id'];
  this.fetchData();
  
}
  fetchData() {
    fetch( `https://dummyjson.com/products/${this.param}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(response => {
      this.data = response;
      
      console.log(this.data);  
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
 }
}
