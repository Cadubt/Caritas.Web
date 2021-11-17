import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ShelteredService } from 'src/app/Core/sheltered.service';

@Component({
    selector: 'app-sheltered-service',
    templateUrl: './sheltered.component.html',
    styleUrls: ['./sheltered.component.scss']
})
export class ShelteredComponent implements OnInit {
    SheltId: any;
    shelteredModel: any;
    entryDate: any;
    birthDate: any;
    registeredDate: any;
    backgroundColor: any;
    deciesedDate: any;
    erro: any;
    constructor(private router: Router, private route: ActivatedRoute, private shelteredService: ShelteredService,) { }

    ngOnInit(): void {
        this.SheltId = this.route.snapshot.paramMap.get("id")
        const datepipe: DatePipe = new DatePipe('en-US')
        this.shelteredService.getSheltered(this.SheltId).subscribe(
            (res: any) => {
                console.log(res.data);
                this.shelteredModel = res.data;
                this.entryDate = datepipe.transform(this.shelteredModel.entryDate,'dd/MMM/YYYY');
                this.birthDate = datepipe.transform(this.shelteredModel.birthDate,'dd/MMM/YYYY');
                this.registeredDate = datepipe.transform(this.shelteredModel.createdAt,'dd/MMM/YYYY');
                this.backgroundColor = this.shelteredModel.gender=="M"?"#c3cef7": "#f7c3c3";
                this.deciesedDate = this.shelteredModel.deceaseAt!==null?datepipe.transform(this.shelteredModel.deceaseAt,'dd/MMM/YYYY'): null;
            (error: any) => {
                this.erro = error;
            }
        
    });}

    onNavigateTo(pageName: any) {
        this.router.navigate([`/${pageName}`]);
    }

}
