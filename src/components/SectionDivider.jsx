export default function SectionDivider({ label }) {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 my-10">

        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {label && (
          <span className="text-xs tracking-widest text-gray-500 uppercase">
            {label}
          </span>
        )}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}
