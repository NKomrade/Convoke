'use client'
import { useEffect } from 'react';
import { X } from 'lucide-react';

interface CodeOfConductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CodeOfConductModal: React.FC<CodeOfConductModalProps> = ({ isOpen, onClose }) => {
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
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-black/15 text-[#006462] shadow-xl backdrop-blur-lg border border-white/20 scrollbar-hide">
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#006462] shadow-md">
          <h2 className="md:text-2xl text-xl font-bold text-white">Convoke 7.0 Code of Conduct</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        
        <div className="p-6 space-y-8 custom-scrollbar text-gray-200">
          <section>
            <p>
              All attendees including delegates, visitors, speakers, sponsors, and exhibitors at our events are required to agree with the following Code of Conduct. CLUSTER INNOVATION CENTRE will enforce this code throughout the events. Any events curated by the CONVOKE 7.0 Team are dedicated to providing a safe learning environment for everyone. We believe in equality for all and are committed to creating event environments that are safe, diverse, and inclusive.
            </p>
          </section>

          <section>
            <h3 className="text-[#006462] text-xl font-semibold mb-4">Unacceptable Behaviour</h3>
            <p className="mb-2">
              Unacceptable behaviours may include but are not limited to:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Verbal comments that reinforce social structures of domination related to gender, sexual orientation, disability, physical appearance, race, age, or religion.</li>
              <li>Sexual behaviour, images, or sexually explicit or offensive language in public spaces.</li>
              <li>Wearing provocative clothing not suitable for a professional environment.</li>
              <li>Sustained disruption during talks or sessions.</li>
              <li>Harassment (see full definition below).</li>
              <li>Intimidation, deliberate stalking, or following.</li>
              <li>Abuse.</li>
              <li>Discrimination.</li>
              <li>Possession and/or use of illegal substances.</li>
              <li>Possession of an item or device that can be used as a weapon causing harm to others.</li>
              <li>Advocating for, or encouraging, any of the above behaviour.</li>
            </ol>
          </section>

          <section>
            <h3 className="text-[#006462] text-xl font-semibold mb-4">Our Definition of Harassment Includes</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Unwelcome or hostile behaviour, including verbal or written comments that intimidate, create discomfort, or interfere with a person’s participation in the conference.</li>
              <li>Unwelcome physical contact.</li>
              <li>Unwelcome sexual attention.</li>
            </ol>
          </section>

          <section>
            <h3 className="text-[#006462] text-xl font-semibold mb-4">Consequences of Unacceptable Behaviour</h3>
            <p>
              Inappropriate and offensive behaviour will not be tolerated. Anyone asked to stop unacceptable behaviour is expected to comply immediately. Severe breaches of CONVOKE 7.0 Code of Conduct will result in individuals being expelled from the event without warning or refund. If appropriate, local law enforcement may be involved, and violators may be disqualified from participating in future events.
            </p>
          </section>

          <section>
            <h3 className="text-[#006462] text-xl font-semibold mb-4">Reporting</h3>
            <p>
              If you have a complaint or concern about harassment, discrimination, bullying, or any other conduct that violates the CONVOKE 7.0 Code of Conduct, please inform an event staff member immediately. If you notice someone else being harassed, please report it. You can also email us directly at convoke@cic.du.ac.in.
            </p>
          </section>

          <section>
            <p>
              The CONVOKE staff will be happy to assist those experiencing harassment to ensure safety for the duration of the event. If an individual or team is aware of an unwelcome act and chooses not to report it, they will be considered complicit in the misconduct.
            </p>
          </section>

          <section>
            <p>
              We thank all participants in advance for their help in keeping the event safe, welcoming, and respectful for all.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-sm text-gray-300">
              This Code of Conduct was last updated on February 15, 2025. We reserve the right to revise these guidelines at any time. Please check back regularly for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConductModal;