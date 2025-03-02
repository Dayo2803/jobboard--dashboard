import JobCard from '@/app/components/Helper/JobCard';
import { authOptions } from '@/auth';
import JobData from '@/data';
import { getServerSession } from 'next-auth';
import React from 'react';
import ApplyButton from '@/app/components/Helper/ApplyButton';
import Link from 'next/link';
import JobDetailsData from '@/jobdescription';

interface JobDetailsProps {
    params: { id: string }; 
}

const JobDetails = async ({ params }: JobDetailsProps) => {
    const { id } = params; 
    const singleJob = JobData.find((job) => job.id.toString() === id);
    const jobDescription = JobDetailsData.find((job) => job.id.toString() === id);
    const session = await getServerSession(authOptions);

    if (!singleJob || !jobDescription) {
        return <p className="text-center mt-10 text-gray-500">Job not found</p>;
    }

    const relatedJobs = JobData.filter((job) => job.id.toString() !== id).slice(0, 4);

    return (
        <div className="mt-20 mb-12">
            <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
                <div className="flex-[0.7]">
                    <JobCard job={singleJob} />
                </div>
                {session ? (
                    <ApplyButton session={session} />
                ) : (
                    <Link href='/signup'>
                        <button className='px-8 py-3 bg-emerald-600 rounded-full text-white transition-all hover:bg-emerald-700'>
                            Sign Up To Apply
                        </button>
                    </Link>
                )}
            </div>

            <div className="mt-16 w-[80%] mx-auto">
                <h1 className="text-[24px] font-semibold mb-4">Job Description</h1>
                <p className="text-black text-opacity-70">{jobDescription.description}</p>

                <h2 className="text-[20px] font-semibold mt-6">Key Responsibilities</h2>
                <ul className="list-disc pl-5 mt-2 text-black text-opacity-70 space-y-2">
                    {jobDescription.responsibilities?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h2 className="text-[20px] font-semibold mt-6">Required Skills</h2>
                <ul className="list-disc pl-5 mt-2 text-black text-opacity-70 space-y-2">
                    {jobDescription.skills?.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>

                {relatedJobs.length > 0 && (
                    <>
                        <h1 className="text-[22px] mt-12 font-semibold">Related Jobs</h1>
                        <div className="mt-6 grid md:grid-cols-2 gap-6">
                            {relatedJobs.map((job) => (
                                <Link 
                                    href={`/job/jobdetails/${job.id}`} 
                                    key={job.id} 
                                    className='block transform transition-all hover:scale-[1.02]'
                                >
                                    <JobCard job={job} />
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default JobDetails;
