import localForage from 'localforage';
import { DATABASE_NAME, DATABASE_VERSION } from './constants';
export class OfflineStorage {
  constructor() {
    localForage.config({
      driver: [localForage.WEBSQL, localForage.INDEXEDDB, localForage.LOCALSTORAGE],
      name: DATABASE_NAME,
      version: DATABASE_VERSION
    });
  }
  getByKey(key: string): Promise<any[] | any | undefined> {
    return localForage
      .getItem(key)
      .then(value => {
        return value as any[];
      })
      .catch(err => {
        console.log('error while getting key:', key, err);
        return undefined;
      });
  }

  cacheData(key: string, data: Array<any> | object | string): Promise<boolean | void> {
    return localForage
      .setItem(key, data)
      .then(value => {
        return true;
      })
      .catch(err => {
        console.log('error while saving key:', key, err);
      });
  }

  has(key: string): Promise<boolean> {
    return localForage
      .keys()
      .then(keys => {
        return key.includes(key);
      })
      .catch(err => {
        console.log('error while checking key:', key, err);
        return false;
      });
  }
}
