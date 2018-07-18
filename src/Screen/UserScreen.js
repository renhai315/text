import React, { Component } from 'react'

import { 
    Toast,
    NavBar,
    ListView,
    PullToRefresh,
    Icon,
    Modal
} from 'antd-mobile';

import accountManager from '../DataServer/AccountManager';
import messageManager from '../DataServer/MessageManager';
import friendManager from '../DataServer/FriendManager';

import HomeListItem from '../ViewComponent/HomeListItem';


export default class UserScreen extends Component {

    async componentDidMount(){
        console.log(this.props);
        if(accountManager.isLogin() === false){
            return;
        }

        const result = await messageManager.getUserMessage(this.props.location.state.id)
        if(result.success === false){
            Toast.fail(result.errorMessage);
            return;
        }
        this.setState((preState)=>{
            return{
                dataSource:preState.dataSource.cloneWithRows(result.data)
            }   
        })

    }

    constructor(props) {
        super(props)

        const dataSource = new ListView.DataSource({
            rowHasChanged:(row1, row2) => row1 !== row2,
        })

        this.state = {
            dataSource,
            refreshing:false
        }
    }

    onRefresh = async()=>{
        try {
            this.setState({refreshing:true});
            const result = await messageManager.getUserMessage(this.props.location.state.id)
            if(result.success === false){
                Toast.fail(result.errorMessage);
                this.setState({refreshing:false});
                return;
            }
            this.setState((preState)=>{
                return{
                    dataSource:preState.dataSource.cloneWithRows(result.data),
                    refreshing:false
                }   
            })
        } catch (error) {
            Toast.fail(`${error}`);
            this.setState({refreshing:false});
        }

    }

  render() {
    return (
      <div>
        <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => {this.props.history.goBack()}}
            rightContent={[
                <span
                    key={2}
                    onClick={async()=>{
                        //this.props.history.push('/CreateMessageScreen');
                        Toast.loading('操作中',0);
                        const result = await friendManager.followUser(this.props.location.state.id);
                        Toast.hide();
                        if(result.success === false){
                            Toast.fail(result.errorMessage);
                            this.setState({refreshing:false});
                            return;
                        }

                        Modal.alert('关注成功','点击确认键返回',[{
                            text:'确认',
                            onPress:()=>{this.props.history.goBack()}
                        }])

                    }}
                >关注</span>
            ]}
        >{this.props.location.state.nickname}</NavBar>
        <ListView
            useBodyScroll={true}
            dataSource={this.state.dataSource}
            pullToRefresh={
                <PullToRefresh
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />
            }
            renderRow={(message)=>{
                return (
                    <HomeListItem 
                        {...message}
                        onItemClick={()=>{
                            this.props.history.push('/CommentScreen',message)
                        }} 
                    />
                )
            }}
        />
      </div>
    )
  }
}
