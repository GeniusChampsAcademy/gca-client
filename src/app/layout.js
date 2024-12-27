import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/page.js";
import Footer from "./components/footer/page.js";

// const gilroyLight = localFont({
//   src: "../../public/fonts/Gilroy-Light.ttf",
//   variable: "--font-gilroy-light",
//   weight: "300", // Light weight
// });

// const gilroyRegular = localFont({
//   src: "../../public/fonts/Gilroy-Regular.ttf",
//   variable: "--font-gilroy-regular",
//   weight: "400", // Regular weight
// });

const gilroySemiBold = localFont({
  src: "../../public/fonts/Gilroy-SemiBold.ttf",
  variable: "--font-gilroy-semibold",
  weight: "600", // SemiBold weight
});

const gilroyBold = localFont({
  src: "../../public/fonts/gilroy-bold.ttf",
  variable: "--font-gilroy-bold",
  weight: "700", // Bold weight
});

const gilroyextraBold = localFont({
  src: "../../public/fonts/gilroy-extra-bold.ttf",
  variable: "--font-gilroy-extra-bold",
  weight: "800", // Extra Bold weight
})


export const metadata = {
  title: "Genius Champs Academy",
  description: "Established in March 2016, Genius Champs Academy Pvt. Ltd. is a premier educational institute based in Nagpur, Maharashtra, India. With over 20 years of experience in education, our academy provides specialized courses including ABACUS with Zhusuan Methodology, Midbrain Activation, Calligraphy, Handwriting Improvement, and National Level Competitions. Our goal is to enhance children's cognitive abilities, fostering creativity, time management, and efficient learning techniques. At Genius Champs Academy, our dedicated team of experienced educators is committed to nurturing each child's potential, making learning a fulfilling and enjoyable journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gilroyextraBold.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

