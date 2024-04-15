// React/Next Imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Hooks/Images Imports
import getDatabaseData from "@/assets/hooks/getDatabaseData";
import checkLocalHostStatus from "@/assets/hooks/checkLocalHostStatus";
import checkAdminModeStatus from "@/assets/hooks/checkAdminModeStatus";

// Component Imports

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  const { reviews, galleryItems } = getDatabaseData();
  const { onLocalHost } = checkLocalHostStatus();
  const { adminMode } = checkAdminModeStatus();

  console.log(adminMode, onLocalHost);

  return (
    <div id="PAGE">
      <div
        id="PAGE_CNT"
        style={{ paddingTop: "180px", paddingBottom: "180px" }}
      >
        <br />
        <section style={{ textAlign: "center" }}>
          <h1>Navigation</h1>
        </section>
        <br />
        <br />
        <section style={{ textAlign: "center" }}>
          <h1>Top</h1>
        </section>
        <br />
        <br />
        <section style={{ textAlign: "center" }}>
          <h1>About Us</h1>
        </section>
        <br />
        <br />
        <section style={{ textAlign: "center" }}>
          <h1>Services/Store</h1>
        </section>
        <br />
        <br />
        <section style={{ textAlign: "center" }}>
          <h1>Gallery</h1>
        </section>
        <br />
        <br />
        <section style={{ textAlign: "center" }}>
          <h1>Reviews</h1>
        </section>
        <br />
        <br />
        <section style={{ textAlign: "center" }}>
          <h1>Contact Us</h1>
        </section>
        <br />
        <br />
        <section style={{ textAlign: "center" }}>
          <h1>Footer</h1>
        </section>
      </div>
    </div>
  );
}
