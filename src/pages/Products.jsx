import React from 'react';
import { Container, Row } from 'react-bootstrap';
import products from '../data/products';
import ProductCard from '../components/organisms/ProductCard';
import NavBar from '../components/organisms/NavBar';
import '../styles/pages/proyectos.css';

function Products() {
  return (
    <div className="main-bg">
    <NavBar />
    <Container className="my-5">
      <div className="projects-wrapper">
        <h1 className="projects-title">Proyectos</h1>
        <div className="projects-row">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </Container>
</div>


  );
}


export default Products;
