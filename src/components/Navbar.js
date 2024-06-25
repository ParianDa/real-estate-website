import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const NAV_ELEMENTS = [
  { name: "Home", subItems: ["About Us", "Testimonials", "Blog", "News"] },
  {
    name: "Listings",
    subItems: [
      "All Listings",
      "Residential",
      "Commercial",
      "Rentals",
      "New Developments",
      "Featured Listings",
    ],
  },
  {
    name: "Agents",
    subItems: [
      "Our Agents",
      "Join Our Team",
      "Agent Profiles",
      "Agent Resources",
    ],
  },
  {
    name: "Contact",
    subItems: ["Contact Us", "Customer Support", "FAQs", "Office Locations"],
  },
];

const PROFILE_ELEMENTS = [
    { name: "Login / Register", link: "/login" },
    { name: "My Dashboard", link: "/dashboard" },
    { name: "Recently Searched", link: "/recently-searched" },
    { name: "Recently Viewed", link: "/recently-viewed" },
    { name: "Contacted", link: "/contacted" }
  ];

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="navbar">
      <div className="logo">Real Estate</div>
      <ul className="nav-elements">
        {NAV_ELEMENTS.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.name}
            {hoveredItem === index && (
              <ul className="sub-nav-elements">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="dropdown-item">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="user-profile">
      <div className="profile-button">
                    Profile
                    <ul className="profile-sub-nav-elements">
                        {PROFILE_ELEMENTS.map((item, index) => (
                            <li key={index} className="dropdown-item"><Link to = {item.link} className="nav-link">{item.name}</Link></li>
                        ))}
                    </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
