import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ItemFilterView from 'components/items/ItemFilterView';
import * as itemsActions from 'store/modules/items';

class ItemFilterContainer extends Component {

  componentDidMount() {
    this.getItemList('01');
  }

  getItemList = async (id) => {
    const {ItemsActions, itemList} = this.props;
    const childItemList = itemList['list'+id];
    
    try {
      if(!childItemList.length > 0) 
        await ItemsActions.getItemList(id);
    }catch(e){
      console.log(e);
    }
  }

  onChangeItemKind = (e) => {
    const {name, value} = e.target;
    const {ItemsActions} = this.props;

    ItemsActions.setItemsFilter({name, value});
    this.getItemList(value);
  }

  render() {
    const {onChangeItemKind} = this;
    const {itemFilters} = this.props;
    
    return (
      <ItemFilterView 
        onChangeItemKind={onChangeItemKind} 
        itemFilters={itemFilters}
      />
    );
  }
}

export default connect(
  (state) => ({
    itemFilters: state.items.toJS().itemFilters,
    itemList: state.items.toJS().itemList,
    // weaponWhere: state.weapon.toJS().weaponWhere,
    // weapons: state.weapon.toJS().weapons,
    // loading: state.pender.pending['weapon/GET_WEAPON_LIST']
  }),
  (dispatch) => ({
    ItemsActions: bindActionCreators(itemsActions, dispatch)
  })
)(ItemFilterContainer);