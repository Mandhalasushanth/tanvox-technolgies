import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import careersTeamIsometric from "../../../assets/careers_team_isometric.png";
import "./Careers.css";
import { allJobsData } from "./JobData";
const Careers = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLoc, setSelectedLoc] = useState("All");
  const [selectedExp, setSelectedExp] = useState("All");
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [applyingJob, setApplyingJob] = useState(null);
  const [applyForm, setApplyForm] = useState({
    name: "",
    email: "",
    portfolio: "",
    resume: "",
  });
  const [isApplying, setIsApplying] = useState(false);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const [uploadedResumeName, setUploadedResumeName] = useState("");
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const [resumeUploadSuccess, setResumeUploadSuccess] = useState(false);

  const modalOverlayRef = useRef(null);
  const modalContainerRef = useRef(null);

  const departments = [
    "All",
    ...new Set(allJobsData.map((job) => job.department)),
  ];
  const locations = ["All", ...new Set(allJobsData.map((job) => job.location))];
  const experiences = [
    "All",
    ...new Set(allJobsData.map((job) => job.experience)),
  ];

  const filteredJobs = allJobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept =
      selectedDept === "All" || job.department === selectedDept;
    const matchesLoc = selectedLoc === "All" || job.location === selectedLoc;
    const matchesExp = selectedExp === "All" || job.experience === selectedExp;
    return matchesSearch && matchesDept && matchesLoc && matchesExp;
  });

  const openModal = () => {
    setIsModalOpen(true);
    setAppliedSuccess(false);
    setApplyingJob(null);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (modalContainerRef.current && modalOverlayRef.current) {
      gsap.to(modalContainerRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setIsModalOpen(false);
          document.body.style.overflow = "";
        },
      });
      gsap.to(modalOverlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    if (isModalOpen && modalContainerRef.current && modalOverlayRef.current) {
      gsap.fromTo(
        modalOverlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" },
      );
      gsap.fromTo(
        modalContainerRef.current,
        { opacity: 0, scale: 0.96, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          delay: 0.08,
        },
      );
    }
  }, [isModalOpen]);

  const handleApplyClick = (job) => {
    setApplyingJob(job);
    setAppliedSuccess(false);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      setAppliedSuccess(true);
      setApplyForm({ name: "", email: "", portfolio: "", resume: "" });
    }, 1200);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedDept("All");
    setSelectedLoc("All");
    setSelectedExp("All");
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedResumeName(file.name);
      setIsUploadingResume(true);
      setResumeUploadSuccess(false);
      setTimeout(() => {
        setIsUploadingResume(false);
        setResumeUploadSuccess(true);
      }, 1500);
    }
  };

  const handleTiltMouseMove = (e, intensityX = 4, intensityY = 5) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -((y - rect.height / 2) / (rect.height / 2)) * intensityX;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * intensityY;

    e.currentTarget.style.transition =
      "transform 0.08s linear, box-shadow 0.08s linear, border-color 0.08s linear";
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px) scale(1.015)`;
  };

  const handleTiltMouseLeave = (e) => {
    e.currentTarget.style.transition =
      "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease, border-color 0.5s ease";
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)";
    e.currentTarget.style.boxShadow = "";
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    gsap.registerPlugin(ScrollTrigger);

    // Entrance animations for Hero components
    gsap.fromTo(
      ".careers-hero-left",
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 1.1, ease: "power3.out" },
    );

    gsap.fromTo(
      ".careers-hero-right-container",
      { opacity: 0, scale: 0.9, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.15,
      },
    );

    // Continuous floating animation for the isometric wrapper
    gsap.fromTo(
      ".careers-hero-isometric-wrapper",
      { y: 0 },
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      },
    );

    // Staggered float animations for the 4 overlapping cards
    gsap.fromTo(
      ".card-learning",
      { y: 0 },
      { y: -6, repeat: -1, yoyo: true, duration: 3, ease: "sine.inOut", delay: 0.1 }
    );
    gsap.fromTo(
      ".card-innovation",
      { y: 0 },
      { y: 6, repeat: -1, yoyo: true, duration: 3.2, ease: "sine.inOut", delay: 0.5 }
    );
    gsap.fromTo(
      ".card-recognition",
      { y: 0 },
      { y: -8, repeat: -1, yoyo: true, duration: 2.8, ease: "sine.inOut", delay: 0.3 }
    );
    gsap.fromTo(
      ".card-balance",
      { y: 0 },
      { y: 8, repeat: -1, yoyo: true, duration: 3.4, ease: "sine.inOut", delay: 0.7 }
    );

    // Add ScrollTrigger to Why Join Cards
    gsap.fromTo(
      ".why-join-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".why-join-section",
          start: "top 80%",
        }
      }
    );

    // GSAP fade-up staggered card reveal for service verticals
    gsap.fromTo(
      ".vertical-card-reveal",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".verticals-section",
          start: "top 80%",
        }
      }
    );

    // GSAP fade-up staggered card reveal for open positions
    gsap.fromTo(
      ".opp-card-reveal",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".open-positions-section",
          start: "top 80%",
        }
      }
    );

    // GSAP fade-up staggered card reveal for culture cards
    gsap.fromTo(
      ".culture-card-reveal",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".careers-culture-section",
          start: "top 80%",
        }
      }
    );

    // GSAP fade-up entry for Careers CTA
    gsap.fromTo(
      ".cta-card-reveal",
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.9, 
        ease: "power3.out", 
        scrollTrigger: {
          trigger: ".careers-cta-section",
          start: "top 85%",
        }
      }
    );
  }, []);

  const whyJoinData = [
    {
      title: "Diverse Opportunities",
      desc: "Work across 360° IT and business services.",
      iconClass: "icon-box-blue",
      barClass: "bar-blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Growth & Learning",
      desc: "Continuous learning, mentorship and career advancement.",
      iconClass: "icon-box-pink",
      barClass: "bar-pink",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <polyline points="12 4 18 10 22 6" />
        </svg>
      ),
    },
    {
      title: "Innovative Culture",
      desc: "Encouraging creativity, collaboration and new ideas.",
      iconClass: "icon-box-purple",
      barClass: "bar-purple",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A7 7 0 0 0 4 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6M10 22h4" />
        </svg>
      ),
    },
    {
      title: "Future-Ready Skills",
      desc: "Exposure to cloud, AI, DevOps, data and emerging tech.",
      iconClass: "icon-box-blue",
      barClass: "bar-blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
    {
      title: "Flexible Environment",
      desc: "Flexible work options and employee-friendly policies.",
      iconClass: "icon-box-pink",
      barClass: "bar-pink",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: "Global Impact",
      desc: "Work with global clients across industries.",
      iconClass: "icon-box-blue",
      barClass: "bar-blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  const positions = [
    {
      id: "fullstack-eng",
      badge: "Engineering",
      type: "Full-time • Remote",
      title: "Full Stack Engineer",
      desc: "Design and build high-performance React frontends and Node.js microservices.",
      iconClass: "icon-box-blue",
      accentClass: "accent-blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: "mern-eng",
      badge: "Engineering",
      type: "Full-time • Hybrid",
      title: "MERN Stack Engineer",
      desc: "Develop robust, interactive web applications using MongoDB, Express, React, and Node.",
      iconClass: "icon-box-purple",
      accentClass: "accent-purple",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" />
        </svg>
      ),
    },
    {
      id: "cloud-eng",
      badge: "Cloud",
      type: "Full-time • Remote",
      title: "Cloud Solutions Architect",
      desc: "Architect secure, highly available cloud infrastructures and serverless solutions.",
      iconClass: "icon-box-purple",
      accentClass: "accent-purple",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
    {
      id: "devops-eng",
      badge: "DevOps",
      type: "Full-time • Hybrid",
      title: "DevOps & Platform Engineer",
      desc: "Build CI/CD pipelines, automate infrastructure, and optimize platform reliability.",
      iconClass: "icon-box-pink",
      accentClass: "accent-pink",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" />
        </svg>
      ),
    },
    {
      id: "qa-eng",
      badge: "Quality",
      type: "Full-time • Hybrid",
      title: "Automation QA Engineer",
      desc: "Develop robust automated test frameworks to maintain top-tier software reliability.",
      iconClass: "icon-box-blue",
      accentClass: "accent-blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      ),
    },
    {
      id: "sec-spec",
      badge: "Security",
      type: "Full-time • Remote",
      title: "Cybersecurity Analyst",
      desc: "Monitor network security logs, assess vulnerabilities, and implement compliance.",
      iconClass: "icon-box-purple",
      accentClass: "accent-purple",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  const serviceCardData = [
    {
      title: "Software Development",
      iconClass: "icon-box-blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Cloud Services",
      iconClass: "icon-box-purple",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
    {
      title: "DevOps & Automation",
      iconClass: "icon-box-pink",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" />
        </svg>
      ),
    },
    {
      title: "AI & Machine Learning",
      iconClass: "icon-box-blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.59 4.59A2 2 0 1 1 11 8H9m6-3.41A2 2 0 1 1 13 8h2m-6 6a2 2 0 1 1-1.41-3.41M15 14a2 2 0 1 1 1.41-3.41" />
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Cybersecurity Services",
      iconClass: "icon-box-purple",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: "Data Analytics & BI",
      iconClass: "icon-box-pink",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <polyline points="12 4 18 10 22 6" />
        </svg>
      ),
    },
    {
      title: "IT Infrastructure Services",
      iconClass: "icon-box-blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
    },
    {
      title: "Digital Transformation",
      iconClass: "icon-box-purple",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
        </svg>
      ),
    },
    {
      title: "Quality Assurance & Testing",
      iconClass: "icon-box-pink",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      ),
    },
    {
      title: "Managed IT Services",
      iconClass: "icon-box-blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design Services",
      iconClass: "icon-box-purple",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },
    {
      title: "Emerging Technologies",
      iconClass: "icon-box-pink",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <line x1="12" y1="8" x2="5.85" y2="16.65" />
          <line x1="12" y1="8" x2="18.15" y2="16.65" />
        </svg>
      ),
    },
  ];

  const cultureData = [
    {
      title: "People First",
      desc: "We prioritize employee well-being, growth, and continuous learning.",
      iconClass: "culture-blue-purple",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      desc: "We encourage creativity and work on cutting-edge technologies.",
      iconClass: "culture-purple-pink",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      desc: "We believe in teamwork, open communication, and shared success.",
      iconClass: "culture-pink-blue",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
    },
    {
      title: "Integrity",
      desc: "We maintain high ethical standards, transparency, and trust.",
      iconClass: "culture-blue-pink",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="careers-page">
      {/* Careers Hero Section (mockup redesigned) */}
      <section className="careers-hero">
        {/* Background dot grids */}
        <div
          className="careers-hero-dot-grid grid-left"
          aria-hidden="true"
        ></div>
        <div
          className="careers-hero-dot-grid grid-right"
          aria-hidden="true"
        ></div>

        <div className="careers-hero-ambient-glows">
          <div className="careers-hero-glow-left"></div>
          <div className="careers-hero-glow-right"></div>
        </div>

        {/* Abstract background wave vector (premium topographic style) */}
        <svg
          className="careers-wave-lines"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 250 C 300 300, 500 130, 900 210 C 1200 260, 1300 130, 1490 180"
            stroke="rgba(59, 130, 246, 0.06)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M-50 265 C 300 315, 500 145, 900 225 C 1200 275, 1300 145, 1490 195"
            stroke="rgba(59, 130, 246, 0.045)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M-50 280 C 300 330, 500 160, 900 240 C 1200 290, 1300 160, 1490 210"
            stroke="rgba(59, 130, 246, 0.03)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M-50 295 C 300 345, 500 175, 900 255 C 1200 305, 1300 175, 1490 225"
            stroke="rgba(236, 72, 153, 0.03)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-50 310 C 300 360, 500 190, 900 270 C 1200 320, 1300 190, 1490 240"
            stroke="rgba(236, 72, 153, 0.015)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>

        <div className="careers-hero-container">
          {/* Left Column: Badges, Title, Desc, Features list, CTA */}
          <div className="careers-hero-left">
            {/* Header Badge */}
            <h1 className="careers-hero-title">
              Build Your Career.
              <br />
              Build the Future.
            </h1>

            {/* Description Paragraph */}
            <p className="careers-hero-desc">
              At Tanvox Technologies, we combine technology, innovation, and
              business expertise to deliver exceptional solutions and create
              impact. Join a team that values your growth, ideas, and passion.
            </p>

            {/* Three feature items */}
            <div className="careers-features-list">
              {/* Feature 1: Grow Your Skills */}
              <div className="careers-feat-item">
                <div className="careers-feat-icon icon-pink">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 3.5-2 3.5s2.24-.5 3.5-2c1.39-1.39 2.36-3.6 2.36-3.6s-2.2-.97-3.6-2.36z" />
                    <path d="M22 2l-3 5-6 6-5-5 6-6z" />
                    <path d="M9 15l3 3" />
                    <path d="M15 9l3 3" />
                  </svg>
                </div>
                <div className="careers-feat-text">
                  <h4>Grow Your Skills</h4>
                  <p>Work on meaningful projects and advance your expertise.</p>
                </div>
              </div>

              {/* Feature 2: Great Culture */}
              <div className="careers-feat-item">
                <div className="careers-feat-icon icon-purple">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="careers-feat-text">
                  <h4>Great Culture</h4>
                  <p>Collaborate, learn, and celebrate together.</p>
                </div>
              </div>

              {/* Feature 3: Make an Impact */}
              <div className="careers-feat-item">
                <div className="careers-feat-icon icon-blue">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="careers-feat-text">
                  <h4>Make an Impact</h4>
                  <p>Solve real-world challenges and create value.</p>
                </div>
              </div>
            </div>

            {/* Explore opportunities gradient button */}
            <a href="#open-positions" className="btn-explore-opp-gradient">
              Explore Opportunities
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="2" y1="8" x2="14" y2="8" />
                <polyline points="9 3 14 8 9 13" />
              </svg>
            </a>
          </div>

          {/* Right Column: Isometric office illustration & 4 floating cards */}
          <div className="careers-hero-right">
            <div className="careers-hero-right-container">
              {/* Isometric Tech Team Photo */}
              <div className="careers-hero-isometric-wrapper">
                <img
                  src={careersTeamIsometric}
                  alt="Tanvox Tech Collaboration Scene"
                  className="careers-isometric-img"
                />
              </div>

              {/* Decorative floating dots/orbs */}
              <div className="orb-small-purple"></div>
              <div className="orb-small-blue"></div>

              {/* Overlapping Float Card 1: Learning & Growth */}
              <div className="careers-float-card card-learning">
                <div className="float-card-icon icon-purple-bg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <div className="float-card-content">
                  <h4>Learning & Growth</h4>
                  <p>Continuous learning and development opportunities.</p>
                  <div className="float-card-line line-purple"></div>
                </div>
              </div>

              {/* Overlapping Float Card 2: Innovation */}
              <div className="careers-float-card card-innovation">
                <div className="float-card-icon icon-blue-bg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A7 7 0 0 0 4 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6M10 22h4" />
                  </svg>
                </div>
                <div className="float-card-content">
                  <h4>Innovation</h4>
                  <p>Work on cutting-edge technologies and innovative ideas.</p>
                  <div className="float-card-line line-blue"></div>
                </div>
              </div>

              {/* Overlapping Float Card 3: Recognition */}
              <div className="careers-float-card card-recognition">
                <div className="float-card-icon icon-pink-bg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#EC4899"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                    <path d="M12 2a6 6 0 0 1 6 6v3.34a6 6 0 0 1-12 0V8a6 6 0 0 1 6-6z" />
                  </svg>
                </div>
                <div className="float-card-content">
                  <h4>Recognition</h4>
                  <p>Your hard work and ideas make a difference.</p>
                  <div className="float-card-line line-pink"></div>
                </div>
              </div>

              {/* Overlapping Float Card 4: Work-Life Balance */}
              <div className="careers-float-card card-balance">
                <div className="float-card-icon icon-blue-bg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div className="float-card-content">
                  <h4>Work-Life Balance</h4>
                  <p>Flexible environment that supports your well-being.</p>
                  <div className="float-card-line line-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us / Benefits Section */}
      <section className="careers-section why-join-section">
        <div className="careers-section-header">
          <h2 className="careers-section-title">
            Why Join Tanvox Technologies?
          </h2>
          <div
            className="careers-badge-bar"
            style={{
              margin: "8px auto 0 auto",
              width: "36px",
              height: "3.5px",
            }}
          ></div>
          <p className="careers-section-desc" style={{ marginTop: "14px" }}>
            Grow your career, innovate every day, and make an impact that
            matters.
          </p>
        </div>

        <div className="why-join-grid">
          {whyJoinData.map((item, i) => (
            <div
              key={i}
              className="why-join-card"
              onMouseMove={(e) => handleTiltMouseMove(e, 4, 5)}
              onMouseLeave={handleTiltMouseLeave}
            >
              <div className={`why-join-icon-box ${item.iconClass}`}>
                {item.icon}
              </div>
              <h3 className="why-join-card-title">{item.title}</h3>
              <p className="why-join-card-desc">{item.desc}</p>
              <div className={`why-join-card-bar ${item.barClass}`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Service Verticals Section */}
      <section className="careers-section verticals-section">
        {/* Background Patterns */}
        <div className="verticals-dot-pattern" aria-hidden="true"></div>
        <div className="verticals-wave-pattern" aria-hidden="true">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 100 0 C 200 100, 150 250, 400 300"
              stroke="rgba(37, 99, 235, 0.04)"
              strokeWidth="1.5"
            />
            <path
              d="M 150 0 C 250 80, 200 230, 400 260"
              stroke="rgba(124, 58, 237, 0.03)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="verticals-wrapper">
          <div className="careers-section-header verticals-header">
            <h2 className="verticals-title">Our Service Verticals</h2>
            <div className="verticals-subtitle-container">
              <span className="verticals-subtitle-gradient">
                (What You Can Work On)
              </span>
            </div>
            <div className="verticals-header-underline"></div>
          </div>

          <div className="verticals-grid">
            {/* Render 12 Service Cards */}
            {serviceCardData.map((card, i) => (
              <div
                key={i}
                className="vertical-card vertical-card-reveal"
                onMouseMove={(e) => handleTiltMouseMove(e, 3, 4)}
                onMouseLeave={handleTiltMouseLeave}
              >
                <div
                  className={`vertical-icon-box ${card.iconClass} float-icon-anim`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {card.icon}
                </div>
                <h3 className="vertical-card-title">{card.title}</h3>
              </div>
            ))}

            {/* Large Gradient Card spanning Column 5, Row 1-3 */}
            <div className="verticals-gradient-card vertical-card-reveal">
              <div className="gradient-card-glow"></div>
              <div className="gradient-card-content">
                <h3 className="gradient-card-title">Endless</h3>
                <h3 className="gradient-card-title">Possibilities</h3>
              </div>
              <div className="airplane-vector">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  <path d="M 2 22 C 6 18, 12 20, 10 14" strokeDasharray="3,3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        className="careers-section open-positions-section"
        id="open-positions"
      >
        {/* Background Patterns */}
        <div className="positions-dot-pattern" aria-hidden="true"></div>
        <div className="positions-wave-pattern" aria-hidden="true">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-50 200 C 100 250, 200 100, 450 150"
              stroke="rgba(37, 99, 235, 0.04)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M-50 215 C 100 265, 200 115, 450 165"
              stroke="rgba(124, 58, 237, 0.03)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="positions-wrapper">
          <div className="careers-section-header positions-header">
            <h2 className="positions-title">
              <span className="title-dark">Open</span>{" "}
              <span className="title-gradient">Positions</span>
            </h2>
            <div className="positions-header-underline"></div>
            <p className="positions-subtitle">
              Join our team of builders, creators, and innovators to shape the
              future of enterprise technology.
            </p>
          </div>

          <div className="opp-grid">
            {positions.slice(0, 5).map((pos, i) => (
              <div key={pos.id} className="opp-card-wrapper opp-card-reveal">
                <div
                  className="opp-card"
                  onMouseMove={(e) => handleTiltMouseMove(e, 4, 5)}
                  onMouseLeave={handleTiltMouseLeave}
                >
                  <div className="opp-card-top">
                    <div
                      className={`opp-icon-box ${pos.iconClass} float-icon-anim`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {pos.icon}
                    </div>
                    <span className="opp-badge-label">{pos.badge}</span>
                    <h3 className="opp-card-title">{pos.title}</h3>
                    <p className="opp-card-desc">{pos.desc}</p>
                  </div>

                  <div className="opp-card-bottom">
                    <div className="opp-divider"></div>
                    <button
                      className="opp-view-details btn-view-details"
                      onClick={() => window.location.hash = `#careers/${pos.id}`}
                    >
                      <span className={`opp-link-text ${pos.accentClass}`}>
                        View Details
                      </span>
                      <svg
                        className={`opp-link-arrow ${pos.accentClass}`}
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <line x1="2" y1="8" x2="14" y2="8" />
                        <polyline points="9 3 14 8 9 13" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="positions-action-btn-container">
            <button className="btn-view-all-positions" onClick={openModal}>
              <span className="btn-bg-blur"></span>
              <span className="btn-text">View All Openings</span>
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="2" y1="8" x2="14" y2="8" />
                <polyline points="9 3 14 8 9 13" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Job Search & Filter Modal */}
      {isModalOpen && (
        <div
          className="job-modal-overlay"
          ref={modalOverlayRef}
          onClick={closeModal}
        >
          <div
            className="job-modal-container"
            ref={modalContainerRef}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button className="job-modal-close-btn" onClick={closeModal}>
              ✕
            </button>

            {applyingJob ? (
              // Apply Form State
              <div className="job-apply-form-container">
                <button
                  className="back-to-jobs-btn"
                  onClick={() => setApplyingJob(null)}
                >
                  ← Back to Positions
                </button>

                {appliedSuccess ? (
                  <div className="apply-success-message">
                    <div className="success-icon-box">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h2>Application Submitted!</h2>
                    <p>
                      Thank you for applying for the{" "}
                      <strong>{applyingJob.title}</strong> role. Our recruitment
                      team will review your profile and get back to you shortly.
                    </p>
                    <button
                      className="btn-success-close"
                      onClick={() => {
                        setApplyingJob(null);
                        closeModal();
                      }}
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="job-apply-form">
                    <div className="apply-form-header">
                      <h3>Apply for {applyingJob.title}</h3>
                      <span className="apply-job-badge">
                        {applyingJob.department} • {applyingJob.location}
                      </span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="applicant-name">Full Name</label>
                      <input
                        type="text"
                        id="applicant-name"
                        required
                        placeholder="John Doe"
                        value={applyForm.name}
                        onChange={(e) =>
                          setApplyForm({ ...applyForm, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="applicant-email">Email Address</label>
                      <input
                        type="email"
                        id="applicant-email"
                        required
                        placeholder="john.doe@example.com"
                        value={applyForm.email}
                        onChange={(e) =>
                          setApplyForm({ ...applyForm, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="applicant-resume">
                        Resume URL (PDF / DOCX)
                      </label>
                      <input
                        type="url"
                        id="applicant-resume"
                        required
                        placeholder="https://drive.google.com/file/d/..."
                        value={applyForm.resume}
                        onChange={(e) =>
                          setApplyForm({ ...applyForm, resume: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="applicant-portfolio">
                        Portfolio or LinkedIn URL (Optional)
                      </label>
                      <input
                        type="url"
                        id="applicant-portfolio"
                        placeholder="https://linkedin.com/in/..."
                        value={applyForm.portfolio}
                        onChange={(e) =>
                          setApplyForm({
                            ...applyForm,
                            portfolio: e.target.value,
                          })
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      className="submit-application-btn"
                      disabled={isApplying}
                    >
                      {isApplying ? (
                        <>
                          <span className="spinner"></span> Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </form>
                )}
              </div>
            ) : (
              // Job Board State
              <div className="job-board-container">
                <div className="job-board-header">
                  <h2>Current Job Openings</h2>
                  <div className="job-count-badge">
                    {filteredJobs.length}{" "}
                    {filteredJobs.length === 1 ? "Position" : "Positions"}
                  </div>
                </div>

                {/* Filter Controls */}
                <div className="job-filters-bar">
                  <div className="filter-search-box">
                    <svg
                      className="search-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search jobs by keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="filter-select-group">
                    <div className="select-wrapper">
                      <select
                        value={selectedDept}
                        onChange={(e) => setSelectedDept(e.target.value)}
                      >
                        <option value="All">All Departments</option>
                        {departments
                          .filter((d) => d !== "All")
                          .map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="select-wrapper">
                      <select
                        value={selectedLoc}
                        onChange={(e) => setSelectedLoc(e.target.value)}
                      >
                        <option value="All">All Locations</option>
                        {locations
                          .filter((l) => l !== "All")
                          .map((l) => (
                            <option key={l} value={l}>
                              {l}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="select-wrapper">
                      <select
                        value={selectedExp}
                        onChange={(e) => setSelectedExp(e.target.value)}
                      >
                        <option value="All">All Experience</option>
                        {experiences
                          .filter((e) => e !== "All")
                          .map((exp) => (
                            <option key={exp} value={exp}>
                              {exp}
                            </option>
                          ))}
                      </select>
                    </div>

                    {(searchQuery ||
                      selectedDept !== "All" ||
                      selectedLoc !== "All" ||
                      selectedExp !== "All") && (
                      <button
                        className="btn-clear-filters"
                        onClick={resetFilters}
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>

                {/* Jobs Scrollable Area */}
                <div className="job-board-list">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.slice(0, 5).map((job) => {
                      const isExpanded = expandedJobId === job.id;
                      return (
                        <div key={job.id} className="job-board-card">
                          <div className="job-card-main-info">
                            <div className="job-card-header-line">
                              <span className="job-card-dept">
                                {job.department}
                              </span>
                              <span className="job-card-meta">
                                {job.location} • {job.type} • {job.experience}
                              </span>
                            </div>
                            <h3 className="job-card-title">{job.title}</h3>
                            <p className="job-card-summary">{job.desc}</p>

                            {isExpanded && (
                              <div className="job-card-expanded-content">
                                <div className="job-expanded-divider"></div>
                                <h4>Role & Responsibilities</h4>
                                <p>
                                  We are seeking a proactive professional who
                                  can work independently and collaborate with
                                  regional teams. You will drive initiatives,
                                  establish standards, and work directly with
                                  senior stakeholders.
                                </p>
                                <div className="job-expanded-details-grid">
                                  <div>
                                    <strong>Compensation</strong>
                                    <span>{job.salary}</span>
                                  </div>
                                  <div>
                                    <strong>Employment Type</strong>
                                    <span>{job.type}</span>
                                  </div>
                                  <div>
                                    <strong>Workplace Model</strong>
                                    <span>
                                      {job.location.includes("Remote")
                                        ? "Remote"
                                        : "Hybrid"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="job-card-footer-line">
                            <div
                              className="opp-divider"
                              style={{ margin: "14px 0" }}
                            ></div>
                            <div className="job-card-actions">
                              <button
                                className="btn-job-details-toggle"
                                onClick={() => window.location.hash = `#careers/${job.id}`}
                              >
                                View Details
                              </button>
                              <button
                                className={`btn-job-apply-now ${job.accentClass}`}
                                onClick={() => window.location.hash = `#careers/${job.id}`}
                              >
                                Apply Now
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="no-jobs-found">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                      <h3>No Job Positions Found</h3>
                      <p>
                        We couldn't find any openings matching your search
                        criteria. Try modifying your filters or keyword query.
                      </p>
                      <button
                        className="btn-clear-filters-large"
                        onClick={resetFilters}
                      >
                        Clear All Filters
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Our Culture Section */}
      <section className="careers-section culture-section">
        {/* Background Patterns */}
        <div className="culture-dot-pattern" aria-hidden="true"></div>

        <div className="culture-wrapper">
          <div className="careers-section-header culture-header">
            <h2 className="culture-title">
              <span className="title-dark">Our</span>{" "}
              <span className="title-gradient">Culture</span>
            </h2>
            <div className="culture-header-underline"></div>
            <p className="culture-subtitle">
              We foster an environment that empowers our people, sparks
              innovation, and builds trust.
            </p>
          </div>

          <div className="culture-grid">
            {cultureData.map((item, i) => (
              <div
                key={i}
                className="culture-card culture-card-reveal"
                onMouseMove={(e) => handleTiltMouseMove(e, 3, 4)}
                onMouseLeave={handleTiltMouseLeave}
              >
                <div className={`culture-icon-box ${item.iconClass}`}>
                  {item.icon}
                </div>
                <h3 className="culture-card-title">{item.title}</h3>
                <p className="culture-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA Section */}
      <section className="careers-cta-section">
        {/* Ambient floating glows */}
        <div className="cta-ambient-glow cta-glow-left"></div>
        <div className="cta-ambient-glow cta-glow-right"></div>

        <div className="careers-cta-container cta-card-reveal">
          <div className="careers-cta-card">
            {/* Dotted pattern overlay */}
            <div className="cta-dot-pattern" aria-hidden="true"></div>

            <h2 className="careers-cta-heading">Ready to Build Your Future?</h2>
            <p className="careers-cta-subtitle">
              Join our team and work on innovative projects that create real
              impact.
            </p>

            <div className="careers-cta-buttons">
              <button className="btn-cta-apply" onClick={openModal}>
                Apply Now
              </button>
              <button
                className="btn-cta-upload"
                onClick={() => window.location.hash = "#contact"}
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Upload Toast Notification */}
      {(isUploadingResume || resumeUploadSuccess) && (
        <div className="resume-toast-notification">
          {isUploadingResume ? (
            <div className="toast-content">
              <span className="spinner"></span>
              <span>Uploading {uploadedResumeName}...</span>
            </div>
          ) : (
            <div className="toast-content success">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{uploadedResumeName} uploaded successfully!</span>
              <button
                className="btn-toast-close"
                onClick={() => setResumeUploadSuccess(false)}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Careers;
