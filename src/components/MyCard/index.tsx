import React from 'react'
import { Image } from 'react-bootstrap'
import { GText } from '../../misc/colors'
import { BiTrash } from 'react-icons/bi';
import {BsPencil} from "react-icons/bs";
export default function MyCard({ car, photo, ...props }: { car: any, photo: any }) {
  return (
    <div style={{ backgroundColor: "#fff", borderRadius: "10px" }}>
      <div style={{ boxShadow: "0px 8px 8px 4px rgba(0,0,0,0.1)" }}>
        <div className='mb2 d-flex justify-content-center' style={{
          minHeight: "150px",
        }}>
          <div className='circular_image'>
            <Image src={photo.base64} />
          </div>


        </div>
        <div className='d-flex justify-content-center mb-2 w-75 mt-4'
          style={{ borderTop:"1px solid ##434d52", margin: "auto" }}>
          <p style={{ color: GText }}>{car.name}</p>
        </div>
      </div>      
      {/* buttons */}
      <div className='w-100 d-flex justify-content-center' style={{
        
      }} >
        <div className='w-50 d-flex justify-content-center align-items-center m-2' 
        style={{cursor:"pointer",borderRight:"1px solid #ccc"}}
        onClick={()=>{}}>
          <BiTrash color='#e56262'/><span style={{color:"#434d52"}}>Excluir</span>
        </div>
        <div className='w-50 d-flex justify-content-center align-items-center m-2' 
        style={{cursor:"pointer"}}
        onClick={()=>{}}>
          <BsPencil color='#e87430'/><span style={{color:"#434d52"}}>Editar</span>
        </div>

        
      </div>


    </div>
  )
}
