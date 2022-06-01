function Quantity({ setQuestionsToAdd }) {
  function updateQuantity(event) {
    setQuestionsToAdd.quantity = event.target.value;
  }
  return (
    <>
      <label hmtlfor="quantity">Quantity</label>
      <input
        name="quantity"
        id="quantity"
        onChange={(event) => {
          updateQuantity(event);
        }}
      />
    </>
  );
}

export default Quantity;
