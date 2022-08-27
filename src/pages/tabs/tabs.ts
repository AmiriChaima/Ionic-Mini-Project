import { Component } from '@angular/core';
import { VoituresPage } from '../voitures/voitures';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { NativeStoragePage } from '../native-storage/native-storage';
import { SqllitePage } from '../sqllite/sqllite';

@Component({
selector: 'page-tabs',
templateUrl: 'tabs.html'
})
export class TabsPage {
voituresPage = VoituresPage;
homePage=HomePage;
tab1=NativeStoragePage;
tab2=SqllitePage;
settingsPage = SettingsPage

}