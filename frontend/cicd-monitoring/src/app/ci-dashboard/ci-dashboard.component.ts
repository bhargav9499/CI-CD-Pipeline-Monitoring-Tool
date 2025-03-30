import { Component, OnInit } from '@angular/core';
import { CiCdService } from '../ci-cd.service';

@Component({
  selector: 'app-ci-dashboard',
  templateUrl: './ci-dashboard.component.html',
  styleUrls: ['./ci-dashboard.component.scss']
})
export class CiDashboardComponent implements OnInit {

  workflowRuns: any[] = [];

  constructor(private ciCdService: CiCdService) { }

  ngOnInit(): void {
    this.ciCdService.getCiCdStatus().subscribe((data: any) => {
      this.workflowRuns = data.workflow_runs;
    });
  }

}
