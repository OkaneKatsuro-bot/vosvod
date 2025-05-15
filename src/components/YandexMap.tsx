'use client';

import { useEffect } from 'react';
import styles from './YandexMap.module.css';

export default function YandexMap() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://api-maps.yandex.ru/v3/?apikey=7c14fae9-b005-4638-89ac-0b7605fb8054&lang=ru_RU';
    script.async = true;
    script.onload = async () => {
      // @ts-ignore
      await ymaps3.ready;

      // @ts-ignore
      const { YMap } = await ymaps3.import('@yandex/ymaps3-map');
      // @ts-ignore
      const { YMapDefaultSchemeLayer } = await ymaps3.import('@yandex/ymaps3-scheme-layer');
      // @ts-ignore
      const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers');

      const container = document.getElementById('map');
      if (!container) return;

      const map = new YMap(container, {
        location: {
          center: [30.3141, 59.9386], // СПб
          zoom: 10,
        },
      });

      map.addChild(new YMapDefaultSchemeLayer());
      map.addChild(new YMapDefaultMarker({ coordinates: [30.3141, 59.9386] }));
    };

    document.body.appendChild(script);
  }, []);

  return <div id="map" className={styles.map}></div>;
}
