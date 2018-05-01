import { Component } from '@angular/core';
import { BurstNetworkService } from './services/burst-network.service';
import { BurstUserService } from './services/burst-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  networkData;
  nodeData;
  poolData;
  assetData;
  keys;
  rows;
  keys1;
  rows1;
  keys2;
  rows2;
  keys3;
  rows3;

  constructor(public burstNetwork:BurstNetworkService, public burstUser:BurstUserService){
    // burstNetwork.getNetworkData().subscribe((res)=>{
    //   this.networkData = res;
    //   this.keys = Object.keys(this.networkData._body[0]);
    //   this.rows = this.networkData._body;
    // });

    // burstNetwork.getNodeData().subscribe((res)=>{
    //   this.nodeData = res;
    //   console.log(this.nodeData);
    //   this.keys1 = Object.keys(this.nodeData._body[0]);
    //   this.rows1 = this.nodeData._body;
    // });

    // burstNetwork.getPoolData().subscribe((res)=>{
    //   this.poolData = res;
    //   this.keys2 = Object.keys(this.poolData._body[0]);
    //   this.rows2 = this.poolData._body;
    // });

    // burstNetwork.getAssetData().subscribe((res)=>{
    //   this.assetData = res;
    //   this.keys3 = Object.keys(this.assetData._body[0]);
    //   this.rows3 = this.assetData._body;
    // });
    this.burstUser.getUserData("test").subscribe((res)=>{
      this.nodeData = res;
      console.log(res);
      // this.keys1 = Object.keys(this.nodeData._body[0]);
      // this.rows1 = this.nodeData._body;
    });
  }
}
