"use client";
import { ProductCard } from "./common/ProductCard";
import {
  CreditCard,
  Banknote,
  Building2,
  Wallet,
  PiggyBank,
  CreditCard as CreditCardIcon,
  ShoppingBag,
  DotsHorizontal,
  UserCheck,
  Gem,
  UsersRound,
  BadgeDollarSign,
  Layers,
  BookText,
} from "lucide-react";

const products = [
  {
    icon: <Banknote className="w-6 h-6" />,
    title: "Corporate Payments",
    rating: 3.4,
    votes: 14,
    description:
      "This product contains APIs that allow corporate to transfer money to their own account, third party...",
    content:
      "A range of APIs is available to enhance financial operations and management. From Instant Account Statements and Debit/Credit Notifications to comprehensive Reconciliation and Corporate Payout services, these APIs provide robust tools for seamless transactions, account management, and service requests. Additionally, APIs for Service Requests and Beneficiary Management simplify and automate banking workflows.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Corporate Collections",
    rating: 4.1,
    votes: 7,
    description:
      "This product contains APIs that offer services for recurring deposit and fixed deposit.",
    content:
      "These APIs provide a comprehensive suite of tools to streamline financial operations, from OTP-Based Mandate Registration and Cash/Cheque Status Tracking to Branch Deposits and Virtual Account Management. They support processes like Direct Debit, Payment Gateway Integration, and Cash Deposit Machine Collections, ensuring seamless transactions and efficient account handling for businesses.",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "UPI",
    rating: 3.5,
    votes: 8,
    description: "This product contains APIs that offer services for UPI",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Bill Payments",
    rating: 5,
    votes: 3,
    description:
      "This product contains APIs that offer services for Bill Payments",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Corporate Services",
    rating: 4,
    votes: 2,
    description:
      "This product contains APIs that offer various corporate services",
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    title: "Loans",
    rating: 2,
    votes: 2,
    description: "This product contains APIs that offer loan-related services",
  },
  {
    icon: <CreditCardIcon className="w-6 h-6" />,
    title: "Credit Card",
    rating: 3.7,
    votes: 3,
    description:
      "This product contains APIs that offer credit card-related services",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Deposits",
    rating: 3.5,
    votes: 2,
    description:
      "This product contains APIs that offer deposit-related services",
  },
  {
    icon: <Banknote className="w-6 h-6" />,
    title: "Accounts",
    rating: 4,
    votes: 5,
    description:
      "This product contains APIs that offer services for recurring deposit and fixed deposit.",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Buy Now Pay Later",
    rating: 4.5,
    votes: 2,
    description:
      "This product contains APIs that offer services for Buy Now Pay Later",
  },
  {
    icon: <DotsHorizontal className="w-6 h-6" />,
    title: "Others",
    rating: 3,
    votes: 3,
    description: "This product contains APIs that offer other services...",
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Debit Card OTP Verification",
    rating: 3.5,
    votes: 2,
    description:
      "Easy-to-use APIs for quick verification of Debit Card relationship of a customer",
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: "Building Blocks",
    rating: 1,
    votes: 1,
    description:
      "This product contains APIs that are used in multiple applications to consume basic banking features.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Cards",
    rating: 3,
    votes: 2,
    description:
      "This product contains APIs that offer services for recurring deposit and fixed deposit.",
  },
  {
    icon: <UsersRound className="w-6 h-6" />,
    title: "Customer Services",
    rating: 2,
    votes: 1,
    description:
      "This product contains APIs that offer services for recurring deposit and fixed deposit.",
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "Retail Payments",
    rating: 5,
    votes: 1,
    description: "Provides APIs for retail payment",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "PayVantage",
    rating: 5,
    votes: 1,
    description: "Provides APIs for various payments.",
  },
  {
    icon: <BookText className="w-6 h-6" />,
    title: "Merchant",
    rating: 4,
    votes: 2,
    description:
      "This product contains APIs that offer merchant-related services.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Cross Cutting",
    rating: 0,
    votes: 0,
    description:
      "This product contains APIs that can be applied across different use cases.",
  },
];

export function ProductGrid() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-pink-600 mb-2">
        Featured Products
      </h2>
      <p className="text-gray-600 mb-8">
        Explore wide range of APIs and choose required APIs that are best suited
        for your use case
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
