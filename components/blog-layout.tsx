"use client";

import Link from "next/link"
import { WalletComponents } from "./WalletComponents";
import '@coinbase/onchainkit/styles.css';

export function BlogLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="text-lg font-semibold" prefetch={false}>
          Minimal Blog
        </Link>
        <nav className="hidden items-center space-x-4 md:flex">
          <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50" prefetch={false}>
            About
          </Link>
          <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50" prefetch={false}>
            Contact
          </Link>
          <div className="z-1999">
          <WalletComponents />
          </div>
        </nav>
          <button className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted/50 focus:outline-none md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="#"
              className="group rounded-lg bg-muted/20 transition-colors hover:bg-muted/40"
              prefetch={false}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg"
                  alt="Blog post image"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">The Art of Minimalist Web Design</h2>
                <p className="mt-2 text-sm text-muted-foreground">By John Doe • 5 min read</p>
                <p className="mt-4 line-clamp-3 text-muted-foreground">
                  Discover the principles of minimalist web design and how to create clean, modern, and user-friendly
                  interfaces. Learn from real-world examples and expert insights.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="group rounded-lg bg-muted/20 transition-colors hover:bg-muted/40"
              prefetch={false}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg"
                  alt="Blog post image"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">Mastering Responsive Web Design</h2>
                <p className="mt-2 text-sm text-muted-foreground">By Jane Smith • 8 min read</p>
                <p className="mt-4 line-clamp-3 text-muted-foreground">
                  Explore the best practices and techniques for creating responsive websites that adapt seamlessly to
                  different devices and screen sizes. Ensure your web projects are accessible and user-friendly on any
                  platform.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="group rounded-lg bg-muted/20 transition-colors hover:bg-muted/40"
              prefetch={false}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg"
                  alt="Blog post image"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">The Future of Web Development</h2>
                <p className="mt-2 text-sm text-muted-foreground">By Sarah Lee • 12 min read</p>
                <p className="mt-4 line-clamp-3 text-muted-foreground">
                  Dive into the latest trends and technologies shaping the future of web development. Discover emerging
                  frameworks, tools, and best practices that will help you stay ahead of the curve.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="group rounded-lg bg-muted/20 transition-colors hover:bg-muted/40"
              prefetch={false}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg"
                  alt="Blog post image"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">Accessibility in Web Design</h2>
                <p className="mt-2 text-sm text-muted-foreground">By Michael Johnson • 7 min read</p>
                <p className="mt-4 line-clamp-3 text-muted-foreground">
                  Explore the importance of accessibility in web design and learn how to create inclusive experiences
                  for users with diverse needs. Discover practical tips and techniques to make your websites more
                  accessible.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="group rounded-lg bg-muted/20 transition-colors hover:bg-muted/40"
              prefetch={false}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg"
                  alt="Blog post image"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">Optimizing Web Performance</h2>
                <p className="mt-2 text-sm text-muted-foreground">By Emily Chen • 9 min read</p>
                <p className="mt-4 line-clamp-3 text-muted-foreground">
                  Learn effective strategies and techniques to optimize the performance of your web applications.
                  Improve page load times, reduce bandwidth usage, and deliver a lightning-fast user experience.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="group rounded-lg bg-muted/20 transition-colors hover:bg-muted/40"
              prefetch={false}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg"
                  alt="Blog post image"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">The Art of Crafting Compelling Content</h2>
                <p className="mt-2 text-sm text-muted-foreground">By David Lee • 11 min read</p>
                <p className="mt-4 line-clamp-3 text-muted-foreground">
                  Discover the secrets to creating engaging and informative content that captivates your audience. Learn
                  proven techniques for crafting compelling blog posts, articles, and more.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted/20 py-6">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">&copy; 2024 Minimal Blog. All rights reserved.</p>
            <nav className="flex space-x-4">
              <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
                Contact
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
                Privacy
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
