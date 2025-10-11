import React from 'react';
import Text from '../atoms/Text';

function NoticiasCardBody({ title, summary, date, category }) {

  let meta = '';
  if (date) {
    const [y, m, d] = date.split('-').map(Number);
    const fecha = new Date(y, m - 1, d).toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });

    meta = category ? `${fecha} · ${category}` : fecha;
  } else if (category) {
    meta = category;
  }

  return (
    <>
      <Text variant="h5">{title}</Text>
      <Text variant="p">{summary}</Text>
      <Text variant="span" className="text-muted">{meta}</Text>
    </>
  );
}
export default NoticiasCardBody;