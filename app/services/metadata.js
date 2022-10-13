import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MetadataService extends Service {
  @tracked metaData = {};

  setData(inputObj) {
    if(inputObj) {
        this.metaData = inputObj;
    }
  }

  getMetaData(pid) {
    return this.metaData;
  }
}
