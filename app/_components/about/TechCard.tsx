export default function TechCard({ title, technologies }) {
  return (
    <div className="inline-flex m-4">
      <div className="p-4 text-5xl border-4 border-black rounded-lg bg-neutral-500">
        <h1 className="mb-4 underline">{title}</h1>
        <h2>
          {technologies.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </h2>
      </div>
    </div>
  );
}
