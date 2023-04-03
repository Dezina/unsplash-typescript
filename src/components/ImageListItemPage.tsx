import React, {useState} from 'react';
import { Image } from 'antd';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import { Button } from 'antd';
import {
  ArrowDownOutlined,
  HeartFilled,
  PlusOutlined
 } from '@ant-design/icons';

 interface Details {
  id: number;
  name: string;
  image: string;
  price: number;
 }

const ImageListItem = ({id, name, image, price}: Details) => {

  const [hoverid, setHoverid] = useState<number>();

    return (
     <div
     key={id}
       onMouseEnter={e => {
              setHoverid(id)
          }}
          onMouseLeave={e => {
              setHoverid(0)
          }}
     >
     <Image
                  src={image}
                />
                {/* on hover layout */}
                <div 
                  style={id === hoverid? {position: "absolute", top: "5%", right: "15%", display: 'block'}: 
                  {position: "absolute", top: "5%", right: "15%", display: 'none'}}
                >
                <Button type="default" icon={<HeartFilled/>} 
                //size={10} 
                />
                </div>
                <div 
                style={id === hoverid? {position: "absolute", top: "5%", right: "5%", display: 'block'}: 
                  {position: "absolute", top: "5%", right: "5%", display: 'none'}}
                >
                <Button type="default" icon={<PlusOutlined />} 
                //size={10} 
                />
                </div>
                <div
                style={id === hoverid? {position: "absolute", bottom: "5%", left: "5%", display: 'block'}: 
                {position: "absolute", bottom: "5%", left: "5%", display: 'none'}}
                >
          
                  <span className='ps-2' style={{color: "#fff"}}>{name}</span>
                  <div className='ps-2' style={{color: "#fff"}}>Price: Rs. {price} /-</div>
                </div>
                <div
                style={id === hoverid? {position: "absolute", bottom: "5%", right: "5%", display: 'block'}: 
                {position: "absolute", bottom: "5%", right: "5%", display: 'none'}}
                >
                <Button type="default" icon={<ArrowDownOutlined />} 
                //size={10} 
                />
                </div>
     </div>
          
    )
}

export default ImageListItem;