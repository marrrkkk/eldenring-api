"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
//create an instance
const elden = new src_1.EldenRing();
(async () => {
    const boss = await elden.boss.get("Malenia");
    console.log("Object: ", boss); // -> return the object of boss (object)
    console.log("ID:", boss.id); // -> return id of boss (string)
    console.log("Name:", boss.name); // -> return name of boss (string)
    console.log("Image:", boss.image); // -> return image link (string)
    console.log("Description:", boss.description); // -> return description of boss (string)
    console.log("Location:", boss.location); // -> return location of boss (string)
    console.log("Drops:", boss.drops); // -> return an array of drops from the boss (array)
    console.log("HP:", boss.healthPoints); // -> return hp of boss (string)
})();
