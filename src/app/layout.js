export const metadata = {
  title: 'À La Fritz',
  description: 'Welcome to a corner of the internet created by Fritz. Enjoy!',
  name: "À La Fritz",
  short_name: "Chez Fritz",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
