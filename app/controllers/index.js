function doClick(e) {
    alert($.label.text);
}


$.addButton.addEventListener('click', function() {
	var win = Alloy.createController('add').getView();
    $.indexWin.openWindow(win);
});

var db = Ti.Database.open('catDB');
db.execute('CREATE TABLE IF NOT EXISTS cats(id INTEGER PRIMARY KEY, name TEXT, fur TEXT, photo TEXT);');
db.file.setRemoteBackup(false);

//db.execute('INSERT INTO cats (name,fur,photo) VALUES (?,?,?)', "Miu", "tabby blanc", "/images/siia.jpg");

var cats = db.execute('SELECT cats.name, cats.fur, cats.photo FROM cats');

var catItems = [];
while (cats.isValidRow()) {
  var name = cats.fieldByName('name');
  var fur = cats.fieldByName('fur');
  var photo = cats.fieldByName('photo');
  Ti.API.info(name + ' ' + fur + ' ' + photo);
  catItems.push(
  	{
	  	catName : { text: name },
	  	catFur : { text : fur },
	  	catPhoto: { image : photo, height : 100 },
	  	properties: {
		  	accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
	        color: 'black'
	 	 }
    });

  //$.catListSection.addItem(cat);
  cats.next();
}
Ti.API.info(catItems);
$.catListsection.setHeight(100);
$.catListsection.setItems(catItems);

db.close();

$.index.open();
