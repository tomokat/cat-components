---
to: src/components/<%= domain %>/<%= name %>/<%= name %>.tsx
---
<%
var componentName = h.inflection.titleize(name).replace(/-/g, '');
-%>
import { Component, h } from '@stencil/core';

@Component({
  tag: '<%= name %>',
  shadow: true
})
export class <%= componentName %> {
  componentWillLoad() {
    
  }

  render() {
    return (
      <div>hello <%= name %></div>
    );
  }
}
