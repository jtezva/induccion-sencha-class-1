/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'InduccionApp.Application',

    name: 'InduccionApp',

    requires: [
        // This will automatically load all classes in the InduccionApp namespace
        // so that application classes do not need to require each other.
        'InduccionApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'InduccionApp.view.index.IndexPanel'
});
