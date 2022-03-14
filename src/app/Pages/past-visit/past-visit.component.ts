import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PastVistService } from 'src/app/Core/past-visit.service';



@Component({
  selector: 'app-past-visit',
  templateUrl: './past-visit.component.html',
  styleUrls: ['./past-visit.component.scss']
})
export class PastVisitComponent implements OnInit {
  userName = sessionStorage.getItem("userName");
  displayedColumns: string[] = ['adress','kinshipId','name','phone','rg','visitDate'];
  dataSource: any;
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  kinshipList: string[] = [
    '.',
    'Pai',
    'Mãe',
    'Filho',
    'Filha',
    'Cônjuge',
    'Nora',
    'Genro',
    'Sogro',
    'Sogra',
    'Cunhado',
    'Cunhada',
    'Primo',
    'Prima',
    'Tio',
    'Tia',
    'Sobrinho',
    'Sobrinha',
    'Sobrinho-neto',
    'Sobrinha-neta',
    'Amigo',
    'Amiga',
    'Bisneto',
    'Bisneta',
    'Nenhum',
    'Neto',
    'Neta'];

  constructor(
    private router: Router,
    private pastVisitService: PastVistService
  ) { }

  visitorModel:any;
  Error:any;

  ngOnInit(): void {
    this.getVistorList();
  }

  onNavigateTo(pageName:any) {
    this.router.navigate([`/${pageName}`]);
  }

  getVistorList() {
    this.pastVisitService.getVistorList().subscribe(
      (res: any) => {
        this.dataSource = new MatTableDataSource(res.data);
        console.log(this.dataSource);
        

        //Varedura na lista de visitantes
        //for (let v = 0; v < this.visitorModel.length; v++) // jeito simplificado tradicional de escrever for 
        for (let v in this.visitorModel) {// Jeito mais simplificado de escrever for //CADU e um por um em diante
          //varredura na lista de parentesco (array)
          //for (let i = 0; i < this.kinshipList.length; i++) 
          for (let i in this.kinshipList) {
            //O Id parentesco do visitante é igual a posição do array que estou vendo agora?
            if (this.visitorModel[v].kinshipId == this.kinshipList.indexOf(this.kinshipList[i],)) {
              //Se sim, substitua o numero kinship pelo texto kinship
              this.visitorModel[v].kinshipId = this.kinshipList[i];
            }
          }
        }
        /*foreacth visitor dentro do visitorModel
        for kinship
        {
          kinship[i] == visitor.Kinship
           visitorModelTreated.kinshipId = kinship
        }*/
      },
      (error: any) => {
        this.Error = error;
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  OnDateChange(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    alert("filter Value" + filterValue);
    this.dataSource.filter = filterValue;
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

}



