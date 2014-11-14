function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
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
    $.__views.indexWin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "indexWin",
        title: "Chats"
    });
    $.__views.backButton = Ti.UI.createButton({
        id: "backButton",
        title: "Retour"
    });
    $.__views.indexWin.leftNavButton = $.__views.backButton;
    $.__views.addButton = Ti.UI.createButton({
        id: "addButton",
        title: "+"
    });
    $.__views.indexWin.rightNavButton = $.__views.addButton;
    var __alloyId24 = {};
    var __alloyId27 = [];
    var __alloyId29 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId30 = [];
            var __alloyId31 = {
                type: "Ti.UI.ImageView",
                bindId: "catPhoto",
                properties: {
                    height: "100",
                    bindId: "catPhoto"
                }
            };
            __alloyId30.push(__alloyId31);
            var __alloyId33 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId34 = [];
                    var __alloyId35 = {
                        type: "Ti.UI.Label",
                        bindId: "catName",
                        properties: {
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "#000",
                            bindId: "catName"
                        }
                    };
                    __alloyId34.push(__alloyId35);
                    var __alloyId36 = {
                        type: "Ti.UI.Label",
                        bindId: "catFur",
                        properties: {
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "#000",
                            bindId: "catFur"
                        }
                    };
                    __alloyId34.push(__alloyId36);
                    return __alloyId34;
                }(),
                properties: {
                    layout: "vertical"
                }
            };
            __alloyId30.push(__alloyId33);
            return __alloyId30;
        }(),
        properties: {
            layout: "horizontal"
        }
    };
    __alloyId27.push(__alloyId29);
    var __alloyId26 = {
        properties: {
            name: "elementTemplate"
        },
        childTemplates: __alloyId27
    };
    __alloyId24["elementTemplate"] = __alloyId26;
    $.__views.catListsection = Ti.UI.createListSection({
        id: "catListsection"
    });
    var __alloyId38 = [];
    __alloyId38.push($.__views.catListsection);
    $.__views.catList = Ti.UI.createListView({
        sections: __alloyId38,
        templates: __alloyId24,
        id: "catList",
        defaultItemTemplate: "elementTemplate"
    });
    $.__views.indexWin.add($.__views.catList);
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.indexWin,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.addButton.addEventListener("click", function() {
        var win = Alloy.createController("add").getView();
        $.indexWin.openWindow(win);
    });
    var db = Ti.Database.open("catDB");
    db.execute("CREATE TABLE IF NOT EXISTS cats(id INTEGER PRIMARY KEY, name TEXT, fur TEXT, photo TEXT);");
    db.file.setRemoteBackup(false);
    var cats = db.execute("SELECT cats.name, cats.fur, cats.photo FROM cats");
    var catItems = [];
    while (cats.isValidRow()) {
        var name = cats.fieldByName("name");
        var fur = cats.fieldByName("fur");
        var photo = cats.fieldByName("photo");
        Ti.API.info(name + " " + fur + " " + photo);
        catItems.push({
            catName: {
                text: name
            },
            catFur: {
                text: fur
            },
            catPhoto: {
                image: photo,
                height: 100
            },
            properties: {
                accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
                color: "black"
            }
        });
        cats.next();
    }
    Ti.API.info(catItems);
    $.catListsection.setHeight(100);
    $.catListsection.setItems(catItems);
    db.close();
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;