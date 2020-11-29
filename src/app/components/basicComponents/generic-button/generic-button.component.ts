import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent implements OnInit {
  @Input() label:string;
  @Output() clicked:EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    this.clicked.emit();
  }

}
