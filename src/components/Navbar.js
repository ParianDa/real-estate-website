import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/AuthService";

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
  { name: "My Dashboard", link: "/dashboard" },
  { name: "Recently Searched", link: "/recently-searched" },
  { name: "Recently Viewed", link: "/recently-viewed" },
  { name: "Contacted", link: "/contacted" }
];

function Navbar({ onLogout }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const user = authService.getUser();
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/");
  }

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
            {user ? (
              <>
                {PROFILE_ELEMENTS.map((item, index) => (
                  <li key={index} className="dropdown-item">
                    <Link to={item.link} className="nav-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="dropdown-item">
                <a
                    href="#"
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleLogout();
                    }}
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li className="dropdown-item">
                <Link to="/login" className="nav-link">
                  Login / Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
