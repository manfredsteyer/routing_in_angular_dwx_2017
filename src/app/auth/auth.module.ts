
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shared/auth/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [], // <-- Array bleibt leer!!
  declarations: [
    // Komponenten, Direktiven, Pipes
  ],
  exports: [
    // Komponenten, Direktiven, Pipes
  ]
})
export class AuthModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService
      ]
    }
  }

}
