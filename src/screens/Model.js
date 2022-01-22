import React, { useState } from 'react';
import { TouchableOpacity, View, FlatList, StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import { Input } from 'react-native-elements';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window',);

const Model = ({navigation}) => {

  let Data = [{          
    id: 0,
    title: 'Printer HS',
    Pic:require('../assets/printer.jpg')
},
{
    id: 1,
    title: 'Lcd XS',
    Pic:require('../assets/lcd.jpg')
},
{
    id: 2,
    title: 'Laptop',
    Pic:require('../assets/laptop.jpg')
},
{
      id: 4,
      title: 'Printer inc',
      Pic:require('../assets/inc.jpg')
}]
  
  const [products, setProducts] = useState(Data)
  const [search, setSearch] = useState('')

  
  const renderProducts = ({ item }) => (
    <Card
      title={item.title}
      image={item.Pic}
      onPress={item.id == 0 ?
        () => navigation.navigate('Details')
        :
        () => console.log('Null')
       }

    />
  );

  const SearchInData = (text) => {

var newArray = Data.filter (function (x) {
  return x.title.includes(text)
});
    setProducts(newArray)
  }

    return (
      <View style={Styles.mainView}>

      <Input
                containerStyle={Styles.container}
                inputContainerStyle={Styles.input}
                value={search}
                onChangeText={text => setSearch(text)}
                placeholder={'search here'}
                
                rightIcon={
                    <TouchableOpacity
                        onPress={() => { SearchInData(search) }}

                    >
                        <Icon
                            name='search'
                            size={24}
                            color='black'
                        />
                    </TouchableOpacity>
                }
            />
        
        <FlatList
          horizontal={false}
          numColumns={2}
          data={products}
          renderItem={renderProducts}
          keyExtractor={(item, index) => (`${index}`)}
          showsVerticalScrollIndicator={false}
                        />
              
      </View>
  );
}

export default Model;

const Styles = StyleSheet.create({
  mainView: {
    flex:1,
   alignSelf:'center' 
  },
  container: {
    borderColor: '#D3D3D3',
    width: SCREEN_WIDTH - 50,
    alignSelf: 'center',
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 10
  }
})
