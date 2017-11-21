({

    lastBtnClick: function(component) {
        var action = component.get('c.doNothing');
        var self = this;
        action.setCallback(this, function(result) {
           this.lastBtnClickCallback(component);
        }.bind(this), 'SUCCESS');
        $A.enqueueAction(action);
    },

    lastBtnClickCallback: function(component) {
        component.set('v.message', 'LAST BUTTON');
    },

})