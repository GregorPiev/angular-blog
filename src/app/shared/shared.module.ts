import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { LoadingComponent } from './loading/loading.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot()

  ],
  exports: [
    HttpClientModule,
    QuillModule,
    LoadingComponent,
    MatPaginatorModule,
    MatTableModule
  ],
  declarations: [LoadingComponent]
})

export class SharedModule { }
