sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZDM_TEMPLATE_STOREList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZDM_TEMPLATE_STOREList.onFilterBar().iExecuteSearch();
                
                Then.onTheZDM_TEMPLATE_STOREList.onTable().iCheckRows();

                When.onTheZDM_TEMPLATE_STOREList.onTable().iPressRow(0);
                Then.onTheZDM_TEMPLATE_STOREObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});