import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ListData from '../../utils/fake-data';
import {ListItem} from './components/list_item';

//
//

export interface IListItem {
  id: string;
  name: string;
  description: String;
  price: string;
  salePrice: any;
  brand: String;
}

const ListScreen = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={{paddingHorizontal: 16}}
      ref={ref => (this.scrollView = ref)} 
      onContentSizeChange={(contentWidth, contentHeight) => {
        this.scrollView.scrollToEnd({ animated: true });
      }}
      >
        {ListData.map(item => <ListItem key={item.id} item={item} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListScreen;
