({
	createButton: function(component, event, helper) {
		console.log('createButton');
		var callbackFunction = function(newEl, status, errorMessage) {
			console.log('callback');
			if(status === 'SUCCESS') {
				console.log('success');
				var body = component.get('v.body');
				body.push(newEl);
				component.set('v.body', body);
			} else {
				var toastEvent = $A.get('e.force:showToast');
				toastEvent.setParams({
						title: 'Error',
						message: 'Error creating button',
						type: 'error'});
				toastEvent.fire();
			}
		}

		$A.createComponent('lightning:button', {label: 'New button!'}, callbackFunction);
	},

})