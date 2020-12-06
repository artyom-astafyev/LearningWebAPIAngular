import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(private service: SharedService) { }

  EmployeeList: any = [];

  ModalTitle: string | undefined;
  ActivateAddEditEmpComp: boolean = false;
  emp: any;

  ngOnInit(): void {
    this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    this.service.getEmployeeList().subscribe(data => { this.EmployeeList = data; });
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: "",
      Deparment: "",
      DateOfJoining: "",
      PhotoFileName: "anonymous.png"
    }
    this.ModalTitle = "Add Employee"
    this.ActivateAddEditEmpComp = true;
  }

  editClick(item: any) {
    this.emp = item;
    this.ModalTitle = "Edit Employee"
    this.ActivateAddEditEmpComp = true;
  }

  deleteClick(item: any) {
    if (confirm("Are you sure?")) {
      this.service.deleteEmployee(item.EmployeeId).subscribe(data => { alert(data.toString()) });
      this.refreshEmployeeList();
    }
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmployeeList();
  }
}
