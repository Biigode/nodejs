conn = new Mongo();
db = conn.getDB('nest');

db.users.find({});
db.users.insert({ "address": { "city": "Paris", "zip": "123" }, "name": "Mike", "phone": "1234" });