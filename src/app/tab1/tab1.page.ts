import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WifiWizard2 } from '@ionic-native/wifi-wizard-2/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  response: string;

  constructor(
    private wifiWizard2: WifiWizard2,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.wifiWizard2.getConnectedSSID()
      .then(response => {
        this.response = JSON.stringify(response);
        this.changeDetectorRef.detectChanges();
      });

    this.wifiWizard2.scan()
      .then(response => {
        this.response = JSON.stringify(response);
        this.changeDetectorRef.detectChanges();
      });

    this.wifiWizard2.connect('Batman', true, '25061307', 'WPA')
      .then(response => {
        this.response = JSON.stringify(response);
        this.changeDetectorRef.detectChanges();
      });
  }

}
