import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

class SearchUser extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleSearch(e) {
    this.props.onChange(e);
  }

  render() {
    return (
      <Form>
        <Form.Input
          type='text'
          placeholder='Search'
          name='name'
          maxLength='40'
          onChange={this.handleSearch.bind(this)} />
       </Form>);
  }
}

export default SearchUser;
