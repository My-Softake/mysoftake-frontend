import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto md:px-10 px-4 py-8 mt-20">
        
        {/* Header */}
        <div className="">
           
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          
        </div>

        {/* Introduction */}
        <div className="">
          <div className="mb-8 mt-6">
            <p className="text-gray-700 mb-4">
              At MultiService Agency , we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
            <p className="text-gray-700">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our services.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1 Personal Information</h3>
            <p className="text-gray-700 mb-3">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Register for an account</li>
              <li>Use our services</li>
              <li>Contact us for support</li>
              <li>Make a payment</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Name and contact details (email, phone, address)</li>
              <li>Business information (company name, tax ID)</li>
              <li>Payment information (billing address, payment method)</li>
              <li>Service preferences and requirements</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-3">
              When you use our services, we automatically collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages you visit and time spent</li>
              <li>Referring website addresses</li>
              <li>Service usage patterns</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.3 Service-Specific Information</h3>
            <p className="text-gray-700 mb-3">
              Depending on the service category, we may collect additional information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Manufacturing:</strong> Product specifications, quality requirements</li>
              <li><strong>Export/Import:</strong> Shipping details, customs information</li>
              <li><strong>Transport:</strong> Delivery addresses, package details</li>
              <li><strong>Travel:</strong> Passport information, travel preferences</li>
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process your transactions and payments</li>
              <li>Communicate with you about services and updates</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent activities</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </div>

          {/* 3. Information Sharing and Disclosure */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-3">
              We do not sell your personal information. We may share your information with:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">3.1 Service Providers</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Payment processors</li>
              <li>Shipping and logistics partners</li>
              <li>Cloud hosting providers</li>
              <li>Customer support services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Legal Requirements</h3>
            <p className="text-gray-700 mb-3">
              We may disclose your information if required by law:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To comply with legal obligations</li>
              <li>To protect our rights and property</li>
              <li>To prevent or investigate wrongdoing</li>
              <li>To ensure safety of our users and the public</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Business Transfers</h3>
            <p className="text-gray-700">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
            </p>
          </div>

          {/* 4. Data Security */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-3">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure servers and firewalls</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Regular data backups</li>
            </ul>
            <p className="text-gray-700 mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
            </p>
          </div>

          {/* 5. Data Retention */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 mb-3">
              We retain your personal information only for as long as necessary:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Account information:</strong> Until you request deletion or 2 years after account inactivity</li>
              <li><strong>Transaction records:</strong> 7 years for tax and legal compliance</li>
              <li><strong>Service records:</strong> Duration of service plus 3 years</li>
              <li><strong>Marketing data:</strong> Until you unsubscribe or request removal</li>
            </ul>
          </div>

          {/* 6. Your Rights */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-3">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          {/* 7. Cookies and Tracking Technologies */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-3">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Remember your preferences</li>
              <li>Analyze website traffic</li>
              <li>Improve user experience</li>
              <li>Provide personalized content</li>
            </ul>
            <p className="text-gray-700">
              You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our services.
            </p>
          </div>

          {/* 8. Third-Party Links */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700">
              Our services may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          {/* 9. Children's Privacy */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Childrens Privacy</h2>
            <p className="text-gray-700">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </div>

          {/* 10. International Data Transfers */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 mb-3">
              Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws. By using our services, you consent to this transfer.
            </p>
            <p className="text-gray-700">
              We ensure appropriate safeguards are in place for international data transfers in compliance with applicable laws.
            </p>
          </div>

          {/* 11. Changes to This Policy */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 mb-3">
              We may update this Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Sending an email notification</li>
              <li>Updating the Effective Date at the top</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes are effective when posted.
            </p>
          </div>

          {/* 12. Contact Us */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> privacy@multiservice.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +880 1234 567890</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Business Street, Dhaka, Bangladesh</p>
              <p className="text-gray-700"><strong>Data Protection Officer:</strong> dpo@multiservice.com</p>
            </div>
          </div>
 
          

        </div>
 
        
      </div>
    </div>
  );
}