const host = 'http://60.205.141.116:'
const port = 60004;

const registerURL = host+port+'/api/register';
const loginURL = host+port+'/api/login';
const createUserURL = host+port+'/api/createUser';
const postMessageURL = host+port+'/api/postMessage';
const deleteMessageURL = host+port+'/api/deleteMessage';
const followURL = host+port+'/api/follow';
const unFollowURL = host+port+'/api/unFollow';
const getFollowURL = host+port+'/api/getFollow';
const updateUserURL = host+port+'/api/updateUser';
const getUserURL = host+port+'/api/getUser';
const getMessageURL = host+port+'/api/getMessage';
const homeMessageURL = host+port+'/api/homeMessage';
const findUserURL = host+port+'/api/findUser';
const changePasswordURL = host+port+'/api/changePassword';

const imageBaseURL = host+port+'/resource/image/';


export {
    registerURL,
    loginURL,
    changePasswordURL,

    createUserURL,
    updateUserURL,
    getUserURL,
    
    postMessageURL,
    getMessageURL,
    homeMessageURL,
    deleteMessageURL,

    findUserURL,
    followURL,
    unFollowURL,
    getFollowURL,  
    
    imageBaseURL,
}