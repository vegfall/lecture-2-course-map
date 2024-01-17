import React, {MutableRefObject, useEffect, useRef} from "react";

import "./application.css";
import {Map} from "ol";

const map = new Map();

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
        <main ref={mapRef}>
            Here is the map
        </main>
    </>;
}