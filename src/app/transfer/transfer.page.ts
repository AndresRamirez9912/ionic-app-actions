import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {
  constructor(private route: ActivatedRoute) {}

  // Variables
  value: string = '';
  transferOriginName: string = '';
  transferDestinationName: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.value = params['value'];
      this.transferDestinationName = params['transferDestinationName'];
      this.transferOriginName = params['transferOriginName'];
    });
  }
}
