import Single from '../../components/single/Single'
import { singleProduct, singleUser } from '../../data'
import './product.scss'
const Product = () => {
  //fetch data and send to single component
  return (
    <div className='product'>
      <Single{...singleProduct}/>
    </div>
  )
}

export default Product