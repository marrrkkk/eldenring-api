import { Boss } from "./api/bosses";
import { Ammo } from "./api/ammos";
import { Armor } from "./api/armors";
import { Ashes } from "./api/ashes";
import { Class } from "./api/classes";
import { Creature } from "./api/creatures";
import { Incantation } from "./api/incantations";
import { Item } from "./api/items";
import { Location } from "./api/locations";
import { NPC } from "./api/npc";
import { Shield } from "./api/shields";
import { Sorcery } from "./api/sorceries";
import { Spirit } from "./api/spirits";
import { Talisman } from "./api/talismans";
import { Utility } from "./api/utility";
import { Weapon } from "./api/weapons";

export class EldenRing {
  public boss: Boss;
  public ammo: Ammo;
  public armor: Armor;
  public ashes: Ashes;
  public classes: Class;
  public creature: Creature;
  public incantation: Incantation;
  public item: Item;
  public location: Location;
  public npc: NPC;
  public utility: Utility;
  public shield: Shield;
  public sorcery: Sorcery;
  public spirit: Spirit;
  public talisman: Talisman;
  public weapon: Weapon;

  public constructor() {
    this.ammo = new Ammo();
    this.boss = new Boss();
    this.armor = new Armor();
    this.ashes = new Ashes();
    this.classes = new Class();
    this.creature = new Creature();
    this.incantation = new Incantation();
    this.item = new Item();
    this.location = new Location();
    this.npc = new NPC();
    this.utility = new Utility();
    this.shield = new Shield();
    this.sorcery = new Sorcery();
    this.spirit = new Spirit();
    this.talisman = new Talisman();
    this.weapon = new Weapon();
  }
}