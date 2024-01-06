import React, { useState } from 'react';
import axios from '../../utils/axios';


const PDFGeneratorButton = ({id, pokemon}) => {
  const [loading, setLoading] = useState(false);

  const handleGeneratePDF = async () => {
    try {
      // Cambia 'http://tu-servidor/api/generate-pdf' por la URL de tu endpoint en Node.js
      const response = await axios.get(`/pokemons/search/${id}/detail`, {
        responseType: 'blob', // Configura el tipo de respuesta como blob (para archivos binarios)
      });

      // Crea un objeto blob con el contenido del PDF
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });

      // Crea un enlace de descarga para el blob del PDF
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(pdfBlob);
      link.download = `${pokemon}.pdf`;
      link.click();
    } catch (error) {
      console.error('Error al generar el PDF:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleGeneratePDF} disabled={loading}>
        {loading ? 'Generando PDF...' : 'Generar PDF'}
      </button>
    </div>
  );
};

export default PDFGeneratorButton;