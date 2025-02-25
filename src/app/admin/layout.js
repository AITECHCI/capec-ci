import { Manrope, Outfit } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const manrope = Manrope({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Administration - CAPEC-CI"
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${manrope.className}`}>
        <ToastContainer />
        <main>{children}</main>
      </body>
    </html>
  );
}