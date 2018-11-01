var wms_layers = [];
var lyr_TopographicWMSbyterrestris_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ows.terrestris.de/osm/service",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "TOPO-WMS",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Topographic WMS - by terrestris",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TopographicWMSbyterrestris_0, 0]);var format_AUS_adm1_1 = new ol.format.GeoJSON();
var features_AUS_adm1_1 = format_AUS_adm1_1.readFeatures(json_AUS_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUS_adm1_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AUS_adm1_1.addFeatures(features_AUS_adm1_1);var lyr_AUS_adm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AUS_adm1_1, 
                style: style_AUS_adm1_1,
                title: '<img src="styles/legend/AUS_adm1_1.png" /> AUS_adm1'
            });var format_Petauroidesvolansoccurrences_2 = new ol.format.GeoJSON();
var features_Petauroidesvolansoccurrences_2 = format_Petauroidesvolansoccurrences_2.readFeatures(json_Petauroidesvolansoccurrences_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Petauroidesvolansoccurrences_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Petauroidesvolansoccurrences_2.addFeatures(features_Petauroidesvolansoccurrences_2);var lyr_Petauroidesvolansoccurrences_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Petauroidesvolansoccurrences_2, 
                style: style_Petauroidesvolansoccurrences_2,
                title: '<img src="styles/legend/Petauroidesvolansoccurrences_2.png" /> Petauroides volans occurrences'
            });var lyr_BioclimmodelPvolans_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bioclim model P. volans",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BioclimmodelPvolans_3.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12245143.987260, -5621521.486192, 17811118.526924, -557305.257275]
                            })
                        });

lyr_AUS_adm1_1.setVisible(true);lyr_Petauroidesvolansoccurrences_2.setVisible(true);lyr_BioclimmodelPvolans_3.setVisible(true);
var layersList = [lyr_TopographicWMSbyterrestris_0,lyr_AUS_adm1_1,lyr_Petauroidesvolansoccurrences_2,lyr_BioclimmodelPvolans_3];
lyr_AUS_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'HASC_1': 'HASC_1', 'CCN_1': 'CCN_1', 'CCA_1': 'CCA_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_Petauroidesvolansoccurrences_2.set('fieldAliases', {'eventID': 'eventID', 'installati': 'installati', 'protocol': 'protocol', 'taxonKey': 'taxonKey', 'family': 'family', 'lastInterp': 'lastInterp', 'speciesKey': 'speciesKey', 'month': 'month', 'lastParsed': 'lastParsed', 'phylum': 'phylum', 'orderKey': 'orderKey', 'year': 'year', 'facts': 'facts', 'species': 'species', 'issues': 'issues', 'eventTime': 'eventTime', 'gbifID': 'gbifID', 'occurrence': 'occurrence', 'countryCod': 'countryCod', 'basisOfRec': 'basisOfRec', 'recordNumb': 'recordNumb', 'relations': 'relations', 'eventDate': 'eventDate', 'classKey': 'classKey', 'scientific': 'scientific', 'taxonRank': 'taxonRank', 'familyKey': 'familyKey', 'kingdom': 'kingdom', 'decimalLat': 'decimalLat', 'publishing': 'publishing', 'geodeticDa': 'geodeticDa', 'datasetNam': 'datasetNam', 'kingdomKey': 'kingdomKey', 'lastCrawle': 'lastCrawle', 'class': 'class', 'genusKey': 'genusKey', 'key': 'key', 'phylumKey': 'phylumKey', 'genericNam': 'genericNam', 'day': 'day', 'crawlId': 'crawlId', 'individual': 'individual', 'publishi_1': 'publishi_1', 'identifier': 'identifier', 'networkKey': 'networkKey', 'license': 'license', 'datasetKey': 'datasetKey', 'institutio': 'institutio', 'specificEp': 'specificEp', 'identifi_1': 'identifi_1', 'modified': 'modified', 'occurren_1': 'occurren_1', 'decimalLon': 'decimalLon', 'extensions': 'extensions', 'country': 'country', 'recordedBy': 'recordedBy', 'genus': 'genus', 'order': 'order', 'datasetID': 'datasetID', 'institut_1': 'institut_1', 'references': 'references', 'http_//unk': 'http_//unk', 'rights': 'rights', 'coordinate': 'coordinate', 'catalogNum': 'catalogNum', 'verbatimLo': 'verbatimLo', 'rightsHold': 'rightsHold', 'http_//u_1': 'http_//u_1', 'identifica': 'identifica', 'verbatimEv': 'verbatimEv', 'collection': 'collection', 'taxonID': 'taxonID', 'dateIdenti': 'dateIdenti', 'media': 'media', 'occurren_2': 'occurren_2', 'county': 'county', 'stateProvi': 'stateProvi', 'coordina_1': 'coordina_1', 'http_//u_2': 'http_//u_2', 'locality': 'locality', 'ownerInsti': 'ownerInsti', 'vernacular': 'vernacular', 'locationRe': 'locationRe', 'elevation': 'elevation', 'elevationA': 'elevationA', 'sex': 'sex', 'identifi_2': 'identifi_2', 'identifi_3': 'identifi_3', });
lyr_AUS_adm1_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'HASC_1': 'TextEdit', 'CCN_1': 'TextEdit', 'CCA_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_Petauroidesvolansoccurrences_2.set('fieldImages', {'eventID': 'TextEdit', 'installati': 'TextEdit', 'protocol': 'TextEdit', 'taxonKey': 'TextEdit', 'family': 'TextEdit', 'lastInterp': 'TextEdit', 'speciesKey': 'TextEdit', 'month': 'TextEdit', 'lastParsed': 'TextEdit', 'phylum': 'TextEdit', 'orderKey': 'TextEdit', 'year': 'TextEdit', 'facts': 'TextEdit', 'species': 'TextEdit', 'issues': 'TextEdit', 'eventTime': 'TextEdit', 'gbifID': 'TextEdit', 'occurrence': 'TextEdit', 'countryCod': 'TextEdit', 'basisOfRec': 'TextEdit', 'recordNumb': 'TextEdit', 'relations': 'TextEdit', 'eventDate': 'TextEdit', 'classKey': 'TextEdit', 'scientific': 'TextEdit', 'taxonRank': 'TextEdit', 'familyKey': 'TextEdit', 'kingdom': 'TextEdit', 'decimalLat': 'TextEdit', 'publishing': 'TextEdit', 'geodeticDa': 'TextEdit', 'datasetNam': 'TextEdit', 'kingdomKey': 'TextEdit', 'lastCrawle': 'TextEdit', 'class': 'TextEdit', 'genusKey': 'TextEdit', 'key': 'TextEdit', 'phylumKey': 'TextEdit', 'genericNam': 'TextEdit', 'day': 'TextEdit', 'crawlId': 'TextEdit', 'individual': 'TextEdit', 'publishi_1': 'TextEdit', 'identifier': 'TextEdit', 'networkKey': 'TextEdit', 'license': 'TextEdit', 'datasetKey': 'TextEdit', 'institutio': 'TextEdit', 'specificEp': 'TextEdit', 'identifi_1': 'TextEdit', 'modified': 'TextEdit', 'occurren_1': 'TextEdit', 'decimalLon': 'TextEdit', 'extensions': 'TextEdit', 'country': 'TextEdit', 'recordedBy': 'TextEdit', 'genus': 'TextEdit', 'order': 'TextEdit', 'datasetID': 'TextEdit', 'institut_1': 'TextEdit', 'references': 'TextEdit', 'http_//unk': 'TextEdit', 'rights': 'TextEdit', 'coordinate': 'TextEdit', 'catalogNum': 'TextEdit', 'verbatimLo': 'TextEdit', 'rightsHold': 'TextEdit', 'http_//u_1': 'TextEdit', 'identifica': 'TextEdit', 'verbatimEv': 'TextEdit', 'collection': 'TextEdit', 'taxonID': 'TextEdit', 'dateIdenti': 'TextEdit', 'media': 'TextEdit', 'occurren_2': 'TextEdit', 'county': 'TextEdit', 'stateProvi': 'TextEdit', 'coordina_1': 'TextEdit', 'http_//u_2': 'TextEdit', 'locality': 'TextEdit', 'ownerInsti': 'TextEdit', 'vernacular': 'TextEdit', 'locationRe': 'TextEdit', 'elevation': 'TextEdit', 'elevationA': 'TextEdit', 'sex': 'TextEdit', 'identifi_2': 'TextEdit', 'identifi_3': 'TextEdit', });
lyr_AUS_adm1_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'HASC_1': 'no label', 'CCN_1': 'no label', 'CCA_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_Petauroidesvolansoccurrences_2.set('fieldLabels', {'eventID': 'no label', 'installati': 'no label', 'protocol': 'no label', 'taxonKey': 'no label', 'family': 'no label', 'lastInterp': 'no label', 'speciesKey': 'no label', 'month': 'no label', 'lastParsed': 'no label', 'phylum': 'no label', 'orderKey': 'no label', 'year': 'no label', 'facts': 'no label', 'species': 'no label', 'issues': 'no label', 'eventTime': 'no label', 'gbifID': 'no label', 'occurrence': 'no label', 'countryCod': 'no label', 'basisOfRec': 'no label', 'recordNumb': 'no label', 'relations': 'no label', 'eventDate': 'no label', 'classKey': 'no label', 'scientific': 'no label', 'taxonRank': 'no label', 'familyKey': 'no label', 'kingdom': 'no label', 'decimalLat': 'no label', 'publishing': 'no label', 'geodeticDa': 'no label', 'datasetNam': 'no label', 'kingdomKey': 'no label', 'lastCrawle': 'no label', 'class': 'no label', 'genusKey': 'no label', 'key': 'no label', 'phylumKey': 'no label', 'genericNam': 'no label', 'day': 'no label', 'crawlId': 'no label', 'individual': 'no label', 'publishi_1': 'no label', 'identifier': 'no label', 'networkKey': 'no label', 'license': 'no label', 'datasetKey': 'no label', 'institutio': 'no label', 'specificEp': 'no label', 'identifi_1': 'no label', 'modified': 'no label', 'occurren_1': 'no label', 'decimalLon': 'no label', 'extensions': 'no label', 'country': 'no label', 'recordedBy': 'no label', 'genus': 'no label', 'order': 'no label', 'datasetID': 'no label', 'institut_1': 'no label', 'references': 'no label', 'http_//unk': 'no label', 'rights': 'no label', 'coordinate': 'no label', 'catalogNum': 'no label', 'verbatimLo': 'no label', 'rightsHold': 'no label', 'http_//u_1': 'no label', 'identifica': 'no label', 'verbatimEv': 'no label', 'collection': 'no label', 'taxonID': 'no label', 'dateIdenti': 'no label', 'media': 'no label', 'occurren_2': 'no label', 'county': 'no label', 'stateProvi': 'no label', 'coordina_1': 'no label', 'http_//u_2': 'no label', 'locality': 'no label', 'ownerInsti': 'no label', 'vernacular': 'no label', 'locationRe': 'no label', 'elevation': 'no label', 'elevationA': 'no label', 'sex': 'no label', 'identifi_2': 'no label', 'identifi_3': 'no label', });
lyr_Petauroidesvolansoccurrences_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});