import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ItemListView from 'components/items/ItemListView';
import * as itemsActions from 'store/modules/items';

class ItemListContainer extends Component {

  componentDidMount() {
    
  }

  render() {
    const {itemList} = this.props;
    
    return (
      <ItemListView 
        itemList={itemList}
      />
    );
  }
}

export default connect(
  (state) => ({
    itemFilters: state.items.toJS().itemFilters,
    itemList: state.items.toJS().itemList,
  }),
  (dispatch) => ({
    ItemsActions: bindActionCreators(itemsActions, dispatch)
  })
)(ItemListContainer);