"use client"
import { Loader } from '@googlemaps/js-api-loader'
import React,{useEffect} from 'react'


const Maps = () => {
    const mapRef=React.useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const initMap=async()=>{
            const loader = new Loader({
              //  apiKey: process.env.REACT_APP_GOOGLEPLACES_API_KEY as string,
              apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version:'weekly'
            });

            const {Map}=await loader.importLibrary('maps');
            ///posicion a marcar
            const{Marker}= await loader.importLibrary('marker') as  google.maps.MarkerLibrary;
            const position={
                lat:-12.072812,
                lng:-77.049050
            }
            ///opciones
            const mapOptions: google.maps.MapOptions={
                center:position,
                zoom:17,
                mapId:'MY_NEXTJS_MAPID'
            }
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

            const marker = new Marker({
                map:map,
                position:position
            })
        }
        initMap();
    })
  return (
    <div style={{height:'400px', width:'600px'} }ref={mapRef}></div>
  )
}

export default Maps