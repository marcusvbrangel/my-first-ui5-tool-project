sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Button, MessageToast) {
	"use strict";

	new Button("btnReady", {
		text: "Ready...",
		press: function () {
			MessageToast.show("minha primeira aplicacao ui5 xxxxx");
		}
	}).placeAt("content");

	new Button("btnOther", {
		text: "Other",
		icon: "sap-icon://expense-report",
		press: function () {
			MessageToast.show("my other button");
		}
	}).placeAt("content");

});