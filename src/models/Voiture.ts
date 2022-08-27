import { UrlResolver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { URLPattern } from "sw-toolbox";
import { Url } from "url";

@Injectable()
export class Voiture {
    
    name: string;
    description: string[];
    url:string;
    isOn: boolean;
    startTime: string;
    endTime: string;
    constructor(name: string) {
    this.description = [];
    this.name = name;
    this.isOn = false;
    this.startTime = '';
    this.endTime = '';
    }
    }

        


        
        
    