import React, { useEffect, useState } from 'react'
import{useSelector,useDispatch}  from 'react-redux'
import { tutorialsRequest } from '../slice/tutorials';

export default function Tutorials() {

  const [pageSize,setPageSize]= useState(5);
  const [page, setPage]= useState(1); 
  const account = useSelector(y=>y.tutorials?.data);

  console.log(account);

  const dis =useDispatch();

  useEffect(()=>{
    dis(tutorialsRequest({page,pageSize}));

  },[page,pageSize]);



  const abc = ()=>{

    let p = [];

    for(let i=1;i<=Math.ceil(account.totalItems/pageSize);i++)
    {
      p.push(i);
    }

    return p;
  }
 

  return (
    <div>

      <ul>
      {
        account?.tutorials?.map((p)=>{

          return (<li>{p.title}</li>)

        })

      }
</ul>
      
        {

abc()?.map((v)=>{

    return (<button onClick={()=>{
      setPage(v-1);
    }}>{v}</button>)
  })


        }

    </div>
  )
}
