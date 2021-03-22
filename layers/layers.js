var wms_layers = [];

var format_Marcas_0 = new ol.format.GeoJSON();
var features_Marcas_0 = format_Marcas_0.readFeatures(json_Marcas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marcas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marcas_0.addFeatures(features_Marcas_0);
var lyr_Marcas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marcas_0, 
                style: style_Marcas_0,
                interactive: true,
                title: 'Marcas'
            });
var lyr_MapasrasterdelIGN_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/mapa-raster",
    attributions: ' ',
                              params: {
                                "LAYERS": "mtn_rasterizado",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Mapas raster del IGN",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MapasrasterdelIGN_1, 0]);
var lyr_Ortoimagen_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/pnoa-ma?",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_2, 0]);
var format_CONSTRUCCIONES_3 = new ol.format.GeoJSON();
var features_CONSTRUCCIONES_3 = format_CONSTRUCCIONES_3.readFeatures(json_CONSTRUCCIONES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONSTRUCCIONES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSTRUCCIONES_3.addFeatures(features_CONSTRUCCIONES_3);
var lyr_CONSTRUCCIONES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONSTRUCCIONES_3, 
                style: style_CONSTRUCCIONES_3,
                interactive: true,
                title: '<img src="styles/legend/CONSTRUCCIONES_3.png" /> CONSTRUCCIONES'
            });
var lyr_Catastro_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?",
    attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Catastro",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_4, 0]);
var format_NUMEROSROJOS_5 = new ol.format.GeoJSON();
var features_NUMEROSROJOS_5 = format_NUMEROSROJOS_5.readFeatures(json_NUMEROSROJOS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUMEROSROJOS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUMEROSROJOS_5.addFeatures(features_NUMEROSROJOS_5);
var lyr_NUMEROSROJOS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUMEROSROJOS_5, 
                style: style_NUMEROSROJOS_5,
                interactive: true,
                title: 'NUMEROS ROJOS'
            });
var format_NUMEROS_VERDES_6 = new ol.format.GeoJSON();
var features_NUMEROS_VERDES_6 = format_NUMEROS_VERDES_6.readFeatures(json_NUMEROS_VERDES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NUMEROS_VERDES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUMEROS_VERDES_6.addFeatures(features_NUMEROS_VERDES_6);
var lyr_NUMEROS_VERDES_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUMEROS_VERDES_6, 
                style: style_NUMEROS_VERDES_6,
                interactive: true,
                title: 'NUMEROS_VERDES'
            });

lyr_Marcas_0.setVisible(false);lyr_MapasrasterdelIGN_1.setVisible(false);lyr_Ortoimagen_2.setVisible(true);lyr_CONSTRUCCIONES_3.setVisible(false);lyr_Catastro_4.setVisible(false);lyr_NUMEROSROJOS_5.setVisible(true);lyr_NUMEROS_VERDES_6.setVisible(true);
var layersList = [lyr_Marcas_0,lyr_MapasrasterdelIGN_1,lyr_Ortoimagen_2,lyr_CONSTRUCCIONES_3,lyr_Catastro_4,lyr_NUMEROSROJOS_5,lyr_NUMEROS_VERDES_6];
lyr_Marcas_0.set('fieldAliases', {'NUM': 'NUM', 'COLOR': 'COLOR', 'CALLE': 'CALLE', 'PARROQUIA': 'PARROQUIA', 'BUSQUEDA': 'BUSQUEDA', });
lyr_CONSTRUCCIONES_3.set('fieldAliases', {'nationalCa': 'nationalCa', 'CONSTRUIDO': 'CONSTRUIDO', });
lyr_NUMEROSROJOS_5.set('fieldAliases', {'TextString': 'TextString', 'Calle': 'Calle', 'COLOR': 'COLOR', 'CALLE_NUM': 'CALLE_NUM', });
lyr_NUMEROS_VERDES_6.set('fieldAliases', {'TextString': 'TextString', 'Calle': 'Calle', 'COLOR': 'COLOR', 'CALLE_NUM': 'CALLE_NUM', });
lyr_Marcas_0.set('fieldImages', {'NUM': 'TextEdit', 'COLOR': 'TextEdit', 'CALLE': 'TextEdit', 'PARROQUIA': 'TextEdit', 'BUSQUEDA': '', });
lyr_CONSTRUCCIONES_3.set('fieldImages', {'nationalCa': 'TextEdit', 'CONSTRUIDO': 'TextEdit', });
lyr_NUMEROSROJOS_5.set('fieldImages', {'TextString': 'TextEdit', 'Calle': 'TextEdit', 'COLOR': '', 'CALLE_NUM': 'TextEdit', });
lyr_NUMEROS_VERDES_6.set('fieldImages', {'TextString': 'TextEdit', 'Calle': 'TextEdit', 'COLOR': '', 'CALLE_NUM': 'TextEdit', });
lyr_Marcas_0.set('fieldLabels', {'NUM': 'no label', 'COLOR': 'no label', 'CALLE': 'no label', 'PARROQUIA': 'no label', 'BUSQUEDA': 'no label', });
lyr_CONSTRUCCIONES_3.set('fieldLabels', {'nationalCa': 'no label', 'CONSTRUIDO': 'no label', });
lyr_NUMEROSROJOS_5.set('fieldLabels', {'TextString': 'no label', 'Calle': 'no label', 'COLOR': 'no label', 'CALLE_NUM': 'no label', });
lyr_NUMEROS_VERDES_6.set('fieldLabels', {'TextString': 'no label', 'Calle': 'no label', 'COLOR': 'no label', 'CALLE_NUM': 'no label', });
lyr_NUMEROS_VERDES_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});