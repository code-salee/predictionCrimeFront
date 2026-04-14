import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

    confirmation(message: string) {
  return Swal.fire({
    title: 'Confirmation',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel'
  });
}

    successwithConfirmation(message: string) {
        Swal.fire({
            title: message,
            showCancelButton: true,
            confirmButtonText: "Save",
            }).then((result) => {
            if (result.isConfirmed){
                //call api to save the object
                Swal.fire("Saved!", "", "success");
                console.log('Crime ajouté:', message);
            } 
    });
    }


    success(message: string) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: message,
        });
    }

    error(message: string) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
        });
    }

}