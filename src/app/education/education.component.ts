import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  sample: string = 'Your text here';
  name: string = 'Max Tech';
  dates: string = 'Oct 2018 - May 2019';
  major: string = 'Java';
  minor: string = '';

  constructor() { }

  ngOnInit() {
  }
  updateSample(sample: string): string {
    return this.sample = sample;
  }
  displayEduSum(): string {
    let eduSum: string = '';
    eduSum += 'Attended ' + this.name + ' from ' + this.dates + ' with a major in ' + this.major;
    if (this.minor == '') {
      eduSum += '.';
    }
    if (this.minor != '') {
      eduSum += ' and a minor in ' + this.minor + '.';
    }
    return eduSum;
  }

}
