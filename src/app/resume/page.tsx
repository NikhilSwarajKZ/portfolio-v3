import { Button } from '@/components/ui/button'

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>
      <div className="prose dark:prose-invert">
        <h2>Education</h2>
        <p>[Your Education Details]</p>
        
        <h2>Work Experience</h2>
        <ul>
          <li>
            <h3>[Job Title] at [Company]</h3>
            <p>[Job Description]</p>
          </li>
          {/* Add more work experiences */}
        </ul>
        
        <h2>Skills</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>Python</li>
          <li>React / Next.js</li>
          <li>Node.js</li>
          <li>SQL / NoSQL Databases</li>
          <li>RESTful APIs</li>
          <li>Git / Version Control</li>
        </ul>
        
        <h2>Certifications</h2>
        <ul>
          <li>[Your Certifications]</li>
        </ul>
        
        <Button asChild className="mt-6">
          <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Full Resume
          </a>
        </Button>
      </div>
    </div>
  )
}

