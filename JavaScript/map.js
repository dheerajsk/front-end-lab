const map = new Map();

map.set("fname", "Alex");
map.set("lname", "Stark");
map.set("age", 25);
map.set("desg", "Developer");
console.log(map);

console.log("Map has age ?" + map.has("age"));
console.log("Map has Salary ?" + map.has("salary"));
console.log("Get me lastname " + map.get("lname"));
console.log("Delete desg" + map.delete("desg"));
console.log(map);
map.clear();
console.log(map);