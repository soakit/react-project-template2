import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { login, logout } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import { Toast } from 'antd-mobile'

export default {
	namespace: 'user',

	state: {
		status: undefined,
		userStatus: undefined,
	},

	effects: {
		* login({ payload }, { call, put }) {
      const response = yield call(login, payload);
			// Login successfully
			if (response.code === 1) {
        yield put({
        	type: 'changeLoginStatus',
        	payload: {
        		status: 'ok',
        		currentAuthority: ['loginUser'],
        	},
        });
				reloadAuthorized();
				const urlParams = new URL(window.location.href);
				const params = getPageQuery();
				let { redirect } = params;
				if (redirect) {
					const redirectUrlParams = new URL(redirect);
					if (redirectUrlParams.origin === urlParams.origin) {
						redirect = redirect.substr(urlParams.origin.length);
						if (redirect.match(/^\/.*#/)) {
							redirect = redirect.substr(redirect.indexOf('#') + 1);
						}
					} else {
						window.location.href = redirect;
						return response;
					}
        }
				yield put(routerRedux.replace(redirect || '/'));
				return response;
			}
      Toast.error(response.message);
      return response;
		},

		* logout(_, { call, put }) {
			yield call(logout);
			yield put({
				type: 'changeLoginStatus',
				payload: {
					status: false,
					currentAuthority: 'guest',
				},
			});
			reloadAuthorized();
			yield put(
				routerRedux.push({
					pathname: '/user/login',
					search: stringify({
						redirect: window.location.href,
					}),
				})
			);
		},
	},

	reducers: {
		changeLoginStatus(state, { payload }) {
			console.log('设置路由权限', payload);
      setAuthority(payload.currentAuthority);
			return {
				...state,
				status: payload.status,
				type: payload.type,
			};
		},
	},
};
