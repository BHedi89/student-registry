import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentListComponent} from './components/student-list/student-list.component';
import {HeaderComponent} from './components/header/header.component';
import {StudentRowComponent} from './components/student-row/student-row.component';
import {HttpClientModule} from '@angular/common/http';
import {AddStudentComponent} from './components/add-student/add-student.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModifyModalComponent} from './components/modify-modal/modify-modal.component';
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HeaderComponent,
    StudentRowComponent,
    AddStudentComponent,
    ModifyModalComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
