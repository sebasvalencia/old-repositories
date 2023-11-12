import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceFileService } from '../../services/service-file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('fileDragDropRef', { static: false }) fileDragDropEl: ElementRef;
  files: any[] = [];
  public progress;
  public fileProgress = 0;
  uploading = false;

  showSpinner = true;

  constructor(
    private router: Router,
    public uploadService: ServiceFileService
  ) { }

  ngOnInit() {
  }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: any) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDragDropEl.nativeElement.value = '';

    // start the upload
    this.progress = this.uploadService.upload(this.files);

    // tslint:disable-next-line: forin
    for (const key in this.progress) {
      this.progress[key].progress.subscribe(val => {
        this.fileProgress = val;
        this.showSpinner = false;
        if (this.fileProgress === 100) {
          this.showSpinner = true;
          this.goToMainPage();
        }
      });
    }
  }

  goToMainPage() {
    this.router.navigate(['/main']);
  }

}
