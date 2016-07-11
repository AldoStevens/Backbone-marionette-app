ContactManager.module("contactsApp.List", function(List, ContactManager,
Backbone, Marionette, $, _){
  List.Contact = Marionette.ItemView.extend({
    tagName: "tr",
    template: "#contact-list-item"
  });

  List.Contacts = Marionette.CollectionView.extend({
    tagName: "table",
    className: "table tabe-hover",
    template: "#contact-list",
    childView: List.Contact,
    childViewContainer: "tbody"
  });
});
