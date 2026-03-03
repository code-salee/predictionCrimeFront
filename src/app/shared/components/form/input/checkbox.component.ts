import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
  template: `...`, // ton template inchangé
  styles: ``
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() label?: string;
  @Input() className = '';
  @Input() id?: string;
  @Input() disabled = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() checked = false;

  // ✅ plus en @Input(), géré par le CVA
  // checked = false;

  private _onChange: (val: boolean) => void = () => {};
  private _onTouched: () => void = () => {};

  writeValue(val: boolean): void {
    this.checked = !!val;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this._onChange(input.checked);       
    this._onTouched();                   
    this.checkedChange.emit(input.checked);
  }
}