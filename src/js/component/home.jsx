import React from "react";

//include images into your bundle

import SecondsCounter from "./secondsCounter";

//create your first component
const Home = ({digito1}) => {
	return (
			<div>
				<SecondsCounter seconds={digito1} />

			</div>

	);
};

export default Home;
