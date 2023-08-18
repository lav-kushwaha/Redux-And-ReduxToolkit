import React from 'react'
import { useDispatch,useSelector } from 'react-redux';


const Home = () => {


  const dispatch = useDispatch();
  const {c} = useSelector(state=>state.custom)

  const add = () =>{
    dispatch({
      type:'increment'
    });
 }
 const sub = ()=>{
    dispatch({
      type: "decrement"
    });
 }
 const inc25 = ()=>{
    dispatch({
      type:"incrementByValue",
      payload:25,
    });

 }
  return (
    <div>
      <h1>{c}</h1>
      <button onClick={add}>Increment</button>
      <button onClick={inc25}>Increment By 25</button>
      <button onClick={sub}>Decrement</button>
    </div>
  )
}
export default Home;
