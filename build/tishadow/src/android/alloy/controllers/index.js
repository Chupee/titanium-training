function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    __p.require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.__alloyId0 = __ui.createWindow({
        backgroundColor: "white",
        title: "Chats",
        id: "__alloyId0"
    });
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Retour",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.leftNavButton = $.__views.__alloyId1;
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "+",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.rightNavButton = $.__views.__alloyId2;
    var __alloyId6 = [];
    $.__views.__alloyId7 = {
        properties: {
            title: "chat1",
            id: "__alloyId7"
        }
    };
    __alloyId6.push($.__views.__alloyId7);
    $.__views.__alloyId8 = {
        properties: {
            title: "chat2",
            id: "__alloyId8"
        }
    };
    __alloyId6.push($.__views.__alloyId8);
    $.__views.__alloyId9 = {
        properties: {
            title: "chat3",
            id: "__alloyId9"
        }
    };
    __alloyId6.push($.__views.__alloyId9);
    $.__views.__alloyId4 = Ti.UI.createListSection({
        id: "__alloyId4"
    });
    $.__views.__alloyId4.items = __alloyId6;
    var __alloyId10 = [];
    __alloyId10.push($.__views.__alloyId4);
    $.__views.__alloyId3 = Ti.UI.createListView({
        sections: __alloyId10,
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.index = __ui.createNavigationWindow({
        window: $.__views.__alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = __p.require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;