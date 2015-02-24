define([
        'config',
        'app/dataFacade'
    ],
    function (config, dataFacade) {

        var my = Object.create(dataFacade);

        my.dataSets = {

        };

        my.datasetCSV = new recline.Model.Dataset({
            url: config.urls.fauna_csv,
            backend: 'csv'
        });
        my.datasetTest = new recline.Model.Dataset({
            url: config.urls.fauna_csv_test,
            backend: 'csv'
        });

        my.datasetStore = new recline.Model.Dataset({
            url: config.urls.fauna_datastore,
            backend: 'ckan'
        });

        my.dataSets = {
            csv: my.datasetCSV,
            datastore: my.datasetStore,
            test: my.datasetTest
        };

        return my;
    });