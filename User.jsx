import React, { useEffect } from 'react'
import {useDispatch,useSelector}  from 'react-redux'
import { AccountRequest } from './slice/user';

export default function User() {

    const dis = useDispatch();

    const data= useSelector(y=>y.account.data);

    console.log(data);

    useEffect(()=>{

        dis(AccountRequest())

    },[])

  return (
    <div>User</div>
  )
}
