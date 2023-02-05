import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-map-template-sl',
  templateUrl: './svg-map-template-sl.svg',
  styleUrls: ['./svg-map-template-sl.component.scss']
})
export class SvgMapTemplateSlComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    Object.keys(DISTRICT_IDS).forEach(key => {
      this.changeColourByDistrictId(key, this.changetoRandomColor());
    })
  }

  changetoRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  changeColourByDistrictId(districtKey: string, colour: string) {
    let path = document.getElementById(districtKey)
    if (path) {
      path.style.fill = colour;
    }
  }

}

enum Districts {
  Kandy = "Kandy",
  Matale = "Matale",
  Nuwara_Eliya = "Nuwara Eliya",
  Ampara = "Ampara",
  Madakalapuwa = "Madakalapuwa",
  Plonnaruwa = "Plonnaruwa",
  Trincomalee = "Trincomalee",
  Anuradhapura = "Anuradhapura",
  Vavuniya = "Vavuniya",
  Mannar = "Mannar",
  Mulativ = "Mulativ",
  Jaffna = "Jaffna",
  Kilinochchi = "Kilinochchi",
  Kurunegala = "Kurunegala",
  Puttalama = "Puttalama",
  Rathnapura = "Rathnapura",
  Galle = "Galle",
  Hambantota = "Hambantota",
  Matara = "Matara",
  Badulla = "Badulla",
  Monaragala = "Monaragala",
  Kegalle = "Kegalle",
  Colombo = "Colombo",
  Gampaha = "Gampaha",
  Kaluthara = "Kaluthara"
}


enum DISTRICT_IDS {
  LKA2448 = "Kandy",
  LKA2449 = "Matale",
  LKA2450 = "Nuwara Eliya",
  LKA2451 = "Ampara",
  LKA2452 = "Madakalapuwa",
  LKA2453 = "Plonnaruwa",
  LKA2454 = "Trincomalee",
  LKA2455 = "Anuradhapura",
  LKA2456 = "Vavuniya",
  LKA2457 = "Mannar",
  LKA2458 = "Mulativ",
  LKA2459 = "Jaffna",
  LKA2460 = "Kilinochchi",
  LKA2461 = "Kurunegala",
  LKA2462 = "Puttalama",
  LKA2463 = "Rathnapura",
  LKA2464 = "Galle",
  LKA2465 = "Hambantota",
  LKA2466 = "Matara",
  LKA2467 = "Badulla",
  LKA2468 = "Monaragala",
  LKA2469 = "Kegalle",
  LKA2470 = "Colombo",
  LKA2471 = "Gampaha",
  LKA2472 = "Kaluthara"
}