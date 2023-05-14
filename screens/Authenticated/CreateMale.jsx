import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import Header from '../../components/secure/Header';
import Search from '../../components/secure/Search';
import Text from '../../components/Text';
import SelectDropdown from 'react-native-select-dropdown';

const CreateMale = ({navigation}) => {
    const [selectData,setSelectData] = useState([
        {label:'pasta',value:'Gluten',id:1},
        {label:'zucchini',value:'Cucurbita pepo ',id:2},
        {label:'Greeny',value:'CDC ',id:3},
        {label:'zucchini',value:'Cucurbita pepo ',id:4},
        {label:'Greeny',value:'CDC ',id:5},
        {label:'zucchini',value:'Cucurbita pepo ',id:6},
        {label:'Greeny',value:'CDC ',id:7},
    ])
    const selectDataRender = [
        'pasta',
        'zucchini',
        'Greeny',
    ];
    const filterSelectData = (id) => {
        const newArray = selectData.filter(item => {return item.id !== id})
        setSelectData(newArray);
    }

    const [searchValue,setSearchValue] = useState('')
    const [select,setSelect] = useState([])
    const handelSearch =(e) =>{
        navigation.navigate('SearchError')
    }
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <Header title={'Hi David!'} subtitle={'October 2022'}>
                <Search action={handelSearch} setSearchValue={setSearchValue}/>
            </Header>
            <View style={{padding:15}}>
                <View style={styles.card}>
                    <Text type="overline" style={{fontWeight:'600'}}>Create meal </Text>
                    <Text style={{color:'#868889',marginBottom:10}} type="subtitle">Select items</Text>

                    <SelectDropdown data={selectDataRender}
                        // style
                        showsVerticalScrollIndicator={true}
                        buttonTextStyle={{position:'absolute',left:0,color:'#362F74',fontSize:15}}
                        buttonStyle={{width:'100%',flexDirection:'row',alignItems:'center',borderRadius:6,marginBottom:10}}
                        defaultButtonText='Select items to create meal'
                        renderDropdownIcon={() => <Image style={{position:'absolute',right:8}} source={require('../../assets/images/dropdown.png')}/>}
                        onSelect={(selectedItem, index) => {
                            setSelectData(oldData => [...oldData,{value:selectedItem,label:selectedItem,id:selectData.length+1}])
	                }}
                    />
                    <View style={{flexDirection:'row', gap:10,flexWrap:'wrap'}}>
                    {
                        selectData.map((item,index) => {
                            return(
                                <Pressable onPress={() => filterSelectData(item.id)} style={{backgroundColor:'#9CD665',flexDirection:'row',gap:7,borderRadius:10,padding:2,paddingHorizontal:5, alignItems:'center'}} key={index}>
                                    <Text type="subtitle" style={{color:'#fff'}}>{item.label}</Text>
                                    <Image source={require('../../assets/images/cross.png')}/>
                                </Pressable>
                            )
                        })
                    }
                    </View>
                </View>
                <View style={styles.card}>
                        <Text style={{fontWeight:'600',marginBottom:10}} type="overline">Possibility of allergies of selected item</Text>
                        {
                            selectData.map((item,index) => {
                                return(
                                    <View style={{flexDirection:'row'}} key={index}>
                                        <Text type={'subtitle'} style={{minWidth:'40%',textTransform:'capitalize',color:'#362F74'}}>{item.label}</Text>
                                        <Text type={'subtitle'} style={{textTransform:'capitalize',color:'#868889'}}>{item.value}</Text>
                                    </View>
                                )
                            })
                        }
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        padding:15,
        marginBottom:20
    }
})

export default CreateMale;
