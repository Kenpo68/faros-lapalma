var config = {
     style: 'mapbox://styles/kenpo/cmajlt9pd010g01skeldj3bb9',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoia2VucG8iLCJhIjoiY21hamxhZ2hiMHg5dDJsc2psY3F1Z2Y3bCJ9.HnnAzzXKVFZOgciVyJ1qJQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Faros La Palma',
    subtitle: 'Storymaps de faros de La Palma',
    byline: 'Santiago Villamediana',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Faro de Punta Lava',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Faro_de_Punta_Lava_2014-11.JPG',
            description: 'El faro de Punta Lava o faro de Punta del Moro es un faro situado en Tazacorte, al oeste de la isla de La Palma, en el archipiélago de las Islas Canarias, España',
            location: {
                center: [-17.925680083527727, 28.596724179455595],
                zoom: 12.5,
                pitch: 62.77,
                bearing: 70.28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Faro de Fuencaliente',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/At_La_Palma_2020_247.jpg',
            description: 'El faro de Fuencaliente se encuentra en la punta sur de la isla de La Palma (Canarias, España), en el municipio de Fuencaliente.',
            location: {
                center: [-17.843130527441485, 28.455346098137966],
                zoom: 15.83,
                pitch: 71.52,
                bearing: 9.60,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Faro de Arenas Blancas',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Faro_de_Arenas_Blancas_2014-11.JPG',
            description: 'El faro de Arenas Blancas es un faro situado en la playa de Arenas Blancas, a 4 kilómetros al sureste de Lomo Oscuro, en la isla de La Palma, en el archipiélago de las Islas Canarias, España.[',
            location: {
                center: [-17.760448929730593, 28.569944309752522],
                zoom: 16.69,
                pitch: 67.59,
                bearing: -39.23
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Faro de Punta Cumplida',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Faro_de_Punta_Cumplida.jpg',
            description: 'El faro de Punta Cumplida es un faro situado en la localidad de Barlovento, en la isla de La Palma (provincia de Santa Cruz de Tenerife, Canarias, España).',
            location: {
                center: [-17.778083905042514, 28.83904357348478],
                zoom: 16.83,
                pitch: 69.93,
                bearing: -147.89
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
