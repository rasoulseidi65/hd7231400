import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],

})
export class QuestionsComponent implements OnInit {
  mardak: SelectItem[];
  soal: SelectItem[];
  pasokhname: SelectItem[];
  constructor() {
    this.mardak = [
      {label: 'پایه هفتم', value: 'پایه هفتم'},
      {label: 'پایه هشتم', value: 'پایه هشتم'},
      {label: 'پایه نهم', value: 'پایه نهم'},
      {label: 'پایه دهم', value: 'پایه دهم'},
      {label: 'پایه یازدهم', value: 'پایه یازدهم'},
      {label: 'پایه دوازدم', value: 'پایه دوازدم'},
      {label: 'پایه پیش دانشگاهی', value: 'پایه پیش دانشگاهی'},
      {label: 'فوق دیپلم', value: 'فوق دیپلم'},
      {label: 'کارشناسی', value: 'کارشناسی'},
      {label: 'کارشناسی ارشد', value: 'کارشناسی ارشد'},
      {label: 'دکتری', value: 'دکتری'},
    ];
    this.soal = [
      {label: 'تستی', value: 'تستی'},
      {label: 'تشریحی', value: 'تشریحی'},
      {label: 'تستی و تشریحی', value: 'تستی و تشریحی'},
    ];
    this.pasokhname = [
      {label: 'دارد', value: 'دارد'},
      {label: 'ندارد', value: 'ندارد'},
    ];

  }

  ngOnInit() {
  }

}
