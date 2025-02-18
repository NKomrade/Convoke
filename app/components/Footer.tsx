// 'use client'
// import { useState } from 'react';
// import CodeOfConductModal from './codeofconduct';
// import { MapPin, Phone, Mail} from 'lucide-react';

// const Footer = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const emergencyResources = [
//     { title: "Disaster Helpline", contact: "1077"},
//     { title: "Women Helpline", contact: "1091"},
//     { title: "Child Helpline", contact: "1098" },
//     { title: "Emergency Response Support System", contact: "112"},
//     { title: "Police", contact: "100"},
//     { title: "Fire & Rescue", contact: "101"},
//     { title: "Ambulance", contact: "102"},
//     { title: "WUS Health Centre (North Campus)", contact: "011-27666257"},
//     { title: "Hindu Rao Hospital (Malka Ganj)", contact: "011-23919476, 011-23913562"}
//   ];

//   // const emergencyResources = [
//   //   { title: "Disaster Helpline", contact: "1077", description: "24/7 disaster response and relief assistance." },
//   //   { title: "Women Helpline", contact: "1091", description: "Support and assistance for women's safety and security." },
//   //   { title: "Child Helpline", contact: "1098", description: "Emergency support for children in distress." },
//   //   { title: "Emergency Response Support System", contact: "112", description: "Single emergency helpline for police, fire, and medical assistance." },
//   //   { title: "Police", contact: "100", description: "Law enforcement and immediate crime response." },
//   //   { title: "Fire & Rescue", contact: "101", description: "Emergency fire response and rescue operations." },
//   //   { title: "Ambulance", contact: "102", description: "24/7 emergency medical transportation service." },
//   //   { title: "WUS Health Centre (North Campus)", contact: "011-27666257", description: "Primary healthcare services for students and faculty." },
//   //   { title: "Hindu Rao Hospital (Malka Ganj)", contact: "011-23919476, 011-23913562", description: "Multi-specialty hospital for emergency and general medical care." }
//   // ];

//   return (
//     <footer className="relative w-full bg-black text-white overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 bg-[linear-gradient(45deg,#006462_1px,transparent_1px)] bg-[length:30px_30px] opacity-10" />

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
//           {/* Left Column - Map */}
//           <div className="space-y-8">
//             <div className="relative group">
//               <h3 className="text-4xl font-bold mb-6 text-teal-300">
//                 Event Location
//               </h3>
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#006462] to-teal-500 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
//                 <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl transform -rotate-1 group-hover:-rotate-2 transition-all duration-300">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9514192607708!2d77.21426509999999!3d28.6910998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd94c8b62999%3A0xae0071f78605288f!2sCluster%20Innovation%20Centre%2C%20University%20of%20Delhi!5e0!3m2!1sen!2sin!4v1739289057445!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen={true}
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     className="filter"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Contact Information with Icons */}
//             <div className="space-y-6">
//               <h4 className="text-4xl font-semibold text-teal-300">Contact Information</h4>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-4 group">
//                   <div className="p-3 bg-[#006462]/20 rounded-lg group-hover:bg-[#006462]/40 transition-colors duration-300">
//                     <MapPin className="w-6 h-6 text-teal-300" />
//                   </div>
//                   <div>
//                     <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
//                       Cluster Innovation Centre
//                       <br />
//                       Delhi University, Rugby Sevens Building
//                       <br />
//                       University Stadium, New Delhi - 110007
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4 group">
//                   <div className="p-3 bg-[#006462]/20 rounded-lg group-hover:bg-[#006462]/40 transition-colors duration-300">
//                     <Phone className="w-6 h-6 text-teal-300" />
//                   </div>
//                   <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
//                     +91 77018 57695 <br />
//                     +91 95969 72831
//                   </p>
//                 </div>

//                 <div className="flex items-center space-x-4 group">
//                   <div className="p-3 bg-[#006462]/20 rounded-lg group-hover:bg-[#006462]/40 transition-colors duration-300">
//                     <Mail className="w-6 h-6 text-teal-300" />
//                   </div>
//                   <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
//                     convoke@cic.du.ac.in 
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Emergency Resources */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-4xl font-bold mb-8 flex items-center space-x-3">
//                 <span className="text-teal-300">
//                   Emergency Resources
//                 </span>
//               </h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {emergencyResources.map((resource, index) => (
//                   <div
//                     key={index}
//                     className="group relative overflow-hidden"
//                   >
//                     <h5 className="font-semibold text-teal-300 mb-2">{resource.title}</h5>
//                     <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
//                       {resource.contact && <span className="block font-medium">{resource.contact}</span>}
//                       {/* {resource.description} */}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="space-y-6">
//               <h4 className="text-4xl font-semibold text-teal-300 text-center sm:text-left">
//                 Connect With Us
//               </h4>
//               <div className="flex space-x-8 justify-center sm:justify-start">
//                 {['instagram'].map((platform) => (
//                   <a
//                     key={platform}
//                     href="https://www.instagram.com/convoke_cic"
//                     className="p-4 bg-gradient-to-br from-[#006462]/20 to-[#006462]/10 rounded-lg hover:from-[#006462]/30 hover:to-[#006462]/20 transform hover:scale-110 transition-all duration-300"
//                   >
//                     <span className="sr-only">{platform}</span>
//                     <svg className="h-6 w-6 text-teal-300" fill="currentColor" viewBox="0 0 24 24">
//                       {platform === 'instagram' && (
//                         <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
//                       )}
//                     </svg>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-[#006462]/30 py-8 flex flex-col sm:flex-row-reverse justify-between items-center gap-4">
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="px-6 py-2 bg-gradient-to-r from-[#006462] to-teal-600 rounded-lg text-white hover:from-teal-600 hover:to-[#006462] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
//           >
//             Code of Conduct
//           </button>
//           <p className="text-sm text-gray-400 hover:text-teal-300 transition-colors duration-300">
//             © 2025 Convoke. All rights reserved.
//           </p>
//         </div>
//       </div>

//       {/* Code of Conduct Modal */}
//       {isModalOpen && (
//         <CodeOfConductModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//         />
//       )}
//     </footer>
//   );
// };

// export default Footer;


'use client';
import { useState } from 'react';
import CodeOfConductModal from './codeofconduct';
import EmergencyResourcesModal from './emergency';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState<boolean>(false);

  const locationUrl = "https://maps.google.com/maps?q=Cluster+Innovation+Centre+Delhi+University";

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#006462_1px,transparent_1px)] bg-[length:30px_30px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
          {/* Left Column - Map */}
          <div className="space-y-8">
            <div className="relative group">
              <h3 className="text-4xl font-bold mb-6 text-teal-300">
                Event Location
              </h3>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#006462] to-teal-500 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
                <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl transform -rotate-1 group-hover:-rotate-2 transition-all duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9514192607708!2d77.21426509999999!3d28.6910998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd94c8b62999%3A0xae0071f78605288f!2sCluster%20Innovation%20Centre%2C%20University%20of%20Delhi!5e0!3m2!1sen!2sin!4v1739289057445!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Social */}
          <div className="space-y-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-4xl font-semibold text-teal-300">Contact Information</h4>
              <div className="space-y-4">
                <a
                  href={locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group hover:bg-[#006462]/10 p-2 rounded-lg transition-colors"
                >
                  <div className="p-3 bg-[#006462]/20 rounded-lg group-hover:bg-[#006462]/40 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-teal-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Cluster Innovation Centre
                      <br />
                      Delhi University, Rugby Sevens Building
                      <br />
                      University Stadium, New Delhi - 110007
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-teal-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className="flex items-center space-x-4 group hover:bg-[#006462]/10 p-2 rounded-lg transition-colors">
                  <div className="p-3 bg-[#006462]/20 rounded-lg group-hover:bg-[#006462]/40 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-teal-300" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    +91 77018 57695 <br />
                    +91 95969 72831
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Bouncy Buttons Section */}
        {/* Buttons Section */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Emergency Resources Button */}
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#006462] to-teal-600 button-shadow transition-all duration-200 group-hover:translate-y-1 group-active:translate-y-2"
              style={{
                width: "183px",
                height: "40px",
                top: "6px",
                left: "6px",
              }}  
            ></div>
            <button
              onClick={() => setIsEmergencyModalOpen(true)}
              className="button-content relative flex items-center justify-center rounded-full border-[2.5px] border-black bg-white transition-transform duration-200 group-hover:translate-y-1 group-active:translate-y-2 active:scale-95"
            >
              <div
                className="flex items-center justify-center rounded-full border-[2px] border-black"
                style={{ width: "185px", height: "42px" }}
              >
                <span className="font-poppins text-[15px] font-[590] leading-[19.5px] text-black">
                  Emergency Resources
                </span>
              </div>
            </button>
          </div>

          {/* Code of Conduct Button */}
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#006462] to-teal-600 button-shadow transition-all duration-200 group-hover:translate-y-1 group-active:translate-y-2"
              style={{
                width: "168px",
                height: "40px",
                top: "6px",
                left: "6px",
              }}  
            ></div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="button-content relative flex items-center justify-center rounded-full border-[2.5px] border-black bg-white transition-transform duration-200 group-hover:translate-y-1 group-active:translate-y-2 active:scale-95"
            >
              <div
                className="flex items-center justify-center rounded-full border-[2px] border-black"
                style={{ width: "170px", height: "42px" }}
              >
                <span className="font-poppins text-[15px] font-[590] leading-[19.5px] text-black">
                  Code of Conduct
                </span>
              </div>
            </button>
          </div>
        </div>


        {/* Footer Bottom with Border */}
        <div className="border-t border-[#006462]/30 py-6">
          <p className="text-sm text-center text-gray-400 hover:text-teal-300 transition-colors duration-300">
            © 2025 Convoke. All rights reserved.
          </p>
        </div>
      </div>

      {/* Modals */}
      {isModalOpen && (
        <CodeOfConductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {isEmergencyModalOpen && (
        <EmergencyResourcesModal
          isOpen={isEmergencyModalOpen}
          onClose={() => setIsEmergencyModalOpen(false)}
        />
      )}
    </footer>
  );
};

export default Footer;
