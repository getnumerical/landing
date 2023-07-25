import Modal from "..";

const AboutModal = ({ setOpenModal, openModal, data }) => {
  return (
    <Modal
      setOpen={() => setOpenModal(!openModal)}
      open={openModal}
      title="About Us"
      addStyle={"sm:my-8 w-full md:w-8/12 sm:p-6"}
    >
      <div className="p-2 md:p-4">

        <div className="h-[24rem] overflow-auto text-sm">
          <div className="my-4">
            <p>Numerical is a pioneering company that utilizes state-of-the-art hardware and software to facilitate swift DeFi transactions on the blockchain network for day-to-day transactions. Our company is built on a deep understanding of the potential of blockchain technology to revolutionize the way we transact, and we are passionate about making this technology accessible to everyone.</p>
          </div>
          <div>
            <p>At Numerical, our mission is to promote the widespread acceptance of cryptocurrencies as a means of payment in all sectors. We believe that cryptocurrencies have the potential to revolutionize the way we transact and exchange value, making transactions faster, more secure, and more transparent. With this in mind, we are committed to developing innovative solutions that make it easy for businesses and individuals to transact with cryptocurrencies in their day-to-day operations.</p>
          </div>
          <div className="my-4">
            <p>Our team of experts is dedicated to developing cutting-edge hardware and software solutions that offer lightning-fast transaction speeds, unparalleled security, and unmatched user experience. We are continuously working to improve our technology, making it more efficient, more user-friendly, and more accessible to everyone.</p>
          </div>
          <div>
            <p>At Numerical, we believe that the future of transactions is on the blockchain, and we are committed to leading the charge in making this future a reality. Join us as we work towards a future where cryptocurrencies are accepted as a means of payment in all sectors, and transactions are faster, more secure, and more transparent than ever before.</p>
          </div>
          </div>
        <hr className="my-2" />
        <p className="text-center text-sm text-gray-800">
        If you have any concerns or inquiries, Please contact{" "}
          <span className="font-semibold text-blue-600">stanley@getnumerical.com</span>
        </p>
      </div>
    </Modal>
  );
};

export default AboutModal;
