import InvoiceDetail from "../components/InvoiceDetail/InvoiceDetail";
import { motion } from "framer-motion";

function InvoiceDetailPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        x: 200,
        opacity: 0,
        transition: { type: "tween", duration: 0.5 },
      }}
    >
      <InvoiceDetail />
    </motion.div>
  );
}

export default InvoiceDetailPage;
