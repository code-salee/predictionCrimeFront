import { SweetAlertService } from './../../../shared/services/sweet-alert.service';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener, OnChanges, inject, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../../../shared/components/form/input/input-field.component';
import { DatePickerComponent } from '../../../shared/components/form/date-picker/date-picker.component';
import { TextAreaComponent } from '../../../shared/components/form/input/text-area.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';
import Swal from 'sweetalert2'
import { CrimeModel } from '../../../shared/models/crime.model';


@Component({
  selector: 'app-add-crime',
  standalone: true,
  templateUrl: './add-crime.component.html',
  imports: [CommonModule, ReactiveFormsModule, InputFieldComponent, DatePickerComponent, TextAreaComponent, ButtonComponent],
})
export class AddCrimeComponent implements OnChanges {

  private sweetAlertService = inject(SweetAlertService);

  private _data: CrimeModel | null = null;
  private _mode: 'view' | 'edit' | 'add' = 'add';



  @Input() isOpened = false;
  @Input() set data(value: CrimeModel | null) {
  this._data = value;
  this.applyMode();
}  
@Output() close = new EventEmitter<void>();
  @Input() set mode(value: 'view' | 'edit' | 'add') {
  this._mode = value;
  this.applyMode(); 
}

  closeModal() {
    this.crimeForm.reset();
    this.close.emit();
  }

  crimeForm = new FormGroup({
    type: new FormControl('', [Validators.required, Validators.minLength(3)]),
    place: new FormControl('', [Validators.required, Validators.minLength(3)]),
    victimsNo: new FormControl(0, [Validators.required, Validators.min(0)]),
    date: new FormControl('', [Validators.required]),
    description: new FormControl('')
  });

    handleDateChange(event: any) {
    this.crimeForm.get('date')?.setValue(event);
    console.log('Date changed:', event);
  }

  @HostListener('document:keydown.escape')
  handleEscape() {
    if (this.isOpened) this.closeModal();
  }

get mode() {
  return this._mode;
}

get data() {
  return this._data;
}

private applyMode() {
  if (this._data) {
    this.crimeForm.patchValue({
      type: this._data.type,
      place: this._data.place,
      victimsNo: this._data.victimsNo,
      date: this._data.date ? String(this._data.date) : '',
      description: this._data.description ?? ''
    });
  } else {
    this.crimeForm.reset();
  }

  if (this._mode === 'view') {
    this.crimeForm.disable();
  } else {
    this.crimeForm.enable();
  }
}

ngOnChanges(changes: SimpleChanges) {
  document.body.style.overflow = this.isOpened ? 'hidden' : 'auto';
}

submitForm() {
  const isEdit = this.mode === 'edit';
 if (this.crimeForm.invalid) {
    this.crimeForm.markAllAsTouched(); 
    return;
  }
  this.confirmAction(isEdit).then(async (confirmed) => {
    if (!confirmed) return;

    try {
      if (isEdit) {
        await this.updateCrime();
      } else {
        await this.addCrime();
      }

      this.showSuccess(isEdit);
      this.closeModal();

    } catch (error) {
      this.sweetAlertService.error('Something went wrong');
    }
  });
}

private confirmAction(isEdit: boolean) {
  return this.sweetAlertService.confirmation(
    isEdit
      ? 'Are you sure you want to update this crime?'
      : 'Are you sure you want to add this crime?'
  ).then((res: any) => res.isConfirmed);
}

private showSuccess(isEdit: boolean) {
  this.sweetAlertService.success(
    isEdit
      ? 'Crime updated successfully!'
      : 'Crime added successfully!'
  );
}

addCrime() {
  console.log('Adding crime', this.crimeForm.value);
  // appel API ici
}

updateCrime() {
  console.log('Updating crime', this.crimeForm.value);
  // appel API ici
}

}