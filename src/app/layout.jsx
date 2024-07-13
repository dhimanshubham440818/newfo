import "./globals.css";
import Header from "@/components/sectionCmp/Header/Header";
import Footer from "@/components/sectionCmp/Footer/Footer";

export const metadata = {
  title: "Personal Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
        {/* Header section  */}
        <Header />

        {/* body section  */}
        <section className="e z yf hm">
          {children}
        </section>

        {/* footer section  */}
        <Footer />
   
        <script defer src="js/scroll.js"></script>
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"89c5a08b4a49a060","r":1,"version":"2024.4.1","token":"9a6015d415bb4773a0bff22543062d3b"}' crossorigin="anonymous"></script>

      </body>

    </html>
  );
}
