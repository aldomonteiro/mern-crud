import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

class SearchUser extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleSearch(e) {
    this.props.onKeyDown(e);
  }

  render() {
    return (
      <Form>
        <input type='text'
          placeholder='Enter the search condition and press Enter'
          name='name'
          maxLength='40' 
          onKeyDown={this.handleSearch.bind(this)}
          />
       </Form>);
  }
}

export default SearchUser;
