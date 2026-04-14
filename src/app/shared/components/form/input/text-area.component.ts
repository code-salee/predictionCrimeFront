import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';



@Component({
  selector: 'app-text-area',
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    }
  ],
  template: `
    <div class="relative">
      <textarea
        [placeholder]="placeholder"
        [name]="name"
        [rows]="rows"
        [value]="value"
        (input)="onInput($event)"
        [disabled]="disabled"
        [ngClass]="textareaClasses"
      ></textarea>
      @if (hint) {
      <p
        class="mt-2 text-sm"
        [ngClass]="error ? 'text-error-500' : 'text-gray-500 dark:text-gray-400'">
        {{ hint }}
      </p>
      }
    </div>
  `,
  styles: ``,
  standalone: true,
})
export class TextAreaComponent implements ControlValueAccessor {

  @Input() name = '';
  @Input() placeholder = 'Enter your message';
  @Input() rows = 4;
  @Input() className = '';
  @Input() disabled = false;
  @Input() error = false;
  @Input() hint = '';
  @Input() value: string | number = '';


  @Output() valueChange = new EventEmitter<string>();

   
  private _onChange: (val: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(val: string | number): void {
    this.value = val ?? '';
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLTextAreaElement;
    const val = input.value;
    this.value = val;
    this._onChange(val);           
    this.valueChange.emit(val);    
  }

  get textareaClasses(): string {
    let base = `w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden ${this.className} `;
    if (this.disabled) {
      base += 'bg-gray-100 opacity-50 text-gray-500 border-gray-300 cursor-not-allowed opacity40 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700';
    } else if (this.error) {
      base += 'bg-transparent border-gray-300 focus:border-error-300 focus:ring-3 focus:ring-error-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-error-800';
    } else {
      base += 'bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800';
    }
    return base;
  }
}
