({
	displayHello: function(component, event, helper) {
		var yourName = '';
		var args = event.getParam('arguments');
		if(args) {
			yourName = args.yourName;
		}
		component.set('v.message', 'Hello ' + yourName + '!');
	},

	clearMessage: function(component, event, helper) {
		component.set('v.message', '');
	},
})