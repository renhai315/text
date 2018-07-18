import React, { Component } from 'react'

import {
    Toast,
    NavBar,
    ListView,
    SearchBar,
    Icon
} from 'antd-mobile';

import accountManager from '../DataServer/AccountManager';
import friendManager from '../DataServer/FriendManager';

import FriendListItem from '../ViewComponent/FriendListItem';

export default class AddFriendScreen extends Component {

    componentDidMount(){
        
        if(accountManager.isLogin() === false){
            this.props.history.replace('/');
            return;
        }
    }


    constructor(props) {
        super(props)

        const dataSource = new ListView.DataSource({
            rowHasChanged:(row1, row2) => row1 !== row2,
        })

        this.state = {
            dataSource,
            nickname:''
        }
    }

    onSearch = async ()=>{
        Toast.loading('查询中，请稍后',0);
        const result = await friendManager.findUser(this.state.nickname);
        Toast.hide();

        if(result.success === false){
            Toast.fail(result.errorMessage,1);
            return;
        }

        this.setState((preState)=>{
            return{
                dataSource:preState.dataSource.cloneWithRows(result.data)
            }   
        })
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >添加朋友</NavBar>
                <SearchBar
                    placeholder={'输入好友昵称'}
                    value={this.state.nickname}
                    onChange={(nickname) => { this.setState({ nickname }) }}
                    onSubmit={this.onSearch}
                />
                <ListView
                useBodyScroll={true}
                dataSource={this.state.dataSource}
                renderRow={(user)=>{
                    return (
                        <FriendListItem 
                            {...user}
                            onItemClick={()=>{
                                this.props.history.push('/UserScreen',user)
                            }} 
                        />
                    )
                }}
            />
            </div>
        )
    }
}
