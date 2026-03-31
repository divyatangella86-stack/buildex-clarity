import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductPage from "@/components/ProductPage";
import { getProductBySlug } from "@/data/products";

const Product = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen">
      <Header />
      <ProductPage product={product} />
      <Footer />
    </div>
  );
};

export default Product;
