import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'convert-address',
  templateUrl: './convert-address.component.html',
  styleUrls: ['./convert-address.component.css']
})
export class ConvertAddressComponent implements OnInit {

  street: string = '';
  city: string = '';
  state: string = '';
  zip: string = '';

  constructor() { }

  ngOnInit(): void {

  }

}
