export default function GlassCard({ children }) {
  return (
    <div className="
      bg-white/5
      backdrop-blur-lg
      border border-white/10
      rounded-2xl
      p-6
      hover:scale-[1.03]
      hover:border-indigo-500/40
      transition-all duration-300
      shadow-lg
    ">
      {children}
    </div>
  )
}
