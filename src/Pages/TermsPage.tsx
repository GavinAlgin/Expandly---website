import { NavLink } from 'react-router-dom';

const TermsPage = () => {
  return (
    <div className="text-white px-4 py-8 sm:px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="absolute top-6 left-6">
            <NavLink
                to="/"
                className="group inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-all">
                <svg
                    className="mr-1 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back
            </NavLink>
        </div>
      <h1 className="text-3xl font-bold text-center mb-6">Terms & Conditions</h1>

      <p className="mb-6 text-center">
        Acceptance of quotation and/or payment of deposit will be taken as acceptance of the following terms and conditions. 
        Please ensure you have read and fully understood the information below. Contact us if anything is unclear.
      </p>

      <ol className="space-y-6 list-decimal list-inside">
        <li>
          All costs provided EXCLUDE VAT where applicable and are valid for thirty days from the date of the quotation.
        </li>

        <li>
          The quoted costs are estimates based on expected time, creativity, and production needs. If requirements change significantly, additional charges may apply (with prior notice).
        </li>

        <li>
          No work begins until Techloom has received both project approval and a 50% deposit (unless otherwise agreed in writing). Deposits are non-refundable once work begins.
        </li>

        <li>
          The remaining balance is due upon completion and invoicing. Late payments (beyond 14 days) may incur an 8% surcharge.
        </li>

        <li>
          Staged payments must be made in full at the end of each stage before the next begins. This applies to 50/50 split payment structures as well.
        </li>

        <li>
          If a project exceeds the estimated timeline or extends beyond 12 weeks, Techloom may invoice 25% of any outstanding balance, with the rest due at completion.
        </li>

        <li>
          Third-party services (e.g. printing) require up-front payment of 100% before proceeding.
        </li>

        <li>
          Unless agreed otherwise, invoices are due within 14 days. Non-compliance may delay project delivery.
        </li>

        <li>
          Work typically begins within ten business days of deposit. Delays caused by client-side content or approvals may shift timelines.
        </li>

        <li>
          We offer at least two creative options. If more than three revisions are required, additional charges may apply.
        </li>

        <li>
          After three rounds of amends, further revisions may be chargeable.
        </li>

        <li>
          Client sign-off is required at each stage (e.g. before printing or publishing). Post-approval changes may incur extra fees.
        </li>

        <li>
          Occasional project meetings are included. Extended or additional meetings may be charged.
        </li>

        <li>
          A standard disbursement fee may apply to cover in-house printing, travel, postage, etc.
        </li>

        <li>
          Quotes exclude certain extras (e.g. VAT, print, stock images, copywriting, hosting, etc.) unless specifically included.
        </li>

        <li>
          Clients should provide most copy and imagery. Techloom can assist or provide full services for an additional fee.
        </li>

        <li>
          While clients may use their own print suppliers, Techloom cannot guarantee quality control for third-party services.
        </li>

        <li>
          We collaborate with a network of professionals (e.g. illustrators, photographers) to enhance our services.
        </li>

        <li>
          Color variation is expected between screens, prints, and proofs. We recommend requesting wet-proofs for color accuracy at additional cost.
        </li>

        <li>
          Until full payment is received, Techloom retains copyright and intellectual property of all work. Final ownership transfers upon full payment.
        </li>

        <li>
          Clients are responsible for ensuring no copyright/trademark infringement. Techloom delivers original work to the best of its knowledge.
        </li>

        <li>
          Final assets (e.g. print-ready PDFs) can be provided upon request. Raw source files may require additional charges.
        </li>

        <li>
          Techloom will maintain confidentiality and protect client information.
        </li>

        <li>
          Clients agree to indemnify Techloom from losses, errors, or delays, especially those involving third-party services.
        </li>

        <li>
          Defects or issues must be reported within 30 days of final invoice. After that period, Techloom is not liable.
        </li>

        <li>
          Clients own the web design but not proprietary code or backend systems unless explicitly agreed otherwise.
        </li>

        <li>
          Techloom offers web hosting, particularly for CMS or eCommerce sites. While uptime is prioritized, we cannot guarantee 100% availability.
        </li>

        <li>
          Work produced by Techloom may include a small acknowledgment unless otherwise agreed. Work may be used for portfolio purposes.
        </li>

        <li>
          These terms override any previous agreements. Techloom reserves the right to update them at any time. Statutory rights remain unaffected.
        </li>
      </ol>
    </div>
  );
};

export default TermsPage;
