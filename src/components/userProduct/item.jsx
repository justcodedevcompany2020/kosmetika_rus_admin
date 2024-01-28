import './style.css'
export const Item = ({ last, data, product }) => {
    console.log(data)
    return <div className="UserProductItem" id={last ? 'last' : ''}>
        <div className='ImgWrapperUserProduct'>
            <img className='UserProductImg' src={require('../../Assets/img/22.png')} />
            <div className='UserProductText'>
                {/* <p className='Artikle'>{data?.name}</p> */}
                <p className='Krem'>{data?.name}</p>
                <p className='Artikle'>Артикул: {data?.vendor_code}</p>
                <p className='volume'>Объем: {data?.volume} мл</p>
            </div>
        </div>
        <div className='UserProductColume'>
            <div className='userProductAmount'>{product?.product_count} шт.</div>
            <div className='UserProductPrice'>
                <p className='userProductAmount'>{product?.product_price_in_order_moment} ₽</p>
                <p className='userProductSale'>{product.product_price} ₽</p>
            </div>
        </div>
    </div>
}