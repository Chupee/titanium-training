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
    this.__controllerPath = "add";
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
    $.__views.addWin = __ui.createWindow({
        id: "addWin",
        title: "Add a cat"
    });
    $.__views.__alloyId0 = Ti.UI.createButton({
        title: "Retour",
        id: "__alloyId0"
    });
    $.__views.addWin.leftNavButton = $.__views.__alloyId0;
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "+",
        id: "__alloyId1"
    });
    $.__views.addWin.rightNavButton = $.__views.__alloyId1;
    var __alloyId3 = {};
    var __alloyId6 = [];
    var __alloyId8 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId9 = [];
            var __alloyId10 = {
                type: "Ti.UI.ImageView",
                bindId: "catPhoto",
                properties: {
                    height: "100",
                    bindId: "catPhoto"
                }
            };
            __alloyId9.push(__alloyId10);
            var __alloyId12 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId13 = [];
                    var __alloyId14 = {
                        type: "Ti.UI.Label",
                        bindId: "catName",
                        properties: {
                            bindId: "catName"
                        }
                    };
                    __alloyId13.push(__alloyId14);
                    var __alloyId15 = {
                        type: "Ti.UI.Label",
                        bindId: "catFur",
                        properties: {
                            bindId: "catFur"
                        }
                    };
                    __alloyId13.push(__alloyId15);
                    return __alloyId13;
                }(),
                properties: {
                    layout: "vertical"
                }
            };
            __alloyId9.push(__alloyId12);
            return __alloyId9;
        }(),
        properties: {
            layout: "horizontal"
        }
    };
    __alloyId6.push(__alloyId8);
    var __alloyId5 = {
        properties: {
            name: "elementTemplate"
        },
        childTemplates: __alloyId6
    };
    __alloyId3["elementTemplate"] = __alloyId5;
    var __alloyId18 = [];
    $.__views.__alloyId19 = {
        properties: {
            height: "100",
            id: "__alloyId19"
        },
        catName: {
            text: "Titoo"
        },
        catFur: {
            text: "noir"
        },
        catPhoto: {
            image: __p.file("http://placekitten.com/g/100/100")
        }
    };
    __alloyId18.push($.__views.__alloyId19);
    $.__views.__alloyId20 = {
        properties: {
            height: "100",
            id: "__alloyId20"
        },
        catName: {
            text: "Gnocchi"
        },
        catFur: {
            text: "roux"
        },
        catPhoto: {
            image: __p.file("http://placekitten.com/g/100/100")
        }
    };
    __alloyId18.push($.__views.__alloyId20);
    $.__views.__alloyId21 = {
        properties: {
            height: "100",
            id: "__alloyId21"
        },
        catName: {
            text: "Siia"
        },
        catFur: {
            text: "gris"
        },
        catPhoto: {
            image: __p.file("http://placekitten.com/g/100/100")
        }
    };
    __alloyId18.push($.__views.__alloyId21);
    $.__views.__alloyId22 = {
        properties: {
            height: "100",
            id: "__alloyId22"
        },
        catName: {
            text: "Copine"
        },
        catFur: {
            text: "tabby"
        },
        catPhoto: {
            image: __p.file("http://placekitten.com/g/100/100")
        }
    };
    __alloyId18.push($.__views.__alloyId22);
    $.__views.__alloyId16 = Ti.UI.createListSection({
        id: "__alloyId16"
    });
    $.__views.__alloyId16.items = __alloyId18;
    var __alloyId23 = [];
    __alloyId23.push($.__views.__alloyId16);
    $.__views.__alloyId2 = Ti.UI.createListView({
        sections: __alloyId23,
        templates: __alloyId3,
        defaultItemTemplate: "elementTemplate",
        id: "__alloyId2"
    });
    $.__views.addWin.add($.__views.__alloyId2);
    $.__views.add = __ui.createNavigationWindow({
        window: $.__views.addWin,
        id: "add"
    });
    $.__views.add && $.addTopLevelView($.__views.add);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = __p.require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;