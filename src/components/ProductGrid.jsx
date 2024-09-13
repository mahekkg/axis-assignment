"use client";
import { useState } from "react";
import ProductCard from "./common/ProductCard";
import {
  RiBankCardLine,
  RiMoneyDollarCircleLine,
  RiShoppingCartLine,
  RiBillLine,
  RiServiceLine,
  RiLifebuoyLine,
  RiFundsBoxLine,
  RiBankLine,
  RiSecurePaymentLine,
  RiBuilding2Line,
  RiAccountBoxLine,
  RiCustomerService2Line,
  RiWallet3Line,
  RiBuilding4Line,
  RiRefund2Line,
  RiShoppingBagLine,
  RiShareForwardLine,
  RiShieldUserLine,
} from "react-icons/ri";

const products = [
  {
    title: "Corporate Payments",
    icon: <RiBankLine />,
    rating: 3.4,
    votes: 14,
    description:
      "This product contains APIs that allow corporate to transfer money to their own account, third party...",
    content:
      "A range of APIs is available to enhance financial operations and management. From Instant Account Statements and Debit/Credit Notifications to comprehensive Reconciliation and Corporate Payout services, these APIs provide robust tools for seamless transactions, account management, and service requests. Additionally, APIs for Service Requests and Beneficiary Management simplify and automate banking workflows.",
  },
  {
    title: "Corporate Collections",
    icon: <RiFundsBoxLine />,
    rating: 4.1,
    votes: 7,
    description:
      "This product contains APIs that offer services for recurring deposit and fixed deposit.",
    content:
      "These APIs provide a comprehensive suite of tools to streamline financial operations, from OTP-Based Mandate Registration and Cash/Cheque Status Tracking to Branch Deposits and Virtual Account Management. They support processes like Direct Debit, Payment Gateway Integration, and Cash Deposit Machine Collections, ensuring seamless transactions and efficient account handling for businesses.",
  },
  {
    title: "UPI",
    icon: <RiMoneyDollarCircleLine />,
    rating: 3.5,
    votes: 8,
    description: "This product contains APIs that offer services for UPI.",
    content:
      "Enable businesses to integrate seamless UPI-based payment systems into their operations, offering instant and secure transactions with real-time tracking capabilities.",
  },
  {
    title: "Bill Payments",
    icon: <RiBillLine />,
    rating: 5,
    votes: 3,
    description:
      "This product contains APIs that offer services for Bill Payments.",
    content:
      "Empower businesses with APIs for handling a variety of bill payments, including utilities, mobile recharges, and subscription-based services, all with real-time updates.",
  },
  {
    title: "Corporate Services",
    icon: <RiServiceLine />,
    rating: 4,
    votes: 2,
    description:
      "This product contains APIs that offer various corporate services.",
    content:
      "Provide essential tools to manage corporate banking services, from account management and reporting to API integration for streamlined workflows.",
  },
  {
    title: "Loans",
    icon: <RiBankCardLine />,
    rating: 2,
    votes: 2,
    description: "This product contains APIs that offer loan-related services.",
    content:
      "APIs to manage loan processes, including application submission, eligibility checks, and loan status tracking, with easy integration into existing systems.",
  },
  {
    title: "Credit Card",
    icon: <RiSecurePaymentLine />,
    rating: 3.7,
    votes: 3,
    description:
      "This product contains APIs that offer credit card-related services.",
    content:
      "Seamless APIs for credit card transactions, balance inquiries, and integration with payment gateways for smooth and secure operations.",
  },
  {
    title: "Deposits",
    icon: <RiWallet3Line />,
    rating: 3.5,
    votes: 2,
    description:
      "This product contains APIs that offer deposit-related services.",
    content:
      "APIs to manage deposit services, from recurring deposits to fixed deposits, allowing seamless handling of interest rates, maturity tracking, and account summaries.",
  },
  {
    title: "Accounts",
    icon: <RiAccountBoxLine />,
    rating: 4,
    votes: 5,
    description:
      "This product contains APIs that offer services for recurring deposit and fixed deposit.",
    content:
      "APIs to manage various types of accounts, including savings, current, and fixed deposit accounts, ensuring efficient account handling and management.",
  },
  {
    title: "Buy Now Pay Later",
    icon: <RiShoppingCartLine />,
    rating: 4.5,
    votes: 2,
    description:
      "This product contains APIs that offer services for Buy Now Pay Later.",
    content:
      "APIs for 'Buy Now Pay Later' schemes, enabling businesses to offer flexible payment options to their customers, with real-time credit checks and transaction management.",
  },
  {
    title: "Others",
    icon: <RiBuilding2Line />,
    rating: 3,
    votes: 3,
    description: "This product contains APIs that offer other services...",
    content:
      "Miscellaneous APIs catering to unique use cases and specific requirements in various business operations.",
  },
  {
    title: "Debit Card OTP Verification",
    icon: <RiShieldUserLine />,
    rating: 3.5,
    votes: 2,
    description:
      "Easy-to-use APIs for quick verification of Debit Card relationship of a customer.",
    content:
      "Secure APIs to validate debit cardholder details and authenticate transactions via OTP verification for enhanced security.",
  },
  {
    title: "Building Blocks",
    icon: <RiBuilding4Line />,
    rating: 1,
    votes: 1,
    description:
      "This product contains APIs that are used in multiple applications to consume basic banking features.",
    content:
      "Reusable APIs providing foundational banking services like account setup, fund transfers, and basic transaction management.",
  },
  {
    title: "Cards",
    icon: <RiRefund2Line />,
    rating: 3,
    votes: 2,
    description:
      "This product contains APIs that offer services for recurring deposit and fixed deposit.",
    content:
      "APIs for managing card-related services, including card issuance, transaction tracking, and balance inquiries.",
  },
  {
    title: "Customer Services",
    icon: <RiCustomerService2Line />,
    rating: 2,
    votes: 1,
    description:
      "This product contains APIs that offer services for recurring deposit and fixed deposit.",
    content:
      "Support APIs to enhance customer service experiences, including account inquiries, support ticket management, and service request tracking.",
  },
  {
    title: "Retail Payments",
    icon: <RiShoppingBagLine />,
    rating: 5,
    votes: 1,
    description: "Provides APIs for retail payment.",
    content:
      "APIs enabling seamless retail payment processing for businesses, from small-scale transactions to large purchases, with integration options for payment gateways.",
  },
  {
    title: "PayVantage",
    icon: <RiShareForwardLine />,
    rating: 5,
    votes: 1,
    description: "Provides APIs for various payments.",
    content:
      "A suite of APIs offering flexible payment solutions, including multi-currency support and integrations with third-party payment platforms.",
  },
  {
    title: "Merchant",
    icon: <RiMoneyDollarCircleLine />,
    rating: 4,
    votes: 2,
    description:
      "This product contains APIs that offer merchant-related services.",
    content:
      "APIs to manage merchant services, from transaction processing to settlement, ensuring secure and efficient handling of payment activities.",
  },
  {
    title: "Cross Cutting",
    icon: <RiLifebuoyLine />,
    rating: 0,
    votes: 0,
    description:
      "This product contains APIs that can be applied across different use cases.",
    content:
      "Versatile APIs that can be applied across various business processes, ensuring flexibility and ease of integration in multiple use cases.",
  },
];

export function ProductGrid() {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Determine the range of products to display on the current page
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle page changes
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#97144d] mb-2">
        Featured Products
      </h2>
      <p className="text-gray-600 mb-8">
        Explore a wide range of APIs and choose the ones best suited for your
        use case
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex items-center rounded-full bg-[#97144d] py-2 px-4 space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-white hover:bg-[#b93267] rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white border-2 ${
                currentPage === index + 1
                  ? "border-white bg-[#97144d]"
                  : "border-transparent hover:bg-[#b93267]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-white hover:bg-[#b93267] rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
