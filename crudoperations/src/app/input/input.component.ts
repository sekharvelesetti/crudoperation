import { Component} from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {
  row = [
    {
      id : '',
      name: '',
      designation: '',
      salary:'',
      email:'',
      mobile:'',
      qualification:''

    },
    
    
  ];
  
  addTable() {
    const obj = {
      id : '',
      name: '',
      designation: '',
      salary:'',
      email:'',
      mobile:'',
      qualification:''
    }
    this.row.push(obj)
  }
  
  deleteRow(x: number){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }   
  } 
  
  
          
  // deleteRow (){
  //   //console.log(name);
  
  //   for(var i=0 ; i<this.row.length-1 ; i++){
  //     var delBtn = confirm(" Do you want to delete ?");     
  //            if( delBtn == true ) {
     
  //       this.row.splice(i,1);
  //     }
  //   }
  
  // }
  // }
  
  }
