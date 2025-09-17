import react, { useState } from "react";

function OnChange() {
  const [name, setName] = useState("ahmad");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }
  function handleCommentChange(e) {
    setComment(e.target.value);
  }
  function handlePaymentChange(e) {
    setPayment(e.target.value);
  }
  function handleShippingChange(e) {
    setShipping(e.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input value={quantity} onChange={handleQuantityChange} type="number" />
      <p>Quantity: {quantity}</p>
      <textarea value={comment} onChange={handleCommentChange}></textarea>
      <p>Comment: {comment} </p>
      <select name="" id="" onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">VISA</option>
        <option value="mastercard">mastercard</option>
        <option value="giftcard">giftcard</option>
      </select>
      <p>Payment: {payment}</p>
      <label htmlFor="">
        <input type="radio" name="" id="" value="Pick Up" checked={shipping === 'Pick Up'} onChange={handlePaymentChange}/>
        pickup
      </label>
      <label htmlFor="">
        <input type="radio" name="" id="" value = "Delivery" checked={shipping === 'Delivery'} onChange = {handlePaymentChange} />
        delivery
      </label>
    </div>
  );
}

export default OnChange;
