Ext.define('InduccionApp.view.persona.PersonaFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personaform',

    onGuardarClic: function (b) {
        let me = this;
        let view = me.getView();
        let form = view.down('form');
        
        if (!form.isValid()) {
            Ext.toast('Favor de validar los datos');
        }

        let values = form.getValues();
        console.log(values);
        
        if (view.getFuncion() === 'insertar') {
            Ext.Ajax.request({
                url: 'http://softitlan.com:8081/persona/insert',
                method: 'POST',
                jsonData: values,
                success: function (response) {
                    let json = Ext.JSON.decode(response.responseText);
                    if (json.success === true) {
                        Ext.toast('Insertado correctamente!');
                        view.fireEvent('insert', view);
                        view.close();
                    } else {
                        Ext.toast(json.message);
                    }
                },
                failure: function (response) {
                    console.error(response);
                    Ext.toast('Error en el servicio de insertar');
                }
            });
        } else {
            Ext.Ajax.request({
                url: 'http://softitlan.com:8081/persona/upadte/' + view.getPersona().data.id,
                method: 'POST',
                jsonData: values,
                success: function (response) {
                    let json = Ext.JSON.decode(response.responseText);
                    if (json.success === true) {
                        Ext.toast('Actualizado correctamente!');
                        view.fireEvent('update', view);
                        view.close();
                    } else {
                        Ext.toast(json.message);
                    }
                },
                failure: function (response) {
                    console.error(response);
                    Ext.toast('Error en el servicio de actualizar');
                }
            });
        }
    }
});