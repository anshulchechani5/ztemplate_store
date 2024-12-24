sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ztemplatestore1/test/integration/FirstJourney',
		'ztemplatestore1/test/integration/pages/ZDM_TEMPLATE_STOREList',
		'ztemplatestore1/test/integration/pages/ZDM_TEMPLATE_STOREObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZDM_TEMPLATE_STOREList, ZDM_TEMPLATE_STOREObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ztemplatestore1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZDM_TEMPLATE_STOREList: ZDM_TEMPLATE_STOREList,
					onTheZDM_TEMPLATE_STOREObjectPage: ZDM_TEMPLATE_STOREObjectPage
                }
            },
            opaJourney.run
        );
    }
);