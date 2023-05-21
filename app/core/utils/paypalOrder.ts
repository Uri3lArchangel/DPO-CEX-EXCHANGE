import paypal, { CallbackFunction } from 'paypal-rest-sdk'


const config={
    mode:'sandbox',
    client_id:'AdW3hk51Vpv9firL7YgQMrSyqIPpJ-SnJMjcRKDJXjgKHML7w1oaKx6eBcmXstm2GsMiYECo8ctuVY5f',
    client_secret:'EN4z5Wwx0abn_PZMVegHnQrolHqzrYjh1OogbjoKEaJjr_cEKguU1_3xv-AbjSKhRWlv3435XfRNFL8F'
}

export const createOrder = (payment_option_json:paypal.Payment)=>{
    let result:paypal.PaymentResponse | null = null;
 paypal.payment.create(payment_option_json,(error,payment)=>{

    if(error){
        throw error;
    }else{
      result = payment
    }
    })
    return result
    
}