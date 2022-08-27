import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SqllitePage } from './sqllite';
import { SQLite } from '@ionic-native/sqlite';
@NgModule({
  declarations: [
    SqllitePage,
  ],
  imports: [
    IonicPageModule.forChild(SqllitePage),
  ],
})
export class SqllitePageModule {}
