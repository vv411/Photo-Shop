import Route from '@ember/routing/route';

export default class PhotosRoute extends Route {
  async model(params) {
    let currentPage = params.page;

    let fetchURL =
      'https://picsum.photos/v2/list?page=' + currentPage + '&limit=25';

    let response = await fetch(fetchURL);
    let data = await response.json();


    data.currPage = currentPage;

    return data;
  }
}
