import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import noticias from '../data/noticias';
import Image from '../components/atoms/Image';
import Text from '../components/atoms/Text';
import NavBar from '../components/organisms/NavBar'; 
import Button from '../components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/noticiasDetail.css';

function NoticiasDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === parseInt(id));

  if (!noticia) {
    return (
      <div className="main-bg">
        <NavBar />
        <Container className="my-5 news-detail">
          <h1>Noticia no encontrada</h1>
        </Container>
      </div>
    );
  }

   return (
    <div className="main-bg">
      <NavBar />
      <Container className="my-5">
        <div className="news-detail">
          <Card className="news-detail-card">
            <Image src={noticia.image} alt={noticia.name} className="card-img-top" />
            <Card.Body>
              <Text variant="h2" className="news-detail-title">{noticia.name}</Text>
              <Text variant="p">{noticia.description}</Text>
              <Text variant="span" className="news-detail-meta d-block mt-2">
                {noticia.fecha}
              </Text>

              <Button
                variant="primary"
                onClick={() => navigate('/noticias')}
                className="mt-3 d-block w-auto mx-auto"
              >
                Volver a Noticias
              </Button>
     
              <Button
                variant="primary"
                onClick={() => window.open(noticia.url, '_blank', 'noopener,noreferrer')}
                className="mt-1 d-block w-auto mx-auto"
              >
                Ir a la fuente
              </Button>

              <Button
                variant="primary"
                onClick={() => navigate(('/'))}
                className="mb-2 d-block w-auto mx-auto volver-inicio-btn"
              >
                Volver al inicio
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default NoticiasDetail;


