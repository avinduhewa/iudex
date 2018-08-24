import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CountdownTimerModule } from 'ngx-countdown-timer';

@Component({
  selector: 'app-core-comp',
  templateUrl: './core-comp.component.html',
  styleUrls: ['./core-comp.component.scss']
})
export class CoreCompComponent implements OnInit {
  selectedImagesArray = [];
  image = [];
  public activeStatus = true;
  form: FormGroup;
  points: any = [];
  criteria: any = [];
  county: any = [
    {
      '1': 'tesitnf'
    },
    {
      '2': 'adsd'
    }
  ];
  collection = [
    {
      "imageName": "Screenshot 2018-07-03 13.28.32.png",
      "ModifiedDate": "2",
      "context": "lit vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje?",
      "test1": "testing",
      "test2": "testing",
    },
    {
      "imageName": "Screenshot 2018-07-03 13.28.32.png",
      "ModifiedDate": "2",
      "context": "lit vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje?",
      "test1": "testing",
      "test2": "testing",
    },
    {
      "imageName": "Screenshot 2018-07-03 13.28.32.png",
      "ModifiedDate": "2",
      "context": "lit vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje?",
      "test1": "testing",
      "test2": "testing",
    },
    {
      "imageName": "Screenshot 2018-07-03 13.28.32.png",
      "ModifiedDate": "2",
      "context": "lit vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje?",
      "test1": "testing",
      "test2": "testing",
    },
    {
      "imageName": "Screenshot 2018-07-03 13.28.32.png",
      "ModifiedDate": "2",
      "context": "lit vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje?",
      "test1": "testing",
      "test2": "testing",
    },
    {
      "imageName": "Screenshot 2018-07-03 13.28.32.png",
      "ModifiedDate": "2",
      "context": "lit vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje?",
      "test1": "testing",
      "test2": "testing",
    },
    {
      "imageName": "Screenshot 2018-07-03 13.28.32.png",
      "ModifiedDate": "2",
      "context": "lit vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje it vero! Excepturi, explicabo, laborvmnvmvmnbbnbnmbhhjvjvjhvhjvjjhvjvjjjhvhjvjje?",
      "test1": "testing",
      "test2": "testing",
    },
  ]


  constructor(

  ) {

  }

  selectRow() {
    this.activeStatus = !this.activeStatus;
  }

  submitPoints(form) {
    console.log('user is ', form);
    // this.pollingService.addUser(user).subscribe(res => {
    //   console.log('done');
    // });
  }

  ngOnInit() {

    this.form = new FormGroup({
      country: new FormControl(''),
      criteria: new FormControl(''),
      points: new FormControl('')
    });

    console.log('core cmp works!');
  }

}
