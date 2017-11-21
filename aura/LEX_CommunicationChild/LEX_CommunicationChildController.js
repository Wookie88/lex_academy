({
	sendAppEvent: function(component, event, helper) {
		console.log('sendAppEvent');
		var title = component.get('v.title');
		var appEvent = $A.get("e.c:LEX_EventApp");
		appEvent.setParams({ "message" : 'Message from ' + title });
		appEvent.fire();

	},

	sendCmpEvent: function(component, event, helper) {
		console.log('sendCmpEvent');
		var title = component.get('v.title');
		var cmpEvent = component.getEvent("myCmpEvent");
		cmpEvent.setParams({ "message" : 'Message from ' + title  });
		cmpEvent.fire();
	},

	handleAppEvent: function(component, event, helper) {
		console.log('handleAppEvent');
		var message = event.getParam("message");
		component.set('v.message', message);
	},

	handleCmpEvent: function(component, event, helper) {
		console.log('handleCmpEvent')
		var message = event.getParam("message");
		component.set('v.message', message);
		event.setParam('message', message + ' A');
	},

	clearMessage: function(component, event, helper) {
		component.set('v.message', '');
	},
})