import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout'
import Home from './container/home';
import ProductDetail from './container/product-detail';
import Shop from './container/shop'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop/product-/:id" component={Shop} />
          <Route exact path="/learn/:id" component={ProductDetail} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
