"use client";

import Link from "next/link";
import React, { useEffect, useState, use } from "react";
import { useForm } from "react-hook-form";

const CareerDetailsPage = ({ params }) => {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  //   form valideation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   console.log(data); 
  };
  //   form valideation end
  const [careerForm, setCareerForm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/CareerData.json");
        const data = await response.json();
        const singleJob = data.find((item) => String(item.id) === String(id));
        setCareerForm(singleJob);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJobData();
    }
  }, [id]);

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500">
        Loading Job Details...
      </div>
    );
  if (!careerForm)
    return <div className="text-center py-20 text-red-500">Job Not Found!</div>;

  return (
    <div className="bg-white min-h-screen pt-16">
      <div
        className="py-10 md:py-20"
        style={{
          background: "linear-gradient(135deg, #17386f 0%, #2b59cf 100%)",
        }}
      >
        <div className="container mx-auto px-4 md:px-10">
          {/* Heading */}
          <h1 className="font-semibold text-white text-3xl sm:text-4xl md:text-5xl pt-6 md:pt-10 text-center md:text-left">
            Career Application Form
          </h1>

          {/* Divider & Text */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 mt-8">
            {/* Line */}
            <div className="h-1 w-32 sm:w-48 md:w-[450px] bg-white hidden md:block"></div>

            {/* Description */}
            <p className="font-normal text-sm sm:text-base text-white max-w-xl text-center md:text-left">
              Please fill in all the necessary information before submitting for
              the position you are interested in
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 py-10">
        {/* Title and Header Info */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {careerForm.jobTitle}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
            <span>
              <strong>Location:</strong> {careerForm.location}
            </span>
            <span>|</span>
            <span>
              <strong>Job Type:</strong> {careerForm.jobType}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            {careerForm.description}
          </p>
        </div>

        <div className="space-y-10">
          {/* Educational Requirements */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3  ">
              Educational Requirements:
            </h2>
            <p className="text-gray-700 ml-1">
              {careerForm.educationalRequirements}
            </p>
            <p className="text-gray-700 ml-1 mt-1">
              <strong>Experience:</strong> {careerForm.experience}
            </p>
          </div>

          {/* Job Responsibilities */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3  ">
              Job Responsibilities:
            </h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              {careerForm.jobResponsibilities?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Additional Requirements */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 ">
              Additional Requirements:
            </h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              {careerForm.additionalRequirements?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="font-bold text-xl md:text-2xl">
              Link:
              <Link
                href={careerForm.jobLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-2 text-blue-600 cursor-pointer hover:underline"
              >
                {careerForm.jobLink}
              </Link>
            </h3>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="container mx-auto px-10  pb-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">
          Application Form
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Name*</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className="border border-gray-300 p-3 py-5 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Gender*</label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="border border-gray-300 p-3 py-5 rounded focus:outline-none focus:border-blue-500 bg-white"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">
              Date of Birth*
            </label>
            <input
              type="date"
              {...register("dob", { required: "Date of birth is required" })}
              className="border border-gray-300 p-3 rounded py-5 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Phone*</label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone is required",
                minLength: {
                  value: 10,
                  message: "Invalid phone number",
                },
              })}
              placeholder="+880"
              className="border border-gray-300 p-3 py-5 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">Email*</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="example@mail.com"
              className="border border-gray-300 p-3 py-5 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Nationality */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-gray-700">
              Nationality*
            </label>
            <input
              type="text"
              {...register("nationality", {
                required: "Nationality is required",
              })}
              placeholder="Bangladeshi"
              className="border border-gray-300 p-3 py-5 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.nationality && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nationality.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-2 text-gray-700">Address*</label>
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              placeholder="Full Address"
              className="border border-gray-300 p-3 py-6 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Cover Letter */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-2 text-gray-700">
              Cover Letter
            </label>
            <textarea
              rows="5"
              {...register("coverLetter")}
              placeholder="Tell us why you're a good fit..."
              className="border border-gray-300 p-3 py-10 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Attach CV */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-2 text-gray-700">
              Attach CV* (PDF only)
            </label>
            <input
              type="file"
              {...register("cv", {
                required: "CV is required",
              })}
              accept=".pdf"
              className="border border-dashed border-gray-400 p-6 py-16 rounded bg-gray-50 text-center cursor-pointer"
            />
            {errors.cv && (
              <p className="text-red-500 text-sm">{errors.cv.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full md:w-max bg-[#27A0DB] text-white px-12 py-4 rounded font-bold "
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerDetailsPage;
