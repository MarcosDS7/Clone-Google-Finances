import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-your-lists',
  templateUrl: './your-lists.component.html',
  styleUrls: ['./your-lists.component.scss'],
})
export class YourListsComponent {
  constructor(public modalService: NgbModal, private fb: FormBuilder) {}

  form = this.fb.group({
    name: ['', Validators.required],
  });

  open(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal',
      centered: true,
      size: 'md',
    });
  }
}
