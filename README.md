leaflet-zoom-show-hide
----------------------

Show/hide leaflet layers based on zoom level.

    zsh = new ZoomShowHide(map);
    //  addLayer(layer,  min_zoom, max_zoom);
    zsh.addLayer(layer1, 7,        14);
    zsh.addLayer(layer2, 9,        null);

[Demo](http://ipfs.hobbs.cz/ipfs/QmQjk84caPKRxNr2CdVLCM4BfDWk13fGHrzGn6dgUjBd2c/leaflet-zoom-show-hide/demo.html)

Tip:
----

If you get all your markers as a single geojson object from the server, geojson is just json, so it is easy to divide it up into separate layers in javascript.
