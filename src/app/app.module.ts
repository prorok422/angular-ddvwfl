import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CvaFormComponent } from './cva-form/cva-form.component';
import {fService} from './service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule,
  MatListModule, MatDialogModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatTabsModule,
  MatPaginatorModule, MatSortModule, MatInputModule, MatProgressSpinnerModule, MatOptionModule, MatSelectModule,
  MatDatepickerModule, MatNativeDateModule, MatProgressBarModule, MatBadgeModule, MatChipsModule,
  MatSnackBarModule, MatButtonToggleModule, MatSlideToggleModule, MatAutocompleteModule, MatTooltipModule
} from '@angular/material';
import { CvaFormArrayComponent } from './cva-form-array/cva-form-array.component';
import { MainFormComponent } from './main-form/main-form.component'

@NgModule({
  imports:      [ BrowserAnimationsModule, BrowserModule, FormsModule, ReactiveFormsModule,  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule,
  MatListModule, MatDialogModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatTabsModule,
  MatPaginatorModule, MatSortModule, MatInputModule, MatProgressSpinnerModule, MatOptionModule, MatSelectModule,
  MatDatepickerModule, MatNativeDateModule, MatProgressBarModule, MatBadgeModule, MatChipsModule,
  MatSnackBarModule, MatButtonToggleModule, MatSlideToggleModule, MatAutocompleteModule, MatTooltipModule ],
  declarations: [ AppComponent, HelloComponent, CvaFormComponent, 
  CvaFormArrayComponent, MainFormComponent ],
  providers:[fService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
