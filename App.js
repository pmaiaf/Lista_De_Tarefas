import React, {Component} from 'react';
import { ScrollView, View} from 'react-native';
import Form from './src/Components/Form'
export default class App extends Component {
 

  render() {
    return(
      <ScrollView>
        <Form></Form>
      </ScrollView>
    )
  }
}
