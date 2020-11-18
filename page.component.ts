import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
interface Customer{
  name:string;
  email:string;
  mobile:number;
  amount:number;
}
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
empForm:FormGroup;
  constructor(private formbuilder : FormBuilder) { }
customer : Customer [] =[];
total : number ;

  ngOnInit(): void {
    
    this.empForm = this.formbuilder.group({
name: [],
email :[],
mobile:[],
amount:[]
    })
  }
  onSubmit(){
var k =this.empForm.value;
console.log(k);
    this.amt ;
if(this.amt>=100){
  alert("not")
}
this.empForm.reset();
  }

  get amt(){
    let a : number = 0; 

var l = this.customer.forEach(t=>{
   a = Math.round(a) + Math.round(t.amount);
this.total = a;
  });
  return a;
  }
}
