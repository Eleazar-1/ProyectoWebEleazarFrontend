import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../../core/auth/auth.service';
import { AuthApiService } from '../../data-access/auth-api.service';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly authApi = inject(AuthApiService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly error = signal('');
  protected readonly loading = signal(false);

  protected readonly form = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    terms: this.fb.control(true, [Validators.requiredTrue]),
  });

  protected submit(): void {
    this.error.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('Revisa el formulario: nombre, correo válido, contraseña de 4+ caracteres y aceptar los términos.');
      return;
    }

    const { name, email, password } = this.form.getRawValue();
    this.loading.set(true);

    this.authApi.register(name.trim(), email.trim(), password).subscribe({
      next: (user) => {
        // Registro correcto: iniciamos sesión y entramos a la app.
        this.auth.setSession(user);
        this.router.navigateByUrl('/trips');
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.error.set(mensajeDeError(err));
      },
    });
  }
}

/** Traduce el error HTTP del backend a un mensaje amable para el usuario. */
function mensajeDeError(err: HttpErrorResponse): string {
  switch (err.status) {
    case 0:
      return 'Servicio no disponible en este momento. Inténtalo de nuevo más tarde.';
    case 400:
      return 'Revisa los datos del formulario e inténtalo de nuevo.';
    case 409:
      return 'Ese correo ya está registrado. Prueba a iniciar sesión.';
    default:
      return 'No hemos podido crear tu cuenta. Inténtalo de nuevo más tarde.';
  }
}
