import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BindingComponent } from './components/binding/binding.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RotateDirective } from './directives/rotate.directive';
import { ExpPipe } from './pipes/exp.pipe';
import { EjemploPipeComponent } from './components/ejemplo-pipe/ejemplo-pipe.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CrudComponent } from './components/crud/crud.component';
import { MasterComponent } from './components/master/master.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    BindingComponent,
    HighlightDirective,
    RotateDirective,
    ExpPipe,
    EjemploPipeComponent,
    GaleriaComponent,
    CrudComponent,
    MasterComponent,
    DetalleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
