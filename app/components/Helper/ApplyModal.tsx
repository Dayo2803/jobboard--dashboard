"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const ApplyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [cv, setCv] = useState<File | null>(null);
    const [details, setDetails] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!cv) {
            toast.error("Please upload your CV.");
            return;
        }
        toast.success("Application submitted successfully!");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                <h2 className="text-lg font-semibold mb-4">Apply for this Job</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="w-full p-2 border rounded mb-4"
                        placeholder="Enter your details..."
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                    <input
                        type="file"
                        className="mb-4"
                        onChange={(e) => setCv(e.target.files ? e.target.files[0] : null)}
                    />
                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyModal;
