import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navb',
  templateUrl: './navb.component.html',
  styleUrls: ['./navb.component.css']
})
export class NavbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navb").style.padding = "10px 5px";
    document.getElementById("navb").style.fontSize = "15px";
    document.getElementById("brand").style.height = "63px";
    document.getElementById("brand").style.width = "80px";
    document.getElementById("brand").style.marginTop="0px";
    
    
  } else {
    document.getElementById("navb").style.padding = "30px 5px";
    document.getElementById("navb").style.fontSize = "18px";
    document.getElementById("brand").style.height = "100px";
    document.getElementById("brand").style.width = "126px";
    document.getElementById("brand").style.marginTop="-25px";
     
  }
}

}
