import React from "react";

export default function WideSidebar({ children }) {
  return <div className="sidebar-wide bg-light sidebar-wrapper inspector-wrapper justify-content-around pt-4 p-1">
    <div className="container-fluid">
      {children}
    </div>
  </div>;
}