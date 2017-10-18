import React from 'react';
import firebase from 'react-native-firebase';

import { View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ProductItem from '../components/ProductItem';

export default class Checkout extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      data: []
    }
  }

  removeItem = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.filter(item => {
        return item.id != id;
      })
    }));
  }

  renderProductItem = ({ item }) => (
    <ProductItem
      id={ item.id }
      title={ item.title }
      price={ item.price }
      removeItem={ this.removeItem } />
  );

  render() {
    return (
      <View>
        <FlatList
          data={ this.state.data }
          keyExtractor={ item => item.id }
          renderItem={ this.renderProductItem }
        />
      </View>
    );
  }
}
