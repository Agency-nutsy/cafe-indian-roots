import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const DirectionsButton = () => {
  const mapsUrl = "https://www.google.com/maps/place/Cafe+Indian+Roots/@28.6287965,77.0765568,17z/data=!3m1!4b1!4m6!3m5!1s0x390d05a0a53dafd1:0x68744bdcb92946b1!8m2!3d28.6287965!4d77.0765568!16s%2Fg%2F11st8grhpr?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"; // YE APNA LINK DAAL

  return (
    <motion.a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[102px] right-[22px] z-40 w-[56px] h-[56px] rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center bg-white"


      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Get Directions"
    >
      <MapPin className="w-6 h-6 text-red-500" />
    </motion.a>
  );
};

export default DirectionsButton;
