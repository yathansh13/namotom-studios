import React from "react";
import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";
import employeeData from "../../../public/employees.json"; // Adjust the path
import EventCard from "@/components/EventCard/EventCard";

export default function Home() {
  return (
    <div>
      <p>Test page</p>
      <EventCard
        name="Collision Course: The Roast"
        details="Fundraising roast event of Shiv nadar IoE lorem ipsum dolor sir bohot saara text taaki mai trunc waali functionality bhi test kar paau"
        img="/projects/collision.svg"
      />
    </div>
  );
}
