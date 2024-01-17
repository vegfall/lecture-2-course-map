import React, { MutableRefObject, useEffect, useRef, useState } from "react";

import "./application.css";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import { KommuneLayerCheckbox } from "../kommune/kommuneLayerCheckbox";
import { Layer } from "ol/layer";

useGeographic();

const map = new Map({
  view: new View({
    center: [10, 59],
    zoom: 8,
  }),
});

export function MapApplication() {
  const [layers, setLayers] = useState<Layer[]>([
    new TileLayer({
      source: new OSM(),
    }),
  ]);

  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    map.setLayers(layers);
  },




      [layers]);

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);

  return (
    <>
      <header>
        <h1>My Map</h1>
      </header>
      <nav>
        <KommuneLayerCheckbox setLayers={setLayers} />
      </nav>
      <main ref={mapRef}></main>
    </>
  );
}
