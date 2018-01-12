import {Inject, Injectable } from '@angular/core';
//import { AppConstants } from  "../../../common/components/models/app-constants";

@Injectable()
export class UserCacheService {

    //Map to store data on

private eeaUserCacheMap: any;;
private loginResponse: any;
private userId: string;
private userType: string;
private groupResponse: any;
private portalError: string
private isInternal: string
private hederKeys: string

//Quick Constructor For Instantiating the cache map and loading from local storage
constructor(){
    this.eeaUserCacheMap = {};
    this.loadFromLocalStorage();

}

/**
 * This Function checks the local storage for any offloaded data for this cache.
 * This function is to ensure that refreshing the page will not  ruin our cache.
 */
loadFromLocalStorage(){
    var localUserCache = localStorage.getItem('localEEAUserCache');
    if(localUserCache != undefined && localUserCache != null){
        this.eeaUserCacheMap = JSON.parse(localUserCache);
        localStorage.removeItem('localEEAUserCache');
    }
}

/**
 * Helper Function that offloads data to the localstorage. This is Triggered 
 * on page refreshes to prevent the cache from breaking on refresh.
 */
backupToLocalStorage(){
    localStorage.setItem('localEEAUserCache', JSON.stringify(this.eeaUserCacheMap));
}

/**
 * This function is used to get the data from the cache.
 * @param key (String) - The Map Key that our data should be housed at
 */
getUserData(key: string) : any{
    return this.eeaUserCacheMap[key];
}

/**
 * This function is used to store the data in the cache.
 * @param key (String) - The Map Key that our data should be housed at
 * @praam data (any) - The data to save.
 */
setUserData(key: string, data:any): void{
    this.eeaUserCacheMap[key] = data;

}

/**
 * This function is used to erase data from the cache.
 * @param key (string) - The map key we should erase
 */
eraseUserData(key: string): void {
    this.eeaUserCacheMap[key] = undefined;
}

/**
 * This function is used to erase all data from cache.
 */
eraseAllUserData(): void{
    this.eeaUserCacheMap = {};
}

handleErr(msg: string, err: any){
    console.log("Exception occurred");
}

}
