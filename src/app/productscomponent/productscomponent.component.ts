import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productscomponent',
  templateUrl: './productscomponent.component.html',
  styleUrls: ['./productscomponent.component.scss']
})
export class ProductscomponentComponent {
  constructor(private router: Router){
    
  }
   data:any;
ngOnInit():void{
  
  this.fetchData();
  
}
   fetchData() {
   fetch('https://dummyjson.com/products')
   .then(response => {
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();
   })
   .then(response => {
     this.data = response.products;
     
     console.log(this.data);  
   })
   .catch(error => {
     console.error('Fetch error:', error);
   });
}
navigate(id: number) {
  this.router.navigate(['/ProductsInfo', id]);
}
}
