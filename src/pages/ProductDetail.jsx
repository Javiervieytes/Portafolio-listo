import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import products from '../data/products.js';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import NavBar from '../components/organisms/NavBar.jsx'; 
import '../styles/pages/proyectosDetail.css';
import Button from '../components/atoms/Button.jsx';
import { useNavigate } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="main-bg">
        <NavBar />
        <Container className="my-5 project-detail">
          <h1>Producto no encontrado</h1>
        </Container>
      </div>
    );
  }

 return (
    <div className="main-bg">
      <NavBar />
      <Container className="my-5 project-detail">
        <Card className="project-detail-card">
          <Image src={product.image} alt={product.name} className="card-img-top" />
          <Card.Body>
            <Text variant="h2" className="project-detail-title">
              {product.name}
            </Text>
            <Text variant="p">{product.description}</Text>

            <Button
              variant="primary"
              onClick={() => navigate('/proyectos')}
              className="mt-3 d-block w-auto mx-auto"
            >
              Volver a Proyectos
            </Button>

            <Button variant="primary" onClick={() => window.open(product.url, '_blank')}
            className="mt-1 d-block w-auto mx-auto">
            Enlace al proyecto
            </Button>

          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ProductDetail;



