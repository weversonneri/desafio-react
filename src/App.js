import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";

import { BrowserRouter, Route } from 'react-router-dom';
import { CartProvider } from "./context/cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
