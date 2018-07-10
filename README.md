leaflet-zoom-show-hide
----------------------

Npm package [leaflet.zoomshowhide](https://www.npmjs.com/package/leaflet.zoomshowhide)

Show/hide leaflet layers based on zoom level.

    zsh = new ZoomShowHide();
    zsh.addTo(map);
    layer1.min_zoom = 7;
    layer1.max_zoom = 14;
    zsh.addLayer(layer1);
    layer2.min_zoom = 9;
    zsh.addLayer(layer2);

You can also remove and clear layers.

    zsh.removeLayer(layer1);
    zsh.clearLayers(layer1);

[Demo](http://ipfs.hobbs.cz/ipfs/QmaTcNKrZxPFB4StVjMxaVtR2EciQQuRa47AtRSWbdzehi/leaflet-zoom-show-hide/demo.html)

Also see [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) which merges the markers into groups to reduce crowding instead of hiding them.

Tip:
----

If you get all your markers as a single geojson object from the server, geojson is just json, so it is easy to divide it up into separate layers in javascript.
