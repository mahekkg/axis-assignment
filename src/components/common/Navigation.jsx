"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBars as Menu,
  FaTimes as X,
  FaBullseye as Target,
  FaNetworkWired as Network,
  FaLayerGroup as Layers,
  FaChevronCircleRight as CircleChevronRight,
  FaChevronDown as ChevronDown,
  FaChevronRight as ChevronRight,
  FaUsers as Users,
  FaClock as Clock,
  FaBriefcase as Briefcase,
  FaHeadphones as HeadphonesIcon,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../../asesst/logo.png";
import apiLogo from "../../asesst/api-logo.png";

const menuItems = [
  {
    icon: Target,
    label: "Featured Use Cases",
    href: "/feature-use-case",
    subItems: [
      {
        label: "Corporate Payments",
        href: "/corporate-payments",
        subItems: [
          { label: "Subitem 1", href: "/subitem-1" },
          { label: "Subitem 2", href: "/subitem-2" },
        ],
      },
      { label: "Corporate Collections", href: "/corporate-collections" },
      { label: "Credit Card", href: "/credit-card" },
      { label: "Deposits", href: "/deposits" },
      { label: "Accounts", href: "/accounts" },
      { label: "Buy Now Pay Later", href: "/buy-now-pay-later" },
      { label: "Others", href: "/others" },
      { label: "PayVantage", href: "/payvantage" },
    ],
  },
  {
    icon: Network,
    label: "Product API",
    href: "/product-api",
    subItems: [
      { label: "Corporate Payments", href: "/product-api/corporate-payments" },
      {
        label: "Corporate Collections",
        href: "/product-api/corporate-collections",
      },
      { label: "UPI", href: "/product-api/upi" },
      { label: "Bill Payments", href: "/product-api/bill-payments" },
      { label: "Corporate Services", href: "/product-api/corporate-services" },
      { label: "Loans", href: "/product-api/loans" },
      { label: "Credit Card", href: "/product-api/credit-card" },
      { label: "Deposits", href: "/product-api/deposits" },
      { label: "Accounts", href: "/product-api/accounts" },
      { label: "Buy Now Pay Later", href: "/product-api/buy-now-pay-later" },
      { label: "Others", href: "/product-api/others" },
      {
        label: "Debit Card OTP Verification",
        href: "/product-api/debit-card-otp-verification",
      },
      { label: "Building Blocks", href: "/product-api/building-blocks" },
      { label: "Cards", href: "/product-api/cards" },
      { label: "Customer Services", href: "/product-api/customer-services" },
      { label: "Retail Payments", href: "/product-api/retail-payments" },
      { label: "PayVantage", href: "/product-api/payvantage" },
      { label: "Merchant", href: "/product-api/merchant" },
    ],
  },
  {
    icon: Layers,
    label: "Cross Cutting",
    href: "/cross-cutting",
    subItems: [
      { label: "Bill Payments", href: "/cross-cutting/bill-payments" },
    ],
  },
];

const headerMenuItems = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "APIs", href: "/apis" },
  { label: "Partnership", href: "/partnership" },
  { label: "Support", href: "/support" },
  { label: "Sign In", href: "/sign-in" },
];

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-[#FFFAFA] text-gray-800">
      {(sidebarOpen || headerMenuOpen) && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden"
          onClick={() => {
            setSidebarOpen(false);
            setHeaderMenuOpen(false);
          }}
        ></div>
      )}

      {/* Sidebar for smaller screens */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 lg:w-64 w-[18rem] border-[#FFF5EE] border-r-4 bg-[#97144d] transition-transform duration-300 ease-in-out rounded-r-2xl lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 bg-[#97144d] rounded-r-2xl">
          <Image src={logo} alt="logo" className="h-14 lg:h-20 w-auto" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-[#00001d] hover:text-gray-800"
          >
            <X size={24} className="text-[#FFF5EE]" />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className="flex items-center justify-between px-6 py-3 mb-2 text-[#FFFAFA] hover:bg-[#b93267] hover:text-[#FFFAFA] transition-all duration-200 rounded-lg"
                  onClick={() =>
                    windowWidth < 1024
                      ? setSubMenuOpen((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      : setSidebarOpen(false)
                  }
                >
                  <item.icon size={20} className="mr-3" />
                  {item.label}
                  {item.subItems && (
                    <span className="ml-auto">
                      {subMenuOpen[index] ? <ChevronDown /> : <ChevronRight />}
                    </span>
                  )}
                </div>

                {/* SubMenu */}
                {((windowWidth < 1024 && subMenuOpen[index]) ||
                  (hoveredItem === index && window.innerWidth >= 1024)) &&
                  item.subItems && (
                    <div className="lg:absolute lg:left-full lg:top-0 lg:ml-2 w-full lg:w-48 bg-[#97144d] rounded-lg shadow-lg z-50 lg:max-h-[22rem] lg:overflow-y-auto">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-[#d35483] transition-all duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between h-16 px-6 bg-[#FFFAFA]">
          <div className="flex items-center">
            {/* Sidebar Toggle for smaller screens */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-[#00001d] hover:text-[#00001d] lg:hidden"
            >
              <CircleChevronRight size={24} className="text-[#97144d]" />
            </button>
            <Image
              src={apiLogo}
              alt="logo"
              className="lg:h-8 h-6 w-auto px-2"
            />
          </div>

          {/* Header Menu for larger screens */}
          <div className="hidden lg:flex space-x-8">
            {headerMenuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[#00001d] hover:text-[#97144d] text-lg font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setHeaderMenuOpen(!headerMenuOpen)}
              className="p-1 text-[#00001d] hover:text-[#00001d]"
            >
              {headerMenuOpen ? (
                <X size={24} className="text-[#97144d]" />
              ) : (
                <Menu size={24} className="text-[#97144d]" />
              )}
            </button>

            {/* Mobile Header Menu */}
            {headerMenuOpen && (
              <div className="absolute right-0 top-16 mt-2 w-48 bg-[#97144d] rounded-lg shadow-lg z-50">
                {headerMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white hover:bg-[#b93267] transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
