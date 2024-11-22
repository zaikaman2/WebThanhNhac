import InstructorContent from './InstructorContent'

export default function Instructor() {
  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <InstructorContent />
      </div>
    </section>
  )
} 