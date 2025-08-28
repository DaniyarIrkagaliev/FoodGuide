import React, {useContext, useEffect, useState} from 'react';

import {YMaps, Map, Placemark, ObjectManager} from '@pbe/react-yandex-maps';


const MyMap = ({points}) => {


    const [aItem, setAitem] = React.useState(points);

    const nameList = [];
    for (let key in aItem) {
        const re = /\s*(?:,|$)\s*/;
        nameList.push(aItem[key].coordinates.split(re));
    }

    const collection = {
        type: "FeatureCollection",
        features: aItem.map((point, id) => {
            return {
                id: id,
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: nameList[id]
                },
                properties: {
                    balloonContent: `
          <div>${point.name}</div>
        `,
                    balloonContentHeader: point.name,
                    balloonContentBody: `
          <div>${point.categories}</div>
          <div>${point.adress}</div>
                    `,
                    hintContent: point.name,
                    balloonContentFooter: `
         
          <div><a href={'restaurant:id='+point.rest_id} style="cursor: pointer"> 
          Перейти на страницу ресторана
          </a></div>
                    `,
                    clusterCaption: `Метка №${id + 1}`
                }
            };
        })
    };

    return (
        <div>
            <YMaps>
                <Map
                    defaultState={{
                        center: [
                            51.658701,
                            39.20404
                        ],
                        zoom: 12,
                    }} width="76vw" height="80vh"
                >
                    <ObjectManager
                        objects={{
                            openBalloonOnClick: true
                        }}
                        clusters={{}}
                        options={{
                            clusterize: true,
                            gridSize: 32
                        }}
                        defaultFeatures={collection}
                        modules={[
                            'geoObject.addon.balloon', 'geoObject.addon.hint',
                            "objectManager.addon.objectsBalloon",
                            "objectManager.addon.clustersBalloon"
                        ]}
                    />
                </Map>
            </YMaps>
        </div>
    );
};

export default MyMap;