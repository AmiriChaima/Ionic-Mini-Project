import { Component } from '@angular/core';
import { VoituresPage } from '../voitures/voitures';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';


@Component({
selector: 'page-tabs',
templateUrl: 'tabs.html'
})
export class TabsPage {
voituresPage = VoituresPage;
homePage=HomePage;

settingsPage = SettingsPage

}