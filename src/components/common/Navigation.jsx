"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Target,
  Network,
  Layers,
  CircleChevronRight,
  ChevronDown,
  ChevronRight,
  Users,
  Clock,
  Briefcase,
  HeadphonesIcon,
} from "lucide-react";
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
      {
        label: "Corporate Payments",
        href: "/product-api/corporate-payments",
      },
      {
        label: "Corporate Collections",
        href: "/product-api/corporate-collections",
      },
      { label: "UPI", href: "/product-api/upi" },
      { label: "Bill Payments", href: "/product-api/bill-payments" },
      {
        label: "Corporate Services",
        href: "/product-api/corporate-services",
      },
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

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const [windowWidth, setWindowWidth] = useState(0);

  const headerMenuItems = [
    { icon: Clock, label: "TMS", href: "/tms" },
    { icon: Briefcase, label: "AMS", href: "/ams" },
    { icon: HeadphonesIcon, label: "CCS", href: "/ccs" },
  ];

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Update window width on resize
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-[#FFFAFA] text-gray-800">
      {/* Overlay for mobile */}
      {(sidebarOpen || headerMenuOpen) && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden"
          onClick={() => {
            setSidebarOpen(false);
            setHeaderMenuOpen(false);
          }}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 lg:w-64 w-[18rem] border-[#FFF5EE] border-r-4 bg-[#97144d] transition-transform duration-300 ease-in-out rounded-r-2xl lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-[#97144d] rounded-r-2xl ">
          <Image src={logo} alt="logo" className="h-14 lg:h-20 w-auto" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-[#00001d] hover:text-gray-800"
          >
            <X size={24} className="text-[#FFF5EE]" />
          </button>
        </div>
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
                    window.innerWidth < 1024
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
                {/* Submenu for smaller screens */}
                {((window.innerWidth < 1024 && subMenuOpen[index]) ||
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

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-[#FFFAFA]">
          <div className="flex items-center">
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
          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={() => setHeaderMenuOpen(!headerMenuOpen)}
                className="p-1 text-[#00001d] bg-gray-50 rounded-full hover:text-gray-800"
              >
                <Menu className="text-[#97144d]" />
              </button>
              {headerMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#FFFAFA] rounded-lg shadow-lg border border-[#97144d] z-50">
                  {headerMenuItems.map((headerItem, headerIndex) => (
                    <Link
                      key={headerIndex}
                      href={headerItem.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-[#f7f7f7] transition-all duration-200 rounded-t"
                    >
                      <headerItem.icon className="inline-block mr-2" />
                      {headerItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
