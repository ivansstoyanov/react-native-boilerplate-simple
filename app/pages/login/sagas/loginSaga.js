/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, delay } from 'redux-saga/effects';

import { Alert } from 'react-native';
// import loginUser from '../../../api/methods/loginUser';
import * as loginActions from '../actions';
import { navigateToHome } from '../../../navigation/NavigationHelpers';

// Our worker Saga that logins the user
export default function* loginAsync() {
    yield put(loginActions.enableLoader());

    //how to call api
    //const response = yield call(loginUser, action.username, action.password);
    //mock response
    
    yield delay(3000);
    const response = { success: true, data: { id: 1 } };

    if (response.success) {
        yield put(loginActions.onLoginResponse(response.data));
        yield put(loginActions.disableLoader({}));
        yield call(navigateToHome);
    } else {
        yield put(loginActions.setLoginStatus(false));
        yield put(loginActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('BoilerPlate', response.Message);
        }, 200);
    }
}
