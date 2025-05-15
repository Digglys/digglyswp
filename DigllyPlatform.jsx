import { useState } from 'react';

export default function DigllyPlatform() {
  const [projects] = useState([
    { id: 1, title: "Website Company Profile", skills: ["HTML", "CSS", "React"] },
    { id: 2, title: "Desain Logo Startup", skills: ["Illustrator", "Branding"] },
  ]);

  const [freelancers] = useState([
    { id: 1, name: "Budi Santoso", skills: ["React", "Next.js", "UI/UX"] },
    { id: 2, name: "Siti Aminah", skills: ["Photoshop", "Branding"] },
  ]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Platform Diglly</h1>
      <div style={{ marginTop: '1rem' }}>
        <h2>Daftar Proyek</h2>
        {projects.map((project) => (
          <div key={project.id} style={{ margin: '0.5rem 0', padding: '1rem', border: '1px solid #ccc' }}>
            <h3>{project.title}</h3>
            <p>Keahlian: {project.skills.join(', ')}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h2>Daftar Freelancer</h2>
        {freelancers.map((freelancer) => (
          <div key={freelancer.id} style={{ margin: '0.5rem 0', padding: '1rem', border: '1px solid #ccc' }}>
            <h3>{freelancer.name}</h3>
            <p>Keahlian: {freelancer.skills.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
