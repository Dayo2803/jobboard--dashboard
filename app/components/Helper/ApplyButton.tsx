'use client'

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { X } from 'lucide-react';
import { Session } from "next-auth"; // Ensure Session type is imported

interface ApplyButtonProps {
    session: Session | null;
}

const ApplyButton: React.FC<ApplyButtonProps> = ({ session }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', cv: null });

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.cv) {
            toast.error("Please fill in all fields and upload your CV.");
            return;
        }

        toast.success("Application Successful!");
        closeModal();
    };

    return (
        <div>
            {session ? (
                <button 
                    onClick={openModal} 
                    className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full transition-all hover:bg-green-700 shadow-lg"
                >
                    Apply Now
                </button>
            ) : (
                <p className="text-red-500 font-semibold">Please sign in to apply</p>
            )}

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white p-6 rounded-2xl shadow-2xl w-[400px] relative"
                    >
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-semibold mb-5 text-center text-gray-800">Apply for this Job</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Full Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 outline-none transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 outline-none transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">Upload CV</label>
                                <input 
                                    type="file" 
                                    name="cv"
                                    onChange={handleChange} 
                                    className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400 outline-none transition-all"
                                    accept=".pdf,.doc,.docx"
                                    required
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                            >
                                Submit Application
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}

            <ToastContainer position="top-center"/>
        </div>
    );
}

export default ApplyButton;
