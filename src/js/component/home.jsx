import React from "react";

//include images into your bundle

import SecondsCounter from "./secondsCounter";
import Refresh from "./refresh";



//create your first component
const Home = ({digito1}) => {
	return (
			<div>
				<SecondsCounter seconds={digito1} />
				{/* <Refresh seconds={digito1}/> */}
			</div>

	);
};

export default Home;
