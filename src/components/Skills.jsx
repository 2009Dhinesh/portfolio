import { skills } from '../constants';

const OrbitRing = ({ radius, duration, reverse = false, children }) => {
  return (
    <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ 
            width: radius * 2, 
            height: radius * 2,
        }}
    >
       {/* Static faint background ring (optional, keeps the track visible) */}
       <div className="absolute inset-0 rounded-full border border-white/5" />
       
       {/* Rotating dashed ring */}
       <div 
         className={`absolute inset-0 animate-slow-spin w-full h-full rounded-full border border-dashed border-lavender/30`}
         style={{ 
            animationDuration: `${duration}s`,
            animationDirection: reverse ? 'reverse' : 'normal'
         }}
       >
          {children}
       </div>
    </div>
  )
};

const Planet = ({ skill, angle }) => {
    return (
            <div 
                className="absolute top-0 left-1/2"
                style={{ 
                    height: '50%', 
                    transformOrigin: 'bottom center',
                    transform: `translateX(-50%) rotate(${angle}deg)`
                }}
            >
                <div 
                    className="relative -top-5 md:-top-6"
                    style={{ transform: `rotate(-${angle}deg)` }} 
                >
                    {/* Planet Sphere */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex flex-col items-center justify-center shadow-[0_0_15px_rgba(199,185,255,0.2)] hover:scale-110 transition-transform group relative overflow-hidden bg-navy">
                    {/* Spherical Gradient Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(199,185,255,0.4),rgba(15,23,42,0.8))]" />
                    
                    {/* Ring/Atmosphere Effect */}
                    <div className="absolute inset-0 rounded-full border border-white/10" />

                    <div className="relative z-10 flex flex-col items-center p-2">
                        {skill.icon ? (
                            <img 
                                src={skill.icon} 
                                alt={skill.name} 
                                className="w-5 h-5 md:w-6 md:h-6 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                        ) : null}
                         <span className={`${skill.icon ? 'hidden' : ''} font-bold text-[8px] md:text-[10px] text-white group-hover:text-lavender transition-colors drop-shadow-md text-center line-clamp-1`}>
                            {skill.name}
                         </span>
                    </div>

                    {/* Tooltip on Hover */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-navy/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 z-30">
                        {skill.name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Skills() {
  // Distribute skills across 3 orbits
  const innerOrbit = skills.slice(0, 3);
  const middleOrbit = skills.slice(3, 8);
  const outerOrbit = skills.slice(8);

  const skillGroups = [
    {
      title: "Frontend Development",
      items: skills.filter(s => ['HTML', 'CSS', 'JavaScript', 'React JS', 'React Native'].includes(s.name))
    },
    {
      title: "Backend & Automation",
      items: skills.filter(s => ['Node JS', 'n8n', 'Python'].includes(s.name))
    },
    {
      title: "Design & Tools",
      items: skills.filter(s => ['UX Design', 'Figma', 'C Programming'].includes(s.name))
    }
  ];

  return (
    <section id="skills" className="py-32 relative bg-navy/20">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-lavender">Skills</span></h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    A comprehensive overview of my technical expertise and tools.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Side: Skill List */}
                <div className="space-y-8 relative z-10">
                    {skillGroups.map((group, i) => (
                        <div key={i} className="bg-navy/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-lavender/20 transition-all group">
                            <h3 className="text-xl font-bold mb-6 text-lavender flex items-center gap-2">
                                <span className="w-2 h-2 bg-lavender rounded-full animate-pulse" />
                                {group.title}
                            </h3>
                            <div className="space-y-5">
                                {group.items.map((skill, j) => (
                                    <div key={j} className="space-y-2">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                                            <span className="text-xs text-lavender font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-navy/60 rounded-full overflow-hidden border border-white/5">
                                            <div 
                                                className="h-full bg-gradient-to-r from-lavender/40 via-lavender to-white/80 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(199,185,255,0.3)]"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Orbital Visualization */}
                <div className="lg:sticky lg:top-32 h-fit w-full mt-10 lg:mt-0 z-10">
                    <div className="relative h-[350px] sm:h-[400px] md:h-[600px] flex items-center justify-center scale-[0.55] sm:scale-75 md:scale-100 lg:scale-[0.85] xl:scale-100">
                        {/* Solar System scale adjusted for split layout */}
                        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
                        
                        {/* SUN (Dev Core) */}
                        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full relative z-20 flex items-center justify-center group">
                                <div className="absolute inset-0 bg-lavender blur-2xl opacity-40 animate-pulse" />
                                <div className="absolute inset-[-4px] bg-gradient-to-r from-lavender via-white to-lavender rounded-full blur-md opacity-70" />
                                <div className="relative w-full h-full rounded-full bg-[radial-gradient(circle_at_center,#fff,#C7B9FF,#6366f1)] border-2 border-white/50 flex items-center justify-center overflow-hidden shadow-[0_0_60px_rgba(199,185,255,0.6)]">
                                    <span className="text-lg font-bold text-navy/80 drop-shadow-sm z-10">Dev Core</span>
                                </div>
                            </div>
                        </div>

                        {/* Orbit 1 (Inner) */}
                        <OrbitRing radius={90} duration={20}>
                            {innerOrbit.map((skill, i) => (
                                <Planet key={skill.name} skill={skill} angle={(360 / innerOrbit.length) * i} />
                            ))}
                        </OrbitRing>
                        
                        {/* Orbit 2 (Middle) */}
                        <OrbitRing radius={150} duration={35} reverse>
                            {middleOrbit.map((skill, i) => (
                                <Planet key={skill.name} skill={skill} angle={(360 / middleOrbit.length) * i} />
                            ))}
                        </OrbitRing>

                        {/* Orbit 3 (Outer) */}
                        {outerOrbit.length > 0 && (
                            <OrbitRing radius={210} duration={50}>
                                {outerOrbit.map((skill, i) => (
                                    <Planet key={skill.name} skill={skill} angle={(360 / outerOrbit.length) * i} />
                                ))}
                            </OrbitRing>
                        )}
                        
                        {/* Background decorative orbits */}
                        <div className="absolute rounded-full border border-lavender/5 w-[180px] h-[180px] pointer-events-none" />
                        <div className="absolute rounded-full border border-lavender/5 w-[300px] h-[300px] pointer-events-none" />
                        <div className="absolute rounded-full border border-lavender/5 w-[420px] h-[420px] pointer-events-none" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
}
