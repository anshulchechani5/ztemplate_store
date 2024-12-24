sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ztemplatestore1',
            componentId: 'ZDM_TEMPLATE_STOREList',
            contextPath: '/ZDM_TEMPLATE_STORE'
        },
        CustomPageDefinitions
    );
});