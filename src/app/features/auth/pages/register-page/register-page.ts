import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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

  protected readonly form = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    terms: this.fb.control(true, [Validators.requiredTrue]),
  });

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set('Introduce tu nombre, un correo válido y una contraseña de al menos 4 caracteres.');
      return;
    }

    const { name, email, password } = this.form.getRawValue();
    this.authApi.register(name.trim(), email.trim(), password).subscribe((user) => {
      this.auth.setSession(user);
      this.router.navigateByUrl('/trips');
    });
  }
}
