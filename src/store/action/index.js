import Firebase from '../../config/firebase'
import firebase from 'firebase'

const set_data = (data
    ) => {
    return (dispatch) =>{
        dispatch({type: "SET_DATA", data : data})
    }
}
const facebook_login = () =>
{
    return (dispatch) =>{
        console.log("chal rha hai")
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log("user=>",user)
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            console.log(errorMessage)
          });
    }
}
export {
    set_data,
    facebook_login
}