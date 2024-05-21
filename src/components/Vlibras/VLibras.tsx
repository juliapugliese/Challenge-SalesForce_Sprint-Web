"use client"

import { useEffect } from 'react';

declare global {
  interface Window {
    VLibras: any;
  }
}

const VLibras = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.VLibras) {
      new window.VLibras.Widget('https://vlibras.gov.br/app');
    }
  }, []);

  return null;
};

export default VLibras;