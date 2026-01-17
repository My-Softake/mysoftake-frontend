 
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/sheard/Footer";

export default function FrontendLayout({ children }) {
  return (
 
    <div className="font-roboto">
      <Navbar /> 
      <main className=" ">
        {children}

      </main>
      <ScrollToTop/>
     <Footer/>
    </div>
  );
}
