import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, forwardRef, HostListener, ElementRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface Option {
  value: string;
  text: string;
}

@Component({
  selector: 'app-multi-select',
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }
  ],
  templateUrl: './multi-select.component.html',
  styles: ``
})
export class MultiSelectComponent implements ControlValueAccessor, OnInit {

  @Input() label: string = '';
  @Input() options: Option[] = [];
  @Input() defaultSelected: string[] = [];
  @Input() disabled: boolean = false;
  @Output() selectionChange = new EventEmitter<string[]>();

  selectedOptions: string[] = [];
  isOpen = false;

  private _onChange: (val: string[]) => void = () => {};
  private _onTouched: () => void = () => {};

      private elementRef = inject(ElementRef);


  ngOnInit() {
    this.selectedOptions = [...this.defaultSelected];
  }

  writeValue(val: string[]): void {
    this.selectedOptions = val ?? [];
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

  toggleDropdown() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      if (!this.isOpen) this._onTouched(); 
    }
  }

  handleSelect(optionValue: string) {
    if (this.selectedOptions.includes(optionValue)) {
      this.selectedOptions = this.selectedOptions.filter(v => v !== optionValue);
    } else {
      this.selectedOptions = [...this.selectedOptions, optionValue];
    }
    this._onChange(this.selectedOptions);        
    this.selectionChange.emit(this.selectedOptions);
  }

  removeOption(value: string) {
    this.selectedOptions = this.selectedOptions.filter(opt => opt !== value);
    this._onChange(this.selectedOptions);        
    this.selectionChange.emit(this.selectedOptions);
  }

  get selectedValuesText(): string[] {
    return this.selectedOptions
      .map(value => this.options.find(option => option.value === value)?.text || '')
      .filter(Boolean);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      if (this.isOpen) {
        this.isOpen = false;
        this._onTouched();
      }
    }
  }
}