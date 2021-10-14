//@ts-nocheck
sap.ui.define([
    "logaligroup/SAPUI5/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
], 
/**
 * 
 * @param { typeof sap.ui.test.opaQnit } opaQunit 
 */
function(mockserver, opaQunit) {
    'use strict';

    QUnit.module("Navigation");

    opaQunit("Should open the Hello Dialog", function(Given, When, Then){

        // initialize the mock server
        mockserver.init();

        //Arrangements
        Given.iStartMyUIComponent({
            componentConfig: "logaligroup.SAPUI5"
        });

        //Actions
        When.onTheAppPAge.iSayHelloDialogButton();

        // Assertions
        Then.onTheAppPAge.iSeeTheHelloDialog();

        //Cleanup
        Then.iTeardownMyApp();



    });
    
});