import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* HERO */}
      <section className="w-full border-b border-black py-32 px-6 flex flex-col justify-center items-center text-center bg-gray-50">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
          Ovie Tony Orumah
        </h1>
        <p className="text-xl md:text-3xl font-medium max-w-4xl uppercase tracking-tight mb-12">
          Build a cost-effective Business Intelligence foundation that turns your data into insights that impact your bottom line.
        </p>
        <a href="https://calendly.com/ovieorumahtony/30min" target="_blank" rel="noreferrer" className="border-2 border-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
          See how I can help
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="w-full border-b border-black grid grid-cols-1 md:grid-cols-2">
        <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center bg-white">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4">About</h2>
          <p className="text-xl md:text-3xl font-medium leading-tight mb-6">
             Helping companies build the foundations they need to make better decisions with their data. Design and implement the data models, reporting systems, and product analytics workflows that turn raw business data into reliable, actionable intelligence. Integrate AI-enabled BI to deliver these advanced capabilities without the cost and complexity of building a large BI team from day one.
          </p>
          <p className="text-xl md:text-3xl font-medium leading-tight">
             The goal isn't to create dashboards and leave. It's to build an intelligent, scalable system your internal team can understand, maintain, and expand long-term.
          </p>
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center bg-black text-white">
           <p className="text-2xl md:text-4xl font-medium leading-tight">
             Ovie has spent his career focused on helping companies develop end-to-end data solutions that are simple and maintainable. An ongoing journey of ever-evolving experiences and efforts, continuously shaping the work he does.
           </p>
        </div>
      </section>

      {/* EXPERIENCE / TRUSTED BY */}
      <section id="experience" className="w-full border-b border-black">
        <div className="border-b border-black p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-center">Trusted By</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black bg-white">
          <div className="p-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all aspect-[3/2]">
            <a href="https://www.palmpay.com/" target="_blank" rel="noreferrer" className="block w-full h-full relative">
              <Image 
                src="https://i.ibb.co/4g94djfg/Palm-Pay-Logo-Purple.png" 
                alt="PalmPay" 
                fill
                className="object-contain p-4"
                unoptimized
              />
            </a>
          </div>
          <div className="p-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all aspect-[3/2]">
            <a href="https://getreliancehealth.com/" target="_blank" rel="noreferrer" className="block w-full h-full relative">
              <Image 
                src="https://i.ibb.co/CXGNWMx/reliance-healtj.png" 
                alt="Reliance Health" 
                fill
                className="object-contain p-4"
                unoptimized
              />
            </a>
          </div>
          <div className="p-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all aspect-[3/2]">
            <a href="https://stackivy.africa/" target="_blank" rel="noreferrer" className="block w-full h-full relative">
              <Image 
                src="https://i.ibb.co/DHV0T189/stackivy-removebg-preview.png" 
                alt="Stackivy" 
                fill
                className="object-contain p-4"
                unoptimized
              />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="w-full border-b border-black">
         <div className="border-b border-black p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-center">Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black bg-white">
          
          <div className="p-12 group hover:bg-red-500 hover:text-white transition-colors">
            <h3 className="text-2xl font-bold uppercase mb-4 group-hover:underline">Cost-Effective Infrastructure</h3>
            <p className="text-lg font-medium leading-snug">
              Use open-source BI tools like Metabase to avoid expensive per-seat licensing. Build a capable stack that supports everything from core reporting to product analytics and AI-enabled insights, without the bloated costs of traditional enterprise platforms.
            </p>
          </div>

          <div className="p-12 group hover:bg-blue-600 hover:text-white transition-colors">
            <h3 className="text-2xl font-bold uppercase mb-4 group-hover:underline">Senior Expertise at Setup</h3>
            <p className="text-lg font-medium leading-snug">
              Bring in senior BI expertise when it matters most: the foundation. Build the data models, security, reporting architecture, and core dashboards needed to create a reliable, scalable BI system.
            </p>
          </div>

          <div className="p-12 group hover:bg-yellow-400 hover:text-black transition-colors">
            <h3 className="text-2xl font-bold uppercase mb-4 group-hover:underline">Built for Your Internal Team</h3>
            <p className="text-lg font-medium leading-snug">
              The goal isn't to create dependency. Equip your internal analysts with the documentation, training, and structure they need to operate the system confidently, build new reports, and deliver day-to-day insights without requiring a full-time senior BI architect.
            </p>
          </div>
          
        </div>
      </section>

      {/* ADVANCED CAPABILITIES */}
      <section className="w-full border-b border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white bg-black text-white">
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <h3 className="text-3xl font-bold uppercase mb-6 tracking-tighter">Product Analytics</h3>
            <p className="text-xl font-medium leading-relaxed">
              Move beyond basic reporting. Implement deep event tracking and product analytics to seamlessly understand user behavior, visualize retention funnels, and drive feature adoption to grow your product.
            </p>
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center bg-gray-900">
            <h3 className="text-3xl font-bold uppercase mb-6 tracking-tighter">AI-Enabled BI</h3>
            <p className="text-xl font-medium leading-relaxed">
              Future-proof your data infrastructure. Integrate AI capabilities into your BI workflows, enabling your team to query data using natural language, automate insights, and scale analysis instantly.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT PEOPLE SAY */}
      <section id="testimonials" className="w-full border-b border-black">
         <div className="border-b border-black p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-center">What People Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black bg-white">
          
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <p className="text-xl md:text-3xl font-medium leading-tight mb-8">
              "Ovie completely transformed how we approach our data. The infrastructure is rock-solid and our team finally feels empowered to pull their own insights."
            </p>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest">Lawrence Odunlami</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">Zonal Manager, PalmPay</p>
            </div>
          </div>

          <div className="p-12 md:p-24 flex flex-col justify-center bg-gray-50">
            <p className="text-xl md:text-3xl font-medium leading-tight mb-8">
              "Bringing him in at the setup stage saved us months of headaches. We now have a scalable foundation without the massive overhead of a full enterprise BI tool."
            </p>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest">Oludemi Dennis</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">BI Analyst, PalmPay</p>
            </div>
          </div>

        </div>
      </section>

      {/* LET'S TALK */}
      <section className="w-full bg-black text-white hover:bg-gray-900 transition-colors">
        <a href="https://calendly.com/ovieorumahtony/30min" target="_blank" rel="noreferrer" className="block w-full text-center py-24 md:py-32 px-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter underline hover:no-underline">
            Set Up A Free Consult
          </h2>
        </a>
      </section>
    </div>
  );
}
