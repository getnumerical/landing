import Modal from "..";

const PrivacyModal = ({ setOpenModal, openModal, data }) => {
  return (
    <Modal
      setOpen={() => setOpenModal(!openModal)}
      open={openModal}
      title="Privacy Policy"
      addStyle={"sm:my-8 w-full md:w-8/12 sm:p-6"}
    >
      <div className="p-2 md:p-4">

        <div className="h-[24rem] overflow-auto text-sm">
          <p className="my-4 text-blue-600">Effective Date: July 25, 2023</p>
          <p>At Numerical Limited, a registered company in the United Kingdom, we are committed to safeguarding your privacy and protecting your personal information. This Privacy Policy outlines how we collect, use, and secure the information you provide when using our website. By using this version of our site and providing your email address and contact details, you agree to the terms described in this policy.</p>
          <div className="my-4">
            <h4 className="font-semibold mb-1">1. Information We Collect:</h4>
            <p>We will only collect your email address and contact details, including your name and phone number, with your explicit consent. This information will be collected solely for the purpose of sending you updates on our product releases, followed hypes, and other pertinent information related to our products.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">2. Use of Your Information:</h4>
            <p>Your email address and contact details will be used to keep you informed about updates on our product releases and other exciting developments related to our products. We will not share, sell, or disclose your personal information to any third parties without your consent.</p>
          </div>
          <div className="my-4">
            <h4 className="font-semibold mb-1">3. Data Retention:</h4>
            <p>This Privacy Policy is specific to this version of our site. Once the main product goes live, this policy will no longer be in effect, and a new policy will be implemented to address data collection and usage for the live product. However, your consent to receive updates will be carried forward under the new policy, ensuring uninterrupted communication with you.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">4. Data Security:</h4>
            <p>We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, it is essential to understand that no method of data transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.</p>
          </div>
          <div className="my-4">
            <h4 className="font-semibold mb-1">5. Your Rights:</h4>
            <p>You have the right to access, correct, update, or delete your personal information at any time. If you wish to exercise any of these rights or have any questions about our privacy practices, please contact us using the provided contact details.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">6. Changes to this Privacy Policy:</h4>
            <p>We reserve the right to modify this Privacy Policy at any time. We will post any changes on this page, and we will let you know of any significant updates via email. Please review this policy regularly to stay informed about any changes.</p>
          </div>
         <p className="my-4">By providing your email address and contact details, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. If you do not agree with any aspect of this policy, please do not provide your information.</p>
          <p className="text-gray-600 my-4">Thank you for choosing Numerical Limited. We look forward to keeping you updated on our exciting product developments!</p>
          {data}
          </div>
        <hr className="my-2" />
        <p className="text-center text-sm text-gray-800">
        If you have any concerns or inquiries regarding our privacy practices, Please contact{" "}
          <span className="font-semibold text-blue-600">stanley@getnumerical.com</span>
        </p>
      </div>
    </Modal>
  );
};

export default PrivacyModal;
