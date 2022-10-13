import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PhotosRoute extends Route {
  @service('metadata') mdata;

  async model(params) {
    let currentPage = params.page;

    let fetchURL =
      'https://picsum.photos/v2/list?page=' + currentPage + '&limit=25';

    let response = await fetch(fetchURL);
    let data = await response.json();

    data.currPage = currentPage;

    this.mdata.setData(data);

    return data;

  }
}
