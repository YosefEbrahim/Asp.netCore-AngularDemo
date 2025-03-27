import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookServiceService } from 'Services/book-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AddComponent } from 'src/Components/Add/Add.component';
import { DeleteComponent } from 'src/Components/Delete/Delete.component';
import { EditComponent } from 'src/Components/Edit/Edit.component';
import { HomeComponent } from 'src/Components/Homecomponent/Home.component';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [BookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
