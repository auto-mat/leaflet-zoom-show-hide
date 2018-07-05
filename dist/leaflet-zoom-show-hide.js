class ZoomShowHide{
    constructor(map) {
        this.map = map;
        this.layers = [];
        var that = this; // I do not like this programing language.
        this.map.on('zoom', function(e) {that.filter()});
    }

    filter() {
        var current_zoom_level = this.map.getZoom();
        for (var i=0; i < this.layers.length; i++) {
            var layer = this.layers[i];
            if ((layer.min_zoom == null || current_zoom_level >= layer.min_zoom) &&
                (layer.max_zoom == null || current_zoom_level <= layer.max_zoom)){
                if (!this.map.hasLayer(layer)) {
                    layer.addTo(this.map);
                }
            } else {
                if (this.map.hasLayer(layer)) {
                    layer.removeFrom(this.map);
                }
            }
        }
    }

    addLayer(layer, min_zoom, max_zoom){
        layer.min_zoom = min_zoom;
        layer.max_zoom = max_zoom;
        this.layers.push(layer)
        this.filter()
    }
}
