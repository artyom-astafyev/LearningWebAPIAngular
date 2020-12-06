import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp: any;
  EmployeeId: string | undefined;
  EmployeeName: string | undefined;
  Department: string | undefined;
  DateOfJoining: string | undefined;
  PhotoFileName: string | undefined;
  PhotoFilePath: string | undefined;

  DepartmentList: any = [];

  ngOnInit(): void {
    this.loadDepartmentList();

    this.EmployeeId = this.emp.EmployeeId;
    this.EmployeeName = this.emp.EmployeeName;
    this.Department = this.emp.Department;
    this.DateOfJoining = this.emp.DateOfJoining;
    this.PhotoFileName = this.emp.PhotoFileName;
    this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
  }

  loadDepartmentList() {
    this.service.GetAllDepartmentNames().subscribe((data: any) => { this.DepartmentList = data });
  }

  addEmployee() {
    var value = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
      PhotoFilePath: this.PhotoFilePath
    };
    this.service.addEmployee(value).subscribe(res => { alert(res.toString()) });
  }

  updateEmployee() {
    var value = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
      PhotoFilePath: this.PhotoFilePath
    };
    this.service.updateEmployee(value).subscribe(data => { alert(data.toString()) });
  }

  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append("uploadedFile", file, file.name);
    this.service.UploadPhoto(formData).subscribe(data => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    })
  }
}
