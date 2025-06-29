import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/them-provider/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "shadcn/ui layout",
  description: "Dark Mode enabled",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
