import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import Projection from 'ol/proj/Projection';
import { Image } from 'ol/layer';
import { ImageStatic } from 'ol/source';
import { Extent } from 'ol/extent';



@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    map: Map;

    constructor() { }

    ngOnInit(): void {

        const imageExtent: Extent = [0, 0, 1200, 1200];
        const projection = new Projection({
            code: 'sample',
            units: 'pixels',
            extent: imageExtent
        });


        this.map = new Map({
            layers: [
                new Image({
                    source: new ImageStatic({
                        url: '/assets/samplemap.jpg',
                        projection,
                        imageExtent

                    })
                })
            ],
            target: 'map',
            view: new View({
                projection,
                center: [600, 600],
                zoom: 3,
                maxZoom: 8
            })
        });

    }

}
