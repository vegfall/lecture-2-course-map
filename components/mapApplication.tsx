import React, {MutableRefObject, useEffect, useRef} from "react";

import "./application.css";
import "ol/ol.css"
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import {useGeographic} from "ol/proj";

useGeographic();

const map = new Map({
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ],
    view: new View({
        center: [10, 59], zoom: 8
    })
});

export function MapApplication() {
    const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        map.setTarget(mapRef.current)
    }, []);

    return <>
        <header>
            <h1>My Map</h1>
        </header>
        <nav>
            Actions
        </nav>
        <main ref={mapRef}></main>
    </>;
}