// enable Ext autoloader
Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath({
    'Ext.ux': 'ux',
    'Ext': 'lib/sencha-touch-2.1.0',
    'LeafletMapDemo': 'app'
});

Ext.application({
    name: 'LeafletMapDemo',

    statusBarStyle: 'black',
    viewport: {
        // hide navigation bar of browser
        autoMaximize: true
    },

    views: [
        'Main'
    ],

    controllers: [
        'Map'
    ],

    // launch function is called as soon as app is ready
    launch: function() {
        var llmap = Ext.create('Ext.ux.LeafletMap', {
                        id: 'leafletmap',
                        useCurrentLocation: false,
                        autoMapCenter: false,
                        mapOptions: {
                            zoom: 15
                        }
                    });
        Ext.Viewport.add(llmap);
    }
});
