sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ztemplatestore1',
            componentId: 'ZDM_TEMPLATE_STOREObjectPage',
            contextPath: '/ZDM_TEMPLATE_STORE'
        },
        CustomPageDefinitions
    );
});