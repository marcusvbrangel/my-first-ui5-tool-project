sap.ui.define([
    "sap/m/Text"
], (Text) => {

    "use strict"

    new Text({
        id: "lblLabel",
        text: "Hello World"
    }).placeAt("content");
        
});
