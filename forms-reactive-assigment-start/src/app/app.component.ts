import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [
          Validators.required,
          //this.projectNameForbiddenValidator,
        ],
        this.projectNameForbiddenValidatorAsync
      ),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(this.projectStatuses[1]),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  projectNameForbiddenValidator(control: FormControl): {
    [s: string]: boolean;
  } {
    if (control.value && control.value.toLowerCase() === 'test') {
      return { nameIsForbidden: true };
    }
    return null;
  }

  projectNameForbiddenValidatorAsync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value && control.value.toLowerCase() === 'test') {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
