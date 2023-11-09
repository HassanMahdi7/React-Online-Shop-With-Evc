import { useEffect } from "react";
import { useState } from "react";
import useCart from "../CartContext";
import axios from "axios";
import toast from "react-hot-toast";

const Payments = () => {
    const inPy = {
        evc: false,
        zaad: false,
        sahal: false,
    };
    const [paymentType,setpaymentType] = useState(inPy);
    const [Updated,setUpdated] = useState(false);
    const [Load,setLoad] = useState(false);
    const [tel, setTel] = useState("");
    const {total,clearCart} = useCart();
    useEffect(() => {},[Updated]);

    const tik = (e) => {
        e.preventDefault();
        if(!tel) return toast.error('Tell IS Required')
        if (tel.length < 9) return toast.error("Invlaid Phone number");
        processPayment();
    };

    const processPayment = async () => {
        try{
            setLoad(true);
            const body = {
            schemaVersion: "1.0",
            requestId: "14636832123195",
            timestamp: "20220927130916000",
            channelName: "WEB",
            serviceName: "API_PURCHASE",
            serviceParams: {
                merchantUid: process.env.REACT_APP_MERCHANT_U_ID,
                apiUserId: process.env.REACT_APP_MERCHANT_APIUSERID,
                apiKey: process.env.REACT_APP_MERCHANT_API_KEY,
                paymentMethod: "MWALLET_ACCOUNT",
                payerInfo: {
                    accountNo: "252" + tel
                },
                transactionInfo: {
                    amount: total,
                    currency: "USD",
                    description: "ZuldaanXarago",
                    referenceId: "R26225009913195",
                    invoiceId: "I22512345623195"
                }
            },
        };
        const {data} = await axios.post(process.env.REACT_APP_END_POINT,body);
        setLoad(false);
        const info = data.responseMsg.split("errorCode");
        console.log(info)
        if (data.responseMsg == "RCS_SUCCESS") {
            clearCart();
            toast.success("Thanks for shopping with us ...");
            setUpdated(!Updated);
        } else {
            if (data.responseMsg == "RCS_USER_REJECTED") {
                toast.error("Wat Ka Noqotay Lacag Dirista");
                setUpdated(!Updated);
            }

            if (data.responseMsg == "Payment Failed (Invalid PIN code)") {
                toast.error("Numberka Sirta Ah Waa khalad");
                setUpdated(!Updated);
            }
        }
    }catch (e) {
        console.log(e);
    }
    };
    
return (
    <div className="payment-cards">
        <h2>Pay With</h2>
    
    <div className={`payment-card ${paymentType.zaad && "selected"}`}
    onClick={() => setpaymentType({...inPy, zaad:true})}>
   <h3>Zaad Services</h3> 
    </div>
    
    <div className={`payment-card ${paymentType.evc && "selected"}`}
     onClick={() => setpaymentType({...inPy, evc:true})}>
   <h3> Evc Plus </h3>
    </div>
    
    <div className={`payment-card ${paymentType.sahal && "selected"}`}
     onClick={() => setpaymentType({...inPy, sahal:true})}>
   <h3> Sahal </h3>
    </div>
    <form onSubmit={tik}>
        <input type="text" onChange={(e) => setTel(e.target.value)}
         placeholder="61XXXXXXX"  className="form-control" />
   <button className="btnpay" >{Load ? "Loading..." : "Bixi Lacagta" }</button>
    </form>
    </div>
)
}
export default Payments;