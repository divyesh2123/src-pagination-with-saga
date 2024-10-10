import { call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { tutorialFail, tutorialsRequest, tutorialSuc } from "../slice/tutorials";
import { getPaginationData } from "../service/tutorialsservice";

export function* getInfo(data)
{try
    {
    let p = yield call(getPaginationData,data.payload);

    yield put(tutorialSuc(p.data));
    }
    catch(error)
    {
        yield put(tutorialFail(error));
    }

}

export function* watcherTutorial()
{
    yield takeLatest(tutorialsRequest().type,getInfo);
}