import { Component, h } from '@stencil/core';

@Component({
  tag: 'cat-list',
  shadow: true
})
export class CatList {
  componentWillLoad() {
    
  }

  render() {
    return (
      <div>hello cat-list</div>
    );
  }
}
