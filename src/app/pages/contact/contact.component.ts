import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  form!: FormGroup;
  submitted = false;

  @ViewChild('contactBtnRef') contactBtnRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('contactSpotlightRef') contactSpotlightRef!: ElementRef<HTMLSpanElement>;
  private cleanupListeners: (() => void) | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  ngAfterViewInit(): void {
    const button = this.contactBtnRef.nativeElement;
    const spotlight = this.contactSpotlightRef.nativeElement;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      spotlight.animate(
        {
          left: `${(x / rect.width) * 100}%`,
          top: `${(y / rect.height) * 100}%`,
        },
        { duration: 250, fill: 'forwards' }
      );
    };

    const handleMouseLeave = () => {
      spotlight.animate(
        {
          left: '50%',
          top: '50%',
        },
        { duration: 100, fill: 'forwards' }
      );
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    this.cleanupListeners = () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }

  ngOnDestroy(): void {
    this.cleanupListeners?.();
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty || this.submitted));
  }

  submit(): void {
    this.submitted = true;

    if (this.form.invalid) return;

    const formData = new FormData();
    formData.append('name', this.form.value.name);
    formData.append('email', this.form.value.email);
    formData.append('message', this.form.value.message);

    fetch('https://formspree.io/f/mkgryaav', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        this.form.reset();
        this.submitted = false;
      } else {
        console.log('Failed to send message.');
      }
    }).catch(() => alert('Network error'));
  }
}
