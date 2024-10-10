import { usergetData } from "../service/userservice";
import { AccountError, AccountRequest, AccountSuc } from "../slice/user";
import { call, put, takeLeading } from "redux-saga/effects";
export function* account()
{try
    {
    let p = yield call(usergetData);

    yield put(AccountSuc(p.data));
    }
    catch(error)
    {
        yield put(AccountError(error));
    }

}

export function* watcherAccount()
{
    yield takeLeading(AccountRequest().type,account);
}