import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { AuthApiService } from '../../data-access/auth-api.service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly authApi = inject(AuthApiService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly error = signal('');
  protected readonly forgotMessage = signal('');

  protected readonly form = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.minLength(4)]),
  });

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('Introduce un correo válido y una contraseña de al menos 4 caracteres.');
      return;
    }

    const { email, password } = this.form.getRawValue();
    this.authApi.login(email.trim(), password).subscribe((user) => {
      this.auth.setSession(user);
      this.router.navigateByUrl('/trips');
    });
  }

  protected forgotPassword(event: Event): void {
    event.preventDefault();
    this.forgotMessage.set('La recuperación de contraseña estará disponible al conectar el backend.');
  }
}
