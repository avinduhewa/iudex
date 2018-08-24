import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-comp',
  templateUrl: './core-comp.component.html',
  styleUrls: ['./core-comp.component.scss']
})
export class CoreCompComponent implements OnInit {
  selectedImagesArray = [];
  image = [];
  public activeStatus =  true;
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
  constructor() { }

  selectRow() {
    this.activeStatus = !this.activeStatus;
  }

  ngOnInit() {
    console.log('core cmp works!');
  }

}
