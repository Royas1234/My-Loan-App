import React from "react";
import profile from "./data/profile-data";
import TransparentBtn from "../../../components/Button/TransparentBtn";
import Icon from "../../../Images/arrow-right.svg";

function Profile() {
	return (
		<div>
			<div className="grid">
				{profile.map((item) => (
					<div key={item.image} className="person-profile">
						<div>
							<img src={item.image} alt={item.name} className="image" />
						</div>
						<p>{item.name}</p>
						<p>{item.position}</p>
						<TransparentBtn title="Learn More" icon={Icon} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Profile;
