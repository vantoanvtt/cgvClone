import * as React from 'react';
import { View, Button, ImageBackground } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Text, Avatar, Paragraph, Caption, Drawer} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = ({title,iconName}) => {
    return(
        <View style={{
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
        }}>
            <Icon 
                name={iconName}
                size={35}
                color="#faf8f2"
            />
            <Text style={{
                color: "#faf8f2",
                fontSize: 11
            }}>
                {title}
            </Text>
        </View>
    )
}
const DrawerContent = (props) => {
    return(
        <View>
            <ImageBackground 
            source={{uri: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2t8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}}
            style={{
                resizeMode: "cover",
                height: '100%'
            }}
            >
                <View>
                    <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: "100%",
                    alignItems: "center",
                    marginBottom: 5,
                    marginTop: 15
                    }}>
                        <Icon
                            name="bell"
                            size={35}
                            color="#999382"
                            style={{marginLeft: 30}}
                        />
                        <Avatar.Image
                            size={80}
                            source={{uri: "https://kenh14cdn.com/2020/6/22/1016275081-15928077582601364968623.jpg"}}
                        />
                        <Icon 
                            name="cog"
                            size={35}
                            color="#999382"
                            style={{marginRight: 30}}
                        />
                    </View>
                    
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'yellow',
                    width: "100%",
                }}> 
                    <Text style={{
                        paddingBottom: 5,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        fontSize: 17
                        }}>
                        ????ng nh???p/????ng k??
                    </Text>
                    <Text style={{
                        paddingBottom: 5,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        fontSize: 17
                        }}>
                        ?????t v?? theo phim
                    </Text>
                    <Text style={{
                        paddingBottom: 5,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        fontSize: 17
                        }}>
                        ?????t v?? theo r???p
                    </Text>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '96%',
                        marginLeft: 4
                    }}>
                        <Item title="Trang ch???" iconName="home" />
                        <Item title="Th??nh vi??n CGV" iconName="account-check-outline" />
                        <Item title="R???p CGV" iconName="information" />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '96%',
                        marginLeft: 4
                    }}>
                        <Item title="R???p ?????c Bi???t" iconName="star-circle-outline" />
                        <Item title="Tin m???i v?? ??u ????i" iconName="gift-outline" />
                        <Item title="V?? c???a t??i" iconName="ticket" />
                    </View>
                </View>

            <DrawerItem 
                label="log out"
            />
            </ImageBackground>
        </View>
    )
}

export default DrawerContent;