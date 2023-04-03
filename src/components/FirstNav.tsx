import React, {useState, useEffect} from "react"
import { 
  Button, 
  Modal,
  Form,
  Input,
  InputNumber,
  Upload
 } from 'antd';
import { useAppDispatch } from "../redux/store"
// import Searchbar2 from './Searchbar2';
import {
   BellFilled,
   UserOutlined,
   MenuOutlined,
  } from '@ant-design/icons';
import logo from '../images/logo.png';
import addProductAction from "../redux/actions/addProduct.action";
import getProductsAction from "../redux/actions/getProducts.action";

type SizeType = Parameters<typeof Form>[0]['size'];

const FirstNav = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attachments, setAttachments] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState<string | number | null>('');
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState<string | number | null>('');

  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const dispatch = useAppDispatch()

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addProduct = (e:any):void => {

    e.preventDefault();

    var body = {
      product_image: "https://www.pesmcopt.com/admin-media/images/dummy-product-image.jpg",
      product_name: name,
      price: price,
      description: description,
      quantity: quantity
    }
    console.log(body);
    // var formData = new FormData();
    // formData.append(`obj`, JSON.stringify(body))
    //formData.append(`filename`, attachments)

    if(body.product_name === "" || body.price === "" || body.description === "" || body.quantity === "") {
      alert("Fill all the data")
    }
    else {
      dispatch(addProductAction(body))
      setIsModalOpen(false);
      setName("")
      setDescription("")
      window.location.reload()
    }

};

  return (
    <>
    <Modal title="Add product" 
    open={isModalOpen} 
    footer={null}
    onOk={handleOk} onCancel={handleCancel}
    >
   
 <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      // onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 600 }}
      onFinish={addProduct}
    >

<Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      //getValueFromEvent={normFile}
      //onChange={(e) => setAttachments(e.target.files[0])}
    >
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button>Click to upload</Button>
      </Upload>
    </Form.Item>
      
      <Form.Item label="Name">
        <Input 
        value={name} 
        onChange = {(e) => {
          setName(e.target.value)}
        }
        />
      </Form.Item>
     
      <Form.Item label="Price">
        <InputNumber 
         value={price}
         onChange={setPrice}
        />
      </Form.Item>

      <Form.Item label="Description">
        <Input 
        value={description} 
        onChange = {(e) => {
          setDescription(e.target.value)}
        }
        />
      </Form.Item>

      <Form.Item label="Quantity">
        <InputNumber 
        value={quantity}
        onChange={setQuantity}
        />
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" onClick={addProduct}>Submit</Button>
      </Form.Item>
    </Form>
      </Modal>

       <nav className="navbar navbar-expand-lg bg-white">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img
              src={logo}
              alt="logo"
              height="30px"
              width="30px"
              style={{objectFit: "contain"}}
            />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{width: "700px"}}>
         {/* <Searchbar2 /> */}
        </li>
      
        <li className="nav-item">
        <a className="nav-link text-capitalize fs-6" href="/following">Advertise</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-capitalize fs-6" href="/following">Blog</a>
        </li>
        <li className="nav-item">
        <a className="nav-link text-capitalize fs-6" href="/following">Unsplash+</a>
        </li>
        <li className="nav-item">
        <Button type="primary" onClick={showModal}>Add product</Button>
        </li>
        <li className="nav-item">
        <Button type='text'><BellFilled style={{fontSize: "22px"}} /></Button>
        </li>
        <li className="nav-item">
        <Button shape="circle" type='text' icon={<UserOutlined />} />
        </li>
        <li>
        <Button type='text'><MenuOutlined style={{fontSize: "22spx"}} /></Button>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </>
 

  )
}


export default FirstNav;