({
	onInit: function(component, event, helper) {

	},

	recordUpdated: function(component, event, helper) {
		console.log('recordUpdated');
	},

	handleSaveRecord: function(component, event, helper) {
		component.find('forceRecordCmp').saveRecord($A.getCallback(function(saveResult) {
			if(saveResult.state === 'SUCCESS')
				var toastEvent = $A.get('e.force:showToast');
				toastEvent.setParams({
					title: 'Success!',
					message: 'The record has been updated successfully',
					type: 'success'
				});
				toastEvent.fire();
		}));
	},
})