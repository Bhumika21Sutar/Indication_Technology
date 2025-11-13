// import React from "react";
// import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
// import { motion } from "framer-motion";

// const FooterFix = () => {
//   return (
//     <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white z-50">
//       <div className="flex items-center justify-between px-5 py-2">
//         {/* Copyright (Left Side) */}
//         <div className="text-sm text-gray-300">
//           © 2025 by <span className="font-semibold">Indication Technology</span>{" "}
//           | All Rights Reserved
//         </div>

//         {/* Social Media Icons (Right Side) */}
//         <div className="flex space-x-4">
//           {[
//             { Icon: Linkedin, bg: "bg-blue-600", link: "#" },
//             { Icon: Twitter, bg: "bg-blue-400", link: "#" },
//             {
//               Icon: Instagram,
//               bg: "bg-pink-500",
//               link: "https://www.instagram.com/indication_tech/?utm_source=qr&igsh=MWFmOWNucGdjbWg2#",
//             },
//             { Icon: Facebook, bg: "bg-blue-700", link: "#" },
//           ].map(({ Icon, bg, link }, index) => (
//             <motion.a
//               key={index}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`w-7 h-7 ${bg} rounded-full flex items-center justify-center`}
//               whileHover={{ scale: 1.2, y: -3 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <Icon className="w-4 h-4 text-white" />
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterFix;

// import React from "react";
// import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
// import { motion } from "framer-motion";

// const FooterFix = () => {
//   return (
//     <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white z-50">
//       <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 space-y-2 sm:space-y-0">
//         {/* Copyright (Top on mobile, Left on desktop) */}
//         <div className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
//           © 2025 by <span className="font-semibold">Indication Technology</span>{" "}
//           | All Rights Reserved
//         </div>

//         {/* Social Media Icons (Bottom on mobile, Right on desktop) */}
//         <div className="flex space-x-3">
//           {[
//             { Icon: Linkedin, bg: "bg-blue-600", link: "#" },
//             { Icon: Twitter, bg: "bg-blue-400", link: "#" },
//             {
//               Icon: Instagram,
//               bg: "bg-pink-500",
//               link: "https://www.instagram.com/indication_tech/?utm_source=qr&igsh=MWFmOWNucGdjbWg2#",
//             },
//             { Icon: Facebook, bg: "bg-blue-700", link: "#" },
//           ].map(({ Icon, bg, link }, index) => (
//             <motion.a
//               key={index}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`w-8 h-8 ${bg} rounded-full flex items-center justify-center`}
//               whileHover={{ scale: 1.2, y: -3 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <Icon className="w-4 h-4 text-white" />
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterFix;

// import React from "react";
// import { ImWhatsapp } from "react-icons/im";
// import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
// import { motion } from "framer-motion";

// const FooterFix = () => {
//   return (
//     <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white z-50">
//       <div className="flex flex-col-reverse sm:flex-row items-center justify-between px-4 sm:px-6 py-3 space-y-2 sm:space-y-0 sm:space-x-0">
//         {/* Copyright (Bottom on mobile, Left on desktop) */}
//         <div className="text-xs sm:text-sm text-gray-300 text-center sm:text-left mt-2 sm:mt-0">
//           © 2025 by <span className="font-semibold">Indication Technology</span>{" "}
//           | All Rights Reserved
//         </div>

//         {/* Social Media Icons (Top on mobile, Right on desktop) */}
//         <div className="flex space-x-3 mb-2 sm:mb-0">
//           {[
//             { Icon: Linkedin, bg: "bg-blue-600", link: "#" },
//             { Icon: Twitter, bg: "bg-blue-400", link: "#" },
//             {
//               Icon: Instagram,
//               bg: "bg-pink-500",
//               link: "https://www.instagram.com/indication_tech/?utm_source=qr&igsh=MWFmOWNucGdjbWg2#",
//             },
//             { Icon: Facebook, bg: "bg-blue-700", link: "#" },
//             {
//               Icon: ImWhatsapp,
//               bg: "bg-green-500",
//               link: "https://api.whatsapp.com/send?phone=917030194516&text=Hello,%20I%20want%20to%20inquire%20about%20a%20project.",
//             },
//           ].map(({ Icon, bg, link }, index) => (
//             <motion.a
//               key={index}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`w-8 h-8 ${bg} rounded-full flex items-center justify-center`}
//               whileHover={{ scale: 1.2, y: -3 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <Icon className="w-4 h-4 text-white" />
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterFix;

// import React from "react";
// import { ImWhatsapp } from "react-icons/im";
// import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
// import { motion } from "framer-motion";

// const FooterFix = () => {
//   return (
//     <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white z-50 px-6 py-1">
//       <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-3">
//         {/* Copyright (bottom on mobile, left on desktop) */}
//         <div className="text-xs sm:text-sm text-gray-300 text-center md:text-left">
//           © 2025 by <span className="font-semibold">Indication Technology</span>{" "}
//           | All Rights Reserved
//         </div>

//         {/* Social Media Icons (top on mobile, right on desktop) */}
//         <div className="flex space-x-4  md:mb-0">
//           {[
//             { Icon: Linkedin, bg: "bg-blue-600", link: "#" },
//             { Icon: Twitter, bg: "bg-blue-400", link: "#" },
//             {
//               Icon: Instagram,
//               bg: "bg-pink-500",
//               link: "https://www.instagram.com/indication_tech/?utm_source=qr&igsh=MWFmOWNucGdjbWg2#",
//             },
//             { Icon: Facebook, bg: "bg-blue-700", link: "#" },
//             {
//               Icon: ImWhatsapp,
//               bg: "bg-green-500",
//               link: "https://api.whatsapp.com/send?phone=917030194516&text=Hello,%20I%20want%20to%20inquire%20about%20a%20project.",
//             },
//           ].map(({ Icon, bg, link }, index) => (
//             <motion.a
//               key={index}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`w-7 h-7 ${bg} rounded-full flex items-center justify-center`}
//               whileHover={{ scale: 1.15, y: -2 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <Icon className="w-4 h-4 text-white" />
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterFix;

import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const FooterFix = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-gray-900 text-white py-1 px-10">
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-3">
        {/* Copyright (bottom on mobile, left on desktop) */}
        <div className="text-xs sm:text-sm text-gray-300 text-center md:text-left mb-1">
          © 2025 by <span className="font-semibold">Indication Technology</span>{" "}
          | All Rights Reserved
        </div>

        {/* Social Media Icons (top on mobile, right on desktop) */}
        <div className="flex space-x-4 mb-2 mt-2 md:mb-0">
          {[
            {
              Icon: Linkedin,
              bg: "bg-blue-600",
              link: "https://www.linkedin.com/company/indication-technology-pvt-ltd/",
            },
            // { Icon: Twitter, bg: "bg-blue-400", link: "#" },
            {
              Icon: Instagram,
              bg: "bg-pink-500",
              link: "https://www.instagram.com/indication_tech/?utm_source=qr&igsh=MWFmOWNucGdjbWg2#",
            },
            // { Icon: Facebook, bg: "bg-blue-700", link: "#" },
            {
              Icon: ImWhatsapp,
              bg: "bg-green-500",
              link: "https://api.whatsapp.com/send?phone=917030194516&text=Hello,%20I%20want%20to%20inquire%20about%20a%20project.",
            },
          ].map(({ Icon, bg, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-7 h-7 ${bg} rounded-full flex items-center justify-center`}
              whileHover={{ scale: 1.15, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-4 h-4 text-white" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterFix;
