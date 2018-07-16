import React, { Component } from 'react'


import {
    imageBaseURL
} from '../DataServer/URLConfig';

import './FriendListItem.css'


import { 
    WingBlank, 
    WhiteSpace ,
    Card,
    SwipeAction,
} from 'antd-mobile';

export default class HomeListItem extends Component {
  render() {


    return (
        <SwipeAction
            autoClose={true}
            right={[
                {
                    text:'取消关注',
                    style:{
                        backgroundColor:'red'
                    },
                    onPress:(e)=>{
                        if(this.props.del){
                            this.props.del(this.props.id);
                        }
                    }
                },
            ]}

        >
            <WingBlank>
                <WhiteSpace/>
                <Card
                    onClick={()=>{
                        if(this.props.onItemClick){
                            this.props.onItemClick();
                        }   
                    }}
                >
                    <Card.Header
                        title={this.props.nickname}
                        thumb={imageBaseURL+this.props.image}
                        thumbStyle={{width:'40px',height:'40px'}}
                        extra={this.props.sign}
                    />
                </Card>
            </WingBlank>
        </SwipeAction>
    )
  }
}


