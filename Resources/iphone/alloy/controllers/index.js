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
    var __alloyId25 = {};
    var __alloyId28 = [];
    var __alloyId30 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId31 = [];
            var __alloyId32 = {
                type: "Ti.UI.ImageView",
                bindId: "catPhoto",
                properties: {
                    height: "100",
                    bindId: "catPhoto"
                }
            };
            __alloyId31.push(__alloyId32);
            var __alloyId34 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId35 = [];
                    var __alloyId36 = {
                        type: "Ti.UI.Label",
                        bindId: "catName",
                        properties: {
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "#000",
                            bindId: "catName"
                        }
                    };
                    __alloyId35.push(__alloyId36);
                    var __alloyId37 = {
                        type: "Ti.UI.Label",
                        bindId: "catFur",
                        properties: {
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "#000",
                            bindId: "catFur"
                        }
                    };
                    __alloyId35.push(__alloyId37);
                    return __alloyId35;
                }(),
                properties: {
                    layout: "vertical"
                }
            };
            __alloyId31.push(__alloyId34);
            return __alloyId31;
        }(),
        properties: {
            layout: "horizontal"
        }
    };
    __alloyId28.push(__alloyId30);
    var __alloyId27 = {
        properties: {
            name: "elementTemplate"
        },
        childTemplates: __alloyId28
    };
    __alloyId25["elementTemplate"] = __alloyId27;
    var __alloyId40 = [];
    $.__views.__alloyId41 = {
        properties: {
            height: "100",
            id: "__alloyId41"
        },
        catName: {
            text: "Titoo"
        },
        catFur: {
            text: "noir"
        },
        catPhoto: {
            image: "http://placekitten.com/g/100/100"
        }
    };
    __alloyId40.push($.__views.__alloyId41);
    $.__views.__alloyId42 = {
        properties: {
            height: "100",
            id: "__alloyId42"
        },
        catName: {
            text: "Gnocchi"
        },
        catFur: {
            text: "roux"
        },
        catPhoto: {
            image: "http://placekitten.com/g/100/100"
        }
    };
    __alloyId40.push($.__views.__alloyId42);
    $.__views.__alloyId43 = {
        properties: {
            height: "100",
            id: "__alloyId43"
        },
        catName: {
            text: "Siia"
        },
        catFur: {
            text: "gris"
        },
        catPhoto: {
            image: "http://placekitten.com/g/100/100"
        }
    };
    __alloyId40.push($.__views.__alloyId43);
    $.__views.__alloyId44 = {
        properties: {
            height: "100",
            id: "__alloyId44"
        },
        catName: {
            text: "Copine"
        },
        catFur: {
            text: "tabby"
        },
        catPhoto: {
            image: "http://placekitten.com/g/100/100"
        }
    };
    __alloyId40.push($.__views.__alloyId44);
    $.__views.__alloyId38 = Ti.UI.createListSection({
        id: "__alloyId38"
    });
    $.__views.__alloyId38.items = __alloyId40;
    var __alloyId45 = [];
    __alloyId45.push($.__views.__alloyId38);
    $.__views.__alloyId24 = Ti.UI.createListView({
        sections: __alloyId45,
        templates: __alloyId25,
        defaultItemTemplate: "elementTemplate",
        id: "__alloyId24"
    });
    $.__views.indexWin.add($.__views.__alloyId24);
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.indexWin,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    $.addButton.addEventListener("click", function() {
        var win = Alloy.createController("add").getView();
        $.indexWin.openWindow(win);
    });
    var db = Ti.Database.open("catDB");
    db.execute("CREATE TABLE IF NOT EXISTS cats(id INTEGER PRIMARY KEY, name TEXT, fur TEXT);");
    db.file.setRemoteBackup(false);
    db.execute("INSERT INTO city (name,continent,temp_f,temp_c,condition_id) VALUES (?,?,?,?,?)", importName, importContinent, importTempF, importTempC, dbConditionId);
    db.close();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;