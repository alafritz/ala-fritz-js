export const metadata = {
  title: 'À La Fritz',
  description: 'Welcome to a corner of the internet created by Fritz. Enjoy!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
