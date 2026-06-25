import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Pricing({ onOpenQuote }) {
  const packages = [
    {
      id: 'basic',
      name: 'Basic Package',
      price: '₹1,800',
      unit: '/ Sqft',
      isPopular: false,
      sections: {
        design: [
          '2D Floor Plan layout drawings',
          'Basic Structural design checks',
          'Standard 3D front elevation render'
        ],
        structure: [
          'Steel: Standard Fe-500 Grade (JSW/TMT)',
          'Cement: Coromandel/Dalmia Brand',
          'Bricks: Quality Red clay bricks',
          'Concrete: M20 Grade mix'
        ],
        finishing: [
          'Flooring: Ceramic/Vitrified Tiles (₹50/Sqft limit)',
          'Doors: Solid flush wooden doors',
          'Bathroom: Parryware/Hindware fittings',
          'Paint: Asian Paints Tractor Emulsion'
        ]
      }
    },
    {
      id: 'standard',
      name: 'Standard Package',
      price: '₹2,200',
      unit: '/ Sqft',
      isPopular: false,
      sections: {
        design: [
          'Detailed 2D plans & working drawings',
          'Certified Structural layout check',
          'Premium 3D front elevation design',
          'Electrical & Plumbing layouts'
        ],
        structure: [
          'Steel: High-grade Fe-550 TMT Steel',
          'Cement: Dalmia/Ultratech Premium',
          'Bricks: Solid concrete block masonry',
          'Concrete: Certified M25 design mix'
        ],
        finishing: [
          'Flooring: Vitrified Tiles (₹70/Sqft limit)',
          'Doors: Premium Teakwood main door frame',
          'Bathroom: Jaguar/Parryware fittings',
          'Paint: Asian Paints Apcolite Premium'
        ]
      }
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: '₹2,600',
      unit: '/ Sqft',
      isPopular: true,
      sections: {
        design: [
          'Bespoke architectural layout planning',
          'Premium structural analysis & soil test review',
          'Realistic 3D walkthrough rendering',
          'Detailed electrical, plumbing & HVAC layouts'
        ],
        structure: [
          'Steel: Primary brands Fe-550D TMT',
          'Cement: Ultratech / Ramco Premium',
          'Bricks: High-quality Fly ash/Concrete blocks',
          'Concrete: M25 concrete with waterproofing ad-mix'
        ],
        finishing: [
          'Flooring: Luxury Vitrified/Italian Marble (₹100/Sqft)',
          'Doors: Teakwood main door and high-end flush interior doors',
          'Bathroom: Kohler/Jaguar luxury series',
          'Paint: Asian Paints Royal Luxury Emulsion'
        ]
      }
    },
    {
      id: 'ultra',
      name: 'Ultra Luxury Package',
      price: '₹3,200',
      unit: '/ Sqft',
      isPopular: false,
      sections: {
        design: [
          'Bespoke architectural & interior blueprints',
          'Full structural design + MEP structural layouts',
          'Ultra-realistic VR 3D Walkthrough and design views',
          'Full landscape design and solar layout consulting'
        ],
        structure: [
          'Steel: Vizag/JSW Primary Fe-550D TMT',
          'Cement: Lafarge/Ultratech Super Premium',
          'Bricks: Reinforced concrete blocks/red bricks',
          'Concrete: M30 Grade mix with premium crystalline sealer'
        ],
        finishing: [
          'Flooring: High-end Italian Marble / Hardwood (₹180/Sqft)',
          'Doors: Engineered Teakwood main frame & luxury veneer flush doors',
          'Bathroom: Kohler / Grohe designer fittings',
          'Paint: Asian Paints Royale Aspira / Waterproof coatings'
        ]
      }
    }
  ];

  // State to track which accordion tab is active in each package
  // Schema: { packageId: 'design' | 'structure' | 'finishing' | null }
  const [activeTabs, setActiveTabs] = useState({
    basic: null,
    standard: null,
    premium: null,
    ultra: null
  });

  const toggleTab = (packageId, tabName) => {
    setActiveTabs((prev) => ({
      ...prev,
      [packageId]: prev[packageId] === tabName ? null : tabName
    }));
  };

  return (
    <section id="pricing" className="section section-neutral">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Transparency First</span>
          <h2 className="section-title">Construction Pricing Packages</h2>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`pricing-card ${pkg.isPopular ? 'premium' : ''}`}
            >
              {pkg.isPopular && <div className="pricing-badge">Most Popular</div>}
              
              <div className="pricing-card-header">
                <h3 className="pricing-name">{pkg.name}</h3>
                <div className="pricing-price">
                  {pkg.price}<span>{pkg.unit}</span>
                </div>
              </div>

              <div className="pricing-accordions">
                {/* Design Accordion */}
                <div className="pricing-accordion-item">
                  <button 
                    className="pricing-accordion-header"
                    onClick={() => toggleTab(pkg.id, 'design')}
                  >
                    <span>Design & Drawings</span>
                    {activeTabs[pkg.id] === 'design' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {activeTabs[pkg.id] === 'design' && (
                    <div className="pricing-accordion-body">
                      <ul>
                        {pkg.sections.design.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Structure Accordion */}
                <div className="pricing-accordion-item">
                  <button 
                    className="pricing-accordion-header"
                    onClick={() => toggleTab(pkg.id, 'structure')}
                  >
                    <span>Structure & Masonry</span>
                    {activeTabs[pkg.id] === 'structure' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {activeTabs[pkg.id] === 'structure' && (
                    <div className="pricing-accordion-body">
                      <ul>
                        {pkg.sections.structure.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Finishing Accordion */}
                <div className="pricing-accordion-item">
                  <button 
                    className="pricing-accordion-header"
                    onClick={() => toggleTab(pkg.id, 'finishing')}
                  >
                    <span>Finishing & Plumbing</span>
                    {activeTabs[pkg.id] === 'finishing' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {activeTabs[pkg.id] === 'finishing' && (
                    <div className="pricing-accordion-body">
                      <ul>
                        {pkg.sections.finishing.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <button 
                className={`btn ${pkg.isPopular ? 'btn-primary' : 'btn-secondary'}`} 
                style={{ width: '100%', marginTop: 'auto' }}
                onClick={onOpenQuote}
              >
                Inquire Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
