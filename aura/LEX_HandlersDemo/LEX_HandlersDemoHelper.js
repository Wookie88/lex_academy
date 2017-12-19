({

    /*
        Here the context is not passed in any way - it does not work
    */
    pizzaClick: function(component) {
        var action = component.get('c.doNothing');
        action.setCallback(this, function(result) {
            this.simpleCallback(component, 'pizza');
        }, 'SUCCESS');
        $A.enqueueAction(action);
    },

    /*
        Here we store current context in self variable
    */
    spaghettiClick: function(component) {
        var action = component.get('c.doNothing');
        var self = this;
        action.setCallback(this, function(result) {
           self.simpleCallback(component, 'spaghetti');
        }, 'SUCCESS');
        $A.enqueueAction(action);
    },

    /*
        Here we use BIND to pass context
    */
    lasagneClick: function(component) {
        var action = component.get('c.doNothing');
        action.setCallback(this, function(result) {
           this.simpleCallback(component, 'lasagne');
        }.bind(this), 'SUCCESS');
        $A.enqueueAction(action);
    },

    simpleCallback: function(component, foodName) {
        component.set('v.message', foodName + ' CALLBACK OK');
    },

})