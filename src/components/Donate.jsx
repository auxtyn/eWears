import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");

//   const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY ;
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLI_KEY;

//   const publicKey = "pk_test_bad6ea06ec1d19a7cbc6b50e516d4ec16ebec5c9";

//   console.log(publicKey);

  const componentProps = {
    email,
    amount: Number(amount) * 100,
    metadata: {
      name,
      phone,
    },
    publicKey, 
    text: "Donate",
    onSuccess: () => toast.success("Payment successful"),
    onClose: () => toast.error("Payment cancelled"),
    onError: () => toast.error("An error occured"),
   //  onDeclined: () => toast.error("Declined"),

  };

  return (
    <>
      <div className="form-control w-50 container my-5 ">
        <input
          type="text"
          placeholder="John Doe"
          className="form-control input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          className="form-control input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <input
          type="number"
          placeholder="Amount"
          className="form-control input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="Phone number"
          className="form-control input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <PaystackButton
          {...componentProps}
          className="btn button btn-dark my-2"
        ></PaystackButton>
      </div>
    </>
  );
};

export default Donate;
