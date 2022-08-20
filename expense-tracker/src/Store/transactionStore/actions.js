

import apiManager from '../../apiManager/index.js';
import { transactionActions } from './store';

export const getCurrentUserTransactions = (userData) => async dispatch => {
    try {
        dispatch(transactionActions.startLoading());
        let res = await apiManager.getData(`/api/transaction/getAllForCurrentUser`);
        dispatch(transactionActions.setCurrentUserTransactions(res?.data));
        return res?.data;
    } catch (ex) {
        return false;
    } finally {
        dispatch(transactionActions.stopLoading());
    }
};