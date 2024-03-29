import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './Core/auth.service';
import { LoaderService } from './Shared/loader/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  title = 'Caritas Gestão';
  showMenu = true;

  constructor (
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef,
    public loaderService: LoaderService
  ) { }

  ngOnInit(){
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    )
    this.changeDetectorRef.detectChanges();
    this.showMenu = this.authService.isMenuShowing
  }
  ngAfterViewChecked(){
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    )
    this.changeDetectorRef.detectChanges();
  }
}
