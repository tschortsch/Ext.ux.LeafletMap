Ext.define('LeafletMapDemo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
	id: 'mainTabPanel',
	requires: ['Ext.ux.LeafletMap'],
	
    config: {
		tabBar: {
			docked: 'bottom'
		},
		
        items: [
            {
                title: 'LeafletMap',
                iconCls: 'maps',
				layout: 'fit',

                items: [
					{
						// Ext.ux.LeafletMap Component
						xtype: 'leafletmap',
						id: 'leafletmap',
						useCurrentLocation: false,
						autoMapCenter: false,
                        enableOwnPositionMarker: false,
						mapOptions: {
							zoom: 15
						}
					}
				]
            }
        ]
    }
});
