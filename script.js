function showStudy() {
  document.getElementById("output").innerHTML = `
    <h3>📘 What to Study</h3>
    <p>Focus on core subjects, problem solving, and practical learning.</p>
    <ul>
      <li>Data Structures</li>
      <li>Operating Systems</li>
      <li>DBMS</li>
    </ul>
  `;
}

function showSkills() {
  document.getElementById("output").innerHTML = `
    <h3>🧠 What Skills Matter</h3>
    <ul>
      <li>Programming (Java / Python)</li>
      <li>Communication</li>
      <li>Git & GitHub</li>
    </ul>
  `;
}

function showCareers() {
  document.getElementById("output").innerHTML = `
    <h3>💼 Careers & Placements</h3>
    <p>Choose a path and prepare accordingly:</p>
    <ul>
      <li>Software Developer</li>
      <li>Data Analyst</li>
      <li>UI/UX Designer</li>
    </ul>
  `;
}