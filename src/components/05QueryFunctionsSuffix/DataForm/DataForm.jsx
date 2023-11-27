import { useState } from "react";

export function DataForm() {
  const [email, setEmail] = useState('jammie@gmail.com');

  return(
    <form>
      <h3>Enter data</h3>
      <div data-testid="image wrapper">
        <img alt="data" src="data.jpg" />
      </div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <label htmlFor="color" placeholder="Red">Color</label>
      <input 
        id="color"
        // placeholder="Red"
      />

      <button title="Click when ready to submit">
        Submit
      </button>
    </form>
  )
}