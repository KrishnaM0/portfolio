export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16 relative">
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="h-24 w-24 bg-indigo-500/20 blur-3xl rounded-full"></div>
      </div>

      <h2 className="relative text-4xl md:text-5xl font-extrabold tracking-wide">
        <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Divider */}
      <div className="mt-6 flex justify-center">
        <span className="h-1 w-20 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"></span>
      </div>
    </div>
  )
}
