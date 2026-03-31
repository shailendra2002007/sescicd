/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/trial/ses/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
