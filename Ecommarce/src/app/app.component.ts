import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import{ProductListComponent} from './product-list//product-list.component';
import{WeatherDataService} from './weatherservice/weather-data.service';
import { HttpClientModule } from '@angular/common/http';
import { DemoService } from './Demoservice/demo.service';
import{SimpleformComponent} from './simpleform/simpleform.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ProductListComponent,HttpClientModule,SimpleformComponent],
  providers: [WeatherDataService, DemoService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Product List';

  datas!: any[];

  wetherData! : any[];

  constructor(private dataService: WeatherDataService, private demoService: DemoService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data: any[]) => {
      this.datas = data;
    });

  }

  postDataInApi(){
    let data = {naem: 'kamal', age:44}
     this.dataService.postData(data).subscribe((response) => {
        console.log(response + " data");
  });

}

getWetherData(){
  this.demoService.getWetherData().subscribe((wether :any[]) =>{
    this.wetherData = wether
  })
}

postWetherData(name:string){
  this.demoService.postWhereData(name).subscribe((res) =>{ 
      console.log(res, " check data");

  });
}


}
