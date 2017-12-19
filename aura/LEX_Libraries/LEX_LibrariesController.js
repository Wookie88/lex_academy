({

    openPopup1: function(component, event, helper) {
        component.find('overlayLib').showCustomModal({
           header: "Simple Popup",
           body: 'simple text',
           showCloseButton: true,
           cssClass: "mymodal",
           closeCallback: function() {
               alert('On Close Callback');
           }
       });
    },

    openPopup2: function(component, event, helper) {
        $A.createComponent("c:LEX_InstantiatingDemo", {},
            function(content, status) {
                if (status === "SUCCESS") {
                   var modalBody = content;
                   component.find('overlayLib').showCustomModal({
                       header: "Demo inside a popup!",
                       body: modalBody,
                       showCloseButton: true,
                       cssClass: "mymodal",
                       closeCallback: function() {
                           alert('On close');
                       }
                   })

               }
            });
    },

    showNotice: function(component, event, helper) {
        component.find('notifLib').showNotice({
            "variant": "error",
            "header": "Something has gone wrong!",
            "message": "Oh no! Error!",
            closeCallback: function() {
                alert('On close');
            }
        });
    },

    showToast: function(component, event, helper) {
        component.find('notifLib').showToast({
            "title": "Success!",
            "variant": 'success',
            "message": "This won't work in Lightning Out though..."
        });
    },

})