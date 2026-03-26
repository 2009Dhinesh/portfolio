export default function Background() {
  return <div className="fixed inset-0 -z-10 bg-navy overflow-hidden"><div className="absolute inset-0 z-0">{
    /* Orb moved to Hero section */
  }</div>{
    /* Overlay Gradient to soften it */
  }<div className="absolute inset-0 bg-navy/30 pointer-events-none" /></div>;
}
