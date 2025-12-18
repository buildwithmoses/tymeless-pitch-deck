
import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Target, 
  Trophy, 
  PieChart, 
  Briefcase, 
  Users2, 
  ChevronDown, 
  ChevronUp,
  BrainCircuit,
  Heart,
  Quote,
  TrendingUp,
  ShieldCheck,
  Globe,
  DollarSign
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart as RePieChart,
  Pie
} from 'recharts';

// --- Types ---
interface SlideProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

// --- Components ---

const Slide: React.FC<SlideProps> = ({ children, id, className = "" }) => (
  <section id={id} className={`slide-section relative overflow-hidden ${className}`}>
    <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
      {children}
    </div>
  </section>
);

const Logo = () => (
  <div className="flex items-center gap-2 mb-8">
    <div className="w-8 h-8 rounded-full border-2 border-[#e57d60] flex items-center justify-center">
      <div className="w-4 h-2 border-l-2 border-b-2 border-[#e57d60] -rotate-45 mb-1"></div>
    </div>
    <span className="text-2xl font-serif font-semibold tracking-tight">Tymeless</span>
  </div>
);

const AirbnbCard: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
    {icon && <div className="mb-4 text-[#e57d60]">{icon}</div>}
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </div>
);

const MarketStat: React.FC<{ value: string; label: string; subtext: string }> = ({ value, label, subtext }) => (
  <div className="text-center p-6 bg-gray-50 rounded-xl">
    <div className="text-4xl font-bold text-[#e57d60] mb-2">{value}</div>
    <div className="text-lg font-bold mb-1">{label}</div>
    <div className="text-sm text-gray-500">{subtext}</div>
  </div>
);

const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const index = Math.round(containerRef.current.scrollTop / window.innerHeight);
        setActiveSlide(index);
      }
    };
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const marketSizeData = [
    { name: 'TAM (2034)', value: 117, label: '$117B' },
    { name: 'SAM (2034)', value: 78, label: '$78B' },
    { name: 'SOM (2030)', value: 2, label: '$2B' }
  ];

  const COLORS = ['#e57d60', '#f19d86', '#ffd2c5'];

  const scrollToSlide = (index: number) => {
    containerRef.current?.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Navigation UI */}
      <div className="fixed top-8 right-12 z-50 flex flex-col items-center gap-4">
        <button 
          onClick={() => scrollToSlide(activeSlide - 1)}
          disabled={activeSlide === 0}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-0 transition-all"
        >
          <ChevronUp size={24} />
        </button>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 13 }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${activeSlide === i ? 'bg-[#e57d60] scale-125' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button 
          onClick={() => scrollToSlide(activeSlide + 1)}
          disabled={activeSlide === 12}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-0 transition-all"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      <div className="fixed top-8 left-8 z-50">
        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
           <Logo />
        </div>
      </div>

      <div ref={containerRef} className="slide-container h-screen overflow-y-auto overflow-x-hidden">
        
        {/* Slide 1: Welcome */}
        <Slide id="welcome">
          <div className="text-center animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-[#e57d60] text-[#e57d60] text-sm font-medium tracking-wide uppercase">
              The Archive of Love — preserve the voices that matter →
            </div>
            <h1 className="text-7xl md:text-8xl font-serif font-bold mb-6 leading-tight">
              Turn your family<br />
              stories <span className="italic tymeless-accent">into</span> legacy
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto font-light">
              Interactive AI avatars that preserve family history, wisdom, and voices for generations.
            </p>
            <div className="flex justify-center gap-6">
              <button onClick={() => scrollToSlide(1)} className="px-8 py-4 bg-[#e57d60] text-white rounded-lg text-lg font-semibold hover:bg-[#d46c50] transition-all shadow-lg shadow-[#e57d60]/20">
                Start Preserving
              </button>
              <button className="px-8 py-4 bg-white border border-gray-200 text-gray-800 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all">
                How it Works
              </button>
            </div>
          </div>
        </Slide>

        {/* Slide 2: Problem */}
        <Slide id="problem">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">The Problem</h2>
            <div className="h-1 w-20 tymeless-bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AirbnbCard title="Irreplaceable Loss" icon={<TrendingUp size={48} />}>
              Every day, 10,000+ Americans over 65 pass away—taking stories and wisdom with them.
            </AirbnbCard>
            <AirbnbCard title="Static Solutions" icon={<Globe size={48} />}>
              Photos and videos capture moments, not conversations. You can see them, but never know them.
            </AirbnbCard>
            <AirbnbCard title="The Gap" icon={<Users2 size={48} />}>
              No easy way exists to preserve interactive legacy for grandchildren decades from now.
            </AirbnbCard>
          </div>
          <div className="bg-gray-900 text-white p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Quote size={120} />
            </div>
            <p className="text-3xl font-serif italic mb-6 leading-relaxed relative z-10">
              "When someone dies, we lose more than a person. We lose answers to questions we never thought to ask. We lose stories that will never be told again."
            </p>
            <div className="h-1 w-24 bg-[#e57d60]"></div>
          </div>
        </Slide>

        {/* Slide 3: Solution */}
        <Slide id="solution">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">The Solution</h2>
            <div className="h-1 w-20 tymeless-bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-20 h-20 tymeless-bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">CAPTURE</h3>
              <p className="text-gray-600">Record stories through guided interviews, upload photos, videos & docs.</p>
            </div>
            <div>
              <div className="w-20 h-20 tymeless-bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <BrainCircuit size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">CREATE</h3>
              <p className="text-gray-600">AI builds an interactive avatar that responds and shares memories authentically.</p>
            </div>
            <div>
              <div className="w-20 h-20 tymeless-bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Heart size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">CONNECT</h3>
              <p className="text-gray-600">Family can ask questions & hear answers in their loved one's actual voice.</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-2xl font-serif text-gray-700 max-w-3xl mx-auto">
              Tymeless creates a <span className="font-bold">two-way conversation</span> that continues across generations.
            </p>
          </div>
        </Slide>

        {/* Slide 4: Market Validation */}
        <Slide id="validation">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">Market Validation</h2>
            <div className="h-1 w-20 tymeless-bg-accent"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <MarketStat value="$6.6B" label="Genealogy Market" subtext="Spending on heritage" />
            <MarketStat value="62M" label="Americans 65+" subtext="Growing demographic" />
            <MarketStat value="$23B" label="Digital Legacy" subtext="13% CAGR growth" />
            <MarketStat value="80M" label="MyHeritage Users" subtext="Existing engaged audience" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#e57d60]"><Trophy size={24} /></div>
                <p className="text-lg text-gray-700">Ancestry.com generates <strong>$1B+</strong> annual revenue.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#e57d60]"><Trophy size={24} /></div>
                <p className="text-lg text-gray-700"><strong>26M+ consumers</strong> have added DNA to ancestry databases.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#e57d60]"><Trophy size={24} /></div>
                <p className="text-lg text-gray-700">Enthusiasts spend <strong>$1k-$18k/year</strong> on research.</p>
              </div>
            </div>
            <div className="h-64 bg-gray-50 rounded-2xl p-8 flex flex-col justify-center">
               <h4 className="text-xl font-bold mb-4">Competitor Proving Ground</h4>
               <p className="text-gray-600 italic">"StoryFile raised $7.45M; competitors are proving that a massive market for digital preservation exists today."</p>
            </div>
          </div>
        </Slide>

        {/* Slide 5: Market Size */}
        <Slide id="market-size">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">Market Size</h2>
            <div className="h-1 w-20 tymeless-bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketSizeData} layout="vertical" margin={{ left: 40, right: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#1a1a1a" fontSize={14} fontWeight={600} />
                  <Tooltip 
                    cursor={{ fill: '#f9f9f9' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-4 border rounded-lg shadow-xl">
                            <p className="font-bold text-[#e57d60] text-xl">{payload[0].payload.label}</p>
                            <p className="text-sm text-gray-500">{payload[0].payload.name}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                    {marketSizeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold mb-2">TAM: $117B by 2034</h4>
                <p className="text-gray-600">Digital Human & AI Avatar Market growing at 31.9% CAGR.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">SAM: $78B by 2034</h4>
                <p className="text-gray-600">Digital Legacy Market growing at 13% CAGR.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">SOM: $2B by 2030</h4>
                <p className="text-gray-600 italic">Tymeless target share of the legacy preservation market.</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 6: Product */}
        <Slide id="product">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">The Product</h2>
            <div className="h-1 w-20 tymeless-bg-accent"></div>
          </div>
          <div className="bg-gray-50 p-12 rounded-3xl mb-12 flex flex-col items-center">
            <div className="flex flex-col md:flex-row items-center gap-8 w-full justify-between">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-xl mb-4">1</div>
                <div className="font-bold text-center">Record & Upload</div>
              </div>
              <div className="h-px bg-gray-300 flex-grow hidden md:block"></div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-xl mb-4">2</div>
                <div className="font-bold text-center">AI Creates Avatar</div>
              </div>
              <div className="h-px bg-gray-300 flex-grow hidden md:block"></div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-xl mb-4">3</div>
                <div className="font-bold text-center">Connect Forever</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#e57d60]" /> Ethical AI Approach
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-2"><span>•</span> <span><strong>RAG Architecture:</strong> Knowledge retrieved from actual memories.</span></li>
                <li className="flex gap-2"><span>•</span> <span><strong>No Hallucinations:</strong> Only responds with captured content.</span></li>
                <li className="flex gap-2"><span>•</span> <span><strong>Voice Synthesis:</strong> Trained on the user's authentic recordings.</span></li>
              </ul>
            </div>
            <div className="bg-white border p-8 rounded-2xl border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Technical Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['Multi-modal', 'n8n', 'Tavus', 'Voice Synthesis', 'RAG', 'Knowledge Base'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 7: Business Model */}
        <Slide id="business-model">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">Business Model</h2>
            <div className="h-1 w-20 tymeless-bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="border border-gray-100 p-8 rounded-3xl bg-white shadow-sm flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-4">$9.99<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <p className="text-gray-600 mb-6 text-sm">1 avatar, basic features, 5GB storage</p>
            </div>
            <div className="border-2 border-[#e57d60] p-8 rounded-3xl bg-white shadow-xl flex flex-col items-center text-center scale-105 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e57d60] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Recommended</div>
              <h3 className="text-xl font-bold mb-2">Family</h3>
              <div className="text-4xl font-bold mb-4">$24.99<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <p className="text-gray-600 mb-6 text-sm">Up to 5 avatars, family sharing, 50GB storage</p>
            </div>
            <div className="border border-gray-100 p-8 rounded-3xl bg-white shadow-sm flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-2">Legacy</h3>
              <div className="text-4xl font-bold mb-4">$499</div>
              <p className="text-gray-600 mb-6 text-sm">Perpetual access, unlimited storage, priority support</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-10 rounded-3xl">
             <div className="flex items-center gap-6">
                <div className="text-5xl font-bold text-[#e57d60]">1M</div>
                <div className="text-lg font-bold text-gray-700 leading-tight">Users by 2027<br /><span className="text-sm font-normal text-gray-500">Target Scale</span></div>
             </div>
             <div className="flex items-center gap-6">
                <div className="text-5xl font-bold text-[#e57d60]">$200M</div>
                <div className="text-lg font-bold text-gray-700 leading-tight">Target ARR<br /><span className="text-sm font-normal text-gray-500">by Year 3</span></div>
             </div>
          </div>
        </Slide>

        {/* Slide 8: GTM */}
        <Slide id="gtm">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">Go-to-Market Strategy</h2>
            <div className="h-1 w-20 tymeless-bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AirbnbCard title="Hospice & Care" icon={<Heart size={32} />}>
              End-of-life legacy service partnerships. 4k+ US providers.
            </AirbnbCard>
            <AirbnbCard title="Genealogy Integrations" icon={<Target size={32} />}>
              Ancestry, MyHeritage, FamilySearch. Direct access to 80M+ users.
            </AirbnbCard>
            <AirbnbCard title="Religious Orgs" icon={<Globe size={32} />}>
              Churches & Synagogues. Heritage is central to their mission.
            </AirbnbCard>
            <AirbnbCard title="Direct (DTC)" icon={<Users size={32} />}>
              Targeting adult children of aging parents via social storytelling.
            </AirbnbCard>
          </div>
          <div className="mt-12 bg-gray-900 text-white p-10 rounded-3xl">
            <h3 className="text-xl font-bold mb-6">Launch Plan</h3>
            <div className="flex flex-col md:flex-row gap-8 justify-between">
              <div className="flex-1">
                <div className="text-[#e57d60] font-bold mb-1">01 BETA</div>
                <p className="text-sm text-gray-400">Launch with 5 pilot hospice partners to prove value and intent.</p>
              </div>
              <div className="flex-1">
                <div className="text-[#e57d60] font-bold mb-1">02 VIRAL</div>
                <p className="text-sm text-gray-400">Family sharing mechanics that invite siblings and cousins.</p>
              </div>
              <div className="flex-1">
                <div className="text-[#e57d60] font-bold mb-1">03 CONTENT</div>
                <p className="text-sm text-gray-400">"10 Questions for Grandma" viral social campaigns.</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* Slide 9: Competition */}
        <Slide id="competition">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">Competition</h2>
            <div className="h-1 w-20 tymeless-bg-accent"></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-4 text-sm font-bold uppercase tracking-widest text-gray-400">Competitor</th>
                  <th className="py-4 text-sm font-bold uppercase tracking-widest text-gray-400">Product</th>
                  <th className="py-4 text-sm font-bold uppercase tracking-widest text-gray-400">Limitation</th>
                  <th className="py-4 text-sm font-bold uppercase tracking-widest text-gray-400">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr>
                  <td className="py-6 font-bold">StoryFile</td>
                  <td className="py-6">Video Retrieval</td>
                  <td className="py-6 text-gray-500">Not truly interactive</td>
                  <td className="py-6">Enterprise</td>
                </tr>
                <tr>
                  <td className="py-6 font-bold">HereAfter AI</td>
                  <td className="py-6">Audio App</td>
                  <td className="py-6 text-gray-500">No visual component</td>
                  <td className="py-6">$22/mo</td>
                </tr>
                <tr>
                  <td className="py-6 font-bold">Eternos</td>
                  <td className="py-6">Full Avatar</td>
                  <td className="py-6 text-gray-500">Prohibitively expensive</td>
                  <td className="py-6">$5,000+</td>
                </tr>
                <tr className="bg-[#e57d60]/5">
                  <td className="py-6 font-bold tymeless-accent">TYMELESS</td>
                  <td className="py-6 font-bold">Interactive Avatar</td>
                  <td className="py-6 font-bold text-green-600">Democratized access</td>
                  <td className="py-6 font-bold">$9 - $24/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Slide>

        {/* Slide 10: Advantages */}
        <Slide id="advantages">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">Competitive Advantages</h2>
            <div className="h-1 w-20 tymeless-bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 tymeless-bg-accent text-white rounded-lg flex items-center justify-center shrink-0">1</div>
               <div>
                  <h4 className="font-bold text-xl mb-2">Accessible Pricing</h4>
                  <p className="text-gray-600">Full AI avatar experience at subscription prices, democratizing legacy preservation.</p>
               </div>
            </div>
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 tymeless-bg-accent text-white rounded-lg flex items-center justify-center shrink-0">2</div>
               <div>
                  <h4 className="font-bold text-xl mb-2">Guided Capture System</h4>
                  <p className="text-gray-600">AI-powered interviews draw out meaningful memories automatically.</p>
               </div>
            </div>
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 tymeless-bg-accent text-white rounded-lg flex items-center justify-center shrink-0">3</div>
               <div>
                  <h4 className="font-bold text-xl mb-2">Multi-Modal Integration</h4>
                  <p className="text-gray-600">RICHER avatars using video, audio, photos, and docs in one knowledge base.</p>
               </div>
            </div>
            <div className="flex gap-6 items-start">
               <div className="w-12 h-12 tymeless-bg-accent text-white rounded-lg flex items-center justify-center shrink-0">4</div>
               <div>
                  <h4 className="font-bold text-xl mb-2">Perpetual Legacy</h4>
                  <p className="text-gray-600">One-time payment options ensure avatars persist for generations, not just for a subscription.</p>
               </div>
            </div>
          </div>
        </Slide>

        {/* Slide 11: Team */}
        <Slide id="team">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">The Team</h2>
            <div className="h-1 w-20 tymeless-bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="flex flex-col items-center text-center">
              <img src="https://picsum.photos/seed/henry/300/300" className="w-48 h-48 rounded-3xl object-cover mb-6 border-4 border-white shadow-xl" alt="Henry" />
              <h3 className="text-3xl font-serif font-bold mb-1">Henry</h3>
              <p className="text-[#e57d60] font-bold uppercase tracking-widest text-sm mb-4">Co-Founder & CTO</p>
              <p className="text-gray-600 max-w-sm">AI Architect with expertise in production n8n & multi-agent architectures.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="https://picsum.photos/seed/joseph/300/300" className="w-48 h-48 rounded-3xl object-cover mb-6 border-4 border-white shadow-xl" alt="Joseph" />
              <h3 className="text-3xl font-serif font-bold mb-1">Joseph</h3>
              <p className="text-[#e57d60] font-bold uppercase tracking-widest text-sm mb-4">Co-Founder & CEO</p>
              <p className="text-gray-600 max-w-sm">Business development and strategic partnerships expert with customer-focused vision.</p>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl text-center">
            <p className="text-xl font-serif italic text-gray-700">"This isn't just business. It's personal. We are building the solution we wish we had for our own parents."</p>
          </div>
        </Slide>

        {/* Slide 12: The Ask */}
        <Slide id="ask">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">The Ask</h2>
            <div className="h-1 w-20 tymeless-bg-accent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-7xl font-bold text-[#e57d60] mb-6">$500K</div>
              <h3 className="text-3xl font-bold mb-8">Seed Round</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium">Product & Engineering</span>
                  <span className="font-bold text-gray-500">40%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full"><div className="bg-[#e57d60] h-full rounded-full" style={{ width: '40%' }}></div></div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium">Go-to-Market</span>
                  <span className="font-bold text-gray-500">30%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full"><div className="bg-[#e57d60] h-full rounded-full" style={{ width: '30%' }}></div></div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium">AI Infrastructure</span>
                  <span className="font-bold text-gray-500">20%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full"><div className="bg-[#e57d60] h-full rounded-full" style={{ width: '20%' }}></div></div>
              </div>
            </div>
            <div className="bg-gray-900 text-white p-12 rounded-3xl h-full flex flex-col justify-center">
               <h3 className="text-2xl font-bold mb-8">Milestones to Achieve</h3>
               <ul className="space-y-6 text-gray-300">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-[#e57d60] shrink-0 mt-1"></div>
                    <span>Launch MVP with full voice cloning.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-[#e57d60] shrink-0 mt-1"></div>
                    <span>Acquire first 10,000 users.</span>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-[#e57d60] shrink-0 mt-1"></div>
                    <span>Establish 3 Hospice partnerships.</span>
                  </li>
               </ul>
            </div>
          </div>
        </Slide>

        {/* Slide 13: End */}
        <Slide id="final">
          <div className="text-center">
            <Logo />
            <h2 className="text-6xl font-serif font-bold mb-8 leading-tight">
              History never <span className="italic tymeless-accent">dies</span>.
            </h2>
            <p className="text-2xl text-gray-500 mb-12 font-light">
              Join us in keeping the library of family stories open—forever.
            </p>
            <div className="flex flex-col items-center gap-2 text-gray-400">
               <div className="font-bold uppercase tracking-widest text-sm">Contact Us</div>
               <div className="text-lg">founders@tymeless.ai</div>
            </div>
            <div className="mt-24 h-1 w-32 bg-gray-100 mx-auto"></div>
          </div>
        </Slide>

      </div>
    </div>
  );
};

export default App;
