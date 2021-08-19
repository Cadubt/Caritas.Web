import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
    erro: any;
    constructor(private router: Router, private route: ActivatedRoute, private shelteredService: ShelteredService,) { }

    ngOnInit(): void {
        this.SheltId = this.route.snapshot.paramMap.get("id")

        this.shelteredService.getSheltered(this.SheltId).subscribe(
            (res: any) => {
                this.shelteredModel = res.data;
            },
            (error: any) => {
                this.erro = error;
            }
        );
    }

    onNavigateTo(pageName: any) {
        this.router.navigate([`/${pageName}`]);
    }

}
