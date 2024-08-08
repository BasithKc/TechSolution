import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{
  services: any[] = []
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    //Retrieving the services through api
    this.apiService.getServices().subscribe(data=> {
      this.services = data      
    })
  }
}
