export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Certifications &{" "}
            <span className="font-serif italic font-normal text-white">
              accomplishments.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-4">
              🏆 Best Student – Cybersecurity Hackathon
            </h3>
            <p className="text-muted-foreground">
              Secured first place in Cybersecurity Hackathon conducted by
              Supraja Technologies.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-4">
              🌐 Introduction to Networks – CCNA
            </h3>
            <p className="text-muted-foreground">
              Completed CCNA certification by CISCO focusing on networking
              fundamentals and security concepts.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-4">
              🤖 AI Fundamentals – IBM
            </h3>
            <p className="text-muted-foreground">
              Completed AI certification covering machine learning basics,
              AI workflows, and practical applications.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-4">
              💻 Java Programming – NPTEL
            </h3>
            <p className="text-muted-foreground">
              Certified in Java Programming fundamentals including OOP
              principles and backend development concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};