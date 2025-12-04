export default function Gospel() {
  return (
    <div className="container fade-in">
      <h2 className="section-title" style={{ color: "var(--color-primary-light)" }}>
        Gospel & Self-Reliance
      </h2>

      <section className="card" style={{ padding: "2rem", marginTop: "1rem" }}>
        <h3 style={{ color: "var(--color-primary-light)", marginBottom: "1rem" }}>
          Self-Reliance
        </h3>

        <p>
          Self-reliance is built through our own work and supports every other welfare
          principle. It is a sacred part of both spiritual and temporal growth.
        </p>

        <div
          style={{
            borderRadius: "var(--radius)",
            overflow: "hidden",
            boxShadow: "var(--shadow-soft)",
            margin: "1.5rem 0",
            display: "flex", justifyContent: "center"
          }}
        >
          <img
            src="/gospel.jpg"
            alt="Why Self-Reliance Begins with Faith in Jesus Christ"
            style={{ display: "block", width: "50%", height: "auto" }}
          />
        </div>

        <p>
          President Marion G. Romney taught:
          <span
            style={{
              display: "block",
              marginTop: "0.8rem",
              paddingLeft: "1rem",
              borderLeft: "4px solid var(--color-primary)",
              opacity: 0.9,
              fontStyle: "italic"
            }}
          >
            “Let us work for what we need. Let us be self-reliant and independent.
            Salvation can be obtained on no other principle…
            We must work out our own salvation in temporal as well as spiritual things.”
          </span>
        </p>

        <p>
          President Spencer W. Kimball also taught that each person is responsible for
          their own well-being first, then their family’s, and only then should the
          Church help when the member is faithful and truly in need.
          <span
            style={{
              display: "block",
              marginTop: "0.8rem",
              paddingLeft: "1rem",
              borderLeft: "4px solid var(--color-primary)",
              opacity: 0.9,
              fontStyle: "italic"
            }}
          >
            “No true Latter-day Saint, while physically or emotionally able, will
            voluntarily shift the burden of his own or his family’s well-being to
            someone else.”
          </span>
        </p>
      </section>
    </div>
  );
}



