import { IState, useAppDispatch, useAppSelector } from '../redux';
import userService, { updateUser, userQuery } from '../redux/service/userService';

function Home() {
    const user = useAppSelector((state:IState)=>state.user)
    const dispatch = useAppDispatch()
    console.log(user);
    
  return (
    <div>
        ID:{user.id}
        <button onClick={()=>{
          dispatch(userService.actions.updateUser(1111))
        }}>测试</button>
        <button onClick={()=>{
          dispatch(userQuery())
        }}>测试2</button>
        <button onClick={()=>{
          dispatch(updateUser())
        }}>测试3</button>
    </div>
  )
}

export default Home