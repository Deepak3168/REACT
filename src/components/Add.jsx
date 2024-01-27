
const Add = ({ newname, newphone, handleNameChange , handlePhoneChange }) => {
    return (
      <div>
        <label>Name</label>
        <span>____</span>
        <input name="newname" value={newname} onChange={handleNameChange} placeholder="Enter your name" type="text" />
        <span>___</span>
        <label>Phone Number</label>
        <input  name="newphone" value={newphone} onChange={handlePhoneChange} type="text" placeholder="Enter your Number"/>
      </div>
    );
  }
  
  export default Add;
  