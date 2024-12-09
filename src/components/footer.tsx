import Link from 'next/link'
import { Icons } from '@/components/icons'

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Nikhil Swaraj. The source code is available on{" "}
            <Link
              href="https://github.com/nikhilswaraj"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/nikhilswaraj" target="_blank" rel="noreferrer">
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/nikhilswaraj" target="_blank" rel="noreferrer">
            <Icons.linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

