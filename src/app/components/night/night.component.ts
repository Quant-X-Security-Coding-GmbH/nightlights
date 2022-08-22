import {AfterViewInit, Component, OnInit} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  stagger,
  query,
} from '@angular/animations';
import {lines} from "../../night-sentences";

@Component({
  selector: 'app-night',
  templateUrl: './night.component.html',
  styleUrls: ['../../../styles.css'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(
              '10s',
              [animate('100ms', style({ opacity: 1} )),
              animate('10s ease-out', style({ opacity: 0.08} ))],
            )],
          { optional: true }
        )
      ])
    ])
  ]
})
export class NightComponent implements OnInit {

  constructor() {
  }

  linelist = lines;

  ngOnInit(): void {
  }
}
