({
	handleAppEvent: function(component, event, helper) {
		console.log('handleAppEvent');
		var message = event.getParam("message");
		component.set('v.message', message);
	},

	handleCmpEvent: function(component, event, helper) {
		var message = event.getParam("message");
		component.set('v.message', message);
	},

	clearMessage: function(component, event, helper) {
		component.set('v.message', '');
	},

	/*------------------------------------------------*/

	callChildHello: function(component, event, helper) {
		var child = component.find('methodChild');
		child.displayHello('John');
	},

	callChildClear: function(component, event, helper) {
		var child = component.find('methodChild');
		child.clearMessage();
	},
})