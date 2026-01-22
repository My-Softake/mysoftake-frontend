"use client";

import Link from 'next/link';
import { useTranslations } from "next-intl";

export default function TermsAndService() {
  const t = useTranslations("TermsPage");

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto md:px-10 px-2 py-8">
        
        {/* Header */}
        <div className="mb-12">
        
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">{t("title")}</h1>
          <p className="text-gray-600">{t("lastUpdated")}</p>
          <div className="border-b border-gray-300 pt-4"></div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded">
          <p className="text-gray-800">
            <strong>{t("importantNotice")}</strong>
          </p>
        </div>

        {/* Main Content */}
        <div className=" p-8">
          
          {/* 1. Acceptance of Terms */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("section1Title")}</h2>
            <p className="text-gray-700 mb-3">
              {t("section1Desc")}
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {t.raw("section1List").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 2. Service Categories */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Categories</h2>
            <p className="text-gray-700 mb-3">
              Our agency provides services across six main categories. Specific terms apply to each category:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Manufacturing & Production:</strong> All manufacturing services are subject to project-specific agreements.</li>
              <li><strong>Export & Import:</strong> International trade services are governed by applicable international laws and regulations.</li>
              <li><strong>Information Technology:</strong> IT services include specific SLA agreements for each project.</li>
              <li><strong>Transport & Logistics:</strong> Transportation services follow industry-standard liability limits.</li>
              <li><strong>Travel & Tourism:</strong> Travel bookings are subject to provider terms and cancellation policies.</li>
              <li><strong>Construction & Infrastructure:</strong> Construction projects require separate detailed contracts.</li>
            </ul>
          </div>

          {/* 3. User Responsibilities */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-3">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete information for service requests</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Pay all applicable fees in a timely manner</li>
              <li>Respect intellectual property rights of all parties</li>
            </ul>
          </div>

          {/* 4. Payment Terms */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-700 mb-3">
              All services are subject to the following payment terms:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Quotes are valid for 30 days from the date of issuance</li>
              <li>A 30% advance payment is required for project initiation</li>
              <li>Balance payments are due as per agreed milestones</li>
              <li>Late payments may incur interest charges of 2% per month</li>
              <li>All prices are exclusive of applicable taxes</li>
              <li>Refund policies vary by service category</li>
            </ul>
          </div>

          {/* 5. Intellectual Property */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-3">
              Intellectual property rights are protected as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All proprietary information remains the property of MultiService Agency</li>
              <li>Client-provided materials remain the property of the client</li>
              <li>Deliverables include specified usage rights as per contract</li>
              <li>Unauthorized use of copyrighted material is strictly prohibited</li>
              <li>Confidentiality agreements protect sensitive information</li>
            </ul>
          </div>

          {/* 6. Liability and Limitations */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liability and Limitations</h2>
            <p className="text-gray-700 mb-3">
              Our liability is limited as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Maximum liability is limited to the service fee paid</li>
              <li>Force majeure events exempt us from liability</li>
              <li>Third-party service issues are not our responsibility</li>
              <li>Proper insurance is required for high-risk projects</li>
            </ul>
          </div>

          {/* 7. Termination */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-3">
              Either party may terminate services under these conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>30 days written notice for ongoing services</li>
              <li>Immediate termination for breach of terms</li>
              <li>Termination fees may apply as per contract</li>
              <li>Outstanding payments become immediately due</li>
              <li>Data retention follows applicable laws</li>
            </ul>
          </div>

          {/* 8. Governing Law */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
            <p className="text-gray-700 mb-3">
              These terms are governed by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Bangladeshi law for domestic transactions</li>
              <li>UNCITRAL for international transactions</li>
              <li>Disputes resolved through arbitration in Dhaka</li>
              <li>Arbitration awards are binding and final</li>
              <li>English version of terms prevails</li>
            </ul>
          </div>

          {/* 9. Definitions */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Definitions</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Services:</strong> Refers to any and all services provided by MultiService Agency across all categories.</li>
              <li><strong>Client:</strong> Any individual or entity that uses or purchases our services.</li>
              <li><strong>Agreement:</strong> The complete set of terms, conditions, and specific service contracts.</li>
              <li><strong>Force Majeure:</strong> Unforeseeable circumstances preventing service fulfillment.</li>
            </ul>
          </div>

          
 

        </div>

        

      </div>
    </div>
  );
}