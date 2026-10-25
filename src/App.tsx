import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'

const A = '/assets/'
const products = [
  { title: 'Industrial Feedstocks', text: 'Primary biological inputs produced at scale. Fresh and processed vegetables, cassava-based bulk inputs for industrial use.', tags: ['Food Manufacturing', 'Processing'] },
  { title: 'Biochemical Inputs', text: 'Biologically derived chemical and functional materials. Starches, flours, organic acids, and fermentation-based intermediates.', tags: ['Pharmaceutical', 'Food', 'Industrial'] },
  { title: 'Bio-Extracts & Actives', text: 'High-value compounds extracted from biological systems. Snail secretion filtrate, collagen, oils, enzymes, and specialty actives.', tags: ['Food Manufacturing', 'Processing'] },
  { title: 'Protein & Biomass Systems', text: 'Controlled animal and aquatic production systems. Fish biomass and animal-derived industrial inputs.', tags: ['Pharmaceutical', 'Food', 'Industrial'] },
]
const standards = [
  { title: 'Controlled Environment Systems', icon: '◉', text: 'We supply and guarantee consistency through rigorous monitoring of temperature, humidity, irrigation, and nutrient profiles — maintained across every growth cycle. By eliminating the environmental volatility that plagues traditional open-field sourcing, every vegetable input we produce meets the exact specifications for industrial partners.' },
  { title: 'Traceable Production', icon: '⌁', text: 'Every batch is tracked from cultivation through processing, with clear production records and quality checks at each stage.' },
  { title: 'Consistent Quality', icon: '✳', text: 'Standardized processes help our partners plan with confidence and maintain dependable product quality at scale.' },
]
const buyerBenefits = [
  ['Consistent Supply', 'Controlled production systems ensure year-round availability and predictable output volumes.'],
  ['Quality Assurance', 'Batch testing, certification documentation, and compliance with international standards.'],
  ['Standardised Products', 'Defined specifications, grading systems, and quality parameters for manufacturing requirements.'],
  ['Direct Sourcing', 'Eliminate intermediaries with direct procurement from production facilities.'],
  ['Traceability', 'Complete documentation from production to delivery with batch tracking systems.'],
  ['Flexible Packaging', 'Industrial formats, custom packaging options, and delivery schedules.'],
]
const investmentFocus = [
  { title: 'Controlled Production Systems', body: 'Expanding greenhouse, aquaculture, and animal production facilities with environmental controls and quality monitoring.', bullets: ['Climate-controlled growing systems', 'Recirculating aquaculture', 'Animal production protocols', 'Processing infrastructure'], icon: 'icon-target.svg' },
  { title: 'Market Development', body: 'Building offtake relationships with industrial buyers and establishing export channels for high-value products.', bullets: ['Direct industrial procurement', 'Long-term supply agreements', 'Export market development', 'Quality certification systems'], icon: 'icon-growth.svg' },
  { title: 'Supply Chain Integration', body: 'Integrating out-grower networks and logistics capabilities to ensure consistent raw material availability.', bullets: ['Out-grower farmer programs', 'Input supply systems', 'Collection and aggregation', 'Cold chain logistics'], icon: 'icon-document.svg' },
  { title: 'Technology & Innovation', body: 'Implementing data systems, automation, and processing technologies to improve efficiency and product quality.', bullets: ['IoT monitoring systems', 'Quality control automation', 'Extraction technologies', 'Traceability platforms'], icon: 'icon-growth.svg' },
]

function Mark() {
  return <a className="brand" href="/" aria-label="Agroloop home"><img src={`${A}agroloop-white.png`} alt="Agroloop" /></a>
}
function ArrowLink({ children, href = '/#products', light = false }: { children: ReactNode; href?: string; light?: boolean }) {
  return <a className={`arrow-link${light ? ' arrow-link-light' : ''}`} href={href}>{children}<span aria-hidden="true">↗</span></a>
}
function Header({ active }: { active: 'home' | 'buyers' | 'investors' }) {
  return <header className="site-header"><Mark /><nav aria-label="Main navigation"><a className={active === 'home' ? 'active' : ''} href="/">Home</a><a className={active === 'buyers' ? 'active' : ''} href="/buyers">Buyers</a><a className={active === 'investors' ? 'active' : ''} href="/investors">Investors</a><a href="/#products">Products</a><a href="/#about">About</a></nav><a className="contact-link" href="mailto:info@agroloopfarms.com">Contact <span>↗</span></a></header>
}
function Hero({ page, title, description, image, action, actionHref }: { page: 'home' | 'buyers' | 'investors'; title: ReactNode; description: string; image: string; action: string; actionHref: string }) {
  return <section className={`hero hero-${page}`} style={{ backgroundImage: `linear-gradient(90deg,rgba(4,24,8,.42),rgba(3,24,7,.1) 56%,rgba(3,24,7,.22)),linear-gradient(180deg,rgba(4,20,6,.16),transparent 30%,rgba(4,20,6,.27)),url('${A}${image}')` }}><Header active={page} /><div className="hero-copy"><h1>{title}</h1><div className="hero-aside"><p>{description}</p><ArrowLink href={actionHref}>{action}</ArrowLink></div></div></section>
}
function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) { return <span className={`eyebrow${dark ? ' eyebrow-dark' : ''}`}><span className="eyebrow-dot" aria-hidden="true" />{children}</span> }
function Intro({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) { return <section className="intro section-wrap"><div className="intro-heading"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2></div><p className="intro-copy">{text}</p></section> }
function Products() {
  return <section className="products-panel section-wrap" id="products"><div className="panel-watermark" aria-hidden="true" /><div className="panel-top"><div><Eyebrow dark>What We Supply</Eyebrow><h2>Standardizing Africa’s<br />Vegetable wealth</h2></div><div className="panel-description"><p>We supply and provide the world with reliable, standardized vegetable-based biological inputs. By integrating controlled agricultural systems with advanced processing across Africa, we deliver the high-performance raw materials that power global industry.</p><ArrowLink light>Learn More</ArrowLink></div></div><div className="product-layout"><img className="field-image" src={`${A}tractor-field.webp`} alt="Cultivated fields prepared for production" loading="lazy" /><div className="category-grid">{products.map(product => <article className="category-card" key={product.title}><h3>{product.title}</h3><p>{product.text}</p><div className="tags">{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>
}
function HomePage() {
  const [active, setActive] = useState(0)
  const standard = standards[active]
  return <><Hero page="home" title={<>Building Africa’s Most<br className="desktop-break" /> Reliable Source Of<br className="desktop-break" /> Industrial Vegetable Inputs</>} description="Agroloop Designs, Operates, And Scales Controlled Vegetable Production Systems That Supply Food Manufacturers, Processors, And Industrial Buyers With Consistent, Standardized Raw Materials — Grown And Processed At Scale Across Africa." image="home-hero.webp" action="Explore Our Products" actionHref="/#products" /><section className="intro section-wrap home-intro" id="about"><div className="intro-heading"><Eyebrow>Standardizing African Agriculture</Eyebrow><h2>Precision-Grown Vegetables.<br />Industrial-Grade Quality.<br />Delivered at Scale.</h2></div><p className="intro-copy">We are building Africa’s most dependable vegetable supply infrastructure — integrating controlled growing environments with advanced post-harvest processing to ensure every batch we deliver meets the exacting uniformity and quality standards that global food manufacturers and processors require. Where traditional sourcing is unpredictable, Agroloop is the reliable alternative.</p><div className="proof-grid"><img src={`${A}seedlings.webp`} alt="Young crops growing in fertile soil" loading="lazy" /><div className="stat-card"><strong>150+</strong><span>Partners Supported</span><p>We are on a mission to empower industries worldwide with a reliable stream of high-performance biological inputs they can trust.</p></div><img src={`${A}farmer-portrait.webp`} alt="A grower tending crops in a wheat field" loading="lazy" /><div className="stat-card green-stat"><strong>100%</strong><span>Standardized Bio-inputs</span><p>Every batch is processed through our controlled systems to ensure zero variance and maximum industrial compatibility.</p></div></div></section><Products /><section className="standards section-wrap"><div className="standards-heading"><div><Eyebrow>Our Standard</Eyebrow><h2>Industry Production<br />Standards</h2></div><p>Agroloop Operates Controlled Vegetable Production Systems With Standardized Growing Protocols, Quality Monitoring, And Predictable Output. Our Facilities Ensure Consistency, Traceability, And Full Compliance With International Food Safety And Industrial Requirements.</p></div><div className="standard-content"><div className="greenhouse-art"><img className="greenhouse-back greenhouse-back-field" src={`${A}tractor-field.webp`} alt="Rows of crops across an open production field" loading="lazy" /><img className="greenhouse-back greenhouse-back-worker" src={`${A}outgrowers.webp`} alt="Grower rows in an open field" loading="lazy" /><img className="greenhouse-main" src={`${A}greenhouse.webp`} alt="Rows of crops growing inside a controlled greenhouse" loading="lazy" /></div><article className="standard-detail"><span className="standard-icon">{standard.icon}</span><h3>{standard.title}</h3><p>{standard.text}</p><div className="standard-tabs" role="tablist" aria-label="Production standards">{standards.map((item, index) => <button key={item.title} className={index === active ? 'selected' : ''} role="tab" aria-selected={index === active} aria-label={item.title} title={item.title} onClick={() => setActive(index)} />)}</div></article></div></section><section className="audience-panel section-wrap" id="buyers"><div className="panel-watermark" aria-hidden="true" /><div className="audience-heading"><div><Eyebrow dark>Who We Serve</Eyebrow><h2>The Trusted Vegetable<br />Supply Partner for<br />Global Manufacturers</h2></div><div><p>We supply and provide the consistency that food manufacturers, processors, and industrial buyers demand — delivering standardized vegetable inputs across multiple sectors through our controlled African supply chain. Whether you are sourcing fresh produce or value-added intermediates, Agroloop eliminates the variability that makes traditional African sourcing unreliable.</p><ArrowLink light href="/buyers">Learn More</ArrowLink></div></div></section></>
}
function BuyerPage() {
  return <><Hero page="buyers" title={<>Building Africa’s<br />Industrial Backbone For<br />Biological Raw Materials</>} description="Agroloop Supplies Biological Raw Materials To Manufacturers Across Food, Pharmaceutical, Cosmetic, And Industrial Sectors. Our Procurement Process Is Designed For Efficiency And Reliability." image="buyers-hero.webp" action="Download Product Catalogue" actionHref="#quote" /><Intro eyebrow="Standardizing African Agriculture" title={<>Industrial-Grade<br />Biological Raw Materials,<br />Produced at Scale</>} text="We are on a mission to revolutionize the global supply chain by providing a dependable, scalable bridge to Africa’s vast biological potential. By integrating sophisticated, controlled agricultural environments with advanced localized processing systems, we ensure that every input we supply meets the highest international standards for quality and uniformity." /><section className="buyer-actions section-wrap">{[['icon-specifications.webp','Download Specifications','Technical data sheets, quality parameters, and testing protocols','Download Specs →'],['icon-biochemical.webp','Request Samples','Quality testing materials for evaluation and approval','Request Samples →'],['icon-investment.webp','Get Quote','Pricing for bulk orders and supply agreements','Request Quote →']].map(([icon,title,text,link])=><a className="action-card" href="#quote" key={title}><img src={`${A}${icon}`} alt="" /><h3>{title}</h3><p>{text}</p><span>{link}</span></a>)}</section><Products /><section className="quote-section section-wrap" id="quote"><h2>Request a Quote</h2><p>Submit your requirements and we will respond within 24 hours with pricing and availability.</p><QuoteForm /></section><Benefits title={<>Why Partner With<br />Agroloop</>} eyebrow="Why Us?" items={buyerBenefits} /></>
}
function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const values = new FormData(form)
    setStatus('submitting')
    setMessage('')
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL ?? '/api/v1'}/quote-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          company_name: values.get('company'),
          contact_name: values.get('contact'),
          email: values.get('email'),
          phone: values.get('phone') || null,
          sector: values.get('sector'),
          product: values.get('product'),
          volume: values.get('volume') || null,
          requirements: values.get('requirements') || null,
        }),
      })
      if (!response.ok) {
        if (response.status === 429) throw new Error('Too many requests. Please try again shortly.')
        if (response.status === 404 || response.status === 405) {
          throw new Error('The quote service is not connected yet. Please try again later.')
        }
        throw new Error('We could not submit your request. Please try again.')
      }
      if (!response.headers.get('content-type')?.includes('application/json')) {
        throw new Error('The quote service is not available yet. Please try again later.')
      }
      form.reset()
      setStatus('success')
      setMessage('Thank you. Your quote request has been received.')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Unable to reach the server. Please try again.')
    }
  }
  return <form className="quote-form" onSubmit={submit}><label>Company Name *<input name="company" required maxLength={160} /></label><label>Contact Name *<input name="contact" required maxLength={120} /></label><label>Email *<input type="email" name="email" required maxLength={254} /></label><label>Phone<input type="tel" name="phone" maxLength={40} /></label><label>Industry Sector *<select name="sector" required defaultValue=""><option value="" disabled>Select industry</option><option>Food manufacturing</option><option>Pharmaceutical</option><option>Cosmetics</option><option>Industrial processing</option></select></label><label>Product Interest *<select name="product" required defaultValue=""><option value="" disabled>Select product</option>{products.map(product=><option key={product.title}>{product.title}</option>)}</select></label><label className="full-field">Required Volume (monthly)<input name="volume" maxLength={160} placeholder="e.g. 5 tons, 1000 kg, 500 liters" /></label><label className="full-field">Additional Requirements<textarea name="requirements" maxLength={4000} placeholder="Specific quality requirements, delivery preferences, or other details" /></label><button className="submit-quote" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Submit Quote Request'}</button>{message && <p className="form-note" role="status">{message}</p>}</form>
}
function Benefits({ title, eyebrow, items }: { title: ReactNode; eyebrow: string; items: string[][] }) { return <section className="benefits-panel section-wrap"><div className="panel-watermark" aria-hidden="true" /><Eyebrow dark>{eyebrow}</Eyebrow><h2>{title}</h2><div className="benefit-grid">{items.map(([name,text])=><article key={name}><h3>{name}</h3><p>{text}</p></article>)}</div></section> }
function StrategyPanel() {
  return (
    <section className="strategic-focus-panel products-panel section-wrap">
      <div className="panel-watermark" aria-hidden="true" />
      <div className="panel-top">
        <div>
          <Eyebrow dark>Strategic Focus Areas</Eyebrow>
          <h2>Standardizing Africa’s<br />Biological Wealth</h2>
        </div>
        <div className="panel-description">
          <p>We supply and provide the world with reliable, standardized biological inputs. By integrating controlled agricultural systems with advanced processing across Africa, we deliver the high-performance raw materials that power global industry.</p>
          <ArrowLink light href="#investment-info">Learn More</ArrowLink>
        </div>
      </div>
      <div className="product-layout">
        <img className="field-image strategy-field-image" src={`${A}seedling-detail.webp`} alt="A farmer planting seedlings in cultivated soil" loading="lazy" />
        <div className="strategy-grid">
          {investmentFocus.map(item => (
            <article key={item.title}>
              <img className="strategy-icon" src={`${A}${item.icon}`} alt="" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
function InvestorPage() {
  return <><Hero page="investors" title={<>Building Africa’s<br />Industrial Backbone For<br />Biological Raw Materials</>} description="Agroloop Is Building Industrial Biological Production Infrastructure That Addresses Import Substitution, Creates Employment, And Demonstrates Africa’s Capability To Produce High-Value Materials For Global Markets." image="investors-hero.webp" action="Get Started" actionHref="#investment-info" /><Intro eyebrow="Investment Thesis" title={<>Industrial-Grade: Financing<br />the New Backbone of<br />Global Supply Chains.</>} text="African manufacturers across food, pharmaceutical, cosmetic, and industrial sectors rely heavily on imported biological raw materials. Agroloop is building the production infrastructure to supply these materials locally, reducing foreign exchange pressure and establishing scalable platforms for export." /><section className="investor-cards section-wrap">{[['icon-market.webp','Market Opportunity','Billions spent annually on imported starches, extracts, proteins, and bio-chemicals that can be produced locally with controlled systems.'],['icon-bioinputs.webp','Import Substitution','Addressing foreign exchange constraints by providing reliable local alternatives to imported industrial inputs.'],['icon-scalable-platform.svg','Scalable Platform','Proven production systems that can be replicated across crop types, geographies, and biological production categories.']].map(([icon,title,text])=><article className="action-card" key={title}><img src={`${A}${icon}`} alt="" /><h3>{title}</h3><p>{text}</p></article>)}</section><div className="investor-transition-mark section-wrap"><img src={`${A}investor-seedling.png`} alt="" /></div><StrategyPanel /><section className="metrics-section section-wrap"><h2>Key Metrics &amp; Milestones</h2><div className="metrics-grid">{[['4','Production Categories'],['10+','Industrial Offtakers'],['50+','Out-Grower Farmers'],['Year-round','Production Capability']].map(([value,label])=><article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div></section><section className="capital-section section-wrap"><div><h2>Use of Capital</h2><p>Capital will be deployed to scale proven production systems, expand processing capabilities, and develop market infrastructure.</p>{[['Production Infrastructure','40%'],['Processing & Equipment','25%'],['Supply Chain & Logistics','20%'],['Working Capital','15%']].map(([name,percent])=><div className="capital-row" key={name}><div><span>{name}</span><strong>{percent}</strong></div><i><b style={{width:percent}} /></i></div>)}</div><article className="highlights"><h3>Investment Highlights</h3><ul><li><b>Proven Production Model</b><span>Operating facilities with established offtake relationships</span></li><li><b>Clear Path to Scale</b><span>Replicable systems across crop types and geographies</span></li><li><b>Import Substitution Focus</b><span>Addressing significant market need with FX benefits</span></li><li><b>Experienced Team</b><span>Agriculture, processing, and industrial supply expertise</span></li><li><b>Social Impact</b><span>Employment creation and out-grower farmer integration</span></li></ul></article></section><section className="investment-info section-wrap" id="investment-info"><img src={`${A}icon-quote.svg`} alt="" /><h2>Investment Information Memorandum</h2><p>Download the complete investment deck including financial projections, market analysis, technical details, and terms.</p><ArrowLink href="mailto:info@agroloopfarms.com" light>Download Investor Pack</ArrowLink><small>Investment documents are provided under confidentiality and for qualified investors only.</small></section></>
}
function Footer() { return <footer className="site-footer"><div className="footer-top"><div className="footer-brand"><Mark /><p>Industrial biological production systems</p></div><div><h3>Products</h3><a href="/#products">Industrial Feedstocks</a><a href="/#products">Bio-Chemical Inputs</a><a href="/#products">Bio-Extracts &amp; Actives</a><a href="/#products">Protein &amp; Biomass Systems</a></div><div><h3>Partners</h3><a href="/buyers">Industrial Buyers</a><a href="/buyers#quote">Out-Growers</a><a href="/investors">Investors</a><a href="/#about">Production Systems</a></div><div><h3>Contact</h3><a href="mailto:info@agroloopfarms.com">✉ info@agroloopfarms.com</a></div></div><div className="copyright">© 2026 Agroloop. All rights reserved.</div></footer> }
export default function App() {
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/'
  const page = path === '/buyers' ? 'buyers' : path === '/investors' ? 'investors' : 'home'
  useEffect(() => {
    const pageMeta = {
      home: {
        title: 'Agroloop — Growing Africa’s vegetable wealth',
        description: 'Agroloop supplies reliable, standardized vegetable inputs for Africa’s food industry.',
      },
      buyers: {
        title: 'Industrial Buyers | Agroloop',
        description: 'Source consistent, standardized biological raw materials for food, pharmaceutical, cosmetic, and industrial production.',
      },
      investors: {
        title: 'Investors | Agroloop',
        description: 'Explore Agroloop’s investment thesis, strategic focus, and plans to scale biological production infrastructure in Africa.',
      },
    }[page]
    const canonical = `https://www.agroloopfarms.com${path === '/' ? '/' : path}`
    document.title = pageMeta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMeta.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageMeta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', pageMeta.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonical)
  }, [page, path])
  return <><main>{page === 'buyers' ? <BuyerPage /> : page === 'investors' ? <InvestorPage /> : <HomePage />}</main><Footer /></>
}











