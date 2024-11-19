import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

// Input Component
const Input = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <input
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            {...props}
        />
    </div>
);

// Button Component
const Button = ({ loading, children, variant = 'primary', ...props }) => (
    <button
        className={`
      w-full px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2
      ${variant === 'primary' ? 'bg-orange-500 text-white hover:bg-orange-600' : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50'}
      ${loading ? 'opacity-75 cursor-not-allowed' : ''}
    `}
        disabled={loading}
        {...props}
    >
        {loading ? (
            <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
        ) : children}
    </button>
);

// Interest Checkboxes Component
const InterestCheckboxes = ({ selected, onChange }) => {
    const interests = [
        "Smart study planning",
        "Mental health support",
        "Collaborative learning",
        "Audio learning features",
        "Real-time feedback",
        "Peer mentoring"
    ];

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                I'm interested in:
            </label>
            <div className="space-y-2">
                {interests.map((interest) => (
                    <label key={interest} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={selected.includes(interest)}
                            onChange={() => {
                                const newInterests = selected.includes(interest)
                                    ? selected.filter(i => i !== interest)
                                    : [...selected, interest];
                                onChange(newInterests);
                            }}
                            className="rounded text-orange-500 focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-600">{interest}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

// Progress Bar Component
const ProgressBar = ({ steps, currentStep }) => (
    <div className="relative">
        <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
                <div
                    key={step}
                    className={`flex flex-col items-center ${
                        index <= currentStep ? 'text-orange-500' : 'text-gray-400'
                    }`}
                >
                    <div className={`
            w-8 h-8 rounded-full flex items-center justify-center
            ${index <= currentStep ? 'bg-orange-100' : 'bg-gray-100'}
          `}>
                        {index < currentStep ? (
                            <Check className="w-5 h-5" />
                        ) : (
                            <span>{index + 1}</span>
                        )}
                    </div>
                    <span className="text-sm mt-1">{step}</span>
                </div>
            ))}
        </div>
        <div className="absolute top-4 left-0 h-0.5 bg-gray-200 w-full -z-10" />
        <div
            className="absolute top-4 left-0 h-0.5 bg-orange-500 transition-all -z-10"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
    </div>
);

// Success Message Component
const SuccessMessage = ({ onClose }) => (
    <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-8"
    >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Thank you for joining!
        </h3>
        <p className="text-gray-600 mb-6">
            We'll keep you updated on our progress and let you know when we launch.
        </p>
        <Button variant="secondary" onClick={onClose}>
            Close
        </Button>
    </motion.div>
);

// Main Waitlist Component
const WaitlistForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interests: [],
        institution: ''
    });

    const steps = ["Basic Info", "Interests", "Review"];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (step < steps.length - 1) {
            setStep(step + 1);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Replace with your actual API endpoint
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to join waitlist');
            }

            setSuccess(true);
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const modal = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {success ? (
                            <SuccessMessage onClose={() => setIsOpen(false)} />
                        ) : (
                            <>
                                <div className="mb-8">
                                    <ProgressBar steps={steps} currentStep={step} />
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <AnimatePresence mode="wait">
                                        {step === 0 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -20, opacity: 0 }}
                                                className="space-y-4"
                                            >
                                                <Input
                                                    label="Name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    required
                                                />
                                                <Input
                                                    label="Email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    required
                                                />
                                                <Input
                                                    label="Institution"
                                                    value={formData.institution}
                                                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                                                    required
                                                />
                                            </motion.div>
                                        )}

                                        {step === 1 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -20, opacity: 0 }}
                                            >
                                                <InterestCheckboxes
                                                    selected={formData.interests}
                                                    onChange={(interests) => setFormData({ ...formData, interests })}
                                                />
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -20, opacity: 0 }}
                                                className="space-y-4"
                                            >
                                                <div className="bg-gray-50 p-4 rounded-lg">
                                                    <h3 className="font-medium mb-4">Review Your Information</h3>
                                                    <dl className="space-y-2">
                                                        <div>
                                                            <dt className="text-sm text-gray-500">Name</dt>
                                                            <dd className="text-gray-900">{formData.name}</dd>
                                                        </div>
                                                        <div>
                                                            <dt className="text-sm text-gray-500">Email</dt>
                                                            <dd className="text-gray-900">{formData.email}</dd>
                                                        </div>
                                                        <div>
                                                            <dt className="text-sm text-gray-500">Institution</dt>
                                                            <dd className="text-gray-900">{formData.institution}</dd>
                                                        </div>
                                                        <div>
                                                            <dt className="text-sm text-gray-500">Interests</dt>
                                                            <dd className="text-gray-900">
                                                                <ul className="list-disc ml-4">
                                                                    {formData.interests.map(interest => (
                                                                        <li key={interest}>{interest}</li>
                                                                    ))}
                                                                </ul>
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {error && (
                                        <div className="text-red-500 text-sm">{error}</div>
                                    )}

                                    <div className="flex gap-3">
                                        {step > 0 && (
                                            <Button
                                                variant="secondary"
                                                onClick={() => setStep(step - 1)}
                                                type="button"
                                            >
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            type="submit"
                                            loading={loading}
                                        >
                                            {step === steps.length - 1 ? 'Submit' : 'Next'}
                                        </Button>
                                    </div>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>
                Join Waitlist
            </Button>
            {modal}
        </>
    );
};

export default WaitlistForm;