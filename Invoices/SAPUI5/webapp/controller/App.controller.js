
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: function(){
/*                
                var oData = {
                    recipient : {
                        name : "World"
                    }
                }

                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
*/                
/*
                // set data model
                this.getView().setModel(Models.createRecipient());   
                
                // Set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName : "logaligroup.SAPUI5.i18n.i18n" });
                this.getView().setModel(i18nModel, "i18n");
 */
            }, 

            onShowHello: function () {
                // read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                // read property data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg",[sRecipient]);
                MessageToast.show(sMsg);
            }

        });


        // Mc
    });
