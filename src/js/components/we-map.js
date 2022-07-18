if (document.querySelector('.we-map-city')) {
    function weMapInitNovosib() {
        let map = new ymaps.Map('we-map--novosibirsk', {
            center: [55.00706923755771, 82.91885083672503],
            zoom: 12,
        });
        // map.controls.remove('geolocationControl');
        // map.controls.remove('searchControl');
        // map.controls.remove('trafficControl');
        // map.controls.remove('typeSelector');
        // map.controls.remove('fullscreenControl');
        // map.controls.remove('rulerControl');
    };

    function weMapInitKemerovo() {
        let map = new ymaps.Map('we-map--kemerovo', {
            center: [55.35590947018082, 86.08538772929543],
            zoom: 12,
        });
        // map.controls.remove('geolocationControl');
        // map.controls.remove('searchControl');
        // map.controls.remove('trafficControl');
        // map.controls.remove('typeSelector');
        // map.controls.remove('fullscreenControl');
        // map.controls.remove('rulerControl');
    };
    if (document.querySelector('#we-map--novosibirsk')) {
        ymaps.ready(weMapInitNovosib);
    }
    if (document.querySelector('#we-map--kemerovo')) {
        ymaps.ready(weMapInitKemerovo);
    }
}
