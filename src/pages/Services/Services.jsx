import { useState, useEffect } from 'react';
import { itServicesData, businessServicesData, whyChooseUsData } from './ServicesData';
import Home from '../Home/Home';
import { motion, AnimatePresence } from 'framer-motion';

// Service Card Image Imports
import softwareDevImg from '../../assets/software_dev.png';
import cloudServicesImg from '../../assets/cloud_services.png';
import devopsAutomationImg from '../../assets/devops_automation.png';
import aiAutomationImg from '../../assets/ai_automation.png';
import cybersecurityImg from '../../assets/cybersecurity.png';
import itInfrastructureImg from '../../assets/it_infrastructure.png';
import digitalTransformationItImg from '../../assets/digitalTransformation.png';
import managedItImg from '../../assets/managed_it.jpg';
import dataAnalyticsImg from '../../assets/data_analytics.png';
import supportMaintenanceImg from '../../assets/support_maintenance1.jpg';

import bpoImg from '../../assets/bpo.png';
import kpoImg from '../../assets/kpo.png';
import marketingImg from '../../assets/marketing_services.png';
import salesImg from '../../assets/sales_support.png';
import trainingImg from '../../assets/training_devlp.png';
import hrImg from '../../assets/human_resources.png';
import creativemediaImg from '../../assets/creative_media.png';
import financeImg from '../../assets/financial_services.png';
import legalImg from '../../assets/legal_compliance.png';
import procurementImg from '../../assets/procurement_supplychain.png';
import facilitiesImg from '../../assets/facility_management.png';
import educationImg from '../../assets/education_services.png';  
import administrationImg from '../../assets/administrative_services.png';
import rpoImg from '../../assets/rpo.png';
import businessConsultingImg from '../../assets/business_services.png';
import projectmanagementImg from '../../assets/project_services.png';


// Redesign Illustration Imports
import servicesIntroImg from '../../assets/services_intro.png';
import ourServicesImg from '../../assets/our_services.png';
import itServicesImg from '../../assets/it_services.png';
import nonItServicesImg from '../../assets/non_it_services.png';
import whyChooseUsImg from '../../assets/why_choose_us.png';
import ServicesHeroInteractive from './ServicesHeroInteractive';

import './Services.css';

const serviceImages = {
  'software-dev': softwareDevImg,
  'cloud-services': cloudServicesImg,
  'devops-automation': devopsAutomationImg,
  'ai-ml': aiAutomationImg,
  'cybersecurity': cybersecurityImg,
  'data-analytics': dataAnalyticsImg,
  'it-infrastructure': itInfrastructureImg,
  'digital-transformation': digitalTransformationItImg,
  'qa-testing': supportMaintenanceImg,
  'managed-it': managedItImg,
  'ui-ux': supportMaintenanceImg,
  'enterprise-solutions': managedItImg,
  'emerging-tech': supportMaintenanceImg,
  'it-consulting': managedItImg,
  'support-maintenance': supportMaintenanceImg,

  'education-services': educationImg,
  'bpo-services': bpoImg,
  'kpo-services': kpoImg,
  'marketing-services': marketingImg,
  'sales-support': salesImg,
  'training-development': trainingImg,
  'human-resources': hrImg,
  'creative-media': creativemediaImg,
  'financial-services': financeImg,
  'legal-compliance': legalImg,
  'procurement-supplychain': procurementImg,
  'facility-management': facilitiesImg,
  'administration-services': administrationImg,
  'rpo-services': rpoImg,
  'business-consulting': businessConsultingImg,
  'project-management': projectmanagementImg


};

// Animated Interactive SVG Visuals for the 8 primary services
function SoftwareDevelopmentVisual() {
  return (
    <svg viewBox="0 0 240 160" width="100%" height="100%" fill="none" style={{ background: '#09133a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Editor Window Top Bar */}
      <rect x="0" y="0" width="240" height="24" fill="#0c194e" />
      <circle cx="12" cy="12" r="4" fill="#ef4444" />
      <circle cx="24" cy="12" r="4" fill="#f59e0b" />
      <circle cx="36" cy="12" r="4" fill="#10b981" />
      <text x="50" y="16" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="var(--font-mono)">main.js</text>
      
      {/* Code Area */}
      <text x="15" y="45" fill="#3B82F6" fontSize="10" fontFamily="var(--font-mono)">import</text>
      <text x="60" y="45" fill="#ffffff" fontSize="10" fontFamily="var(--font-mono)">{"{ TanvoxEngine }"} from 'engine';</text>
      
      <text x="15" y="65" fill="#EC4899" fontSize="10" fontFamily="var(--font-mono)">const</text>
      <text x="55" y="65" fill="#a78bfa" fontSize="10" fontFamily="var(--font-mono)">app</text>
      <text x="80" y="65" fill="#3B82F6" fontSize="10" fontFamily="var(--font-mono)">=</text>
      <text x="95" y="65" fill="#ffffff" fontSize="10" fontFamily="var(--font-mono)">new TanvoxEngine();</text>
      
      {/* Animated terminal line mockups */}
      <path d="M15,85 L180,85" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" className="typing-line" />
      <path d="M15,100 L120,100" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" className="typing-line-delay-1" />
      
      {/* Terminal Area Bottom */}
      <rect x="15" y="115" width="210" height="32" fill="#020720" rx="6" />
      <text x="25" y="134" fill="#10b981" fontSize="10" fontFamily="var(--font-mono)">$ tanvox run deploy</text>
      <circle cx="138" cy="130" r="1.5" fill="#10b981" className="term-cursor" />
    </svg>
  );
}

function CloudServicesVisual() {
  return (
    <svg viewBox="0 0 200 150" width="100%" height="100%" fill="none" style={{ overflow: 'visible' }}>
      {/* Isometric Grid Cloud Platform Mock */}
      <g transform="translate(100, 30)">
        {/* Base Grid Plane */}
        <polygon points="0,0 80,40 0,80 -80,40" fill="rgba(59, 130, 246, 0.05)" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1.5" />
        
        {/* Central Cloud node */}
        <g transform="translate(0, 40)" className="floating-node-element">
          {/* Outer Cloud Shape Outline */}
          <path d="M-30,-10 C-35,-10 -40,-5 -40,2 C-45,2 -48,7 -45,12 C-48,17 -40,22 -30,22 L30,22 C40,22 45,17 45,12 C48,7 45,2 40,2 C40,-5 35,-10 30,-10 Z" fill="rgba(59,130,246,0.15)" stroke="#3B82F6" strokeWidth="2" />
          
          <circle cx="-15" cy="5" r="3" fill="#ffffff" />
          <circle cx="15" cy="5" r="3" fill="#ffffff" />
          <line x1="-15" y1="5" x2="15" y2="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        </g>
        
        {/* Floating Server Elements */}
        <g transform="translate(-50, 20)">
          <rect x="-10" y="-10" width="20" height="20" rx="4" fill="#050F3B" stroke="#EC4899" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="2" fill="#EC4899" />
        </g>
        <g transform="translate(50, 60)">
          <rect x="-10" y="-10" width="20" height="20" rx="4" fill="#050F3B" stroke="#60A5FA" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="2" fill="#60A5FA" />
        </g>
        
        {/* Data flow routes */}
        <path d="M-50,20 L-25,35" stroke="#EC4899" strokeWidth="1.5" strokeDasharray="4 2" className="cloud-route" />
        <path d="M25,45 L50,60" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 2" className="cloud-route" />
      </g>
    </svg>
  );
}

function DevOpsAutomationVisual() {
  return (
    <svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" style={{ overflow: 'visible' }}>
      {/* Infinity loop path CI/CD */}
      <path d="M 60,60 C 10,20 10,100 60,60 C 110,20 110,100 60,60 Z" stroke="rgba(255,255,255,0.06)" strokeWidth="8" strokeLinecap="round" />
      <path id="cicd-loop" d="M 60,60 C 10,20 10,100 60,60 C 110,20 110,100 60,60 Z" stroke="url(#cicd-grad)" strokeWidth="3" strokeLinecap="round" className="cicd-loop-path" />
      
      {/* Flow Nodes */}
      <circle cx="26" cy="35" r="4" fill="#3B82F6" />
      <circle cx="94" cy="85" r="4" fill="#EC4899" />
      
      {/* Text markers */}
      <text x="35" y="25" fill="#94A3B8" fontSize="8" fontFamily="var(--font-mono)">BUILD</text>
      <text x="110" y="98" fill="#94A3B8" fontSize="8" fontFamily="var(--font-mono)">DEPLOY</text>
      
      <defs>
        <linearGradient id="cicd-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AIMachineLearningVisual() {
  return (
    <svg viewBox="0 0 160 180" width="100%" height="100%" fill="none" style={{ overflow: 'visible' }}>
      {/* Central brain node mesh */}
      <g transform="translate(80, 90)">
        {/* Core glow */}
        <circle cx="0" cy="0" r="30" fill="url(#ai-glow-grad)" opacity="0.3" />
        
        {/* Neural Network Nodes */}
        <line x1="0" y1="0" x2="-40" y2="-40" stroke="#3B82F6" strokeWidth="1" />
        <line x1="0" y1="0" x2="40" y2="-40" stroke="#EC4899" strokeWidth="1" />
        <line x1="0" y1="0" x2="-40" y2="40" stroke="#60A5FA" strokeWidth="1" />
        <line x1="0" y1="0" x2="40" y2="40" stroke="#a78bfa" strokeWidth="1" />
        
        <circle cx="0" cy="0" r="10" fill="#ffffff" className="neural-pulse-dot" />
        <circle cx="-40" cy="-40" r="6" fill="#3B82F6" />
        <circle cx="40" cy="-40" r="6" fill="#EC4899" />
        <circle cx="-40" cy="40" r="6" fill="#60A5FA" />
        <circle cx="40" cy="40" r="6" fill="#a78bfa" />
        
        {/* Orbit lines */}
        <circle cx="0" cy="0" r="56" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />
      </g>
      
      <defs>
        <radialGradient id="ai-glow-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#050F3B" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function CybersecurityVisual() {
  return (
    <svg viewBox="0 0 180 180" width="100%" height="100%" fill="none" style={{ overflow: 'visible' }}>
      {/* Radar radar sweep and Shield elements */}
      <g transform="translate(90, 90)">
        {/* Outer boundaries */}
        <circle cx="0" cy="0" r="70" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="50" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
        
        {/* Rotating sweep line */}
        <line x1="0" y1="0" x2="70" y2="0" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" className="radar-sweep-hand" />
        
        {/* Glowing Shield logo inside */}
        <path d="M-20,-25 L0,-35 L20,-25 L20,0 C20,15 0,25 0,25 C0,25 -20,15 -20,0 Z" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" strokeWidth="2.5" strokeLinejoin="round" />
        
        <circle cx="0" cy="-5" r="3" fill="#ffffff" />
      </g>
    </svg>
  );
}

function DataAnalyticsVisual() {
  return (
    <svg viewBox="0 0 180 140" width="100%" height="100%" fill="none" style={{ background: '#09133a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)', padding: '16px' }}>
      {/* Dashboard chart mockup */}
      <rect x="0" y="0" width="45" height="30" rx="4" fill="rgba(255,255,255,0.04)" />
      <text x="8" y="16" fill="#60A5FA" fontSize="8" fontWeight="bold">98.2k</text>
      <text x="8" y="24" fill="rgba(255,255,255,0.4)" fontSize="6">USERS</text>
      
      <rect x="55" y="0" width="45" height="30" rx="4" fill="rgba(255,255,255,0.04)" />
      <text x="63" y="16" fill="#10B981" fontSize="8" fontWeight="bold">+14.2%</text>
      <text x="63" y="24" fill="rgba(255,255,255,0.4)" fontSize="6">CONV</text>
      
      {/* Chart Line path */}
      <path d="M10,90 Q30,60 50,75 T90,40 T130,60 T150,30" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Grid line backdrops */}
      <line x1="10" y1="100" x2="160" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="10" y1="70" x2="160" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      
      {/* Dots on line */}
      <circle cx="50" cy="75" r="3" fill="#ffffff" />
      <circle cx="90" cy="40" r="3" fill="#EC4899" />
    </svg>
  );
}

function ITInfrastructureVisual() {
  return (
    <svg viewBox="0 0 180 140" width="100%" height="100%" fill="none" style={{ background: '#09133a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)', padding: '16px' }}>
      {/* Servers stack layout */}
      <rect x="10" y="10" width="140" height="24" rx="4" fill="#040924" stroke="rgba(255,255,255,0.1)" />
      <circle cx="22" cy="22" r="3" className="led-light-green" />
      <circle cx="32" cy="22" r="3" className="led-light-green" />
      <rect x="110" y="18" width="30" height="8" rx="2" fill="rgba(59, 130, 246, 0.3)" />
      
      <rect x="10" y="44" width="140" height="24" rx="4" fill="#040924" stroke="rgba(255,255,255,0.1)" />
      <circle cx="22" cy="56" r="3" className="led-light-green" />
      <circle cx="32" cy="56" r="3" className="led-light-amber" />
      <rect x="110" y="52" width="30" height="8" rx="2" fill="rgba(59, 130, 246, 0.3)" />
      
      <rect x="10" y="78" width="140" height="24" rx="4" fill="#040924" stroke="rgba(255,255,255,0.1)" />
      <circle cx="22" cy="90" r="3" className="led-light-green" />
      <circle cx="32" cy="90" r="3" className="led-light-green" />
      <rect x="110" y="86" width="30" height="8" rx="2" fill="rgba(59, 130, 246, 0.3)" />
    </svg>
  );
}

function DigitalTransformationVisual() {
  return (
    <svg viewBox="0 0 200 100" width="100%" height="100%" fill="none" style={{ overflow: 'visible' }}>
      {/* Connected Business Flow diagram */}
      <g transform="translate(20, 20)">
        {/* Nodes */}
        <circle cx="20" cy="30" r="14" fill="rgba(59, 130, 246, 0.15)" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="90" cy="30" r="14" fill="rgba(236, 72, 153, 0.15)" stroke="#EC4899" strokeWidth="2" />
        <circle cx="160" cy="30" r="14" fill="rgba(167, 139, 250, 0.15)" stroke="#a78bfa" strokeWidth="2" />
        
        {/* Connected lines */}
        <line x1="34" y1="30" x2="76" y2="30" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="104" y1="30" x2="146" y2="30" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3 3" />
        
        {/* Arrows / Indicators inside nodes */}
        <path d="M16,30 L24,30 M20,26 L24,30 L20,34" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M86,30 L94,30 M90,26 L94,30 L90,34" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M156,30 L164,30 M160,26 L164,30 L160,34" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

const primaryServices = [
  {
    id: 'software-dev',
    title: 'Software Development Services',
    badge: 'Extra Large Hero',
    desc: 'Build scalable web, mobile, SaaS, and enterprise applications.',
    hoverTags: ['Custom Apps', 'SaaS Platforms', 'Mobile Apps', 'APIs & Microservices'],
    sizeClass: 'bento-card-software-dev',
    image: softwareDevImg,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" stroke="#60A5FA" />
        <polyline points="8 6 2 12 8 18" stroke="#60A5FA" />
      </svg>
    ),
    visual: <SoftwareDevelopmentVisual />,
    capabilities: [
      'Custom Software Development',
      'Enterprise Applications',
      'Mobile Apps',
      'API Integrations',
      'SaaS Platforms'
    ],
    benefits: ['Scalable', 'Secure', 'Fast Delivery'],
    techStack: ['React', 'Node.js', 'Python', 'Go', 'Flutter', 'GraphQL']
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    badge: 'Scale Platform',
    desc: 'Secure, scalable cloud transformation and operations.',
    hoverTags: ['Migration', 'AWS / Azure / GCP', 'FinOps', 'Infrastructure Scaling'],
    sizeClass: 'bento-card-cloud-services',
    image: cloudServicesImg,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="#60A5FA" />
      </svg>
    ),
    visual: <CloudServicesVisual />,
    capabilities: [
      'Cloud Migration blueprints',
      'Multi-Cloud orchestration',
      'Hybrid environments scaling',
      'Platform security & monitoring'
    ],
    benefits: ['Scalable', 'Cost Optimization', 'Business Agility'],
    techStack: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Terraform']
  },
  {
    id: 'devops-automation',
    title: 'DevOps & Automation',
    badge: 'Continuous Delivery',
    desc: 'Accelerate delivery through automation and modern DevOps practices.',
    hoverTags: ['CI/CD Pipelines', 'Kubernetes', 'IaC', 'DevSecOps'],
    sizeClass: 'bento-card-devops-automation',
    image: devopsAutomationImg,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" stroke="#60A5FA" />
      </svg>
    ),
    visual: <DevOpsAutomationVisual />,
    capabilities: [
      'CI/CD Environment builds',
      'Docker & Kubernetes container configs',
      'Infrastructure as Code (IaC)',
      'Logging, APM & DevSecOps integrations'
    ],
    benefits: ['Faster Deployments', 'Reduced Downtime', 'Continuous Delivery'],
    techStack: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Terraform']
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    badge: 'Cognitive systems',
    desc: 'Harness AI to create intelligent business solutions.',
    hoverTags: ['Generative AI', 'NLP', 'Computer Vision', 'Chatbots'],
    sizeClass: 'bento-card-ai-ml',
    image: aiAutomationImg,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" stroke="#60A5FA" />
        <line x1="12" y1="2" x2="12" y2="4" stroke="#60A5FA" />
        <line x1="12" y1="20" x2="12" y2="22" stroke="#60A5FA" />
        <line x1="2" y1="12" x2="4" y2="12" stroke="#60A5FA" />
        <line x1="20" y1="12" x2="22" y2="12" stroke="#60A5FA" />
      </svg>
    ),
    visual: <AIMachineLearningVisual />,
    capabilities: [
      'Generative AI integrations',
      'LLM Fine-tuning',
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision models'
    ],
    benefits: ['Smarter Decisions', 'Automation', 'Competitive Advantage'],
    techStack: ['TensorFlow', 'PyTorch', 'OpenAI APIs', 'Python', 'HuggingFace']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Services',
    badge: 'Enterprise Guard',
    desc: 'Protect critical business assets through proactive security strategies.',
    hoverTags: ['VAPT', 'Cloud Security', 'IAM', 'Compliance Auditing'],
    sizeClass: 'bento-card-cybersecurity',
    image: cybersecurityImg,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#60A5FA" />
      </svg>
    ),
    visual: <CybersecurityVisual />,
    capabilities: [
      'Vulnerability Assessments (VAPT)',
      'Application Hardening',
      'Cloud Compliance Configs',
      'IAM Governance Architectures',
      'Regulatory compliance policies'
    ],
    benefits: ['Risk Reduction', 'Compliance Readiness', 'Enhanced Trust'],
    techStack: ['Zero-Trust', 'WAF', 'SIEM Tools', 'IAM Systems', 'ISO 27001 standards']
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    badge: 'BI & Warehousing',
    desc: 'Transform data into actionable business insights.',
    hoverTags: ['ETL Pipelines', 'Data Warehouses', 'Dashboard Analytics'],
    sizeClass: 'bento-card-data-analytics',
    image: dataAnalyticsImg,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" stroke="#60A5FA" />
        <line x1="12" y1="20" x2="12" y2="4" stroke="#60A5FA" />
        <line x1="6" y1="20" x2="6" y2="14" stroke="#60A5FA" />
      </svg>
    ),
    visual: <DataAnalyticsVisual />,
    capabilities: [
      'ETL Pipeline systems engineering',
      'Data Lakehouse setups',
      'Dashboard & Analytics portal setups',
      'Predictive modeling algorithms'
    ],
    benefits: ['Data-Driven Decisions', 'Better Forecasting', 'Strategic Planning'],
    techStack: ['PowerBI', 'Tableau', 'Snowflake', 'dbt', 'SQL']
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure Services',
    badge: 'Resilient Foundation',
    desc: 'Build resilient and reliable technology foundations.',
    hoverTags: ['Server Networks', 'Virtual Environments', 'DR & Backups'],
    sizeClass: 'bento-card-it-infrastructure',
    image: itInfrastructureImg,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke="#60A5FA" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke="#60A5FA" />
        <line x1="6" y1="6" x2="6.01" y2="6" stroke="#60A5FA" />
        <line x1="6" y1="18" x2="6.01" y2="18" stroke="#60A5FA" />
      </svg>
    ),
    visual: <ITInfrastructureVisual />,
    capabilities: [
      'Structured server networks design',
      'Virtual environment builds',
      'Storage systems optimization',
      'Disaster Recovery (DR) frameworks'
    ],
    benefits: ['High Availability', 'Disaster Recovery', 'Infrastructure Reliability'],
    techStack: ['Cisco Systems', 'VMware', 'Enterprise SAN', 'Active Directory']
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Services',
    badge: 'Business Evolution',
    desc: 'Modernize operations and unlock innovation.',
    hoverTags: ['Workflow Automation', 'RPA', 'Legacy Code Modernization'],
    sizeClass: 'bento-card-digital-transformation',
    image: digitalTransformationItImg,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#60A5FA" />
        <polyline points="17 6 23 6 23 12" stroke="#60A5FA" />
      </svg>
    ),
    visual: <DigitalTransformationVisual />,
    capabilities: [
      'Connected business workflows creation',
      'Workflow Automation configurations',
      'RPA configurations',
      'Growth & trajectory tracking setups'
    ],
    benefits: ['Increased Productivity', 'Reduced Costs', 'Better Customer Experience'],
    techStack: ['RPA Engines', 'Zapier Enterprise', 'Custom Connectors', 'Advisory Services']
  }
];



function ServiceCard({ service, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="premium-bento-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(service)}
      animate={{
        y: isHovered ? -8 : 0
      }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {/* Background Image Hero Element with Zoom and Blur */}
      <motion.div 
        className="services-bento-card-image-bg"
        animate={{
          scale: isHovered ? 1.08 : 1,
          filter: isHovered ? 'blur(20px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <img src={service.image} alt={service.title} />
      </motion.div>

      {/* Bottom overlay gradient */}
      <div className="services-bento-card-bottom-overlay"></div>
      
      {/* Default Bottom State - Title & Icon */}
      <motion.div 
        className="services-bento-default-header"
        style={{ zIndex: 3 }}
        animate={{
          y: isHovered ? -20 : 0,
          opacity: isHovered ? 0 : 1
        }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="services-bento-card-icon-main">
          {service.icon}
        </div>
        <h3 className="services-bento-card-title-main">{service.title}</h3>
      </motion.div>

      {/* Glassmorphic Hover Overlay Detail Panel */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="services-bento-hover-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="services-bento-hover-content">
              <motion.div 
                className="services-bento-hover-header"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <div className="services-bento-hover-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="services-bento-hover-title" style={{ fontSize: '1.25rem' }}>{service.title}</h3>
              </motion.div>

              <motion.p 
                className="services-bento-hover-desc"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
              >
                {service.desc}
              </motion.p>
            </div>

            <motion.button 
              className="services-bento-hover-cta-btn"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(service);
              }}
            >
              <span>Learn More →</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [hoveredCarouselId, setHoveredCarouselId] = useState(null);

  const [ctaBtnCoords, setCtaBtnCoords] = useState({ x: 0, y: 0 });

  const handleCtaMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const distanceLimit = 15;
    setCtaBtnCoords({
      x: (x / (rect.width / 2)) * distanceLimit,
      y: (y / (rect.height / 2)) * distanceLimit
    });
  };

  const handleCtaMouseLeave = () => {
    setCtaBtnCoords({ x: 0, y: 0 });
  };

  // Generate 16 carousel services from businessServicesData
  const carouselServices = businessServicesData.map(item => {
    // Assign related images
    let baseImage = supportMaintenanceImg;
    if (item.id === 'consulting') baseImage = businessConsultingImg;
    else if (item.id === 'project') baseImage = softwareDevImg;
    else if (item.id === 'hr') baseImage = hrImg;
    else if (item.id === 'training') baseImage = trainingImg;
    else if (item.id === 'bpo') baseImage = bpoImg;
    else if (item.id === 'kpo') baseImage = kpoImg;
    else if (item.id === 'marketing') baseImage = marketingImg;
    else if (item.id === 'sales') baseImage = salesImg;
    else if (item.id === 'creative') baseImage = creativemediaImg;
    else if (item.id === 'financial') baseImage = financeImg;
    else if (item.id === 'legal') baseImage = legalImg;
    else if (item.id === 'procurement') baseImage = procurementImg;
    else if (item.id === 'facility') baseImage = facilitiesImg;
    else if (item.id === 'education') baseImage = educationImg;
    else if (item.id === 'admin') baseImage = administrationImg;
    else if (item.id === 'rpo') baseImage = rpoImg;
    else if (item.id === 'business-consulting') baseImage = businessConsultingImg;
    else if (item.id === 'project-management') baseImage = projectmanagementImg;


    let capabilities = item.capabilities || [];
    let benefits = ['Strategic Alignment', 'Process Optimization', 'Operational Agility'];
    let desc = item.description || 'Custom corporate business solution.';
    
    if (item.id === 'consulting') {
      benefits = ['Strategic Growth', 'Operational Efficiency', 'Market Analysis'];
    } else if (item.id === 'project') {
      benefits = ['Structured Governance', 'Risk Mitigation', 'On-Time Delivery'];
    } else if (item.id === 'hr') {
      benefits = ['Talent Acquisition', 'Strategic Hiring', 'Compliance Management'];
    } else if (item.id === 'training') {
      benefits = ['Skill Development', 'Improved Leadership', 'Career Growth'];
    } else if (item.id === 'bpo') {
      benefits = ['Cost Efficiency', 'Scale Operations', '24/7 Availability'];
    } else if (item.id === 'kpo') {
      benefits = ['Specialized Research', 'Advanced Data Insights', 'Strategic Planning'];
    } else if (item.id === 'marketing') {
      benefits = ['Brand Awareness', 'Lead Generation', 'Higher ROI'];
    } else if (item.id === 'sales') {
      benefits = ['Inside Sales Growth', 'Qualified Lead Flow', 'Stronger Conversion'];
    } else if (item.id === 'creative') {
      benefits = ['Corporate Identity', 'Visual Branding', 'High Engagement'];
    } else if (item.id === 'financial') {
      benefits = ['Audit Readiness', 'Reliable Accounting', 'Precise Planning'];
    } else if (item.id === 'legal') {
      benefits = ['Compliance Alignment', 'Reduced Contract Risk', 'Governance Support'];
    } else if (item.id === 'procurement') {
      benefits = ['Vendor Optimization', 'Seamless Logistics', 'Inventory Control'];
    } else if (item.id === 'facility') {
      benefits = ['Asset Maintenance', 'Building Operations', 'Physical Security'];
    } else if (item.id === 'education') {
      benefits = ['Placement Ready', 'Professional Training', 'Hands-on Workshops'];
    } else if (item.id === 'admin') {
      benefits = ['Higher Productivity', 'Documentation Control', 'Active Coordination'];
    } else if (item.id === 'rpo') {
      benefits = ['Streamlined Hiring', 'Screened Candidate Pipeline', 'Optimized Onboarding'];
    }

    return {
      id: item.id,
      title: item.title,
      desc: desc,
      tagline: item.description,
      capabilities: capabilities,
      benefits: benefits,
      image: baseImage,
      icon: item.icon
    };
  });

  // Constant horizontal marquee scroll effect with pause on hover
  useEffect(() => {
    const viewport = document.querySelector('.services-carousel-viewport');
    if (!viewport || hoveredCarouselId !== null) return;

    let animationId;
    const scroll = () => {
      viewport.scrollLeft += 1;
      // Loop seamlessly once scrolled past the first set of duplicated cards
      if (viewport.scrollLeft >= (viewport.scrollWidth / 2)) {
        viewport.scrollLeft = 0;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [hoveredCarouselId]);

  // Helper stats generator to keep the UI rich and dynamic
  const getMockMetrics = (id) => {
    switch (id) {
      case 'consulting':
        return [
          { value: '+35%', label: 'Avg Efficiency Gain' },
          { value: '4-6 Wks', label: 'Typical Roadmap' },
          { value: '98%', label: 'Executive Approval' }
        ];
      case 'project':
        return [
          { value: '94%', label: 'On-Time Delivery' },
          { value: '-18%', label: 'Budget Overhead' },
          { value: '100%', label: 'SLA Compliance' }
        ];
      case 'bpo':
        return [
          { value: '24/7', label: 'Operational Coverage' },
          { value: '75%', label: 'Cost Reduction' },
          { value: '< 90s', label: 'Response SLA' }
        ];
      case 'admin':
        return [
          { value: '80hr+', label: 'Monthly Time Saved' },
          { value: '99.9%', label: 'Accuracy Index' },
          { value: '1-Day', label: 'Onboarding Speed' }
        ];
      case 'support':
        return [
          { value: '99.2%', label: 'CSAT Rating' },
          { value: '< 45s', label: 'Live Chat Response' },
          { value: '95%', label: 'First-Contact Fix' }
        ];
      case 'hr':
        return [
          { value: '18 Days', label: 'Avg Time-To-Hire' },
          { value: '92%', label: 'Retention Rate' },
          { value: '1500+', label: 'Vetted Talent Pool' }
        ];
      case 'marketing':
        return [
          { value: '4.2x', label: 'Avg ROI Increase' },
          { value: '+140%', label: 'Lead Volume growth' },
          { value: '88%', label: 'Brand Lift Index' }
        ];
      case 'sales':
        return [
          { value: '+45%', label: 'Pipeline Velocity' },
          { value: '3.5x', label: 'SQL Conversion Lift' },
          { value: '96%', label: 'CRM Accuracy Rate' }
        ];
      default:
        return [
          { value: '99.9%', label: 'System Reliability' },
          { value: '100%', label: 'Zero-Trust Secure' },
          { value: '24/7', label: 'Expert Support' }
        ];
    }
  };

  return (
    <div className="services-page">
      {/* SECTION 1 – HERO SECTION */}
      <section className="services-hero" id="hero">
        <div className="hero-network-overlay"></div>
        <div className="hero-glow-dot-1"></div>
        <div className="hero-glow-dot-2"></div>
        <div className="services-container">
          <div className="services-hero-grid">
            <div className="services-hero-left">
              <motion.span 
                className="services-badge"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Enterprise Capabilities
              </motion.span>
              <motion.h1 
                className="services-hero-title"
                initial={{ opacity: 0, y: -35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                Next-Gen <span>Enterprise Services</span> & Technology Engineering
              </motion.h1>
              <motion.p 
                className="services-hero-desc"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                We engineer scalable, secure, and modern digital architectures. From custom software development and 
                cognitive AI integrations to comprehensive business process optimization, Tanvox drives your growth.
              </motion.p>
              <motion.div 
                className="services-hero-actions"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.45 }}
              >
                <a href="#contact" className="btn-consultation">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Get Started Today
                </a>
                <a href="#it-services" className="btn-contact-us" onClick={(e) => { e.preventDefault(); document.getElementById('it-services')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Explore Tech Stack &darr;
                </a>
              </motion.div>

              {/* Statistics Cards Row */}
              <div className="services-hero-stats-grid">
                <div className="services-hero-stat-card">
                  <div className="services-hero-stat-icon-wrapper blue">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <span className="services-hero-stat-number">99.9%</span>
                  <span className="services-hero-stat-label">Uptime SLA</span>
                </div>
                
                <div className="services-hero-stat-card">
                  <div className="services-hero-stat-icon-wrapper pink">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className="services-hero-stat-number">100%</span>
                  <span className="services-hero-stat-label">Zero-Trust Secured</span>
                </div>

                <div className="services-hero-stat-card">
                  <div className="services-hero-stat-icon-wrapper navy">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                  </div>
                  <span className="services-hero-stat-number">250+</span>
                  <span className="services-hero-stat-label">Engineers & Consultants</span>
                </div>

                <div className="services-hero-stat-card">
                  <div className="services-hero-stat-icon-wrapper blue">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                    </svg>
                  </div>
                  <span className="services-hero-stat-number">12+</span>
                  <span className="services-hero-stat-label">Industries Served</span>
                </div>

                <div className="services-hero-stat-card">
                  <div className="services-hero-stat-icon-wrapper pink">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <span className="services-hero-stat-number">&lt; 15m</span>
                  <span className="services-hero-stat-label">Emergency Response</span>
                </div>

                <div className="services-hero-stat-card">
                  <div className="services-hero-stat-icon-wrapper navy">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8l-4 4h8z" />
                    </svg>
                  </div>
                  <span className="services-hero-stat-number">98%</span>
                  <span className="services-hero-stat-label">Client Retention</span>
                </div>
              </div>
            </div>
            
            <div className="services-hero-right">
              <ServicesHeroInteractive />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – INTRODUCTION SECTION */}
      <section className="services-intro-section" id="services-intro">
        <div className="services-container">
          <div className="services-content-grid">
            <div className="services-content-left">
              <span className="services-section-subtitle">SERVICES</span>
              <h2 className="section-title">Transforming Businesses Through Technology, Innovation & Excellence</h2>
              <div className="services-section-description">
                <p>
                  At Tanvox Technologies, we deliver innovative technology and business solutions that help organizations streamline operations, accelerate growth, improve efficiency, and achieve digital excellence.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Our expertise spans software engineering, cloud technologies, DevOps, artificial intelligence, cybersecurity, data analytics, business consulting, outsourcing services, and enterprise transformation. We partner with startups, SMEs, enterprises, and government organizations to provide scalable, secure, and future-ready solutions tailored to their unique business goals.
                </p>
              </div>
            </div>
            <div className="services-content-right">
              <div className="services-image-card-wrapper">
                <img src={servicesIntroImg} alt="Digital Innovation" className="services-image-card" />
                <div className="services-floating-card">
                  <div className="services-floating-card-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7B2CBF" strokeWidth="2.5">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div className="services-floating-card-text">
                    <h4>Digital Innovation</h4>
                    <p>Building scalable technology solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-content-grid" style={{ marginTop: '2.5rem' }}>
            <div className="services-content-right">
              <div className="services-image-card-wrapper">
                <img src={ourServicesImg} alt="Complete Solutions" className="services-image-card" />
                <div className="services-floating-card">
                  <div className="services-floating-card-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7B2CBF" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="services-floating-card-text">
                    <h4>Complete Solutions</h4>
                    <p>Designed for modern businesses</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="services-content-left">
              <span className="services-section-subtitle">OUR SERVICES</span>
              <h2 className="section-title">End-to-End Solutions for Modern Businesses</h2>
              <div className="services-section-description">
                <p>
                  Whether you're looking to develop a digital product, modernize infrastructure, optimize operations, automate workflows, or scale your business, TX-Hub offers comprehensive services designed to drive measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REDESIGNED BENTO SERVICES SECTION */}
      <section className="premium-services-section" id="it-services">
        <div className="premium-glow-layer">
          <div className="glow-blue"></div>
          <div className="glow-pink"></div>
        </div>

        <div className="services-container">
          <div className="premium-header-redesigned centered" style={{ marginBottom: '1.5rem' }}>
            <span className="premium-eyebrow">IT SERVICES</span>
            <h2 className="section-title">Scale with Enterprise-Grade IT Infrastructure</h2>
            <p className="section-description">
              Tanvox Technologies delivers innovative technology and business solutions that help organizations streamline operations, accelerate growth, improve efficiency, and achieve digital excellence. We partner with startups, SMEs, enterprises, and government organizations to build scalable, secure, and future-ready solutions.
            </p>
          </div>

          <div className="premium-bento-grid">
            {primaryServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onSelect={setSelectedService} 
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="services-honeycomb-section" id="business-services">
        <div className="services-container">
          <div className="premium-header-redesigned" style={{ marginBottom: '1.5rem' }}>
            <span className="services-section-subtitle">Business & Non-IT Services</span>
            <h2 className="section-title">Optimize Operations & Maximize ROI</h2>
            <p className="section-description">
              Explore our complete suite of corporate solutions and business consulting practices. Hover over any service to inspect core capabilities and benefits instantly.
            </p>
          </div>
          <div className="services-honeycomb-split-grid">
            {/* Left Side - Horizontal Service Carousel Showcase */}
            <div className="services-carousel-viewport">
              <div className="services-carousel-track">
                {[...carouselServices, ...carouselServices].map((service, index) => {
                  const isHovered = hoveredCarouselId === service.id;
                  return (
                    <motion.div
                      layout
                      key={`${service.id}-${index}`}
                      className={`services-carousel-card-item ${isHovered ? 'expanded' : ''}`}
                      onMouseEnter={() => setHoveredCarouselId(service.id)}
                      onMouseLeave={() => setHoveredCarouselId(null)}
                      onClick={() => {
                        if (window.innerWidth <= 768) {
                          setSelectedService(service);
                        }
                      }}
                      animate={{
                        width: isHovered ? 500 : 210,
                        opacity: hoveredCarouselId !== null && !isHovered ? 0.6 : 1,
                        scale: hoveredCarouselId !== null && !isHovered ? 0.95 : 1
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="services-carousel-card-inner-layout">
                        {/* Left Column: Visual summary */}
                        <div className="services-carousel-card-left-column">
                          <div className="services-carousel-card-img">
                            <img src={service.image} alt={service.title} />
                          </div>
                          <div className="services-carousel-hover-overlay"></div>
                          <div className="services-carousel-card-body">
                            <div>
                              <div className="services-carousel-card-header-icon">
                                {service.icon}
                              </div>
                              <h3 className="services-carousel-card-title">{service.title}</h3>
                              <p className="services-carousel-card-tagline">{service.tagline}</p>
                            </div>
                            {!isHovered && (
                              <div className="services-carousel-card-footer">
                                <span>Learn More</span>
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                                  <line x1="5" y1="12" x2="19" y2="12" />
                                  <polyline points="12 5 19 12 12 19" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Right Column: Slide-in details panel */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              className="services-carousel-card-right-column"
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: 50, opacity: 0 }}
                              transition={{ duration: 0.35, ease: 'easeOut' }}
                            >
                              <div className="services-carousel-details-pane-inner">
                                <p className="services-carousel-details-desc">{service.desc}</p>
                                
                                <div className="services-carousel-details-section">
                                  <h4 className="services-carousel-details-section-title">Capabilities</h4>
                                  <ul className="services-carousel-details-list">
                                    {(service.capabilities || []).slice(0, 3).map((cap, idx) => (
                                      <li key={idx} className="services-carousel-details-list-item">
                                        <span className="bullet-checkmark">✓</span>
                                        <span className="bullet-text">{cap}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="services-carousel-details-section">
                                  <h4 className="services-carousel-details-section-title">Business Benefits</h4>
                                  <ul className="services-carousel-details-list">
                                    {(service.benefits || []).slice(0, 2).map((benefit, idx) => (
                                      <li key={idx} className="services-carousel-details-list-item">
                                        <span className="bullet-checkmark">✓</span>
                                        <span className="bullet-text">{benefit}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="services-carousel-details-action">
                                  <button 
                                    className="cta-button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedService(service);
                                    }}
                                  >
                                    View Details
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE TANVOX */}
      <section className="services-why-section services-section" id="why-tanvox">
        <div className="services-container">
          <div className="premium-header-redesigned centered" style={{ marginBottom: '1.5rem' }}>
            <h2 className="section-title" style={{ textTransform: 'capitalize' }}>Why Partner With Us</h2>
            <p className="section-description">
              We stand apart through our technological expertise, deep commitment to cybersecurity compliance, and enterprise delivery standards.
            </p>
          </div>

          <div className="services-why-grid">
            {whyChooseUsData.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="services-why-card"
                whileHover="hover"
                variants={{
                  hover: {
                    y: -8,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  }
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <motion.div 
                  className="services-why-icon-wrapper"
                  variants={{
                    hover: {
                      rotate: 360
                    }
                  }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="services-why-card-title">{item.title}</h3>
                <p className="services-why-card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – CTA SECTION */}
      <section className="services-cta-section" id="cta">
        <div className="services-container">
          <div className="services-cta-banner">
            <div className="services-cta-glow-1"></div>
            <div className="services-cta-glow-2"></div>
            <div className="services-cta-content">
              <h2 className="services-cta-title">Ready to Elevate Your Digital Operations?</h2>
              <p className="services-cta-desc">
                Partner with Tanvox Technologies. Contact our software engineering and business specialists today to construct a customized blueprint.
              </p>
              <div className="services-cta-actions" style={{ justifyContent: 'center' }}>
                <motion.a 
                  href="#contact" 
                  className="services-btn-cta-white"
                  onMouseMove={handleCtaMouseMove}
                  onMouseLeave={handleCtaMouseLeave}
                  animate={{ x: ctaBtnCoords.x, y: ctaBtnCoords.y }}
                  transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                  style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Schedule a Consultation
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMER MOTION DETAILS MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="services-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="services-modal-content-wrap"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="services-modal-close-btn" onClick={() => setSelectedService(null)}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="services-modal-layout-grid">
                <div className="services-modal-visual-pane">
                  <img src={selectedService.image} alt={selectedService.title} />
                </div>

                <div className="services-modal-details-pane">
                  <div className="services-modal-header">
                    <span className="services-modal-badge">{selectedService.badge || 'TANVOX CAPABILITY'}</span>
                    <h3 className="services-modal-title">{selectedService.title}</h3>
                  </div>

                  <p className="services-modal-overview">{selectedService.desc}</p>

                  <h4 className="services-modal-section-title">Capabilities</h4>
                  <ul className="services-modal-bullets-list">
                    {(selectedService.capabilities || []).map((cap, index) => (
                      <li key={index} className="services-modal-bullet-item">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>

                  {selectedService.benefits && (
                    <>
                      <h4 className="services-modal-section-title">Business Benefits</h4>
                      <ul className="services-modal-bullets-list">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="services-modal-bullet-item">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {selectedService.techStack && (
                    <>
                      <h4 className="services-modal-section-title">Technology Stack</h4>
                      <div className="services-modal-tech-stack">
                        {selectedService.techStack.map((tech, index) => (
                          <span key={index} className="services-modal-tech-pill">{tech}</span>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="services-modal-actions">
                    <a href="#contact" className="services-modal-btn-primary" onClick={() => setSelectedService(null)}>
                      Schedule Consultation
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
