Ext.define('InduccionApp.view.index.IndexPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.indexpanel',

    onBuscarClic: function (button) {
        console.log(arguments);
        let me = this; // controller
        let view = me.getView(); // panel
        let form = view.down(Ext.toolkit === 'classic' ? 'form' : 'formpanel'); // el primer componente que encuentres tipo form
        let values = form.getValues();
        if (Ext.toolkit === 'classic') {
            let isFormValid = form.isValid();
            if (isFormValid !== true) {
                Ext.toast('Favor de validar los datos');
            }
        } else { // modern
            if ((values.cdsucur || '').length === 0) {
                Ext.toast('Ingresar sucursal');
                return;
            } else if ((values.cdramo || '').length === 0) {
                Ext.toast('Ingresar ramo');
                return;
            } else if ((values.nmpoliza || '').length === 0) {
                Ext.toast('Ingresar Póliza');
                return;
            }
        }
        let grid = view.down('grid');
        grid.getStore().getProxy().extraParams = values;
        grid.getStore().reload();
    },

    onLimpiarClic: function (button) {
        console.log(arguments);
        alert('onLimpiarClic');
    },

    onAgregarClic: function (button) {
        console.log(arguments);
        alert('onAgregarClic');
    }
});