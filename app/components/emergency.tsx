'use client';
import { useEffect } from 'react';
import { X } from 'lucide-react';

interface EmergencyResource {
  title: string;
  contact: string;
}

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const emergencyResources: EmergencyResource[] = [
  { title: 'Disaster Helpline', contact: '1077' },
  { title: 'Women Helpline', contact: '1091, +91 8860022690' },
  { title: 'Child Helpline', contact: '1098' },
  { title: 'Emergency Response Support System', contact: '112' },
  { title: 'Police', contact: '100' },
  { title: 'Fire & Rescue', contact: '101' },
  { title: 'Ambulance', contact: '102' },
  { title: 'WUS Health Centre (North Campus)', contact: '011-27666257' },
  { title: 'Hindu Rao Hospital (Malka Ganj)', contact: '011-23919476, 011-23913562' }
];

const EmergencyResourcesModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-xl text-[#006462] shadow-xl backdrop-blur-lg border border-white/20 scrollbar-hide">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#006462] shadow-md">
          <h2 className="md:text-2xl text-xl font-bold text-white">Emergency Resources</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6 text-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyResources.map((resource, index) => (
              <div 
                key={index} 
                className="p-4"
              >
                <h4 className="font-semibold text-teal-300 mb-2">{resource.title}</h4>
                <p className="text-white font-medium">{resource.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyResourcesModal;