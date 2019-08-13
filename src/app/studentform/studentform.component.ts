import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.sass']
})
export class StudentformComponent implements OnInit {

  constructor(private service: StudentserviceService, private route: Router, private router: ActivatedRoute) { }

  public Studentobject = {
    id: '',
    firstname: '',
    lastname: '',
    dob: '',
    age: '',
    email: ''

  };
  public test: any;
  public id: any;
  ngOnInit() {
    this.id = '';
     this.router.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
   
    console.log(this.service.studentarray);
    this.service.studentarray.forEach(element => {
      console.log('foreachvaluecoming here', element.id);
      if (element.id == this.id) {
        console.log(element);
        this.Studentobject = element;
      }
    });
  }
  submit(value) {
    console.log(value);
    this.test = value;
    this.service.studentarray.push(this.test);


  }

  update() {
    this.route.navigate(['/helloo']);
    return this.Studentobject;
   }
  view() {

    this.route.navigate(['/helloo']);
  }


}
