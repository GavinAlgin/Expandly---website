import { NavLink } from 'react-router-dom';

const PrivacyPage = () => {
  return (
    <div className="text-white px-4 py-8 sm:px-6 lg:px-12 max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="absolute top-6 left-6">
            <NavLink
            to="/"
            className="group inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-all"
            >
            <svg
                className="mr-1 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
            </NavLink>
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>

        <p className="mb-6 text-center">
            This Privacy Policy governs how we collect, store, manage, and protect your information. Please read it carefully.
        </p>

        <ol className="space-y-6 list-decimal list-inside text-white">
            <li>
            This policy covers www.wearepolar.com and is served by Polar Creative Studio Limited. It outlines our compliance with GDPR, DPA, and PECR regulations.
            </li>

            <li>
            We explain how we handle user privacy, collect and store data, and protect your rights. Specific features may include additional privacy details.
            </li>

            <li>
            Our website complies with the Data Protection Act (1998) and GDPR as of May 2018. We will update this policy based on regulatory changes like Brexit.
            </li>

            <li>
            Cookies are used to enhance user experience. Users can accept or reject cookies using browser settings or our cookie control system.
            </li>

            <li>
            Cookies are small files saved to your device to track usage. You can block cookies manually in your browser if you prefer.
            </li>

            <li>
            We use website analytics software to track visitors and usage patterns. These do not collect personal details.
            </li>

            <li>
            Any downloads provided on the website are used at your own risk. We recommend scanning all downloads using antivirus software.
            </li>

            <li>
            We are not responsible for downloads from third-party websites. Please verify their authenticity before downloading.
            </li>

            <li>
            Users who contact us do so at their own discretion. Any personal details provided will be kept secure and confidential.
            </li>

            <li>
            If permitted, we may use your details to send marketing communications, as per the regulations stated above.
            </li>

            <li>
            We operate an opt-in mailing list. Users can unsubscribe at any time using automated links in emails or by contacting us.
            </li>

            <li>
            Marketing emails may include tracking for performance analysis. This may include geolocation, link clicks, and open rates.
            </li>

            <li>
            External links are included for your benefit, but we cannot verify the content of third-party sites. Click external links at your own risk.
            </li>

            <li>
            Shortened URLs may be used on social media or the website. Always verify such links before clicking.
            </li>

            <li>
            We are not liable for any damages resulting from visiting third-party websites linked from ours.
            </li>

            <li>
            We have official social media accounts. Users should verify our profiles before sharing personal info.
            </li>

            <li>
            We will never request personal data through social media unless authorized by the user.
            </li>

            <li>
            Social sharing buttons may be present and used at your discretion. Content may appear on your social profile as a result.
            </li>

            <li>
            We follow platform guidelines and expect users to engage respectfully when interacting with us on social media.
            </li>
        </ol>
    </div>
  );
};

export default PrivacyPage;
