import React, { useContext, useState } from 'react'
import '../styles/AddBlogPage.css'
import { Page } from '../components/tags'
import { IoChevronBack } from 'react-icons/io5'
import { WebContext } from '../WebContext'
import axios from 'axios'

function AddBlogPage() {
    const {showBlogPopUp, setShowBlogPopUp, reloadData, setRelaodData} = useContext(WebContext)
    const [productImage, setImage] = useState('');
    const [productName, setName] = useState('');
    const [productPrice, setPrice] = useState('');
    const [productQuantity, setQuantity] = useState('')
    // 
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [isLoading, setIsloading] = useState(false)

    const setProductImage = (e) => {
        const selectedImage = (e.target.files[0]);

        setImage(selectedImage)
    }

    const handleProductSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true);
        // let product_data = {
        //     product_name: productName,
        //     product_image: productImage, 
        //     product_price: productPrice , 
        //     product_quantity: productQuantity, 
        // }
        const formData = new FormData();
        formData.append('product_name', productName);
        formData.append('product_image', productImage); // Assuming `productImage` is a File object
        formData.append('product_price', productPrice);
        formData.append('product_quantity', productQuantity);
    
        console.log(...formData);
        try {
            const res = await axios.post('http://localhost:2300/products/new', formData, {withCredentials: true})
            if (res.status == 201) {
                setIsloading(false);
                setSuccessMsg(res.data.msg)
                setImage('');
                setName('');
                setPrice('');
                setQuantity('');
                setRelaodData(true);
                return setTimeout(() => {
                    setSuccessMsg('');
                    setRelaodData(false);
                }, 1600);
            }
        } catch (error) {
            setIsloading(false);
            if (error.response) {
                setErrorMsg(error.response.data.msg);
            }else {
                setErrorMsg('Network error')
            }
            return setTimeout(() => setErrorMsg(''), 1600);
        }
    }

  return (
    // <Page className='add_blog_page'>

        <form className='new_blog_form' onSubmit={handleProductSubmit}>
            <IoChevronBack className='back_btn' onClick={() => setShowBlogPopUp(!showBlogPopUp)}/>
            <h2>Add new product</h2>

            <div>
                <label htmlFor='upload_blog_image' id='upload_blog_image_label'>Product image</label>
                <input type='file' accept='image/*' id='upload_blog_image' onChange={setProductImage}/>
            </div>

            {productImage && (
                <div className='new_blog_preview_product_div'>
                    <img src={URL.createObjectURL(productImage)} alt='Product image' />
                </div>
            )}

            <div>
                <label>Product name</label>
                <input type="text" placeholder='Enter the blog title' value={productName} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label htmlFor='upload_blog_image'>Product price</label>
                <input type="number" placeholder='Enter the price' value={productPrice} onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div>
                <label htmlFor='upload_blog_image'>Quantity in stock</label>
                <input type="number" placeholder='Enter the quantity' value={productQuantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
            
            <div>
                {errorMsg && <p className='error_msg'>{errorMsg}</p>}
                {successMsg && <p className='success_msg'>{successMsg}</p>}
            </div>

            <div>
                <button className='product_submit_btn' onClick={handleProductSubmit} disabled={isLoading}>{isLoading ? 'Please wait ...' : 'Submit'}</button>
            </div>

        </form>
    // </Page>
  )
}

export default AddBlogPage