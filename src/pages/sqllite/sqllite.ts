import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
// Native components
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


const DATABASE_FILE_NAME: string = 'data.db';
@Component({
  selector: 'page-sqllite',
  templateUrl: 'sqllite.html',
})
export class SqllitePage {


  ionViewDidLoad() {
    console.log('ionViewDidLoad SqllitePage');
  }

  private db: SQLiteObject;
cars: string[] = [];
titleVoiture: string;
vitesseVoiture: number;
descriptionVoiture: string;
categorieVoiture: string;

constructor(public navCtrl: NavController, private sqlite:
SQLite) {
this.createDatabaseFile();


}

private createDatabaseFile(): void {
  this.sqlite.create({
  name: DATABASE_FILE_NAME,
  location: 'default'
  })
  .then((db: SQLiteObject) => {
  console.log('Bdd créée !');
  this.db = db;
  this.createTables();
  })
  .catch(e => console.log(e));
  }

  private createTables(): void {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `cars` ( `idcars` INTEGER NOT NULL, `name`TEXT NOT NULL, `eval` INTEGER NOT NULL DEFAULT 3, `desc` TEXT, `categoryId` INTEGER, PRIMARY KEY(`idcars`),  FOREIGN KEY(`categoryId`) REFERENCES idCategories )', {})
    .then(() => {
    console.log('Table cars created !');
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `CATEGORIES` ( `idCategories` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,`name` TEXT NOT NULL )', {})
    .then(() => console.log('Table Categories created !'))
    .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
    }


    public saveMyCar() {
      console.log('Movie name -> ' + this.titleVoiture);
      console.log('Rating -> ' + this.vitesseVoiture + '/5');
      console.log('Description -> ' + this.descriptionVoiture);
      console.log('Categorie -> ' + this.categorieVoiture);
      // INSERT INTO `CATEGORIES` (name) VALUES('Test');
      // INSERT INTO `cars`(name, eval, desc, categoryId) VALUES ('Nom film', 3, 'Description', 1)
      this.db.executeSql('INSERT INTO `CATEGORIES` (name) VALUES(\'' + this.categorieVoiture + '\')', {})
      .then(() => {
      console.log('Categorie inserted !');
      this.db.executeSql('INSERT INTO `cars`(name, eval, desc, categoryId) VALUES (\'' + this.titleVoiture + '\', '+
      this.vitesseVoiture +', \''+ this.descriptionVoiture +'\', last_insert_rowid())', {})
      .then(() => console.log('Voiture inserted !'))
      .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
      }


      public retrieveCars() {
        this.cars = [];
        this.db.executeSql('SELECT name FROM `cars`', {})
        .then((data) => {
        if(data == null) {
        return;
        }
        if(data.rows) {
        if(data.rows.length > 0) {
        for(var i = 0; i < data.rows.length; i++) {
        this.cars.push(data.rows.item(i).name);
        }
        }
        }
        });
      }

}


