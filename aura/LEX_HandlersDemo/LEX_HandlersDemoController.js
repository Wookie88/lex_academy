({

    onBtn1Click: function(component, event, helper) {
        debugger;
        var label = event.getSource().get('v.label');
        component.set('v.message', label);
    },

    onBtn2Click: function(component, event, helper) {
        var label = event.currentTarget.getAttribute('value');
        component.set('v.message', label);
    },

    onBtnColourClick: function(component, event, helper) {
        var msg = 'Id = ' + event.getSource().getLocalId() + ' value = ' + event.getSource().get('v.value');
        component.set('v.message', msg);
    },
})