import React, { Component } from 'react';

import { 
  TabBar 
} from 'antd-mobile';



import HomeScreen from './HomeScreen';
//import FriendScreen from './FriendScreen';
import PersonScreen from './PersonScreen';

import accountManager from '../DataServer/AccountManager';



export default class TabbarScreen extends Component {

  componentDidMount(){

    if(accountManager.isLogin() === false){
        this.props.history.replace('/');
        return;
    }

    if(localStorage.selected){
      this.setState({selected:localStorage.selected})
    }
  }

  
  constructor(props) {
    super(props)
  
    this.state = {
      selected:'HomeScreen'
    }
  }
  

  render() {
    return (
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar>
            <TabBar.Item
              key='HomeScreen'
              title='首页'
              selected={'HomeScreen' === this.state.selected }
              onPress={()=>{
                this.setState({selected:'HomeScreen'})
                localStorage.selected = 'HomeScreen';
              }}
              icon={{uri:'http://7u2rl9.com1.z0.glb.clouddn.com/home.png'}}
              selectedIcon={{uri:'http://7u2rl9.com1.z0.glb.clouddn.com/home_setected.png'}}
            >
              <HomeScreen {...this.props}/>
            </TabBar.Item>
            {/* <TabBar.Item
              key='FriendScreen'
              title='朋友'
              selected={'FriendScreen' === this.state.selected }
              onPress={()=>{
                this.setState({selected:'FriendScreen'})
                localStorage.selected = 'FriendScreen';
              }}
              icon={{uri:'http://7u2rl9.com1.z0.glb.clouddn.com/friend.png'}}
              selectedIcon={{uri:'http://7u2rl9.com1.z0.glb.clouddn.com/friend_selected.png'}}
            >
              <FriendScreen {...this.props} />
            </TabBar.Item>*/}
            <TabBar.Item
              key='PersonScreen'
              title='个人'
              selected={'PersonScreen' === this.state.selected }
              onPress={()=>{
                this.setState({selected:'PersonScreen'})
                localStorage.selected = 'PersonScreen';
              }}
              icon={{uri:'http://7u2rl9.com1.z0.glb.clouddn.com/personal.png'}}
              selectedIcon={{uri:'http://7u2rl9.com1.z0.glb.clouddn.com/personal_select.png'}}
            >
              <PersonScreen {...this.props}/>
            </TabBar.Item> 
          </TabBar>  
        </div>
    );
  }
}

