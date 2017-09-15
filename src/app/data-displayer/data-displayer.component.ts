import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample.service';
@Component( {
    selector: 'app-data-displayer',
    templateUrl: './data-displayer.component.html',
    styleUrls: ['./data-displayer.component.css']
} )
export class DataDisplayerComponent implements OnInit {
    private data: string;
    constructor( private _sampleService: SampleService ) { }

    ngOnInit() {
        this._sampleService.getData().subscribe( response => {
            this._sampleService.getData(response.url).subscribe( response => {
                this.data = response;
            } )
        } )
    }
}


