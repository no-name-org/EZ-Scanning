import React from 'react';
import firebase from 'react-native-firebase';

import { View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';

import ProductItem from '../components/ProductItem';
import { getData } from '../lib/axios';
import axios from 'axios';

export default class Checkout extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      data: [],
    }
  }

  setCheckoutData = (data) => {    
    let promises = data.map(item => {
      return getData(`/products/${item.product_id}`);
    })
    axios.all(promises)
      .then((data) => {
        let merged = data.reduce((a, b) => [...a, ...b], []);
        console.log(merged);
        this.setState({
          data: merged,
        });
      })
  }

  getCheckoutData = () => {
    console.log('inside checkout');
    getData('/checkout/user/froy22', this.setCheckoutData);
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
      name={ item.name }
      price={ item.price }
      removeItem={ this.removeItem } />
  );

  componentDidMount() {
    this.getCheckoutData();
  }

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
