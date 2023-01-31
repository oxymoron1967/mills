let pghMap;
pghMap = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(pghMap);

pghMap.setView([40.4274, -79.9652], 11);

L.geoJSON(pitt).addTo(pghMap);

const tubeWorks = L.marker([40.3521, -79.8607]).addTo(pghMap);
tubeWorks.bindPopup("<b><a href=#tube> US Steel National Tube Works in McKeesport</a><</b>");

const homesteadWorks = L.marker([40.4111, -79.8972]).addTo(pghMap);
homesteadWorks.bindPopup("<b><a href=#homestead>US Steel Homestead Works</a></b>");

const thompsonWorks = L.marker([40.3970, -79.8639]).addTo(pghMap);
thompsonWorks.bindPopup("<b><a href=#edgar>IS Steel Edgar Thompson Steel Works in Braddock</a></b>");

const IrvinWorks = L.marker([40.3349, -79.9004]).addTo(pghMap);
IrvinWorks.bindPopup("<b><a href=#irvin>US Steel Irvin Works in West Mifflin</a></b>");

const cokeWorks = L.marker([40.2964, -79.8870]).addTo(pghMap);
cokeWorks.bindPopup("<b><a href=#clairton>US Steel Clairton Coke Works</a></b>");

const fisherBody = L.marker([40.3405, -79.9016]).addTo(pghMap);
fisherBody.bindPopup("<b><a href=#fisher>Fisher Body also called General Motors Pittsburgh in Dravosburg</a></b>");


const copperWorks = L.marker([40.3208, -79.8917]).addTo(pghMap);
copperWorks.bindPopup("<b><a href=#copper>Copperweld in Glassport</a></b>");

const hazelWorks = L.marker([40.4150, -79.9481]).addTo(pghMap);
hazelWorks.bindPopup("<b><a href=#hazel>J&L Steel Plant in the Hazelwood neighborhood of Pittsburgh</a></b>");

const southsideWorks = L.marker([40.4274, -79.9652]).addTo(pghMap);
southsideWorks.bindPopup("<b><a href=#south>J&L Steel South Side Works</b>");

const DuquesneWorks = L.marker([40.3743, -79.8425]).addTo(pghMap);
DuquesneWorks.bindPopup("<a href=#duquesne> US Steel Duquense Works</a>");

const bucyrusWorks = L.marker([40.3303, -79.8945]).addTo(pghMap);
bucyrusWorks.bindPopup("<b><a href=#bucyrus>Bucyrus Erie in Glassport</a></b>");


L.geoJSON(pitt, {
    style: function(feature) {
        return {
            color: "black",
            fillColor: "gray",
            fillOpacity: 0.5
        };
    }
}).addTo(pghMap);




