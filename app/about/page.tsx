export default function AboutPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">About Me</h1>
      
      <p className="mb-4 sm:mb-6 text-sm sm:text-base">
        Welcome to my blog! I'm Aniruddha Aranya A Dheu, an AI enthusiast who values solitude, cherishes attention to detail, and believes in the power of reflective thinking. I love building things with code and solving complex problems.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-12 mb-3 sm:mb-4">Deep diving into</h2>
      <ul className="list-none p-0 space-y-2 sm:space-y-4 text-sm sm:text-base">
        <li>🤖 Automating boring stuffs with Python</li>
        <li>♟️ Chess Analysis</li>
        <li>💻 AI/ML & Data Science</li>
        <li>🧩 Problem Solving</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-12 mb-3 sm:mb-4">Skills</h2>
      <ul className="list-none p-0 space-y-2 sm:space-y-4 text-sm sm:text-base">
        <li>Frontend: HTML, CSS</li>
        <li>Backend: Python, Pandas</li>
        <li>Languages: Python</li>
        <li>Tools: Git, VS Code, Linux, Jupyter Notebook, Vercel</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-12 mb-3 sm:mb-4">Get in Touch</h2>
      <p className="text-sm sm:text-base">
        Feel free to reach out to me on{" "}
        <a href="https://github.com/aranyaadheu" className="text-primary hover:underline">
          GitHub
        </a>
        ,{" "}
        <a href="https://www.linkedin.com/in/aranyaadheu/" className="text-primary hover:underline">
          LinkedIn
        </a>
        , or{" "}
        <a href="https://leetcode.com/aranyaadheu/" className="text-primary hover:underline">
          LeetCode
        </a>
        .
      </p>
    </div>
  )
} 
