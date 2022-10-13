import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MetadataService extends Service {
  @tracked metaData = {};

  setData(inputObj) {
    this.metaData = inputObj;
  }

  findAuthor(pid) {
    console.log(this.metaData);

  }
}
