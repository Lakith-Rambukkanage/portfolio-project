import { Component, OnInit } from '@angular/core';
import { SVGUtil } from 'src/utils/svg-util';

@Component({
  selector: 'app-svg-map-template-sl',
  templateUrl: './svg-map-template-sl.svg',
  styleUrls: ['./svg-map-template-sl.component.scss']
})
export class SvgMapTemplateSlComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    let dummy_per_perch_values = {
      LKA2448 : "Kandy".length,
      LKA2449 : "Matale".length,
      LKA2450 : "Nuwara Eliya".length,
      LKA2451 : "Ampara".length,
      LKA2452 : "Madakalapuwa".length,
      LKA2453 : "Plonnaruwa".length,
      LKA2454 : "Trincomalee".length,
      LKA2455 : "Anuradhapura".length,
      LKA2456 : "Vavuniya".length,
      LKA2457 : "Mannar".length,
      LKA2458 : "Mulativ".length,
      LKA2459 : "Jaffna".length,
      LKA2460 : "Kilinochchi".length,
      LKA2461 : "Kurunegala".length,
      LKA2462 : "Puttalama".length,
      LKA2463 : "Rathnapura".length,
      LKA2464 : "Galle".length,
      LKA2465 : "Hambanthota".length,
      LKA2466 : "Matara".length,
      LKA2467 : "Badulla".length,
      LKA2468 : "Monaragala".length,
      LKA2469 : "Kegalle".length,
      LKA2470 : "Colombo".length,
      LKA2471 : "Gampaha".length,
      LKA2472 : "Kaluthara".length,
    }

    let scaleMap = SVGUtil.convertToScale(dummy_per_perch_values);

    let colourRangeMap = SVGUtil.scaleMaptoColour(scaleMap,{r:200,g:0,b:256});

    Object.keys(DISTRICT_IDS).forEach(id => {
      this.changeColourById(id, colourRangeMap.get(id) as string);
    })
  }

  changeColourById(id: string, colour: string) {
    let path = document.getElementById(id)
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
  Hambanthota = "Hambanthota",
  Matara = "Matara",
  Badulla = "Badulla",
  Monaragala = "Monaragala",
  Kegalle = "Kegalle",
  Colombo = "Colombo",
  Gampaha = "Gampaha",
  Kaluthara = "Kaluthara",
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
  LKA2465 = "Hambanthota",
  LKA2466 = "Matara",
  LKA2467 = "Badulla",
  LKA2468 = "Monaragala",
  LKA2469 = "Kegalle",
  LKA2470 = "Colombo",
  LKA2471 = "Gampaha",
  LKA2472 = "Kaluthara",
}