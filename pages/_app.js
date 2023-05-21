// // import React from 'react';
import '../styles/index.scss';
import '../styles/Patterns.scss';
import '../styles/Typography.scss';
import '../styles/Colors.scss';
import '../styles/menuitem.scss';
import '../styles/linkout.scss';


export const metadata = {
  title: 'À La Fritz',
  description: 'Welcome to a corner of the internet created by Fritz. Enjoy!',
  name: "À La Fritz",
  short_name: "Chez Fritz",
}


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// export default function Home({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }


