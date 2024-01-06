import React, { useState } from 'react';
import axios from '../../utils/axios';


const PDFGeneratorButton = ({id, pokemon}) => {
  const [loading, setLoading] = useState(false);

  const handleGeneratePDF = async () => {
    try {
        const response = await axios.get(`/pokemons/search/${id}/detail`, {
        responseType: 'blob', 
      });
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
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
      <button className='offset__btn generator' onClick={handleGeneratePDF} disabled={loading}>
        {loading ? 'Generating PDF...' : 'Generate PDF'}
      </button>
    </div>
  );
};

export default PDFGeneratorButton;