import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, FileText, ChevronLeft, ChevronRight, Globe, Shield, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Resources() {
  const [activeTab, setActiveTab] = useState<'infographics' | 'compliance'>('infographics');
  const [currentInfographicIndex, setCurrentInfographicIndex] = useState(0);
  const [activeComplianceCategory, setActiveComplianceCategory] = useState(0);

  const infographics = [
    {
      id: 1,
      title: "FATF 40 Recommendations",
      description: "International Standards on Combating Money Laundering and Terrorist Financing",
      path: "/infographics/FatfRecommendation.html",
      category: "Compliance Standards",
      color: "from-orange-500 to-orange-600",
      icon: "📋"
    },
    {
      id: 2,
      title: "KYC Customer Onboarding Process",
      description: "Comprehensive Know Your Customer Framework",
      path: "/infographics/KYCCustomerOnboardingProcess.html",
      category: "Customer Due Diligence",
      color: "from-purple-500 to-purple-600",
      icon: "👤"
    },
    {
      id: 3,
      title: "Three Lines of Defense Model",
      description: "Effective Risk Management and Control Framework",
      path: "/infographics/ThreeLinesofDefenseModel.html",
      category: "Risk Management",
      color: "from-emerald-500 to-emerald-600",
      icon: "🛡️"
    },
    {
      id: 4,
      title: "AML/CFT Risk Assessment Process",
      description: "Anti-Money Laundering and Counter-Terrorist Financing guidelines",
      path: "/infographics/AMLRiskAssessmentProcess.html",
      category: "Compliance Standards",
      color: "from-cyan-500 to-cyan-600",
      icon: "⚠️"
    },
    {
      id: 5,
      title: "Transaction Monitoring Workflow",
      description: "Automated Detection & Investigation of Suspicious Activities",
      path: "/infographics/TransactionMonitoringWorkflow.html",
      category: "Monitoring & Detection",
      color: "from-pink-500 to-pink-600",
      icon: "📊"
    },
  ];

  const complianceResources = [
    {
      category: 'International Regulatory Bodies',
      icon: Globe,
      description: 'Global financial intelligence and regulatory standards',
      resources: [
        { name: 'Financial Action Task Force (FATF)', url: 'https://www.fatf-gafi.org', description: 'International standards on combating money laundering' },
        { name: 'United Nations Office on Drugs and Crime (UNODC)', url: 'https://www.unodc.org', description: 'Global drug and crime prevention initiatives' },
        { name: 'Financial Crimes Enforcement Network (FinCEN)', url: 'https://www.fincen.gov', description: 'US financial intelligence and AML enforcement' },
        { name: 'Egmont Group of Financial Intelligence Units', url: 'https://www.egmontgroup.org', description: 'International FIU cooperation network' }
      ]
    },
    {
      category: 'European & Regional Authorities',
      icon: Shield,
      description: 'European and regional compliance frameworks',
      resources: [
        { name: 'Authority for Anti-Money Laundering and Countering the Financing of Terrorism (AMLA)', url: 'https://amla.europa.eu', description: 'EU AML/CFT regulatory authority' },
        { name: 'EU Sanctions List', url: 'https://ec.europa.eu/info/business-economy-euro/banking-and-finance/financial-regulation-and-supervision/eu-sanctions_en', description: 'European Union sanctions database' },
        { name: 'HM Treasury Sanctions', url: 'https://www.gov.uk/government/organisations/hm-treasury', description: 'UK sanctions and financial controls' }
      ]
    },
    {
      category: 'Middle East & Africa',
      icon: TrendingUp,
      description: 'MENA region compliance resources',
      resources: [
        { name: 'MLCU Egypt Terror List', url: 'https://www.cbe.org.eg', description: 'Egyptian money laundering and terrorism financing lists' },
        { name: 'KWFIU (Kuwait Financial Intelligence Unit)', url: 'https://www.kwfiu.gov.kw', description: 'Kuwait financial intelligence operations' },
        { name: 'CEUAE (Central Bank of UAE)', url: 'https://www.cbuae.gov.ae', description: 'UAE central bank compliance regulations' }
      ]
    },
    {
      category: 'Sanctions & Screening Databases',
      icon: Shield,
      description: 'Global sanctions and screening tools',
      resources: [
        { name: 'OFAC Sanctions Lists', url: 'https://ofac.treasury.gov', description: 'US Office of Foreign Assets Control sanctions' },
        { name: 'LSEG World-Check', url: 'https://www.lseg.com/en/world-check', description: 'Global sanctions and PEP screening database' },
        { name: 'Comply Advantage', url: 'https://www.complyadvantage.com', description: 'Real-time AML/CFT compliance screening' },
        { name: 'Global Sanctions Index (GSI)', url: 'https://www.globalsanctionsindex.com', description: 'Comprehensive global sanctions database' }
      ]
    },
    {
      category: 'Industry Standards & Best Practices',
      icon: Globe,
      description: 'Industry-leading compliance standards',
      resources: [
        { name: 'Wolfsburg Group', url: 'https://www.wolfsberg-group.org', description: 'Financial services AML/CFT best practices' },
        { name: 'Global Initiative Against Transnational Organized Crime', url: 'https://www.globalinitiative.net', description: 'Organized crime prevention initiatives' }
      ]
    }
  ];

  // compute the active category icon component (safe with optional chaining)
  const ActiveIcon = complianceResources[activeComplianceCategory]?.icon ?? null;

  const nextInfographic = () => {
    setCurrentInfographicIndex((prev) => (prev + 1) % infographics.length);
  };

  const prevInfographic = () => {
    setCurrentInfographicIndex((prev) => (prev - 1 + infographics.length) % infographics.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-lg">
                CA
              </div>
              <span className="font-bold text-xl hidden sm:inline">Compliance AI</span>
            </motion.a>

            <a href="/" className="hover:text-purple-400 transition-colors">← Back to Home</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Compliance Resources
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive collection of regulatory bodies, databases, infographics, and industry standards to support your compliance journey
          </p>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex gap-4">
          <button
            onClick={() => setActiveTab('infographics')}
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
              activeTab === 'infographics'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <div className="flex items-center space-x-2">
              <FileText size={20} />
              <span>Infographics</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('compliance')}
            className={`px-6 py-2 font-semibold rounded-lg transition-all duration-300 ${
              activeTab === 'compliance'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <div className="flex items-center space-x-2">
              <ExternalLink size={20} />
              <span>Compliance Resources</span>
            </div>
          </button>
        </div>
      </section>

      {/* Infographics Section - Professional Carousel */}
      {activeTab === 'infographics' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-center text-purple-400">
                Compliance Infographics
              </h2>
              <p className="text-center text-gray-300 text-lg">
                Professional visualizations of key compliance frameworks and processes
              </p>
            </motion.div>

            {/* Main Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl overflow-hidden border border-slate-600/50 shadow-2xl">
                {/* Current Infographic Card */}
                <motion.a
                  key={currentInfographicIndex}
                  href={infographics[currentInfographicIndex].path}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="block p-8 md:p-12 min-h-96 flex flex-col justify-between group"
                >
                  <div className={`bg-gradient-to-br ${infographics[currentInfographicIndex].color} rounded-xl p-8 mb-6 flex items-center justify-center h-48`}>
                    <span className="text-8xl">{infographics[currentInfographicIndex].icon}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {infographics[currentInfographicIndex].title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-4">
                      {infographics[currentInfographicIndex].description}
                    </p>
                    <div className="flex items-center gap-2 text-cyan-400 group-hover:translate-x-2 transition-transform">
                      <span className="font-semibold">View Full Infographic</span>
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevInfographic}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextInfographic}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {infographics.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentInfographicIndex(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentInfographicIndex
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 w-8'
                        : 'bg-slate-600 w-3 hover:bg-slate-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Grid View of All Infographics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-purple-400">All Infographics</h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {infographics.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    onClick={() => setCurrentInfographicIndex(index)}
                    className="group"
                  >
                    <motion.div
                      className={`bg-gradient-to-br ${item.color} p-6 rounded-xl h-full transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 border border-slate-700/50 hover:border-purple-400/50 overflow-hidden relative cursor-pointer`}
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="text-5xl mb-4">{item.icon}</div>
                        <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                        <p className="text-sm text-gray-100 mb-4">{item.description}</p>
                        <div className="flex items-center gap-2 text-white group-hover:translate-x-1 transition-transform">
                          <span className="font-semibold text-sm">View</span>
                          <ExternalLink size={16} />
                        </div>
                      </div>
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Compliance Resources Section - Accenture Style */}
      {activeTab === 'compliance' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">
                Compliance Resources Directory
              </h2>
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {complianceResources.map((resource, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveComplianceCategory(index)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeComplianceCategory === index
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/50'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {resource.category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Active Category Content */}
            <motion.div
              key={activeComplianceCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12 border border-slate-600/50">
                <div className="flex items-start gap-4 mb-8">
                  {ActiveIcon && (
                    <div className="p-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg">
                      <ActiveIcon size={32} className="text-cyan-400" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {complianceResources[activeComplianceCategory]?.category}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {complianceResources[activeComplianceCategory]?.description}
                    </p>
                  </div>
                </div>

                {/* Resources Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {complianceResources[activeComplianceCategory]?.resources.map((resource, resourceIndex) => (
                    <motion.a
                      key={resourceIndex}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="group"
                    >
                      <div className="bg-slate-700/50 hover:bg-slate-600/50 p-6 rounded-xl transition-all duration-300 border border-slate-600/50 hover:border-cyan-400/50 h-full flex flex-col justify-between">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {resource.name}
                          </h4>
                          <p className="text-gray-400 text-sm mb-4">
                            {resource.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 group-hover:translate-x-1 transition-transform">
                          <span className="font-semibold text-sm">Visit Resource</span>
                          <ExternalLink size={16} />
                        </div>
                      </div>
                    </motion.a>
                  )) || null}
                </motion.div>
              </div>
            </motion.div>

            {/* All Resources Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-purple-400">Quick Access to All Categories</h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {complianceResources.map((section, sectionIndex) => {
                  const SectionIcon = section.icon ?? null;
                  return (
                    <motion.button
                      key={sectionIndex}
                      onClick={() => setActiveComplianceCategory(sectionIndex)}
                      variants={itemVariants}
                      className="group text-left"
                    >
                      <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-purple-500/20">
                        <div className="flex items-start gap-4 mb-4">
                          {SectionIcon && (
                            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition-all">
                              <SectionIcon size={24} className="text-cyan-400" />
                            </div>
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {section.category}
                        </h4>
                        <p className="text-gray-400 text-sm mb-4">
                          {section.resources.length} resources
                        </p>
                        <div className="flex items-center gap-2 text-purple-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
                          <span className="font-semibold text-sm">Explore</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Need Expert Guidance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our compliance experts can help you navigate these resources and implement best practices tailored to your organization.
          </p>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Get in Touch <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Compliance AI</h3>
              <p className="text-gray-400">Expert GRC consulting services for organizations across MENA and beyond.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="/#services" className="hover:text-purple-400 transition-colors">Services</a></li>
                <li><a href="/#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.youtube.com/@ComplianceAI" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">YouTube</a></li>
                <li><a href="https://www.linkedin.com/in/mohamed-emam-ica-crco-168b03124?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BeKxU52EiSxKpVXfKSa%2Fx0A%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Compliance AI. All rights reserved. | Designed with precision for excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
