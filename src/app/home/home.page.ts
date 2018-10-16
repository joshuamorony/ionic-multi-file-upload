import { Component, ViewChild } from '@angular/core';
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;

  constructor() {

  }

  upload(){

    let files = this.fileField.getFiles();
    console.log(files);

    let formData = new FormData();
    formData.append('somekey', 'some value') // Add any other data you want to send

    files.forEach((file) => {
      formData.append('files[]', file.rawFile, file.name);
    });

    // POST formData to Server

  }

}
