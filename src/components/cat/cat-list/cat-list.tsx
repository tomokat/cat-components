import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'cat-list',
  shadow: true
})
export class CatList {

  @State() catListData: Array<any>;

  componentWillLoad() {
    this.getCatData();
  }

  getCatData() {
    fetch('https://api.thecatapi.com/v1/images/search', {
      method: 'GET',
      headers: {
        'x-api-key': '9f21c4b4-3017-44f4-8169-a9f7737f0327'
      }
    })
    .then((response: Response) => response.json())
    .then(data => {
      if (data) {
        this.catListData = data;
      }
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    if(!this.catListData) {
      return;
    }
    return (
      <div>
        <div>Version 0.1.3</div>
        <div>Cat of the day</div>
        {this.catListData.map((catData) =>
          <img src={catData.url} width={catData.width/2} height={catData.height/2} />
        )}
      </div>
    );
  }
}
