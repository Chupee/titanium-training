function doClick(e) {
    alert($.label.text);
}

$.index.open();

$.addButton.addEventListener('click', function() {
	var win = Alloy.createController('add').getView();
    $.indexWin.openWindow(win);
});

var db = Ti.Database.open('catDB');
db.execute('CREATE TABLE IF NOT EXISTS cats(id INTEGER PRIMARY KEY, name TEXT, fur TEXT);');
db.file.setRemoteBackup(false);


db.execute('INSERT INTO city (name,continent,temp_f,temp_c,condition_id) VALUES (?,?,?,?,?)', importName, importContinent, importTempF, importTempC, dbConditionId);


db.close();