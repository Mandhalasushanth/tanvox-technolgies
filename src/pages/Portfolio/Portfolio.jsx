import React from 'react';
import './ProductsRedesign.css';
import Projects from './Projects';
import Technologies from './Technologies';
import Testimonials from './Testimonials';
import Rennto from './Rennto';
import TxHub from './TxHub';
import CaseStudies from '../CaseStudies/CaseStudies';
import CaseStudyDetail from '../CaseStudies/CaseStudyDetail';

export default function Portfolio({ currentHash }) {
  // Fallback to checking window.location.hash if currentHash is not provided
  const hash = currentHash || window.location.hash || '#portfolio';

  if (hash.startsWith('#case-study/')) {
    const studyId = hash.replace('#case-study/', '');
    return <CaseStudyDetail studyId={studyId} />;
  }

  switch (hash) {
    case '#portfolio-cases':
      return <CaseStudies />;
    case '#portfolio-tech':
      return <Technologies />;
    case '#portfolio-testimonials':
      return <Testimonials />;
    case '#portfolio/projects/rennto':
      return <Rennto />;
    case '#portfolio/projects/txhub':
      return <TxHub />;
    case '#portfolio':
    case '#portfolio-projects':
    default:
      return <Projects />;
  }
}