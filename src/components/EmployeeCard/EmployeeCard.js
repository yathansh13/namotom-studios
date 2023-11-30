import "./EmployeeCard.css";
import Image from "next/image";

export default function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <Image src={props.img} alt="employee" width={200} height={200} />
      <div className="employee-info">
        <p className="et employee-name">{props.name}</p>
        <p className="et employee-title">{props.title}</p>
        <p className="et employee-details">{props.details}</p>
      </div>
    </div>
  );
}
