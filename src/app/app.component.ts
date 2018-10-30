import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public start: string;
    public finish: string;

    public constructor() {
        this.start = '19.4045324,-99.1640348';
        this.finish = '19.413108,-99.178980';
    }

    public ngOnInit() { }

}
//: