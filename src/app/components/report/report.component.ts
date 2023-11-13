import { Component, OnInit } from '@angular/core';
import { GcPdfViewer } from '@grapecity/gcpdfviewer';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent{

  pdfSource: string = 'assets/docs/PREY.pdf'


  ngAfterViewInit(): void {
    const viewer = new GcPdfViewer("#viewer", {
      workerSrc: "node_modules\\@grapecity\\gcpdfviewer\\gcpdfviewer.worker.js",
      restoreViewStateOnLoad: false
    });
    viewer.addDefaultPanels();
    viewer.open(this.pdfSource);
  }

}
