sap.ui.define([
//    "sap/m/Text"
//    "sap/ui/core/mvc/XMLView"
    "sap/ui/core/ComponentContainer"
],
    /**
     * 
     * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
     */
    function (ComponentContainer) {

        new ComponentContainer({
            name: "logaligroup.SAPUI5",
            settings: {
                id : "SAPUI5"
            },
            async: true,
        }).placeAt("content"); 

/*
        XMLView.create({
            viewName: "logaligroup.SAPUI5.view.App"
        }).then(function(oView) {
            oView.placeAt("content");                
        });
*/
/*
        new Text({
            text: "Hello Wordl MC"
        }).placeAt("content");
*/
    });
