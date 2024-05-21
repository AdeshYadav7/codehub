import React from 'react'
import { useNavigate } from 'react-router-dom';


const JoinRoom = ({roomInfo , setRoomInfo}) => {
    let navigate = useNavigate();
    
    async function handelSubmit(e){
        e.preventDefault();
        navigate(`/ide/${roomInfo.roomId}`);

    }
  return (
    <form onSubmit={handelSubmit} className='flex flex-col gap-3 '>
        <div>
            <input placeholder='Room Id' className='bg-[#212121] text-white input w-full h-11 rounded-sm border-1 focus:outline-none  border-[#2f2f2f] focus:border-gray-200 ' type="text" value={roomInfo.roomId} onChange={(e)=> setRoomInfo({...roomInfo, roomId : e.target.value})} />
        </div>
        <div>
            <input placeholder='Username' className='bg-[#212121] text-white input w-full h-11 rounded-sm border-1 focus:outline-none  border-[#2f2f2f] focus:border-gray-200 ' type="text" value={roomInfo.username} onChange={(e)=> setRoomInfo({...roomInfo, username : e.target.value})} />
        </div>
        <div className='flex w-full justify-center mt-4'>
            <button className='rounded-sm text-[#969696] font-semibold bg-[#2f2f2f] py-2 px-8 hover:bg-blue-700 hover:text-black'>Join</button>
        </div>
    </form>
  )
}

export default JoinRoom