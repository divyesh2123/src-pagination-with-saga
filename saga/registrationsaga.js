import { call, put, takeLeading } from "redux-saga/effects";
import { loginservice, registrationService } from "../service/registrationservice";
import { LoginError, LoginRequest, LoginSuc, UserError, UserRequest, UserSuc } from "../slice/registration";

export function* abc(data)
{
    try
    {
    let p = yield call(registrationService,data.payload);

    yield put(UserSuc(p.data));
    }
    catch(error)
    {
        yield put(UserError(error));
    }

}

export function* watcherRegistration()
{
    yield takeLeading(UserRequest().type,abc);

}

export function* login(data)
{try
    {
    let p = yield call(loginservice,data.payload);

    yield put(LoginSuc(p.data));
    }
    catch(error)
    {
        yield put(LoginError(error));
    }

}

export function* watcherLogin()
{
    yield takeLeading(LoginRequest().type,login);
}